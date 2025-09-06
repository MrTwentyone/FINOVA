import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserProfile, updateUserProfile } from "../controllers/userController.js";

const router = express.Router();
router.use(protect);

router.get("/me", getUserProfile);
router.put("/me", updateUserProfile);

export default router;
