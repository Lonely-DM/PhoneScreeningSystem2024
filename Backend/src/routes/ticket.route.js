const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../Controllers/ticket.controller.js");

router.get("/", getTickets);
router.get("/:id", getTicket);

router.post("/", createTicket);

// update a product
router.put("/:id", updateTicket);

// delete a product
router.delete("/:id", deleteTicket);

module.exports = router;
