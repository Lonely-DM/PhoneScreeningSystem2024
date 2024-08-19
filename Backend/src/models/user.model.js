const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter first name of User"],
    },

    lastName: {
      type: String,
      required: [true, "Please enter last name of User"],
    },

    role: {
      type: String,
      required: [true, "Please enter Role of User"],
    },

    employeeId: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },

    mobile: {
      type: String,
      required: [true, "Please enter mobile of User"],
    },

    email: {
      type: String,
      required: [true, "Please enter email of User"],
      unique: true,
    },

    passwordHash: {
      type: String,
      required: [true, "Please enter password of User"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
