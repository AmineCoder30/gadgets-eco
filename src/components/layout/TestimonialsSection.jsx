// File: src/components/TestimonialsSection.js

import React from "react";
import testimonials from "../../constants/Testimonials";

const TestimonialsSection = () => {
  return (
    <div className="mt-20 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Testimonials
        </h2>

        {/* Testimonial Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex  gap-5 "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <div>
                <p className="text-gray-700  mb-4">{testimonial.text}</p>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700">
            See All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
