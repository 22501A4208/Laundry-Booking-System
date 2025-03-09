import express from "express";
import mongoose from "mongoose";
import LaundryRequest from "../models/LaundryRequest.js"; // Import Laundry Model
import authMiddleware from "../middleware/authMiddleware.js"; // Middleware for authentication

const router = express.Router();

// Laundry Request Route (Protected)
router.post("/laundry-request", authMiddleware, async (req, res) => {
  const { name, topwear, bottomwear, woolen, kidswear, phone, pickupdate, time } = req.body;
  const userId = req.user.userId; // Get userId from auth middleware

  if (!name || !phone || !pickupdate || !time) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const newRequest = new LaundryRequest({
      userId,
      name,
      topwear,
      bottomwear,
      woolen,
      kidswear,
      phone,
      pickupdate,
      time,
    });

    await newRequest.save();
    res.status(201).json({ message: "Laundry Request Submitted Successfully!" });
  } catch (error) {
    console.error("Laundry Request Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
