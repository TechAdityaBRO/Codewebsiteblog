import { defineForumConfig } from './src/lib/config/schema';

export default defineForumConfig({
  repo: {
    owner: 'TechAdityaBRO',
    name: 'Codewebsiteblog'
  },
  site: {
    name: 'CODE oops.wtf',
    description: 'A forum for sharing, testing, and discussing code.',
    logo: '💻'
  },
  admins: {
    logins: ['TechAdityaBRO'],
    badgeLabel: 'ADMIN'
  }
});
