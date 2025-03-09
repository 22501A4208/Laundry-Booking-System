import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: { type: String },
  password: String,
});

const User = mongoose.model("User", userSchema);
export default User;
