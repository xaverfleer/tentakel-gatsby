import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <title>Tentakel | Seite nicht gefunden</title>
      </Helmet>
      <h1>Seite nicht gefunden</h1>
      <p>
        Sorry, Die gesuchte Seite ist entweder temporär nicht verfügbar, wurde
        an einen anderen Ort verschoben oder existiert nicht mehr.
      </p>

      <p>
        <Link to="/">Zur Startseite</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
