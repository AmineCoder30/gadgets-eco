import React from "react";

function Subscribe() {
  return (
    <div className="w-full h-96 mt-20 bg-dark-gray text-gray-200 px-5  flex flex-col justify-center gap-10 items-center">
      <h1 className="text-4xl ">Don’t Miss Our News</h1>
      <div className="flex w-full gap-5 flex-col md:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="your email address *"
          className="bg-black text-gray-500 focus:bg-[#0000002f] px-5 focus:outline h-14 rounded-lg w-full md:w-96"
        />
        <button className="bg-primary-100 text-gray-200 h-14 w-full md:w-36 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
