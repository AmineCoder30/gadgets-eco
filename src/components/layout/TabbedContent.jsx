// File: src/components/TabbedContent.js

import React, { useState } from "react";
import { ReviewForm } from "../ui";
const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className=" px-5 py-8">
      <div className="container mx-auto">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "description"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "reviews"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Reviews (0)
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6  text-gray-700 ">
          {activeTab === "description" && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Felis donec et odio pellentesque diam volutpat. Ullamcorper
                malesuada proin libero nunc consequat interdum varius.
              </p>
              <p className="mt-4">
                Volutpat commodo sed egestas egestas fringilla phasellus
                faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar
                sapien et ligula ullamcorper. Feugiat pretium nibh ipsum
                consequat nisl vel pretium.
              </p>
              <p className="mt-4">
                Quis risus sed vulputate odio ut. Scelerisque fermentum dui
                faucibus in ornare quam viverra. Aliquet sagittis id consectetur
                purus ut faucibus. Vitae tempus quam pellentesque nec nam
                aliquam sem.
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <ReviewForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
