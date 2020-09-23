module.exports = {
  siteMetadata: {
    title: 'Derp, King of Dorps',
    author: 'Derp',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark'
  ],
}
