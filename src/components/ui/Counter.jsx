import React from "react";

function Counter({ quantity, handleQuantityChange }) {
  return (
    <div className="flex gap-5 py-5 border-y border-gray-300 mt-10">
      <div className=" flex items-center px-1 rounded-md border border-gray-200 ">
        <button
          onClick={() => handleQuantityChange("decrement")}
          className="py-1 px-2  hover:text-white rounded-lg  hover:bg-primary-100"
        >
          -
        </button>
        <p className="py-1 w-8 text-center">{quantity}</p>
        <button
          onClick={() => handleQuantityChange("increment")}
          className="py-1 px-2   hover:text-white rounded-lg  hover:bg-primary-100 "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
