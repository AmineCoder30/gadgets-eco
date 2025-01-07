import React from "react";
import { useLocation, Link } from "react-router-dom";

function PageTitle({ classes }) {
  const location = useLocation();
  const path = decodeURIComponent(location.pathname.slice(1)) || "home";

  // Handle paths with dashes and spaces
  const formattedPath = path
    .split(/[-\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div
      className={`bg-dark-gray flex flex-col items-center text-center ${classes}`}
    >
      <p className="text-gray-400 text-sm uppercase mb-5">
        <Link className="hover:text-white" to="/">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">{formattedPath}</span>
      </p>
      <h1 className="text-6xl text-white font-extrabold">{formattedPath}</h1>
    </div>
  );
}

export default PageTitle;
