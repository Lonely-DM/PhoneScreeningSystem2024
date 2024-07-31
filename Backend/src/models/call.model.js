const mongoose = require("mongoose");

const CallSchema = mongoose.Schema(
  {
    callerID: {
      type: String,
      required: [true, "Please enter Caller ID"],
    },

    date: {
      type: Date,
      required: [true, "Please enter Date of Call"],
    },

    durationInSeconds: {
      type: Number,
      required: [true, "Please enter Call Duration in Second(s)"],
    },

    trascript: {
      type: String,
    },

    audioFile: {
      type: String,
    },

    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const Call = mongoose.model("Call", CallSchema);

module.exports = Call;
