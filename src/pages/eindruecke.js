import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import { isoDateToGermanDate } from "../modules/dataConverter";

const EindrueckePage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  const eindruecke = nodes.map((n) => n.frontmatter);

  return (
    <>
      <Helmet>
        <title>Tentakel | Eindrücke</title>
      </Helmet>
      <Layout>
        <main className="main">
          {eindruecke.map((e) => (
            <img src={e.pic} />
          ))}
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
