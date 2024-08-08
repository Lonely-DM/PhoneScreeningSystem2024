const express = require("express");

const { createSession, verifySession } = require("../../controllers/session.controller.js");

const router = express.Router();

router.post("/", createSession);
router.get("/", verifySession);

module.exports = router;
