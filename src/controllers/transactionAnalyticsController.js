import Transaction from "../models/Transaction.js";

/**
 * Get total spending and category breakdown
 */
export const getSpendingAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    // Aggregate transactions by category
    const analytics = await Transaction.aggregate([
      { $match: { userId } },
      { $unwind: "$category" },
      {
        $group: {
          _id: "$category",
          totalSpent: { $sum: "$amount" },
          count: { $sum: 1 }
        }
      },
      { $sort: { totalSpent: -1 } }
    ]);

    // Total spending
    const totalSpendingResult = await Transaction.aggregate([
      { $match: { userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const totalSpending = totalSpendingResult[0] ? totalSpendingResult[0].total : 0;

    res.status(200).json({
      totalSpending,
      categoryBreakdown: analytics
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
