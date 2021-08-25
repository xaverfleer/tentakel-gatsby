import * as React from "react";
import { graphql } from "gatsby";

import "../style.css";

import imgSidebar from "../images/sidebar-screenshot.png";
import imgJeanMichel from "../../static/uploads/daniel-michel.jpg";

import Layout from "../components/Layout";

const DanielMichelPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;
  const fm = nodes[0].frontmatter;

  return (
    <>
      <title>Tentakel | {fm.title}</title>
      <Layout>
        <main className="main">
          <img
            className="article__main-image"
            src={imgJeanMichel}
            alt="Jean Michel"
          />
          <div className="article__category">{fm.category}</div>
          <h1 className="artile__title">{fm.title}</h1>
          <div className="article__teaser">{fm.teaser}</div>
          <div>
            {fm.author}, {fm.datetime.split("T")[0]}
          </div>
          <div
            className="article__body"
            dangerouslySetInnerHTML={{ __html: nodes[0].html }}
          ></div>
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
