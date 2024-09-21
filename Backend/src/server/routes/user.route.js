const express = require("express");

const {
  getUsers,
  getUser,
  getRegistrationOptions,
  createUser,
  updateUser,
  deleteUser,
  setTotp,
  verifyRegistration,
} = require("../../controllers/user.controller.js");

const router = express.Router();

router.post("/", createUser);
router.put("/totp", setTotp);

router.get("/registration-options", getRegistrationOptions);
router.post("/verify-registration", verifyRegistration);

router.get("/", getUsers);
router.get("/:id", getUser);

// update a product
router.put("/:id", updateUser);

// delete a product
router.delete("/:id", deleteUser);

module.exports = router;
