const express = require("express");
const Caller = require("../Models/caller.model.js");
const router = express.Router();
const {getCallers, getCaller, createCaller, updateCaller, deleteCaller} = require('../Controllers/caller.controller.js');


router.get('/', getCallers);
router.get("/:id", getCaller);

router.post("/", createCaller);

// update a product
router.put("/:id", updateCaller);

// delete a product
router.delete("/:id", deleteCaller);




module.exports = router;