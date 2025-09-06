import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Take Control of Your Subscriptions
          </h1>
          <p className="text-xl mb-8">
            Stop wasting money. Track, manage, and optimize all your subscriptions in one place.
          </p>
          <a
            href="#features"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Track All Subscriptions</h3>
              <p>Automatically detect recurring payments across all your accounts and services.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">One-Click Cancellation</h3>
              <p>Stop paying for unused subscriptions instantly with a unified dashboard.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Save Money</h3>
              <p>Get personalized recommendations to optimize plans and reduce wasted spending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Take Control?
        </h2>
        <p className="mb-8 text-lg">
          Join thousands of users who are saving money and time with smart subscription management.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 text-center">
        &copy; {new Date().getFullYear()} FINOVA. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
