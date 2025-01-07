// File: src/components/NotificationBanner.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotificationBanner = ({ productName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.find((item) => item.name === productName)) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className=" bg-gray-100  my-5 flex items-center justify-between p-4">
      <div className="flex items-center text-gray-500">
        <span className=" text-xl mr-2">🔔</span>
        <p>
          <span>"{productName}"</span> has been added to your cart.
        </p>
      </div>
      <button
        onClick={() => navigate("/cart")}
        className="text-gray-800 hover:text-white p-4 rounded-lg hover:bg-primary-200 "
      >
        View Cart
      </button>
    </div>
  );
};

export default NotificationBanner;
