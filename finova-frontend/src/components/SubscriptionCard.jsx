import React, { useState } from "react";

const SubscriptionCard = ({ subscription, onCancel }) => {
  const [paid, setPaid] = useState(false);
  const [paused, setPaused] = useState(false);

  const handlePaid = () => setPaid(!paid);
  const handlePause = () => setPaused(!paused);

  return (
    <div className={`bg-white rounded-xl shadow p-6 relative ${paused ? "opacity-50" : ""}`}>
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-semibold">{subscription.name}</h3>
        <span className="text-red-600 font-bold">${subscription.cost.toFixed(2)}</span>
      </div>
      <p className="text-gray-600 mb-2">Next billing: {subscription.nextBilling}</p>
      <p className="text-gray-500 mb-4">Category: {subscription.category}</p>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handlePaid}
          className={`px-4 py-2 rounded-lg font-semibold ${paid ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          {paid ? "Paid ✅" : "Mark as Paid"}
        </button>
        <button
          onClick={handlePause}
          className={`px-4 py-2 rounded-lg font-semibold ${paused ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
        >
          {paused ? "Paused ⏸" : "Pause"}
        </button>
        <button
          onClick={() => onCancel(subscription.name)}
          className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white"
        >
          Cancel
        </button>
      </div>

      {/* Overlay if paused */}
      {paused && (
        <div className="absolute inset-0 bg-gray-100 opacity-50 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700">
          Paused
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;
