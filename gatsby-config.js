module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Hi, I'm Mohamed Abdelmonem`,
    description: `Mechatronics and Robotics Engineer Portfolio`,
    author: `Muhammad Abdelmoniem`,
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Abdelmoniem Portfolio`,
        short_name: `Muhammad`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/SelfPhoto4.jpeg`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GATSBY_GA_MEASUREMENT_ID,
        head: false,
        anonymize: true,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
