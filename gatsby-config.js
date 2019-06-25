const path = require(`path`)
require('dotenv').config()
let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env`});

const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    siteUrl: `https://ahimsayoga.jp`,
    title: `Top Picks | The Taste Liberté`,
    description: `At Liberté, taste is infinite, and our obsession, endless.`,
    keywords: `yogurt, skyr`,
    author: `@cossette`,
    fbId: `969485113198945`,
    imageWidth: '1398',
    imageHeight: '927',
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "src/styles/global.scss";',
        includePaths: [
          'src/styles',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-98124033-111"
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
