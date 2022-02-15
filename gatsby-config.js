module.exports = {
  siteMetadata: {
      title: `Bookshop`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://localhost/bookshop/graphql"
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",]
};