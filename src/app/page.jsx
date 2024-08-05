'use client'
import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn, FaRocket } from "react-icons/fa";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Logo</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none transition duration-300">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Pricing</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg md:text-xl mb-8">Discover our amazing features and start your journey with us today.</p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition transform hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-transparent opacity-50"></div>
        </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["Feature One", "Feature Two", "Feature Three"].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition duration-300 transform hover:scale-105"
              >
                <img
                  className="w-full h-48 object-cover"
                  src='https://plus.unsplash.com/premium_vector-1711987383810-ff3f359fb881?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt={feature}
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  <p>Description of {feature.toLowerCase()}. Learn more about how it can help you.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 my-2 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["User One", "User Two", "User Three", "User Four"].map((user, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition"
              >
                <div className="flex items-center mb-4">
                  <img
                    src='https://plus.unsplash.com/premium_vector-1720740375507-2c946054580f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt={user}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{user}</h4>
                    <p className="text-sm">User's Position</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text and Button */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-5xl font-bold mb-4 leading-tight">Accelerate Your Growth</h2>
            <p className="text-lg mb-8">Unlock new opportunities and take your business to the next level with our innovative solutions. Join thousands of successful clients.</p>
            <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              <FaRocket className="mr-2" />
              Get Started
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1671305004337-0444cd299e8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Technology and Business"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 transform -translate-x-16 -translate-y-16 opacity-40">
          <div className="w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-16 translate-y-16 opacity-40">
          <div className="w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-gray-900 py-16 mt-auto">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-2">About Us</h4>
            <p className="text-gray-600">
              We are committed to providing the best services to help you achieve your goals. Our team is dedicated to your success.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 underline hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-700 underline hover:text-blue-600">Features</a></li>
              <li><a href="#" className="text-gray-700 underline hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="text-gray-700 underline hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <p className="text-gray-600">123 Main Street, City, Country</p>
            <p className="text-gray-600">Email: info@example.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={24} /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center mt-12 text-gray-400">
          <div>&copy; 2024 Our Platform. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              Terms & Services
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
