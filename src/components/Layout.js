import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import "../style.css";

import header from "../images/header.jpg";

const paths = [
  { path: "/", label: "Die Serie" },
  { path: "/", label: "Reihen" },
  { path: "/eindruecke/", label: "Eindrücke" },
  { path: "/die-zeitschrift/", label: "Die Zeitschrift" },
];

const Layout = ({ children, type }) => (
  <div className={`wrapper ${type ? `wrapper--${type}` : ``}`}>
    <Helmet htmlAttributes={{ lang: "de" }} />
    <header className="header">
      <div className="header__in-3-words">Gesellschaft. Mensch. Meer.</div>
      <a className="layout__link" href="/">
        <img
          src={header}
          className="layout__logo"
          alt="Tentakel – Das Magazin"
        ></img>
      </a>
      <nav className="main-navigation">
        {paths.map((p) => (
          <Link className="main-navigation__entry" to={p.path}>
            {p.label}
          </Link>
        ))}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
