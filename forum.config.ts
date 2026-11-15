import { defineForumConfig } from './src/lib/config/schema';

export default defineForumConfig({
  repo: {
  owner: 'TechAdityaBRO',
  name: 'Codewebsiteblog'
}
  site: {
    name: 'CODE',
    description: 'A forum for sharing, testing, and discussing code.',
    logo: '⚡',
    footer: 'Built by Aditya Kumar Sethi · BRO GANG'
  },
  nav: [
    { label: 'GitHub', href: 'https://github.com/TechAdityaBRO/Codewebsiteblog', external: true }
  ],
  admins: { logins: ['TechAdityaBRO'], badgeLabel: 'ADMIN' },
  theme: {
    dark: {
      background: 'hsl(250 25% 4%)',
      foreground: 'hsl(250 20% 97%)',
      card: 'hsl(250 25% 7%)',
      cardForeground: 'hsl(250 20% 97%)',
      muted: 'hsl(250 25% 11%)',
      mutedForeground: 'hsl(250 15% 60%)',
      border: 'hsl(250 25% 16%)',
      primary: 'hsl(263 85% 68%)',
      primaryForeground: 'hsl(0 0% 100%)',
      accent: 'hsl(263 70% 22%)',
      accentForeground: 'hsl(263 90% 88%)',
      ring: 'hsl(263 85% 68%)',
      link: 'hsl(263 85% 75%)'
    }
  }
});
