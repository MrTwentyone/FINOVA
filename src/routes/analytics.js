import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getSpendingAnalytics } from "../controllers/transactionAnalyticsController.js";

const router = express.Router();

// Protect route
router.use(protect);

// Get spending analytics
router.get("/spending", getSpendingAnalytics);

export default router;
