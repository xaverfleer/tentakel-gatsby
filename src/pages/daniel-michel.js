import * as React from "react";
import { graphql } from "gatsby";

import "../style.css";

import imgSidebar from "../images/sidebar-screenshot.png";
import imgJeanMichel from "../../static/uploads/daniel-michel.jpg";

import Layout from "../components/Layout";

const DanielMichelPage = ({ data }) => {
  // const { allMarkdownRemark } = data;
  // const { group } = allMarkdownRemark;
  // const article = group[0].nodes.map((node) => node.frontmatter);
  // const frontmattersByColumn = group
  // .slice(1, 4)
  // .map((group) => group.nodes.map((node) => node.frontmatter));

  return (
    <>
      <title>Tentakel | Ein besonderer Tag von Jean Michel</title>
      <Layout>
        <main className="main">
          <img
            className="article__main-image"
            src={imgJeanMichel}
            alt="Jean Michel"
          />
          <div className="article__category">Ein besonderer Tag von</div>
          <h1 className="artile__title">
            «Das Buch jagte mich durch die Nacht»
          </h1>
          <div className="article__teaser">
            Daniel Michel ist heute 44 Jahre alt, Physiker und Unternehmer – das
            Wissen dazu fiel auf ihn herunter.
          </div>
          <div className="article__body">
            <p>
              «Ich war eigentlich immer ein sehr schlechter Schüler, vor allem
              in den mathematischen Fächern, das war meine grosse Schwäche. Man
              könnte sogar behaupten, dass ich zeitweise der Klassenschlechteste
              war. Das ist keine Schande, es zu sagen. Eigentlich hatte ich mich
              mit dem Schicksal abgefunden, dass ich nie etwas Grossartiges
              erreichen und eher einen einfacheren Job ausüben würde. Ehrlich
              gesagt war ich an der Schule auch nicht interessiert. Ich hatte
              keine Lust zu lernen, und abgesehen davon fiel es mir eher schwer.
            </p>

            <p>
              ​Eines Tages, es war etwa anfangs achtes Schuljahr, durchstöberte
              ich zu Hause das Büchergestell im Wohnzimmer, meine Eltern waren
              weg. Ich suchte mit höchster Wahrscheinlichkeit nicht nach
              Büchern, denn sie hatten mich nie interessiert. Plötzlich fielen
              aus Versehen ein paar Bücher herunter. Eines war ein altes und
              verstaubtes Buch mit dem Titel Trigonometrie. Ich schlug es auf,
              weil sich der Titel so seltsam anhörte. Ich hatte das Wort
              Trigonometrie in meinem Leben noch nie gehört.
            </p>

            <p>
              ​Es war ein sehr unübliches Mathematikbuch. Auf der ersten Seite
              sprach es einen an, direkt mit Du – sehr persönlich. Ja, es war,
              als ob ein Lehrmeister das Wort an einen richtete. Das Buch
              stellte Fragen, und man hatte stets mehrere Antworten zur Auswahl.
              Jede Antwort führte einen auf eine andere Seite. Die konnte ganz
              hinten oder ganz vorne liegen. Es war ein sehr unterhaltsames
              Buch, höchst amüsant zu lesen: ein völlig unorthodoxer Stil. Es
              versuchte, die groben Grundzüge der einfachen Mathematik bis hin
              zur Trigonometrie zu erklären.
            </p>

            <p>
              ​Am frühen Morgen hatte ich wohl mehr Mathematik gelernt als in
              meinem ganzen Leben zuvor. ​ Dieses Buch faszinierte mich so sehr,
              dass ich die ganze Nacht darin herumblätterte, bis in die
              Morgenstunden, ohne Schlaf. Ich wurde von diesem Lehrmeister
              buchstäblich durchs ganze Werk gejagt. Am frühen Morgen hatte ich
              wohl mehr Mathematik gelernt als in meinem ganzen Leben zuvor. Auf
              wundersame Weise hatte das Buch geschafft, mir Wissen zu
              vermitteln, so wie ich es gebraucht hatte.
            </p>

            <p>
              ​Irgendwie löste das Ganze einen grossen Knoten in mir. Darauf
              schlug ich ein Lexikon auf und las unter dem Begriff Mathematik
              alles nach, was ich finden konnte. Ein paar Tage später fuhr ich
              mit dem Postauto in die Stadt Bern und kaufte
              zwei Mathematikbücher.
            </p>
            <p>
              ​Ich stiess unweigerlich auf die alten Griechen. Also schlug ich
              auch die Griechen nach, um zu schauen, was über sie geschrieben
              steht. Ich hielt Ausschau nach Sokrates, Platon und Artistoteles –
              weil sie am häufigsten in den Lexika erwähnt wurden. Kurz darauf
              kaufte ich ein Buch über die Griechen und ihre Philosophie – und
              da war's um mich geschehen.
            </p>

            <p>
              ​Nach diesen Büchern folgten viele weitere, primär mathematische
              und philosophische. Dadurch verspürte ich vermehrt das Verlangen,
              ins Gymnasium einzutreten, um noch mehr Wissen anzuhäufen – so wie
              es damals die Schüler von Platon an der Akademie konnten. Es fiel
              mir plötzlich viel leichter zu lernen. Ich erzielte schnell grosse
              Fortschritte in allen Fächern. Und ich interessierte mich nun
              sogar sehr für Mathematik!
            </p>

            <p>
              ​Als ich meinen Eltern – ich war ja in der Primarschule –
              mitteilte, dass ich ins Gymnasium gehen möchte, waren sie mehr als
              erstaunt. Es war ohnehin so, dass ich mit meiner Idee, ins
              Gymnasium eintreten zu wollen, völlig alleine dastand. Alle meine
              Freunde, die Eltern, die Lehrer fanden dies eine irrsinnige Idee.
              Weil: Es war extrem unüblich, nach Abschluss der Primarschule eine
              akademische Karriere anzustreben.
            </p>

            <p>
              ​Nun...mittlerweile habe ich das Gymnasium abgeschlossen. Mehr
              noch: Danach studierte ich Physik und Mathematik an der
              Universität Bern und doktorierte in Laserphysik. Heute habe ich
              ein eigenes Unternehmen, ich braue Bier, zudem entwickle und
              produziere ich Brauanlagen, die ich weltweit vertreibe. Ohne mein
              Physikwissen wäre das kaum möglich gewesen.
            </p>

            <p>
              ​Möglicherweise wäre ich früher oder später ohnehin auf die
              naturwissenschaftliche Schiene geraten. Aber der springende Punkt
              ist: Der Fall dieses Buches aus dem Büchergestell meiner Eltern
              war ganz klar ein Wendepunkt in meinem Leben. Vielleicht würde ich
              heute nicht da stehen, wo ich jetzt bin, wenn mir damals dieses
              Buch nicht vor die Füsse gefallen wäre.»
            </p>
          </div>
        </main>
        <aside className="sidebar">
          <img
            className="sidebar__img"
            src={imgSidebar}
            alt="Sidebar – Eine Vorschau"
          />
        </aside>
      </Layout>
    </>
  );
};

export default DanielMichelPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
    ) {
      nodes {
        id
        frontmatter {
          author
          datetime
          category
          title
          teaser
        }
        html
      }
    }
  }
`;
