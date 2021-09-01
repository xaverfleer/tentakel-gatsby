import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import imgSidebar from "../images/sidebar-screenshot.png";

import Layout from "../components/Layout";

const Article = ({ data }) => {
  const { article } = data;
  const fm = article.frontmatter;

  return (
    <>
      <Helmet>
        <title>Tentakel | {fm.title}</title>
      </Helmet>
      <Layout>
        <main className="main">
          <img
            className="article__main-image"
            src={`/${fm.pic}`}
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
            dangerouslySetInnerHTML={{ __html: article.html }}
          ></div>
        </main>
      </Layout>
    </>
  );
};
export default Article;

export const pageQuery = graphql`
  query ($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        category
        datetime
        pic
        title
        teaser
      }
      html
    }
  }
`;
