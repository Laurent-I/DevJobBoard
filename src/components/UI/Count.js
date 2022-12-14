import React from "react";

const Count = (props) => {
  const profileCount = props.count;
  return (
    <div className="bg-black h-20 w-36 flex justify-center flex-col rounded-xl">
      <p className="text-white text-xl px-2 font-medium mx-auto">
        {props.description}
      </p>
      <p className="text-white text-xl mx-auto <font-medium></font-medium> font-mono">
        {profileCount}
      </p>
    </div>
  );
};

export default Count;
