import React from "react";
import { PageTitle, ProductsList } from "../components/layout";
import products from "../constants/products";
function Products() {
  return (
    <div>
      <PageTitle classes="py-20 mb-20" />
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
