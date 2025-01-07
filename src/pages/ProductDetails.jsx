import React from "react";
import { ProductInfo, TabbedContent } from "../components/layout";
import { ProductCard } from "../components/ui";
import products from "../constants/products";
function ProductDetails() {
  return (
    <div>
      <ProductInfo />
      <TabbedContent />
      <div className=" my-20 px-5  ">
        <div className="mx-auto container">
          <h1 className=" text-2xl mb-5 font-semibold capitalize">
            related product
          </h1>

          <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard
                id={product.id}
                title={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
