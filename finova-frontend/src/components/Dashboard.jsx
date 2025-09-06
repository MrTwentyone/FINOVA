import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([
    { name: "Netflix", category: "Streaming", cost: 15.99, nextBilling: "2025-09-30" },
    { name: "Spotify", category: "Music", cost: 9.99, nextBilling: "2025-09-05" },
    { name: "Amazon Prime", category: "Shopping", cost: 12.99, nextBilling: "2025-09-12" },
    { name: "Adobe Creative Cloud", category: "Software", cost: 52.99, nextBilling: "2025-08-28" },
  ]);

  const [filterCategory, setFilterCategory] = useState("All");
  const [sortType, setSortType] = useState("none");

  // Handle cancellation
  const handleCancel = (name) => {
    if (window.confirm(`Cancel ${name}?`)) {
      setSubscriptions(subscriptions.filter(sub => sub.name !== name));
    }
  };

  // Filter subscriptions by category
  const filteredSubs = subscriptions.filter(sub => 
    filterCategory === "All" || sub.category === filterCategory
  );

  // Sort subscriptions
  const sortedSubs = [...filteredSubs].sort((a, b) => {
    if (sortType === "costAsc") return a.cost - b.cost;
    if (sortType === "costDesc") return b.cost - a.cost;
    if (sortType === "nextBilling") return new Date(a.nextBilling) - new Date(b.nextBilling);
    return 0;
  });

  const totalMonthly = subscriptions.reduce((acc, sub) => acc + sub.cost, 0);

  return (
    <section className="py-16 bg-gray-50" id="dashboard">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Your Dashboard</h2>

        {/* Total Spending */}
        <div className="mb-8 text-center">
          <span className="text-xl font-semibold">Total Monthly Spending: </span>
          <span className="text-2xl font-bold text-primary">${totalMonthly.toFixed(2)}</span>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option>All</option>
            <option>Streaming</option>
            <option>Music</option>
            <option>Shopping</option>
            <option>Software</option>
          </select>

          <select 
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="none">Sort By</option>
            <option value="costAsc">Cost: Low to High</option>
            <option value="costDesc">Cost: High to Low</option>
            <option value="nextBilling">Next Billing Date</option>
          </select>
        </div>

        {/* Alerts for upcoming billing */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Upcoming Payments (Next 7 days)</h3>
          {subscriptions.filter(sub => {
            const next = new Date(sub.nextBilling);
            const today = new Date();
            const diffDays = (next - today) / (1000 * 60 * 60 * 24);
            return diffDays >= 0 && diffDays <= 7;
          }).map((sub, idx) => (
            <div key={idx} className="bg-yellow-100 p-3 rounded-lg mb-2 flex justify-between">
              <span>{sub.name}</span>
              <span className="font-semibold text-red-600">${sub.cost.toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSubs.map((sub, index) => (
            <SubscriptionCard 
              key={index} 
              subscription={sub} 
              onCancel={handleCancel} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
