import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import "../style.css";

const paths = [
  // { path: "/", label: "Die Serie" },
  // { path: "/", label: "Reihen" },
  { path: "/eindruecke/", label: "Eindrücke" },
  { path: "/die-zeitschrift/", label: "Die Zeitschrift" },
];

const Layout = ({ children, pathname = "", type }) => (
  <div className={`wrapper ${type ? `wrapper--${type}` : ``}`}>
    <Helmet htmlAttributes={{ lang: "de" }} />
    <header className="header">
      <div className="header__in-3-words">Gesellschaft. Mensch. Meer.</div>
      <a className="layout__link" href="/">
        <StaticImage
          alt="Tentakel – Das Magazin"
          className="layout__logo"
          href="/"
          placeholder="tracedSVG"
          src="../assets/images/header.jpg"
        />
      </a>
      <nav className="main-navigation">
        {paths.map((p) => {
          const isCurrentPage =
            pathname.replace(/\/$/, "") === p.path.replace(/\/$/, "");

          let classes = `main-navigation__entry${
            isCurrentPage ? " main-navigation__entry--current" : ""
          }`;

          return (
            <Link className={classes} key={p.label} to={p.path}>
              {p.label}
            </Link>
          );
        })}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
