import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Article = ({ data }) => {
  const { article } = data;
  const fm = article.frontmatter;

  return (
    <>
      <Helmet>
        <title>Tentakel | {fm.title}</title>
      </Helmet>
      <Layout type="article">
        <aside class="sidebar sidebar--article">
          <div class="sidebar__entry">{fm.datetime.split("T")[0]}</div>
          <div class="sidebar__entry">{fm.author}</div>
        </aside>
        <main className="main main--article">
          <div className="article__category">{fm.category}</div>
          <h1 className="artile__title">{fm.title}</h1>
          <div className="article__teaser">{fm.teaser}</div>
          <img
            className="article__main-image"
            src={`/${fm.pic}`}
            alt="Jean Michel"
          />
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
