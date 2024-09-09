const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { authenticator } = require("otplib");

const User = require("../Models/user.model");
const { SESSION_COOKIE_NAME } = require("../config/constants");

const { JWT_SECRET } = process.env;

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { password, confirmPassword, ...rest } = req.body;

    if (!password || password.trim() === "" || password !== confirmPassword) {
      throw new Error("The passwords given do not match the required schema");
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const userArgs = {
      ...rest,
      passwordHash,
    };

    const user = await User.create(userArgs);

    const token = jwt.sign({ id: user.id }, JWT_SECRET);

    res.cookie(SESSION_COOKIE_NAME, token, { httpOnly: true });

    res.status(200).json(_.omit(user.toObject(), "passwordHash"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const setTotp = async (req, res) => {
  if (!req.user) return res.status(401).end();

  const secret = authenticator.generateSecret();

  const otpAuth = authenticator.keyuri(req.user.email, "SRVPhoneScreeningSystem", secret);

  req.user.totpSecret = secret;
  await req.user.save();

  return res.json({ otpAuth });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  setTotp,
};
