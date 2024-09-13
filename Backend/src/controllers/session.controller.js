const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticator } = require("otplib");

const User = require("../Models/user.model");

const { JWT_SECRET } = process.env;

const SESSION_COOKIE_NAME = "session.token";

const createSession = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({ email }, ["passwordHash", "totpSecret"]).exec();

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!isPasswordValid) throw new Error("Invalid password");

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

module.exports = { createSession, verifySession };
