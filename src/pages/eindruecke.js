import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const EindrueckePage = ({ data, location }) => {
  const { nodes } = data.allMarkdownRemark;
  const eindruecke = nodes.map((n) => n.frontmatter);

  return (
    <>
      <Helmet>
        <title>Tentakel | Eindrücke</title>
      </Helmet>
      <Layout type="impressions" pathname={location.pathname}>
        <main className="main">
          <div className="impressions">
            {eindruecke.map((e) => (
              <div className="impressions__impression" key={e.pic}>
                <img className="impressions__img" src={e.pic} alt={e.title} />
                <div className="impressions__title">{e.title}</div>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default EindrueckePage;

export const pageQuery = graphql`
  query eindruecke {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "eindruck" } } }
      sort: { fields: frontmatter___datetime, order: DESC }
    ) {
      nodes {
        frontmatter {
          datetime
          title
          date
          event
          pic
          location
        }
      }
    }
  }
`;
