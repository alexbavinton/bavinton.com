module.exports = {
  siteMetadata: {
    title: 'Alex Bavinton - Software Engineer',
    description: 'Personal website of Alex Bavinton - software engineer at YLD',
  },
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
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
};
