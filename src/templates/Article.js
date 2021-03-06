import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import { isoDateToGermanDate } from "../modules/dataConverter";

const Article = ({ data }) => {
  const { article } = data;
  const fm = article.frontmatter;

  return (
    <>
      <Helmet>
        <title>Tentakel | {fm.title}</title>
      </Helmet>
      <Layout type="article">
        <aside className="sidebar sidebar--article">
          <div className="sidebar__entry">
            {isoDateToGermanDate(fm.datetime)}
          </div>
          <div className="sidebar__entry">{fm.author}</div>
        </aside>
        <main className="main main--article">
          <div className="article__category">{fm.category}</div>
          <h1 className="artile__title">{fm.title}</h1>
          <div className="article__teaser">{fm.teaser}</div>
          <GatsbyImage image={getImage(fm.pict)} alt={fm.alt} />
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
        alt
        author
        category
        datetime
        pict {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 800, height: 514)
          }
        }
        title
        teaser
      }
      html
    }
  }
`;
