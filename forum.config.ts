import { defineForumConfig } from './src/lib/config/schema';

export default defineForumConfig({
  site: {
    name: 'CODE oops.wtf',
    description: 'A forum for sharing, testing, and discussing code.',
    logo: '💻' // Replaces the default icon
  },
  // Auth: optional for now. You can add PAT sign-in later.
  admins: {
    logins: ['TechAdityaBRO'],
    badgeLabel: 'ADMIN'
  },
  // Optional: theme overrides to match your site
  theme: {
    dark: {
      primary: 'hsl(263 70% 60%)', // A purple accent
      primaryForeground: 'hsl(0 0% 100%)',
      background: 'hsl(0 0% 4%)',
      foreground: 'hsl(0 0% 98%)',
      muted: 'hsl(0 0% 9%)',
      mutedForeground: 'hsl(0 0% 65%)',
      border: 'hsl(0 0% 15%)'
    }
  }
});
