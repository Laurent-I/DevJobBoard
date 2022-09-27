import React from "react";
import Card from "../UI/Card";
import ProfileAddress from "./ProfileAddress";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileLink from "./ProfileLink";

const FullProfile = (props) => {
  return (
    <section>
      <Card>
        <ProfileImage image={props.image} />
        <ProfileInfo name={props.name} job={props.job} />
        <ProfileLink
          email={props.email}
          linkedin={props.linkedin}
          website={props.website}
          github={props.github}
        />
        <ProfileAddress location={props.location} />
      </Card>
    </section>
  );
};

export default FullProfile;
