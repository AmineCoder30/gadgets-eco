// File: src/components/FeatureList.js

import React from "react";
import FreeShipping from "../../assets/icons/freeShipping.svg";
import moneyBack from "../../assets/icons/moneyBack.svg";
import support from "../../assets/icons/support.svg";
import securePayment from "../../assets/icons/paymentSecure.svg";
const features = [
  {
    icon: FreeShipping,
    title: "Free Shipping",
    description: "Free shipping on all US orders",
  },
  {
    icon: moneyBack,
    title: "100% Money Back",
    description: "You have 10 days to return",
  },
  {
    icon: support,
    title: "Support 24/7",
    description: "Contact us 24 hours a day",
  },
  {
    icon: securePayment,
    title: "100% Payment Secure",
    description: "Your payment is safe with us",
  },
];

const FeatureList = () => {
  return (
    <div className=" text-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-1 mb-5 lg:mb-0">
            <img className="h-10 w-20" src={feature.icon} alt={feature.title} />
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
