let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `We Quote Nevada 4`,
    description: `The Best Insurance Agency in Nevada`,
    author: `Ted`,
    siteUrl: `https://wequotenevada.com`,
    phone: `702-344-2400`,
    fax: `Um...it's 2020...`,
    address: `2561 Wigwam Parkway\nHenderson, NV 89074`,
    email: `contact@WeQuoteNevada.com`,
    pathPrefix: "/WQN",

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/gatsby-icon.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: ['article'],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: "",
    //       password: "",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`
  ],
}
