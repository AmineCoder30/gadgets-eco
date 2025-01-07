import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Review from "./Review";
const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !formData.name || !formData.email || !formData.review) {
      setMessage("Please fill all required fields");
      return;
    }

    try {
      const newReview = {
        ...formData,
        rating,
        date: new Date().toISOString(),
        id: Date.now(), // Add unique ID
      };

      setReview(newReview);

      setHover(null);
      setMessage("Review submitted successfully!");

      // Optionally trigger a callback to refresh reviews
      if (onReviewSubmit) {
        onReviewSubmit(newReview);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Error submitting review. Please try again.");
    }
  };
  return (
    <div className="flex justify-center flex-col gap-10 md:flex-row items-start ">
      <div className="w-full md:w-1/2 min-h-40">
        <h2 className="text-xl font-bold">Reviews</h2>
        {review !== "" ? (
          <Review review={review} />
        ) : (
          <p>There are no reviews yet.</p>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold">Be the first to review</h2>
        <p className="text-sm text-gray-600">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="flex items-center my-5 ">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className={`cursor-pointer ${
                    ratingValue <= (hover || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your review *
            </label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          {message && (
            <p
              className={`text-sm ${
                message.includes("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
