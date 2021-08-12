import * as React from "react";
import "../style.css";

import imgBlume from "../images/blume.png";
import imgGurten from "../images/eindruecke-00.png";
import imgKatze from "../images/katze.png";
import imgLoslassenDranbleiben from "../images/loslassen-dranbleiben.png";
import imgMalerei from "../images/malerei.png";
import imgPraesidentMujica from "../images/praesident-mujica.png";
import imgPlastik from "../images/plastik.png";
import imgSchnauzeVoll from "../images/schnauze-voll.png";

import ArticlePreview from "../components/ArticlePreview";
import ArticlePreviewSmall from "../components/ArticlePreviewSmall";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <div className="wrapper">
        <Layout>
          <main>
            <ArticlePreview
              authorAndDate="18. Juni 2021, Corlos Gabetta"
              category="Reportage"
              pic={imgPraesidentMujica}
              teaserText="In einem Interview in Uruguay erz'hlt der abgehende Präsident, wieso er nicht im Präsidentenpalast leben will. Und wieso er keinen Groll auf seine ehemaligen Folterer hat und nur Sinn und Leben sieht, ohne Hass."
              title="Präsident Mujica lebt mit wenig Geld"
            />
            <div className="preview-columns">
              <div class="preview-column">
                <ArticlePreviewSmall
                  authorAndDate="7. Juli 2021, Camilla Landbö"
                  category="Aus dem Leben eines Tintenfisches #1"
                  pic={imgPlastik}
                  teaserText="Harry geht mit vielen Kindern OPlastik einsammeln. Danach sind die Strände wieder sauber. Es ist eine mühselige Arbeit, mit Sitt. Viele Inseln ziehen nach."
                  title="Wieso Plastik am Strand mein Leben vermiest"
                />
                <ArticlePreviewSmall
                  authorAndDate="16. Juni 2021, Rolf Brügger"
                  category="5 Fragen an..."
                  pic={imgLoslassenDranbleiben}
                  teaserText="Die Künstlerin aus Brugg macht sich viele Gedanken über das Leben nach der Ausstellung."
                  title="«Loslassen heisst dranbleiben»"
                />
                <ArticlePreviewSmall
                  category="Zitiert"
                  title="«Meine Meinung steht fest, irritieren Sie mich nicht mit Tatsachen.»"
                  quoteAuthor="Konrad Adenauer (1867 – 1967)"
                />
              </div>
              <div className="preview-column">
                <ArticlePreviewSmall
                  category="Das Interview"
                  title="«Ich will mein leben mit Malerei gestalten»"
                  pic={imgMalerei}
                  authorAndDate="16. Juni 2021, Regine Häckel"
                  teaserText="Die Künstlerin aus Brugg macht sich viele Gedanken über das Leben nach der Ausstellung."
                ></ArticlePreviewSmall>
                <ArticlePreviewSmall
                  category="Eindrücke"
                  pic={imgGurten}
                  imgDescription="Gurten, Januar 2021"
                ></ArticlePreviewSmall>
                <ArticlePreviewSmall
                  authorAndDate="7. Juli 2021, Camilla Landbö"
                  category="Aus dem Leben eines Tintenfisches #1"
                  pic={imgBlume}
                  teaserText="Harry geht mit vielen Kindern OPlastik einsammeln. Danach sind die Strände wieder sauber. Es ist eine mühselige Arbeit, mit Sitt. Viele Inseln ziehen nach."
                  title="Wieso Plastik am Strand mein Leben vermiest"
                />
              </div>
              <div className="preview-column">
                <ArticlePreviewSmall
                  category="Die Serie – Frauenfeindlichkeit im System #1"
                  title="«Hab Schnautze voll»"
                  pic={imgSchnauzeVoll}
                  authorAndDate="16. Juni 2021, Regine Häckel"
                  teaserText="Die Künstlerin aus Brugg macht sich viele Gedanken über das Leben nach der Ausstellung."
                />
                <ArticlePreviewSmall
                  category="Gedacht"
                  title="«Bifurkation»"
                  quoteAuthor="16. März 2021, Redaktion"
                />
                <ArticlePreviewSmall
                  category="Das Interview"
                  title="«Ich will mein leben mit Malerei gestalten»"
                  pic={imgKatze}
                  authorAndDate="16. Juni 2021, Regine Häckel"
                  teaserText="Die Künstlerin aus Brugg macht sich viele Gedanken über das Leben nach der Ausstellung."
                ></ArticlePreviewSmall>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
};

export default IndexPage;
