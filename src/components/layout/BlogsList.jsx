import React from "react";
import { BlogCard } from "../ui";
import blogs from "../../constants/blog";

function BlogsList() {
  return (
    <div className=" px-5 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            category={blog.category}
            image={blog.image}
            subtitle={blog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
