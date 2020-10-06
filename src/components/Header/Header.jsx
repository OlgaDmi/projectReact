import React from "react";
import { MenuWithConnect } from "../Menu/Menu";
import logo from "./logo.svg";
import "./style.scss";

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} alt="Logo" />
      <MenuWithConnect />
    </header>
  );
};

export default Header;
