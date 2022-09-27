import React, { useRef } from "react";

const Input = () => {
  const searchInput = useRef();
  // const enteredSearch = searchInput.current.value;
  return (
    <div className="flex flex-row items-center">
      <img src="imgs/icons8-search.svg" alt="Logo" className="w-10 h-10" />
      <input
        type="text"
        ref={searchInput}
        placeholder="Search by name or role"
        className="h-12 my-auto px-6 rounded-lg border-4 focus:ring focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 mx-5 border-orange-400"
      />
    </div>
  );
};

export default Input;
