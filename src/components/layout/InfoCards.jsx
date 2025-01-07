// File: src/components/InfoCards.js

import React from "react";

const infoCards = [
  {
    id: 1,
    title: "Hacus Habitasse",
    description: "Neque egestas odio nisi congue quisque.",
  },
  {
    id: 2,
    title: "Natoque Penatibus",
    description: "Ultrices tincidunt arcu non sodales vestibulum.",
  },
  {
    id: 3,
    title: "Tristique Ornare",
    description: "Dignissim diam quis enim lobortis scelerisque.",
  },
  {
    id: 4,
    title: "Aliquam Sagittis",
    description: "Venenatis cras sed felis eget aliquet commodo.",
  },
];

const InfoCard = ({ id, title, description }) => {
  return (
    <div className="bg-gray-100 hover:bg-primary-100 group rounded-lg shadow p-6">
      <h3 className="font-semibold  text-gray-900 group-hover:text-white ">
        #{id} {title}
      </h3>
      <hr className="w-6 bg-gray-500 my-5" />
      <p className="text-gray-500 group-hover:text-gray-200 text-sm">
        {description}
      </p>
    </div>
  );
};

const InfoCards = () => {
  return (
    <div className=" mt-20 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map((card) => (
          <InfoCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
