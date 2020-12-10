/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  //Site Metadata
  siteMetadata: {
    title: `Vincent Portier`,
    siteUrl: `https://www.vportier.com`,
    description: `Vincent Portier is a web developer that loves to create things that live on the internet.`,
    image: "/og.png",
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
