const mongoose = require("mongoose");

const PasskeySchema = mongoose.Schema(
  {
    credId: {
      type: String,
    },
    credPublicKey: {
      type: String,
    },
    userId: {
      type: String,
    },
    webAuthnUserId: {
      type: String,
    },
    counter: {
      type: Number,
    },
    transports: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

const Passkey = mongoose.model("Passkey", PasskeySchema);

module.exports = Passkey;
