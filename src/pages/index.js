import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import imgSidebar from "../assets/images/sidebar-screenshot.png";

import ArticlePreview from "../components/ArticlePreview";
import ArticlePreviewSmall from "../components/ArticlePreviewSmall";
import Layout from "../components/Layout";

import { isoDateToGermanDate } from "../modules/dataConverter";

const IndexPage = ({ data, location }) => {
  const { allMarkdownRemark } = data;
  const { group } = allMarkdownRemark;
  const mainTeaserFrontmatters = group[0].nodes.map((node) => node.frontmatter);
  const frontmattersByColumn = group
    .slice(1, 4)
    .map((group) => group.nodes.map((node) => node.frontmatter));

  const fullArticlePreviews = data.fullArticlePreviews.nodes.map((preview) => {
    const fm = preview.frontmatter;
    fm.authorAndDate = `${isoDateToGermanDate(fm.datetime)}, ${fm.author}`;
    fm.slug = preview.fields.slug;
    return fm;
  });

  {
    let i = 0;
    for (let preview of fullArticlePreviews) {
      frontmattersByColumn[i % 3].unshift(preview);
      i++;
    }
  }

  return (
    <>
      <Helmet>
        <title>Tentakel | Online Magazin</title>
      </Helmet>
      <Layout pathname={location.pathname}>
        <main className="main">
          {mainTeaserFrontmatters.map((fm) => {
            return (
              <ArticlePreview
                alt={fm.alt}
                authorAndDate={fm.authorAndDate}
                category={fm.category}
                key={fm.title || fm.pic}
                title={fm.title}
                pic={fm.pic}
                pict={fm.pict}
                teaserText={fm.teaserText}
              />
            );
          })}
          <div className="preview-columns">
            {frontmattersByColumn.map((frontmatters, i) => (
              <div key={i} className="preview-column">
                {frontmatters.map((fm) => (
                  <ArticlePreviewSmall
                    key={fm.title || fm.pic || fm.quote}
                    authorAndDate={fm.authorAndDate}
                    category={fm.category}
                    pic={fm.pic}
                    slug={fm.slug}
                    teaserText={fm.teaserText}
                    title={fm.title}
                    quote={fm.quote}
                    quoteAuthor={fm.quoteAuthor}
                    imgDescription={fm.imgDescription}
                  />
                ))}
              </div>
            ))}
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
      <script src="/snippets/netlifyIdentity.js"></script>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "teaser" } } }
      sort: { fields: frontmatter___ordering, order: DESC }
    ) {
      group(field: frontmatter___show) {
        nodes {
          frontmatter {
            authorAndDate
            category
            imgDescription
            pic
            pict {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 820, height: 514)
              }
            }
            alt
            quote
            quoteAuthor
            show
            teaserText
            title
          }
        }
      }
    }
    fullArticlePreviews: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author: author
          category
          datetime
          pic
          title
          teaserText: teaser
        }
      }
    }
  }
`;
