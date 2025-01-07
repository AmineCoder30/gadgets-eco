import React from "react";
import { Link } from "react-router-dom";
import { ViewVideo } from "../../constants/icons";
import oculusVr from "../../assets/images/oculus-img-600x387.webp";
const OculusVR = () => {
  return (
    <div className=" container flex items-center flex-col lg:flex-row mx-auto gradient-bg p-14 gap-10 lg:gap-0 mt-20 rounded-lg shadow-lg">
      <div className="flex-1">
        <h2 className="text-5xl lg:text-7xl text-white text-center lg:text-left font-semibold mb-4 w-full">
          Oculus VR
        </h2>
        <p className="text-white max-w-[500px] mb-8 text-center lg:text-left">
          Ullamcorper malesuada proin libero nunc consequat interdum varius
          consequat mauris nunc congue nisi vitae.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-10 w-full">
          <button className="text-gray-950 hover:text-white bg-white hover:bg-primary-100 px-6 py-3 transition-all duration-300 rounded-md">
            <Link to="/shop">Shop Now</Link>
          </button>
          <button className="text-gray-200  hover:text-white py-2">
            <Link to="/shop" className="flex items-center gap-2">
              <ViewVideo />
              watch video
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <img src={oculusVr} cllg:assName="w-full h-full" alt="oculus image" />
      </div>
    </div>
  );
};

export default OculusVR;
