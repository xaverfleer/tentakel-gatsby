import React from "react";
import "../style.css";

import header from "../images/header-2021-07-30.jpg";

const Layout = ({ children }) => (
  <div className="wrapper">
    <header className="header">
      <a className="layout__link" href="/">
        <img
          src={header}
          className="layout__logo"
          alt="Tentakel – Das Magazin"
        ></img>
      </a>
    </header>
    {children}
  </div>
);

export default Layout;
