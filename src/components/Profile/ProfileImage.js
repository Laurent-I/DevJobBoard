import React from "react";

const ProfileImage = (props) => {
  const imageFound = (
    <img src={props.image} alt="Profile" className="rounded-full" />
  );

  const imageNotFound = (
    <img
      src="https://avatars.dicebear.com/api/bottts/pic.svg"
      alt="Profile"
      className="rounded-full"
    />
  );

  return (
    <div
      className="rounded-full border-4 border-blue-600 w-32 h-32 mx-16 my-5 flex flex-col hover:border-orange-400"
      id="image_container"
    >
      {props.image ? imageFound:imageNotFound}
    </div>
  );
};

export default ProfileImage;
