import React from "react";

function CategoryCard({ source, category, numberOfItems, grid, position }) {
  return (
    <div
      className={`w-full ${grid} rounded-lg group overflow-hidden cursor-pointer h-96 lg:h-auto  shadow-2xl  relative `}
    >
      <div className=" z-10  p-8 ">
        <h2 className="font-bold group-hover:text-white text-xl capitalize">
          {category}
        </h2>
        <p className="text-gray-500 group-hover:text-gray-200 ">
          {numberOfItems}
        </p>
      </div>

      <img
        className={`absolute ${position}   object-contain w-[70%] `}
        src={source}
        alt={category}
      />
    </div>
  );
}

export default CategoryCard;
