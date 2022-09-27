import React from "react";

const Card = (props) => {
  return (
    <div className="h-92 bg-white w-64 border border-gray-300 rounded-md shadow-2xl ease-in-out duration-300 hover:scale-110">
      {props.children}
    </div>
  );
};

export default Card;
