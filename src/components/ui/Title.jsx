import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Title({ title, subtitle, link }) {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mb-10 flex gap-10 flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold capitalize mb-2  ">{title}</h2>
        <p className="text-gray-500 max-w-96">{subtitle}</p>
      </div>
      <Button title="view all" handleClick={() => navigate(link)} />
    </div>
  );
}

export default Title;
