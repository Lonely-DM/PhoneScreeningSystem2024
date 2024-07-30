const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema(
  {
    callerID: {
      type: String,
      required: [true, "Please enter Caller ID"],
    },

    agentID: {
      type: String,
      required: [true, "Please enter Assigned Agent ID"],
    },

    dateCreated: {
      type: Date,
      default: Date.now(),
    },

    dateClosed: {
      type: Date,
    },

    status: {
      type: String,
      required: [true, "Please enter Staus of Ticket"],
    },

    description: {
      type: String,
    },

    priority: {
      type: String,
      required: [true, "Please enter Priority of Ticket"],
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
