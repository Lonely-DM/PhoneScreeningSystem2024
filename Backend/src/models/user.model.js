const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of User"],
    },

    role: {
      type: String,
      required: [true, "Please enter Role of User"],
    },

    image: {
      type: String,
      required: false,
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
