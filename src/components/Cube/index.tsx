import React from "react";

interface CubeProps {
  isSelected: boolean;
}

const Cube: React.FC<CubeProps> = ({ isSelected }) => {
  return (
    <div
      className={`w-3 h-3 border-2 border-light-orange 
        ${isSelected ? "bg-light-orange animate-spin-slow" : "bg-transparent"}`}
    ></div>
  );
};

export default Cube;
