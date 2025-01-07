// File: src/components/IconCards.js

import React from "react";
import { FiGift, FiStar, FiCalendar } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    icon: <FiGift size={28} className="text-white" />,
    bgColor: "bg-purple-600",
    title: "Special Offers",
    description:
      "Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore dolore magna aliqua.",
  },
  {
    id: 2,
    icon: <FiCalendar size={28} className="text-white" />,
    bgColor: "bg-purple-600",
    title: "Amazing Events",
    description:
      "Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit turpis cursus commodo.",
  },
  {
    id: 3,
    icon: <FiStar size={28} className="text-white" />,
    bgColor: "bg-black",
    title: "Human Reviews",
    description:
      "Ullamcorper malesuada proin libero nunc consequat interdum varius consequat mauris nunc.",
  },
];

const IconCard = ({ icon, bgColor, title, description }) => {
  return (
    <div className="bg-white rounded-xl group cursor-pointer hover:shadow-lg border border-gray-50  p-10">
      <div
        className={`w-14 h-14  flex  items-center justify-center rounded-full group-hover:bg-primary-100 bg-dark-gray `}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-8">{title}</h3>
      <p className="text-gray-500 text-sm mt-5">{description}</p>
      <button className="mt-8 p-5 bg-gray-100 text-gray-700 text-sm hover:text-white hover:bg-primary-100 font-medium rounded-md ">
        Learn More
      </button>
    </div>
  );
};

const IconCards = () => {
  return (
    <div className="mt-20 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <IconCard
            key={card.id}
            icon={card.icon}
            bgColor={card.bgColor}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default IconCards;
