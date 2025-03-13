/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.phikappataupurdue.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-9RPJ9X6WBC",
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true, 
          respectDNT: true,
        },
      },
    },
  ],
}
