import nodemailer from "nodemailer";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter (mock or real)
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with real SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "dummy@example.com",
    pass: process.env.EMAIL_PASS || "dummyPassword",
  },
});

/**
 * Send an email
 */
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"Finova" <${process.env.EMAIL_USER || "dummy@example.com"}>`,
      to,
      subject,
      text,
    });
    console.log("Email sent:", info.messageId || "(mocked)");
  } catch (error) {
    console.error("Email failed:", error);
  }
};

/**
 * Send notifications for upcoming subscription renewals
 */
export const sendUpcomingRenewals = async () => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Find subscriptions that renew tomorrow
    const subscriptions = await Subscription.find({
      nextBillingDate: {
        $gte: new Date(tomorrow.setHours(0, 0, 0, 0)),
        $lte: new Date(tomorrow.setHours(23, 59, 59, 999)),
      },
      status: "active",
    }).populate("userId");

    for (const sub of subscriptions) {
      const userEmail = sub.userId.email;
      const subject = `Upcoming Renewal: ${sub.name}`;
      const text = `Hi ${sub.userId.firstName},\n\nYour subscription for ${sub.name} will renew on ${sub.nextBillingDate.toDateString()} with amount ${sub.amount} ${sub.currency}.\n\n- Finova`;

      await sendEmail(userEmail, subject, text);
    }

    console.log("Upcoming renewal notifications sent (mocked).");
  } catch (error) {
    console.error("Failed to send renewal notifications:", error);
  }
};
