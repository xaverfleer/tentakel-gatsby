import * as React from "react";
import "../style.css";
import imgPraesidentMujica from "../images/praesident-mujica.png";

import ArticlePreview from "../components/ArticlePreview";

// markup
const IndexPage = () => {
  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <div className="wrapper">
        <header></header>
        <main>
          <aside></aside>
          <ArticlePreview
            authorAndDate="18. Juni 2021, Corlos Gabetta"
            category="Reportage"
            pic={imgPraesidentMujica}
            teaserText="In einem Interview in Uruguay erz'hlt der abgehende Präsident, wieso er nicht im Präsidentenpalast leben will. Und wieso er keinen Groll auf seine ehemaligen Folterer hat und nur Sinn und Leben sieht, ohne Hass."
            title="Präsident Mujica lebt mit wenig Geld"
          />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default IndexPage;
