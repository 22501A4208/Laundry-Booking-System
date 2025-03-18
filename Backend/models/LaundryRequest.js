import mongoose from "mongoose";

const laundryRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  topwear: { type: Number, default: 0 },
  bottomwear: { type: Number, default: 0 },
  woolen: { type: Number, default: 0 },
  kidswear: { type: Number, default: 0 },
  phone: { type: String, required: true },
  pickupdate: { type: String, required: true },
  time: { type: String, required: true },
});

const LaundryRequest = mongoose.model("LaundryRequest", laundryRequestSchema);
export default LaundryRequest;
