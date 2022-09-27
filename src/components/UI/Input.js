import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-row items-center">
      <img src="imgs/icons8-search.svg" alt="Logo" className="w-10 h-10" />
      <input
        type="text"
        placeholder="Search by name or role"
        className="h-12 my-auto px-6 rounded-lg border-4 focus:ring focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 mx-5 border-orange-400"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
