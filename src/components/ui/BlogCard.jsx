import React from "react";
import Button from "./Button";
function BlogCard({ title, category, subtitle, image, key }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-sm" key={key}>
      <div className="w-full  ">
        <img src={image} className=" w-full  object-contain" alt={title} />
      </div>
      <div className="p-5">
        <p className="text-gray-500 uppercase ">{category}</p>
        <h3 className="font-bold text-lg my-3 hover:text-primary-100">
          {title}{" "}
        </h3>
        <p className="text-gray-500 line-clamp-2 ">{subtitle}</p>
        <Button title="Read More" link="/blogs" disabled={true} />
      </div>
    </div>
  );
}

export default BlogCard;
