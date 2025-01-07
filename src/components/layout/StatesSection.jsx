// File: src/components/StatsSection.js

import React from "react";
import { Button } from "../ui";
const StatsSection = () => {
  return (
    <div className="bg-white py-24 px-5 ">
      <div className="container mx-auto text-center  ">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-wide text-gray-900 leading-[4rem] sm:text-5xl">
          Quisque Scelerisque Nisi Sodales
          <br />
          Duis Nonrisus Vel Imperdiet
        </h2>

        {/* Stats */}
        <div className="my-16 w-full flex justify-center flex-wrap  gap-10">
          <div>
            <p className="text-3xl sm:text-5xl font-extrabold text-primary-100">
              3,000
            </p>
            <p className="mt-2 text-gray-800 font-medium uppercase">
              Gadgets Sold
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-extrabold text-primary-100">
              2,500
            </p>
            <p className="mt-2 text-gray-700 font-medium uppercase">
              Happy Clients
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-extrabold text-primary-100">
              100%
            </p>
            <p className="mt-2 text-gray-700 font-medium uppercase">
              Satisfaction Rate
            </p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <p className="mt-4 w-full text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin
          libero nunc consequat interdum varius.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button title="Apply Now" />
          <Button title="Contact US" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
