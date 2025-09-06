import { detectSubscriptions } from "../services/subscriptionDetectionService.js";
// Example: Import Transactions
export const importTransactions = async (req, res) => {
  try {
    const transactions = req.body.transactions.map(tx => ({
      ...tx,
      userId: req.user._id
    }));

    // Save all transactions
    const savedTransactions = await Transaction.insertMany(transactions);

    // Run subscription detection after saving
    await detectSubscriptions(req.user._id);

    res.status(201).json({ message: "Transactions imported and subscriptions detected", savedTransactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

import Transaction from "../models/Transaction.js";

// Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });
    res.status(200).json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create transaction
export const createTransaction = async (req, res) => {
  try {
    const newTxn = await Transaction.create({ ...req.body, userId: req.user._id });
    res.status(201).json(newTxn);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
