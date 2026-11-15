import { defineForumConfig } from './src/lib/config/schema';

export default defineForumConfig({
  repo: {
    owner: 'TechAdityaBRO',
    name: 'Codewebsiteblog',
    branch: 'main'
  },

  site: {
    name: 'CODE',
    description: 'A forum for sharing, testing, and discussing code.',
    logo: '⚡',
    footer: 'Built by Aditya Kumar Sethi · BRO GANG'
  },

  nav: [
    { label: 'GitHub', href: 'https://github.com/TechAdityaBRO/Codewebsiteblog', external: true },
    { label: 'X', href: 'https://x.com/ProGroupBroGang', external: true }
  ],

  admins: {
    logins: ['TechAdityaBRO'],
    badgeLabel: 'ADMIN'
  },

  badges: {
    Moderator: ['TechAdityaBRO'],
    Contributor: []
  },

  auth: {
    allowToken: true
  },

  content: {
    pageSize: 20,
    sort: 'UPDATED_AT',
    listExcerpts: true,
    articles: {
      enabled: true,
      marker: '<!-- dk:article -->'
    },
    topics: {
      include: [],
      exclude: [],
      restricted: ['announcements']
    }
  },

  features: {
    search: true,
    reactions: true,
    upvotes: true
  },

  rep: {
    enabled: true,
    gains: {
      post: 5,
      comment: 2,
      answerAccepted: 15
    },
    dailyCaps: {
      post: 25,
      comment: 10
    },
    topics: {},
    onViolation: 'move',
    fallbackTopic: 'general',
    exemptMaintainers: true,
    dataBranch: 'data'
  },

  archive: {
    enabled: true,
    dataBranch: 'data'
  },

  cache: {
    enabled: true,
    ttlSeconds: 3600
  },

  theme: {
    dark: {
      background: 'hsl(250 25% 4%)',
      foreground: 'hsl(250 20% 97%)',
      muted: 'hsl(250 25% 11%)',
      mutedForeground: 'hsl(250 15% 60%)',
      card: 'hsl(250 25% 7%)',
      cardForeground: 'hsl(250 20% 97%)',
      border: 'hsl(250 25% 16%)',
      primary: 'hsl(263 85% 68%)',
      primaryForeground: 'hsl(0 0% 100%)',
      accent: 'hsl(263 70% 22%)',
      accentForeground: 'hsl(263 90% 88%)',
      ring: 'hsl(263 85% 68%)',
      link: 'hsl(263 85% 75%)'
    },
    light: {
      background: 'hsl(250 20% 98%)',
      foreground: 'hsl(250 20% 10%)',
      muted: 'hsl(250 15% 94%)',
      mutedForeground: 'hsl(250 10% 40%)',
      card: 'hsl(0 0% 100%)',
      cardForeground: 'hsl(250 20% 10%)',
      border: 'hsl(250 15% 88%)',
      primary: 'hsl(263 70% 55%)',
      primaryForeground: 'hsl(0 0% 100%)',
      accent: 'hsl(263 70% 95%)',
      accentForeground: 'hsl(263 70% 30%)',
      ring: 'hsl(263 70% 55%)',
      link: 'hsl(263 70% 45%)'
    }
  }
});
