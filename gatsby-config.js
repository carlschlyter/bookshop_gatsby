require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "@pasdo501/gatsby-source-woocommerce",
    options: {
      // Base URL of WordPress site
      api: 'localhost/bookshop',
      // true if using https. false otherwise.
      https: false,
      api_keys: {
        consumer_key: `ck_7f125b045df69d8a6d5f3de7894fe1735ec3d395`,
        consumer_secret: `cs_43b4057aac00847c4b0c70de85e4b6b2a17aebfe`,
      },
      // Array of strings with fields you'd like to create nodes for...
      fields: ['products', 'products/categories', 'products/attributes'],
    }
  },
]
};