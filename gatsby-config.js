/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  //Site Metadata
  siteMetadata: {
    title: `Vincent Portier | Developer Portfolio`,
    siteUrl: `https://vportier.com`,
    description: `I create things that live on the internet, whether that be websites, applications, or anything in between`,
    image: "/og.png",
  },

  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-3LEG63C4QG",
        head: true,
      },
    },
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
