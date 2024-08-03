const express = require("express");

const { getCalls, getCall, createCall, updateCall, deleteCall } = require("../../controllers/call.controller.js");

const router = express.Router();

router.get("/", getCalls);
router.get("/:id", getCall);

router.post("/", createCall);

// update a product
router.put("/:id", updateCall);

// delete a product
router.delete("/:id", deleteCall);

module.exports = router;
