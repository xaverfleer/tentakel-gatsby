import * as React from "react";
import firstDraft from "../images/screenshot.jpg";
import secondDraft from "../images/screenshot-2021-07-30.jpg";
import thirdDraft from "../images/screenshot-2021-08-13.pdf";

// markup
const IndexPage = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <title>Tentakel | Entwürfe</title>
      <h1>Entwürfe</h1>
      <h2>Dritter Entwurf – 13. 8. 2021</h2>
      <a href={thirdDraft}>PDF</a>
      <h2>Zweiter Entwurf - 30. 7. 2021</h2>
      <img alt="Tentakel Entwurf Screenshot" src={secondDraft} />
      <h2>Erster Entwurf</h2>
      <img alt="Tentakel Entwurf Screenshot" src={firstDraft} />
    </main>
  );
};

export default IndexPage;
