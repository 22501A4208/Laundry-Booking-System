const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Washing", "Drying", "Ironing", "Ready to Dispatch"],
      default: "Washing",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
