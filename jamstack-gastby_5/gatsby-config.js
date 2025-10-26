/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
      title: `Gatsby Default Starter`,
    siteUrl: `https://google.com.br`,
  },
  plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          },
      }
  ],
}
