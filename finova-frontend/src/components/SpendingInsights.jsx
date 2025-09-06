import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SpendingInsights = ({ subscriptions }) => {
  // Aggregate spending by category
  const data = Object.values(
    subscriptions.reduce((acc, sub) => {
      if (!acc[sub.category]) {
        acc[sub.category] = { name: sub.category, value: 0 };
      }
      acc[sub.category].value += sub.cost;
      return acc;
    }, {})
  );

  const COLORS = ["#4361ee", "#3a0ca3", "#f72585", "#4cc9f0", "#7209b7"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Spending Insights</h2>
        <div className="w-full h-96">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SpendingInsights;
