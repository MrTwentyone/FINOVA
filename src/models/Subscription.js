import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  name: { type: String, required: true },
  category: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: "USD" },
  billingCycle: { type: String, enum: ["monthly","yearly","quarterly"], default: "monthly" },
  nextBillingDate: { type: Date },
  status: { type: String, enum: ["active","cancelled","pending"], default: "active" },
  confidenceScore: { type: Number, min:0, max:1, default: 1 },
  source: { type: String, enum: ["plaid","manual","email"], default: "manual" },
  serviceUrl: { type: String },
  notes: { type: String },
}, { timestamps: true });

export default mongoose.model("Subscription", subscriptionSchema);
