import React from "react";

import header from "../images/header-2021-07-30.jpg";

const Layout = ({ children }) => (
  <div className="wrapper">
    <header>
      <a className="layout__link" href="/">
        <img src={header} className="layout__logo"></img>
      </a>
    </header>
    {children}
  </div>
);

export default Layout;
