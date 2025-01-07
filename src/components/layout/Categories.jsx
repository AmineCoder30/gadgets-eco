import React from "react";
import { CategoryCard } from "../ui";
import categories from "../../constants/CategoriesList";
function Categories() {
  return (
    <div className="w-full px-5">
      <div className="container h-fit lg:h-screen py-10 mt-10  mx-auto">
        <div className="w-full grid grid-cols-4 grid-rows-4 h-full grid-flow-dense gap-10">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              source={category.image}
              category={category.title}
              numberOfItems={category.count}
              grid={category.grid}
              position={category.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
