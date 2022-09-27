import React from "react";

const ProfileAddress = (props) => {
  return (
    <div className="w-full h-16 flex items-center justify-center text-xl font-semibold hover:bg-blue-100">
      {props.location}
    </div>
  );
};

export default ProfileAddress;
