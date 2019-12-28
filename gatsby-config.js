let facebook_pixel = ''
let gtm = ''

module.exports = {
    siteMetadata: {
        title: `We Quote Nevada`,
        description: `The Best Insurance Agency in Nevada`,
        author: `TBC`,
        siteUrl: `https://doomd.github.io`,
        phone: `702-344-2400`,
        fax: `Um...it's 2020...`,
        address: `2561 Wigwam Parkway\nHenderson, NV 89074`,
        email: `contact@WeQuoteNevada.com`,
        //pathPrefix: `WQN`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-154561538-2",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                //anonymize: false,
                // Setting this parameter is also optional
                //respectDNT: false,
                // Avoids sending pageview hits from custom paths
                //exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                //pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                //sampleRate: 5,
                //siteSpeedSampleRate: 10,
                //cookieDomain: "wequotenevada.com",
            },
        },
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
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: gtm,
                includeInDevelopment: false
            }
        },
        /*
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: facebook_pixel,
            }
        },
        */
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
