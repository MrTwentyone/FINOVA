import React from "react";

const Features = () => {
  const features = [
    { icon: "📊", title: "Track All Subscriptions", description: "Automatically detect recurring payments across all your accounts and services." },
    { icon: "❌", title: "One-Click Cancellation", description: "Stop paying for unused subscriptions instantly with a unified dashboard." },
    { icon: "💰", title: "Save Money", description: "Get personalized recommendations to optimize plans and reduce wasted spending." },
    { icon: "🔔", title: "Alerts & Notifications", description: "Never miss a renewal or price change with smart notifications." },
    { icon: "📈", title: "Spending Insights", description: "Visualize your subscription expenses and find optimization opportunities." },
    { icon: "🔒", title: "Bank-Level Security", description: "Your data is protected with industry-leading security measures." }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Everything you need to manage your subscriptions effectively</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="feature-card bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl text-primary mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
