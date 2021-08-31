module.exports = {
  siteMetadata: {
    siteUrl: `https://tentakel.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-files",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
