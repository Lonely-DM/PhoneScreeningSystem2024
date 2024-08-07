const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Models/user.model");

const { JWT_SECRET } = process.env;

const SESSION_COOKIE_NAME = "session.token";

const createSession = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }, "passwordHash").exec();

    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.cookie(SESSION_COOKIE_NAME, token);

    res.status(200).json({ created: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifySession = async (req, res) => {
  try {
    const maybeSessionCookie = req.cookies[SESSION_COOKIE_NAME];

    if (!maybeSessionCookie) {
      return res.status(200).json({ session: null });
    }

    let tokenData;

    try {
      tokenData = jwt.verify(maybeSessionCookie, JWT_SECRET);
    } catch {
      return res.status(200).json({ session: null });
    }

    const { id } = tokenData;

    const user = await User.findById(id, "email");

    res.status(200).json({ session: { email: user.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSession, verifySession };
