import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import imgZeitschrift from "../assets/images/Zeitschrift-Sample-Cover.png";

const IndexPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <title>Tentakel | Die Zeitschrift zum Magazin</title>
      </Helmet>
      <Layout type="die-zeitschrift" pathname={location.pathname}>
        <img
          src={imgZeitschrift}
          alt="Tentakel Zeitschrift – Ausgabe August 2021"
          className="zeitschrift-cover"
        />
        <main className="zeitschrift">
          <h1 className="zeitschrift__title">Titel des Heftes</h1>
          <div className="zeitschrift__subtitle">August 2021</div>
          <div className="zeitschrift__teaser">
            Das Streben nach Sicherheit findet sich überall im Leoen — im Job,
            im Privaten oder auch im Straßerverkehr. Dabes iat klar. dass es
            keine absolute Sicherheit geden kann. Niemand weiss, ob eine
            Beziehung hält, abs ımarı mitt sa der müchster Sirwernescke
            überkatren wird oder ob die Geschaftsidse wirklich 80 toll iet,
            Manchmal setzt man sich unbewuset Risikanı aus, manchmal nimmt men
            sie bewusst in Kauf, So riskieren die Menechen, dis n Bolarue oder
            Myanmar für mehr Demaokrate auf die Straße gehen, nicht atwa nur
            finanziela Verluste oder verpasets Chancen, sorıdarn — ganz konkret
            - hr Laben. Wir hakterı jedenialls schon unge das Gefühl, dass mar
            zum Thema Risiko ein gutes. wichtiges Hoft machen kann. Diesen
            Sommer haben wir cs gewagt.
          </div>
          <a
            className="zeitschrift-cta"
            href="mailto:camilla.landboe@gmail.com"
          >
            &rarr; Dieses Ausgabe bestellen
          </a>
          <a
            className="zeitschrift-cta"
            href="mailto:camilla.landboe@gmail.com"
          >
            &rarr; Abonnent/in werden
          </a>
          <a
            className="zeitschrift-cta"
            href="mailto:camilla.landboe@gmail.com"
          >
            &rarr; Geschenkabo
          </a>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
