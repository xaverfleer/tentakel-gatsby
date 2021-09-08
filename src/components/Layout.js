import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import "../style.css";

import header from "../images/header-2021-07-30.jpg";

const Layout = ({ children, type }) => (
  <div className={`wrapper ${type ? `wrapper--${type}` : ``}`}>
    <Helmet htmlAttributes={{ lang: "de" }} />
    <header className="header">
      <a className="layout__link" href="/">
        <img
          src={header}
          className="layout__logo"
          alt="Tentakel – Das Magazin"
        ></img>
      </a>
      <nav>
        <Link to="/">Die Serie</Link>
        <Link to="/">Reihen</Link>
        <Link to="/">Eindrücke</Link>
        <Link to="/">Die Zeitschrift</Link>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
