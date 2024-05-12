const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const CallerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of Caller"],
    },

    phoneNumber: {
        type: String,
        required: [true, "Please enter Phone Number"]
    },

    address: {
        type: String,
        required: [true, "Please enter Address"]
    },

    age: {
        type: Number,
        required: [true, "Please enter Age"]
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Caller = mongoose.model("Caller", CallerSchema);

module.exports = Caller;