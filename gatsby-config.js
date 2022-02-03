module.exports = {
    siteMetadata: {
      title: `Square Square Disappear`,
      description: `This is Square Square Disappear, the game where you click on squares to make them disappear.`,
      author: `Katherine Smith`,
      siteUrl: `https://squaresquaredisappear.gatsbyjs.io`,

    },
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Square Square Disappear`,
          short_name: `Square Square Disappear`,
          start_url: `/`,
          background_color: `#001103`,
          theme_color: `#00FF22`,
          display: `standalone`,
          icon: `src/images/icon.png`,
        },
      },
      `gatsby-plugin-react-helmet`,
    ]
}
