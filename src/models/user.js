import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    connectedAccounts: [
      {
        accountId: String,
        bankName: String,
        last4: String,
        type: String,
      },
    ],
    preferences: {
      notifications: { type: Boolean, default: true },
      alerts: { type: Boolean, default: true },
      currency: { type: String, default: "USD" },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
