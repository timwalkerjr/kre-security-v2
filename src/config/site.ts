export const SITE = {
  name: 'Net Express',
  title: 'Net Express | Business Phone, Internet & IT | Michigan',
  description: 'Net Express is a single-source Michigan provider for business phone (Hosted VoIP), high-speed internet & fiber, virtual fax, managed IT, and 5G failover. One provider, one bill, one support line.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://gonetexpress.com',
  twitterHandle: '@gonetexpress',
  socials: {
    twitter: 'https://twitter.com/gonetexpress',
    instagram: 'https://instagram.com/gonetexpress',
    linkedin: 'https://www.linkedin.com/company/gonetexpress',
    dribbble: 'https://dribbble.com',
  },
} as const;

export type SiteConfig = typeof SITE;
