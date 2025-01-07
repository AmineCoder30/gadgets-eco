import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, NotificationBanner } from "../ui";
import products from "../../constants/products";
import { getProductByTitle, handleMouseMove } from "../../helpers";
const ProductInfo = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const productName = location.pathname.split("/").pop();
  useEffect(() => {
    setProduct(getProductByTitle(products, productName));
    console.log("prod", product);
  }, [productName]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className=" py-12 px-5">
      <div className="container mx-auto ">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <NavLink href="/" className="text-primary-200 hover:text-gray-700">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink
            href="/products"
            className="text-primary-200 hover:text-gray-700"
          >
            Gadgets
          </NavLink>{" "}
          / <span className="text-gray-700">{product.name}</span>
        </nav>
        <NotificationBanner productName={product.name} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}

          <div
            className="image-container"
            onMouseMove={(e) => handleMouseMove(e, setPosition)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.image}
              alt="AirPods Pro"
              className={`zoom-image ${isHovering ? "hovering" : ""}`}
              style={
                isHovering
                  ? { transformOrigin: `${position.x}% ${position.y}%` }
                  : {}
              }
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {" "}
              {product.name}
            </h1>
            <p className="text-xl text-gray-700 mt-2">$249.00</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Volutpat commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et
              ligula ullamcorper. Feugiat vitae aliquet magna sit amet purus
              gravida quis blandit turpis cursus.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Quis risus sed vulputate odio ut scelerisque fermentum dui
              faucibus in ornare quam viverra. Vitae tempus quam pellentesque
              nec nam aliquam.
            </p>

            {/* Quantity Selector */}
            <div className="flex gap-5 py-5 items-center border-y border-gray-300 mt-10">
              <div className=" flex items-center px-1 h-14 rounded-md border border-gray-200 ">
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

              {/* Add to Cart Button */}
              <Button title="Add to Cart" width="w-full" />
            </div>

            {/* Product Category */}
            <p className="mt-6 text-gray-500">
              <span className="font-bold">Category:</span> {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
