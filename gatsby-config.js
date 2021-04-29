module.exports = {
  siteMetadata: {
    title: `Ian Cawood Blog`,
    name: `Ian Cawood`,
    siteUrl: `https://iancawood.com`,
    description: `Ian Cawood`,
    hero: {
      heading: `Welcome to my blog. I try to post new articles every week.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Ian_Cawood`,
      },
      {
        name: `github`,
        url: `https://github.com/ian-cawood`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ian-cawood-66b1b463/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ian Cawood Blog`,
        short_name: `Ian Cawood`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/ian.png`,
      },
    },
  ],
};
