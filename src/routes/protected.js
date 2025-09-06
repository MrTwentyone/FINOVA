// src/routes/protected.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js"; // exact match

const router = express.Router();

router.get("/test", protect, (req, res) => {
  res.status(200).json({ message: "You accessed a protected route!", user: req.user });
});

export default router;
