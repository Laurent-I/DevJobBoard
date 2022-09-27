import React from "react";

const ProfileImage = (props) => {
  return (
    <div
      className="rounded-full border-4 border-blue-600 w-32 h-32 mx-16 my-5 flex flex-col hover:border-orange-400"
      id="image_container"
    >
      <img
        src={props.image || "https://avatars.dicebear.com/api/bottts/pic.svg"}
        alt="Profile"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
