import React, { Fragment } from "react";
import SubHeader from "./SubHeader";

const Header = (props) => {
  return (
    <Fragment>
      <div className="sticky top-0 flex w-full bg-black h-24 justify-between">
        {props.children}
      </div>
      <SubHeader />
    </Fragment>
  );
};

export default Header;
