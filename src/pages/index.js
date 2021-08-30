import * as React from "react";
import { graphql } from "gatsby";

import imgSidebar from "../images/sidebar-screenshot.png";

import ArticlePreview from "../components/ArticlePreview";
import ArticlePreviewSmall from "../components/ArticlePreviewSmall";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { group } = allMarkdownRemark;
  const mainTeaserFrontmatters = group[0].nodes.map((node) => node.frontmatter);
  const frontmattersByColumn = group
    .slice(1, 4)
    .map((group) => group.nodes.map((node) => node.frontmatter));

  const fullArticlePreviews = data.fullArticlePreviews.nodes.map((preview) => {
    const fm = preview.frontmatter;
    fm.authorAndDate = `${fm.author}, ${fm.datetime}`;
    fm.slug = preview.fields.slug;
    return fm;
  });

  {
    let i = 0;
    for (let preview of fullArticlePreviews) {
      frontmattersByColumn[i % 3].unshift(preview);
    }
  }

  return (
    <>
      <title>Tentakel | Online Magazin</title>
      <Layout>
        <main className="main">
          {mainTeaserFrontmatters.map((fm) => {
            return (
              <ArticlePreview
                authorAndDate={fm.authorAndDate}
                category={fm.category}
                key={fm.title || fm.pic}
                title={fm.title}
                pic={fm.pic}
                teaserText={fm.teaserText}
              />
            );
          })}
          <div className="preview-columns">
            {frontmattersByColumn.map((frontmatters) => (
              <div key={frontmatters[0].show} className="preview-column">
                {frontmatters.map((fm) => (
                  <ArticlePreviewSmall
                    key={fm.title || fm.pic}
                    authorAndDate={fm.authorAndDate}
                    category={fm.category}
                    pic={fm.pic}
                    slug={fm.slug}
                    teaserText={fm.teaserText}
                    title={fm.title}
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
      <script href="/snippets/netlifyIdentity.js"></script>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query allTeasers {
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
