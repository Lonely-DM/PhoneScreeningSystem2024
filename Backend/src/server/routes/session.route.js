const express = require("express");

const { createSession, verifySession, verifyAuthentication } = require("../../controllers/session.controller.js");

const router = express.Router();

router.post("/", createSession);
router.get("/", verifySession);

router.post("/verify-authentication", verifyAuthentication);

module.exports = router;
