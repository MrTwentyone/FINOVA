import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  plaidTransactionId: String,
  amount: Number,
  currency: String,
  date: Date,
  name: String,
  merchant: String,
  category: [String],
  pending: Boolean,
  subscriptionLink: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription" }
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
