// File: src/components/ProductShowcase.js

import React from "react";
import ipad from "../../assets/images/home-page-cta-ipad-600x480.webp";
const ProductShowcase = () => {
  return (
    <div className="bg-dark-gray mt-20 text-white  px-6 md:px-20">
      <div className="w-full min-h-screen  mx-auto py-12 flex flex-col md:flex-row justify-between gap-10 items-center">
        {/* Left Column: Product Image */}
        <div className="relative ">
          <img src={ipad} alt="iPad Pro" className="w-full" />
          <div className=" hidden md:block max-w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 glass rounded-lg">
            <h4 className=" font-semibold mb-5">Super Powerful Chip</h4>
            <p className="text-xs">
              Pellentesque pulvinar habitant morbi tristique maecenas.
            </p>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="text-center w-full md:w-80 flex flex-col items-center md:items-start  md:text-left">
          <p className="text-gray-400 text-lg font-medium">From $1099</p>
          <h1 className="text-6xl font-bold mt-2">iPad Pro</h1>
          <p className="text-white mt-4  w-full text-lg ">
            Libero nunc consequat interdum Varius sitamet mattis vulputate
            Ultricies mieget mauris pharetra
          </p>
          <button className="mt-6 p-5 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
