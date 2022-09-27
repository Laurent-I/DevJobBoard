import React from "react";

const ProfileLink = (props) => {
  return (
    <div className="flex flex-row justify-evenly my-2">
      <a
        href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${props.email}`}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400"
      >
        <img
          src="imgs/icons8-mail-24.png"
          alt="linkedin icon"
          className="w-6 h-6"
        />
      </a>
      <a
        href={props.linkedin}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400"
      >
        <img
          src="imgs/icons8-linkedin-2.svg"
          alt="linkedin icon"
          className="w-6 h-6"
        />
      </a>
      <a
        href={props.website}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400"
      >
        <img
          src="imgs/icons8-website-50.png"
          alt="Website icon"
          className="w-6 h-6"
        />
      </a>
      <a
        href={props.github}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400"
      >
        <img src="imgs/icons8-github.svg" alt="github" />
      </a>
    </div>
  );
};

export default ProfileLink;
