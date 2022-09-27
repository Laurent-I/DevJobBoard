import React, { Fragment } from "react";

const ProfileInfo = (props) => {
  return (
    <Fragment>
      <h2
        className="text-2xl font-bold flex justify-center items-center w-full"
        id="user_name"
      >
        {props.name}
      </h2>
      <h3 className="w-full flex items-center justify-center px-2 text-center py-4 text-xl font-medium">
        {props.job}
      </h3>
    </Fragment>
  );
};

export default ProfileInfo;
