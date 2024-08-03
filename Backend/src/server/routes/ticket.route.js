const express = require("express");

const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../../controllers/ticket.controller.js");

const router = express.Router();

router.get("/", getTickets);
router.get("/:id", getTicket);

router.post("/", createTicket);

// update a product
router.put("/:id", updateTicket);

// delete a product
router.delete("/:id", deleteTicket);

module.exports = router;
