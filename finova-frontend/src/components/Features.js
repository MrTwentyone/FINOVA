import React from "react";

const features = [
  {
    title: "Track All Subscriptions",
    description: "Automatically detect recurring payments across all your accounts and services.",
    icon: "📊",
  },
  {
    title: "One-Click Cancellation",
    description: "Stop paying for unused subscriptions instantly with a unified dashboard.",
    icon: "❌",
  },
  {
    title: "Save Money",
    description: "Get personalized recommendations to optimize plans and reduce wasted spending.",
    icon: "💰",
  },
  {
    title: "Alerts & Notifications",
    description: "Never miss a renewal or price change with smart notifications.",
    icon: "🔔",
  },
  {
    title: "Spending Insights",
    description: "Visualize your subscription expenses and find optimization opportunities.",
    icon: "📈",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
