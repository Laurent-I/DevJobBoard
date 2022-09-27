import React from "react";
import Count from "../UI/Count";

const SubHeader = () => {
  return (
    <div className="mx-auto flex w-11/12 items-center my-4 bg-blue-400 h-32 rounded-lg px-4 justify-center">
      <Count description="Total Profiles" count="212" />
    </div>
  );
};

export default SubHeader;
