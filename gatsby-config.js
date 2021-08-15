module.exports = {
  siteMetadata: {
    siteUrl: `https://tentakel.netlify.app/`,
  },
  plugins: [
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
