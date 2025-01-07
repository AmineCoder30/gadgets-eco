import React from "react";
import videoBg from "../../assets/images/video-bg.webp";
import { Play } from "../../constants/icons";
import brands from "../../constants/brands";
function VideoSection() {
  return (
    <div className="mt-20">
      <div className="w-full relative">
        <img
          src={videoBg}
          className="w-full object-cover"
          alt="video background"
        />
        <div className="absolute inset-0 bg-[#0000002d] flex justify-center items-center">
          <div className="p-5 bg-white hover:text-primary-200 rounded-lg">
            <Play />
          </div>
        </div>
      </div>{" "}
      <div className="bg-dark-gray px-5 py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-8 px-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default VideoSection;
