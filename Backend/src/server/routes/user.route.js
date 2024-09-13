const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  setTotp,
} = require("../../controllers/user.controller.js");

const router = express.Router();

router.post("/", createUser);
router.put("/totp", setTotp);

router.get("/", getUsers);
router.get("/:id", getUser);

// update a product
router.put("/:id", updateUser);

// delete a product
router.delete("/:id", deleteUser);

module.exports = router;
