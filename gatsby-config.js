module.exports = {
  siteMetadata: {
    title: 'IBM Expert Labs',
    description: 'A Gatsby theme for the carbon design system',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: "/cp4d-managed",
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'IBM Expert Labs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/ibm-iacs/cp4d-managed',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
