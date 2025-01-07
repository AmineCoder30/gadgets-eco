import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ title, price, image, category, id }) {
  const [loading, setLoading] = React.useState(false);
  const addToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    setLoading(true);
    try {
      // Get existing cart or initialize empty array
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists in cart using key instead of id
      const existingProduct = cart.find((item) => item.id === id);

      if (existingProduct) {
        // Update quantity if product exists
        existingProduct.quantity += 1;
      } else {
        // Add new product if it doesn't exist
        cart.push({
          id,
          quantity: 1,
          title,
          image,
          price,
        });
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      setInterval(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error updating cart:", error);
      setLoading(false);
    }
  };
  return (
    <div className="w-fll group cursor-pointer " key={id}>
      <Link to={`/product-details/${title.toLowerCase().split(" ").join("-")}`}>
        <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src={image}
            className="group-hover:scale-110 w-full transition-all duration-300"
            alt={title}
          />
        </div>
        <div className="py-5">
          <h3 className="font-bold text-lg">{title} </h3>
          <p className="text-gray-500 mt-4 ">${price.toFixed(2)}</p>
          <p className="text-gray-500 mt-4 ">{category}</p>
          <button
            onClick={addToCart}
            className="bg-gray-200 flex items-center gap-2 hover:text-white hover:bg-primary-100 text-gray-900 capitalize px-4 py-2 rounded-lg mt-2"
          >
            Add to cart
            {loading && (
              <span className="border-2 border-gray-200 animate-spin duration-200 border-t-primary-200 rounded-full h-4 w-4"></span>
            )}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
