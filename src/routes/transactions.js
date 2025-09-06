import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getTransactions, createTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.use(protect);

router.get("/", getTransactions);
router.post("/", createTransaction);

export default router;
