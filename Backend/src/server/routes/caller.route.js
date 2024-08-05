const express = require("express");

const {
  getCallers,
  getCaller,
  createCaller,
  updateCaller,
  deleteCaller,
} = require("../../controllers/caller.controller.js");

const router = express.Router();

router.get("/", getCallers);
router.get("/:id", getCaller);

router.post("/", createCaller);

// update a product
router.put("/:id", updateCaller);

// delete a product
router.delete("/:id", deleteCaller);

module.exports = router;
