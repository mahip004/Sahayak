import React from "react";

const Separator = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-[3px] bg-gray-300 rounded-lg my-8 ${className}`}
    ></div>
  );
};

export default Separator;
