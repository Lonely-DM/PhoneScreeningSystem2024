const cookieParser = require("cookie-parser");
const express = require("express");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

module.exports = { applyMiddleware };
