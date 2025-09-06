import React from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full z-10">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">FINOVA</div>
      <div className="hidden md:flex space-x-10">
        <a href="#features" className="text-gray-700 hover:text-primary">Features</a>
        <a href="#pricing" className="text-gray-700 hover:text-primary">Pricing</a>
        <a href="#testimonials" className="text-gray-700 hover:text-primary">Testimonials</a>
        <a href="#faq" className="text-gray-700 hover:text-primary">FAQ</a>
      </div>
      <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary transition">Sign Up Free</button>
    </div>
  </nav>
);

export default Navbar;
