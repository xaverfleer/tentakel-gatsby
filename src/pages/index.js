import * as React from "react";
import "../style.css";
import imgPraesidentMujica from "../images/praesident-mujica.png";
import imgPlastik from "../images/plastik.png";

import ArticlePreview from "../components/ArticlePreview";
import ArticlePreviewSmall from "../components/ArticlePreviewSmall";

// markup
const IndexPage = () => {
  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <div className="wrapper">
        <header></header>
        <main>
          <ArticlePreview
            authorAndDate="18. Juni 2021, Corlos Gabetta"
            category="Reportage"
            pic={imgPraesidentMujica}
            teaserText="In einem Interview in Uruguay erz'hlt der abgehende Präsident, wieso er nicht im Präsidentenpalast leben will. Und wieso er keinen Groll auf seine ehemaligen Folterer hat und nur Sinn und Leben sieht, ohne Hass."
            title="Präsident Mujica lebt mit wenig Geld"
          />
          <div className="previewColumns">
            <div class="preview-column">
              <ArticlePreviewSmall
                authorAndDate="7. Juli 2021, Camilla Landbö"
                category="Aus dem Leben eines Tintenfisches #1"
                pic={imgPlastik}
                teaserText="Harry geht mit vielen Kindern OPlastik einsammeln. Danach sind die Strände wieder sauber. Es ist eine mühselige Arbeit, mit Sitt. Viele Inseln ziehen nach."
                title="Wieso Plastik am Strand mein Leben vermiest"
              />
            </div>
          </div>
        </main>
        <aside></aside>
        <footer></footer>
      </div>
    </>
  );
};

export default IndexPage;
