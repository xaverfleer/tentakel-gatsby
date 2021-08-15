import * as React from "react";
import { graphql } from "gatsby";

import "../style.css";

import imgKatze from "../images/katze.png";
import imgSchnauzeVoll from "../images/schnauze-voll.png";
import imgSidebar from "../images/sidebar-screenshot.png";

import ArticlePreview from "../components/ArticlePreview";
import ArticlePreviewSmall from "../components/ArticlePreviewSmall";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const allTeasers = allMarkdownRemark.nodes.map((n) => n.frontmatter);
  const mainTeasers = allTeasers.filter((t) => t.show === "Hauptartikel");

  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <Layout>
        <main className="main">
          {mainTeasers.map((t) => (
            <ArticlePreview
              authorAndDate={t.authorAndDate}
              category={t.category}
              title={t.title}
              pic={t.pic}
              teaserText={t.teaserText}
            />
          ))}
          <div className="preview-columns">
            {["Spalte 1", "Spalte 2"].map((columnName) => (
              <div className="preview-column">
                {allTeasers
                  .filter((t) => t.show === columnName)
                  .map((t) => (
                    <ArticlePreviewSmall
                      authorAndDate={t.authorAndDate}
                      category={t.category}
                      pic={t.pic}
                      teaserText={t.teaserText}
                      title={t.title}
                      quoteAuthor={t.quoteAuthor}
                      imgDescription={t.imgDescription}
                    />
                  ))}
              </div>
            ))}
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
        <aside className="sidebar">
          <img
            className="sidebar__img"
            src={imgSidebar}
            alt="Sidebar – Eine Vorschau"
          />
        </aside>
      </Layout>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <script href="/snippets/netlifyIdentity.js"></script>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query allTeasers {
    allMarkdownRemark(
      filter: { frontmatter: { mdCategory: { eq: "teaser" } } }
    ) {
      nodes {
        frontmatter {
          authorAndDate
          category
          pic
          show
          teaserText
          title
          quoteAuthor
          imgDescription
        }
      }
    }
  }
`;
