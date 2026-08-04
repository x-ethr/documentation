const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // The docs were reorganized from /discord-bots/league/* into product
  // sections. Every old URL — including links already shared in Discord and
  // embedded in the bot — keeps working.
  async redirects() {
    return [
      {source: '/discord-bots/league/introduction', destination: '/platform/overview', permanent: true},
      {source: '/discord-bots/league/installation', destination: '/getting-started/installation', permanent: true},
      {source: '/discord-bots/league/basic-usage', destination: '/getting-started/first-league', permanent: true},
      {source: '/discord-bots/league/mathematics', destination: '/platform/ratings', permanent: true},
      {source: '/discord-bots/league/achievements', destination: '/platform/achievements', permanent: true},
      {source: '/discord-bots/league/commands/:slug', destination: '/commands/:slug', permanent: true},
      {source: '/discord-bots/league', destination: '/platform/overview', permanent: true},
      {source: '/discord-bots', destination: '/', permanent: true},
    ]
  },
})
