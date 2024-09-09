const jwt = require("jsonwebtoken");

const User = require("../../Models/user.model");
const { SESSION_COOKIE_NAME } = require("../../config/constants");

const { JWT_SECRET } = process.env;

const injectAuth = async (req, res, next) => {
  try {
    const maybeSessionCookie = req.cookies[SESSION_COOKIE_NAME];

    if (!maybeSessionCookie) {
      return next();
    }

    let tokenData;

    try {
      tokenData = jwt.verify(maybeSessionCookie, JWT_SECRET);
    } catch {
      return next();
    }

    const { id } = tokenData;

    const user = await User.findById(id, "email");

    req.user = user;

    return next();
  } catch {
    return next();
  }
};

module.exports = { injectAuth };
