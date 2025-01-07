import React from "react";
import { ProductCard } from "../ui";

function ProductsList({ products }) {
  return (
    <div className="  px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
