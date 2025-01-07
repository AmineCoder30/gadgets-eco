import React from "react";
import { PageTitle, BlogsList } from "../components/layout";
function Blogs() {
  return (
    <div>
      <PageTitle classes="py-20 mb-20" />
      <BlogsList />
    </div>
  );
}

export default Blogs;
