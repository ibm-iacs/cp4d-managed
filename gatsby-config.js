module.exports = {
  siteMetadata: {
    title: 'IBM Expert Labs',
    description: 'Industry professionals helping you succeed with IBM.',
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
        theme: {
          homepage: 'dark',
          interior: 'dark',
        },
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/ibm-iacs/cp4d-managed',
          subDirectory: '/',
        },
      },
    },
  ],
};
