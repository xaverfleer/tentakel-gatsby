module.exports = {
  siteMetadata: {
    siteUrl: `https://tentakel.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src-assets-images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "markdown-files", path: `${__dirname}/content/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `img`, path: `${__dirname}/static/` },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: { modulePath: `${__dirname}/src/cms/cms.js` },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
};
