import Subscription from "../models/Subscription.js";

// Get all subscriptions for a user
export const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user._id });
    res.json(subscriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new subscription
export const createSubscription = async (req, res) => {
  try {
    const subscription = new Subscription({ ...req.body, userId: req.user._id });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid data" });
  }
};

// Get a single subscription by ID
export const getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ _id: req.params.id, userId: req.user._id });
    if (!subscription) return res.status(404).json({ message: "Subscription not found" });
    res.json(subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update subscription
export const updateSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!subscription) return res.status(404).json({ message: "Subscription not found" });
    res.json(subscription);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid update data" });
  }
};

// Delete subscription
export const deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!subscription) return res.status(404).json({ message: "Subscription not found" });
    res.json({ message: "Subscription deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
