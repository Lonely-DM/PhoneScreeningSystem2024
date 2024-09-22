const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticator } = require("otplib");
const { generateAuthenticationOptions, verifyAuthenticationResponse } = require("@simplewebauthn/server");

const User = require("../Models/user.model");
const Passkey = require("../Models/passkey.model");

const { JWT_SECRET } = process.env;

const SESSION_COOKIE_NAME = "session.token";

const rpID = "localhost";
const origin = `http://${rpID}:3000`;

const createSession = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({ email }, ["passwordHash", "totpSecret"]).exec();

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!isPasswordValid) throw new Error("Invalid password");

    const relevantPasskeys = await Passkey.find({ userId: user._id.toString() }).exec();

    if (relevantPasskeys.length > 0) {
      const options = await generateAuthenticationOptions({
        rpID,
        allowCredentials: relevantPasskeys.map((passkey) => ({
          id: passkey.credId,
          transports: passkey.transports,
        })),
      });

      req.user.passkeyOptions = options;
      await req.user.save();

      return res.status(202).json({ needsPasskey: true, options });
    }

    if (user.totpSecret) {
      if (!otp) {
        return res.status(202).json({ needsOtp: true });
      }

      const isValid = authenticator.verify({ token: otp, secret: user.totpSecret });

      if (!isValid) throw new Error("Invalid OTP");
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.cookie(SESSION_COOKIE_NAME, token, { httpOnly: true });

    res.status(200).json({ created: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifySession = async (req, res) => {
  return res.status(200).json({ session: req.user ? { email: req.user.email } : null });
};

const verifyAuthentication = async (req, res) => {
  try {
    const { email, passkeyResponse, password } = req.body;

    const user = await User.findOne({ email }, ["passkeyOptions", "passwordHash", "totpSecret"]).exec();

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!isPasswordValid) throw new Error("Invalid password");

    const passkey = await Passkey.findOne({ credId: passkeyResponse.id }).exec();

    if (!passkey) {
      throw new Error(`Could not find passkey for user`);
    }

    let verification;
    try {
      verification = await verifyAuthenticationResponse({
        response: passkeyResponse,
        expectedChallenge: user.passkeyOptions.challenge,
        expectedOrigin: origin,
        expectedRPID: rpID,
        authenticator: {
          credentialID: passkey.credId,
          credentialPublicKey: Buffer.from(passkey.credPublicKey, "base64"),
          counter: passkey.counter,
          transports: passkey.transports,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }

    const { verified } = verification;

    if (!verified) throw new Error("Passkey authentication failed");

    const { authenticationInfo } = verification;
    const { newCounter } = authenticationInfo;

    passkey.counter = newCounter;
    await passkey.save();

    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.cookie(SESSION_COOKIE_NAME, token, { httpOnly: true });

    res.status(200).json({ created: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSession, verifySession, verifyAuthentication };
