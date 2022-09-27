import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img
        src="imgs/icons8-group-64.png"
        alt="Logo"
        className="w-10 h-10 ml-16"
      />
      <p className="text-white flex items-center font-bold text-2xl px-1 font-mono">
        Job <span className="text-blue-600">Board</span>
      </p>
    </div>
  );
};

export default Logo;
