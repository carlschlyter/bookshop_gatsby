module.exports = {
  siteMetadata: {
      title: `bookshop_gatsby_5`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://localhost/bookshop/graphql"
    }
  }]
};