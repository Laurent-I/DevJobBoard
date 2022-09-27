import React, { Fragment } from "react";
import Logo from "../UI/Logo";
import Input from "../UI/Input";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <Fragment>
      {" "}
      <div className="sticky top-0 flex w-full bg-black h-24 justify-between">
        <Logo />
        <Input />
      </div>
      <SubHeader />
    </Fragment>
  );
};

export default Header;
