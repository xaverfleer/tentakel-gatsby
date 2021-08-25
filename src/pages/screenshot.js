import * as React from "react";
import firstDraft from "../images/screenshot.jpg";
import secondDraft from "../images/screenshot-2021-07-30.jpg";
import thirdDraft from "../images/screenshot-2021-08-13.pdf";
import artikelElemente from "../images/artikel-elemente.jpg";
import magazinAlle from "../images/magazin-alle.jpg";
import zeitschriftAusgabe01 from "../images/zeitschrift-ausgabe-01.pdf";
import zeitschriftAusgaben from "../images/zeitschrift-ausgaben.jpg";

// markup
const IndexPage = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <title>Tentakel | Entwürfe</title>
      <h1>Entwürfe</h1>
      <h2>Alle Zeitschrift Auflagen – 14. 8. 2021</h2>
      <img alt="Alle Zeitschrift Auflagen" src={zeitschriftAusgaben} />
      <p>
        Wenn man bei einer Ausgabe ist, hat man ja verschiedene Möglichkeiten,
        die Zeitschrift zu bestellen. Wenn man die erste Version anklickt, hätte
        man dann die weitere Auswahl, ob:
        <ul>
          <li>E-Paper</li>
          <li>Printausgabe</li>
        </ul>
      </p>
      <h2>Zeitschrift Ausgabe 01 – 14. 8. 2021</h2>
      <a href={zeitschriftAusgabe01}>PDF</a>
      <h2>Alle Zeitschrift Ausgaben (Tagi)– 14. 8. 2021</h2>
      <img alt="Alle Zeitschrift Ausgaben (Tagi)" src={magazinAlle} />
      <h2>Artikel Elemente – 14. 8. 2021</h2>
      <img alt="Artikel Elemente" src={artikelElemente} />
      <h2>Dritter Entwurf – 13. 8. 2021</h2>
      <a href={thirdDraft}>PDF</a>
      <h2>Zweiter Entwurf - 30. 7. 2021</h2>
      <img alt="Tentakel Entwurf Screenshot" src={secondDraft} />
      <h2>Erster Entwurf</h2>
      <img alt="Tentakel Entwurf Screenshot" src={firstDraft} />
    </main>
  );
};

export default IndexPage;
