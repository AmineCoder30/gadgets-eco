// File: src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding and Social Links */}
        <div>
          <h2 className="text-white text-xl font-semibold">Gadgets</h2>
          <p className="text-sm mt-2">
            Cras gravida bibendum dolor eu varius morbi fermentum velit eget
            vehicula lorem sodales donec quis volutpat orci.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Medium" className="hover:text-white">
              <i className="fab fa-medium-m"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold text-lg">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Custom Area */}
        <div>
          <h3 className="text-white font-semibold text-lg">Custom Area</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tracking List
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                My Cart
              </a>
            </li>
          </ul>
        </div>

        {/* More Information */}
        <div>
          <h3 className="text-white font-semibold text-lg">More Information</h3>
          <p className="mt-4 text-sm">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
            dui, a porta ante lectus.
          </p>
          <div className="flex space-x-4 mt-6">
            <img src="https://via.placeholder.com/40" alt="Visa" />
            <img src="https://via.placeholder.com/40" alt="American Express" />
            <img src="https://via.placeholder.com/40" alt="PayPal" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-600">
        Copyright © 2024 - WordPress Theme by CreativeThemes
      </div>
    </footer>
  );
};

export default Footer;
