const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const corsOptions = {
  origin: "http://localhost:3000",
};

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors(corsOptions));
};

module.exports = { applyMiddleware };
