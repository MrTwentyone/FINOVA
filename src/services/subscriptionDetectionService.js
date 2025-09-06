import Transaction from "../models/Transaction.js";
import Subscription from "../models/Subscription.js";

/**
 * Detect recurring subscriptions from transactions
 * @param {String} userId - The user's ID
 */
export const detectSubscriptions = async (userId) => {
  try {
    // Fetch all transactions for the user
    const transactions = await Transaction.find({ userId });

    // Group transactions by merchant or name
    const merchantMap = {};
    transactions.forEach(tx => {
      const key = tx.merchant.toLowerCase();
      if (!merchantMap[key]) merchantMap[key] = [];
      merchantMap[key].push(tx);
    });

    // Analyze each merchant group
    const detectedSubscriptions = [];
    for (const merchant in merchantMap) {
      const txs = merchantMap[merchant];
      if (txs.length < 2) continue; // Need at least 2 transactions for pattern

      // Calculate average interval between transactions (days)
      const sortedTxs = txs.sort((a, b) => new Date(a.date) - new Date(b.date));
      const intervals = [];
      for (let i = 1; i < sortedTxs.length; i++) {
        const diff = (new Date(sortedTxs[i].date) - new Date(sortedTxs[i - 1].date)) / (1000 * 60 * 60 * 24);
        intervals.push(diff);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;

      // Simple confidence score based on number of occurrences
      const confidenceScore = Math.min(1, txs.length / 5);

      // Determine billing cycle
      let billingCycle = "monthly";
      if (avgInterval >= 27 && avgInterval <= 33) billingCycle = "monthly";
      else if (avgInterval >= 90 && avgInterval <= 100) billingCycle = "quarterly";
      else if (avgInterval >= 360 && avgInterval <= 370) billingCycle = "yearly";

      // Add to detected subscriptions array
      detectedSubscriptions.push({
        userId,
        name: merchant,
        category: "unknown",
        amount: sortedTxs[sortedTxs.length - 1].amount,
        currency: sortedTxs[sortedTxs.length - 1].currency,
        billingCycle,
        nextBillingDate: new Date(sortedTxs[sortedTxs.length - 1].date).setDate(
          new Date(sortedTxs[sortedTxs.length - 1].date).getDate() + avgInterval
        ),
        status: "active",
        confidenceScore,
        source: "auto",
      });
    }

    // Save detected subscriptions if not already present
    for (const sub of detectedSubscriptions) {
      const exists = await Subscription.findOne({ userId, name: sub.name });
      if (!exists) {
        const newSub = new Subscription(sub);
        await newSub.save();
      }
    }

    return detectedSubscriptions;
  } catch (error) {
    console.error("Subscription detection error:", error);
    throw error;
  }
};
