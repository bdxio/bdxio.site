module.exports = {
  siteMetadata: {
    title: `BDX I/O`,
    description: `Bordeaux Developer eXperience | event`,
    keywords: `developer,bordeaux,event`,
    author: `@bdxio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    }
  ],
}
