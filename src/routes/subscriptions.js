import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getSubscriptions,
  createSubscription,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription
} from "../controllers/subscriptionController.js";

const router = express.Router();
router.use(protect);

// CRUD routes
router.get("/", getSubscriptions);
router.post("/", createSubscription);
router.get("/:id", getSubscriptionById);
router.put("/:id", updateSubscription);
router.delete("/:id", deleteSubscription);

export default router;
