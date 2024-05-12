const express = require("express");
const User = require("../Models/user.model.js");
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../Controllers/user.controller.js');


router.get('/', getUsers);
router.get("/:id", getUser);

router.post("/", createUser);

// update a product
router.put("/:id", updateUser);

// delete a product
router.delete("/:id", deleteUser);




module.exports = router;