import * as React from "react";
import imgPraesidentMujica from "../images/praesident-mujica.png";

// markup
const IndexPage = () => {
  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <div className="wrapper">
        <header></header>
        <main>
          <aside></aside>
          <div className="article-preview">
            <div className="article-preview__category">Reportage</div>
            <img
              className="article-preview__img"
              src={imgPraesidentMujica}
            ></img>
            <div className="article-preview__teaser">
              <h2 className="article-preview__title">
                Präsident Mujica lebt mit wenig Geld
              </h2>
              <div className="article-preview__author-and-date">
                18. Juni 2021, Corlos Gabetta
              </div>
              <div className="article-preview__teaser-text">
                In einem Interview in Uruguay erz'hlt der abgehende Präsident,
                wieso er nicht im Präsidentenpalast leben will. Und wieso er
                keinen Groll auf seine ehemaligen Folterer hat und nur Sinn und
                Leben sieht, ohne Hass.
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default IndexPage;
