const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const Article = path.resolve(`./src/templates/Article.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "article" } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            draft
            author
            datetime
            category
            id
            title
            teaser
          }
          html
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild`There was an error loading your library posts`,
      result.errors();
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach((post, index) => {
    // const previousPostId = index === 0 ? null : posts[index - 1].id;
    // const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;
    createPage({
      path: post.fields.slug,
      component: Article,
      context: {
        id: post.id,
        // previousPostId,
        // nextPostId,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
      type Fields {
        slug: String
      }
    `);
};
