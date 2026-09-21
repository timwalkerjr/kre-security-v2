export const SITE = {
  name: 'KRE Security LLC.',
  title: 'Security Companies PA | Hamburg, PA | KRE Security LLC.',
  description:
    'We provide quality, licensed security guard services at competitive rates. Veteran Supported Firm. License No. 84. Serving 22+ Pennsylvania counties.',
  tagline: 'We provide quality, licensed security guard services at competitive rates.',
  professionalLine: 'Your Total Security Professional',
  ownershipLine: 'Under New Ownership and Management Since 2016',
  veteranLine: 'Veteran Supported Firm',
  license: 'License No. 84',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://www.kresecurity.com',
  twitterHandle: '@kresecurity',
  googleSiteVerification: 'FtlXclhzr2ZFVqin6L4AXR7ctu49WV9euN2Yud4UlAY',
  logo: '/images/kre-logo.webp',
  socials: {
    facebook: 'https://www.facebook.com/KRE-Security-LLC-105764734683407',
    facebook_investigations: 'https://www.facebook.com/KREsecinvestigations/',
  },
  emails: {
    owner: 'jemes@kresecurity.com',
    financial: 'financial@kresecurity.com',
    scheduling: 'scheduling@kresecurity.com',
    employment: 'employment@kresecurity.com',
  },
  phone: {
    primary: '610-562-0971',
    primaryTel: '+16105620971',
  },
  address: {
    streetAddress: '16600 Pottsville Pike',
    addressLocality: 'Hamburg',
    addressRegion: 'PA',
    postalCode: '19526',
    addressCountry: 'US',
  },
  offices: [
    {
      label: 'Allentown / Bethlehem / Easton',
      phone: '610-562-0971',
      tel: '+16105620971',
    },
    {
      label: 'Lancaster / Lebanon',
      phone: '717-450-7632',
      tel: '+17174507632',
    },
    {
      label: 'Reading / Pottstown',
      phone: '610-223-3714',
      tel: '+16102233714',
    },
    {
      label: 'Schuylkill',
      phone: '570-399-1010',
      tel: '+15703991010',
    },
    {
      label: 'Harrisburg',
      phone: '717-480-2961',
      tel: '+17174802961',
    },
  ],
  counties: [
    'Berks',
    'Bucks',
    'Carbon',
    'Chester',
    'Cumberland',
    'Dauphin',
    'Erie',
    'Franklin',
    'Juniata',
    'Lancaster',
    'Lebanon',
    'Lehigh',
    'Luzerne',
    'Monroe',
    'Montgomery',
    'Northampton',
    'Northumberland',
    'Perry',
    'Philadelphia',
    'Schuylkill',
    'Union',
    'Wayne',
  ],
} as const;

export const NAV = {
  coreServices: [
    { title: 'Security Services PA', href: '/security-services-pa/' },
    { title: 'Security Guards PA', href: '/security-guards-pa/' },
    { title: 'Armed Security PA', href: '/armed-security-pa/' },
    { title: 'Armed Security Guards Quakertown', href: '/armed-security-guards-quakertown-pa/' },
    { title: 'Vehicle Patrol', href: '/vehicle-patrol/' },
    { title: 'Security Checks', href: '/security-checks/' },
    { title: 'School Security', href: '/school-security/' },
  ],
  specialized: [
    { title: 'Logistical Security', href: '/logistical-security/' },
    { title: 'Warehouse Security', href: '/warehouse-distribution-security/' },
    { title: 'Fire Watch Services', href: '/fire-watch/' },
    { title: 'School Event Staff', href: '/school-event-staff/' },
    { title: 'Event Traffic Control', href: '/event-traffic-control/' },
    { title: 'Armed Money Escorts', href: '/armed-money-escorts/' },
    { title: 'In-Home Security', href: '/in-home-security/' },
    { title: 'Private Investigations', href: '/private-investigations/' },
    { title: 'Process Services', href: '/process-services/' },
    { title: 'First Aid Training', href: '/first-aid-training/' },
    { title: 'ACT 67 Training', href: '/act-67-certified-services/' },
  ],
  about: [
    { title: 'Our Company', href: '/security-services-pa/' },
    { title: 'Employment', href: '/employment/' },
    { title: 'Application', href: '/employee-application/' },
    { title: 'Testimonials', href: '/testimonials/' },
    { title: 'FAQ', href: '/security-company-faq/' },
    { title: 'Contact Us', href: '/contact/' },
  ],
  news: [
    { title: 'Recent News & Blog', href: '/blog/' },
    { title: 'Building Safer Cities', href: '/post/building-safer-cities/' },
    { title: 'School Security Updates', href: '/post/6-kre-school-security-division-just-attended/' },
    { title: 'Local Event Security', href: '/post/admissions-theft-found-at-a-local-event/' },
  ],
} as const;

export type SiteConfig = typeof SITE;

/** Design-repo / Netlify image. Prefer this over inventing new CDN hotlinks. */
export function designAsset(src: string) {
  if (src.startsWith('http')) return src;
  return `https://kre-security.netlify.app${src.startsWith('/') ? src : `/${src}`}`;
}
