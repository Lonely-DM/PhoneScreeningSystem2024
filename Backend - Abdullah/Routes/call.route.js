const express = require("express");
const Call = require("../Models/call.model.js");
const router = express.Router();
const { getCalls, getCall, createCall, updateCall, deleteCall } = require("../Controllers/call.controller.js");

router.get("/", getCalls);
router.get("/:id", getCall);

router.post("/", createCall);

// update a product
router.put("/:id", updateCall);

// delete a product
router.delete("/:id", deleteCall);

module.exports = router;
