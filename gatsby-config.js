module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-svg',
    // {
    //   resolve: 'gatsby-mdx',
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve('./src/components/layout.js'),
    //     },
    //     gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
    //   },
    // },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'alexbavinton',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jura`,
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
};
