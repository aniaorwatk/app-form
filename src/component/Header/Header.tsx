import React from "react";
import labels from "../../labels";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>{labels.header.invitation}</h1>
      <p>{labels.header.text}</p>
    </header>
  );
};
export default Header;
