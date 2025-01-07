import React from "react";

function Button({ title, width, handleClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick && handleClick}
      className={` ${width ? width : "w-fit"} ${
        disabled
          ? "cursor-not-allowed text-gray-700 bg-[#cccccc]  "
          : "hover:bg-primary-100 bg-gray-200 hover:text-white text-gray-900"
      }   capitalize px-4 mt-5 h-14 rounded-lg  `}
    >
      {title}
    </button>
  );
}

export default Button;
