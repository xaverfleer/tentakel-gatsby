import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
              <div className="impressions__impression" key={e.title || e.alt}>
                {e.pict && (
                  <GatsbyImage
                    className="impressions__img"
                    image={getImage(e.pict)}
                    alt={e.alt || e.title}
                  />
                )}
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
          pict {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 250)
            }
          }
          location
        }
      }
    }
  }
`;
