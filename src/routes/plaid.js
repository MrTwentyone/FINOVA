import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createLinkToken, exchangePublicToken } from "../controllers/plaidController.js";

const router = express.Router();

router.use(protect); // Protect all routes

router.post("/create-link-token", createLinkToken);
router.post("/exchange-public-token", exchangePublicToken);

export default router;
