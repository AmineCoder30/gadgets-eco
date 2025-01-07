import React from "react";
import { FaStar } from "react-icons/fa";
import defaultAvatar from "../../assets/images/man.png";

const Review = ({ review }) => {
  const { name, rating, review: reviewText, date } = review;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="border-b border-gray-200 py-8">
      <div className="flex items-start gap-4">
        <img
          src={defaultAvatar}
          alt={name}
          className="w-12 h-12 rounded-full"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{name}</h3>
            <span className="text-sm text-gray-500">{formatDate(date)}</span>
          </div>

          <div className="flex mb-3">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed">{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
