// JSON-LD emitted into the server-rendered HTML at build time.
//
// The site previously carried zero structured data on all 15 pages, leaving
// Google to infer the business entity, its location and its service area from
// prose alone. Per Google's JS SEO guidance, structured data injected by
// JavaScript faces delayed processing, so this is rendered into the initial
// HTML by prerender.mjs rather than added client-side.
//
// Every value here is a confirmed fact from the owner. Nothing is invented:
// no review markup (there is one real review and it is not displayed as
// markup-eligible content), no fabricated service areas, no unverified
// certifications.

import { SERVICES } from './services.js'
import { SITE, BRAND } from './seo.js'

const PHONE = '+61412195698'
const EMAIL = 'contact@fibonaccilandscapes.com.au'

export const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE}/#business`,
  name: BRAND,
  alternateName: 'Fibonacci Landscapes',
  url: `${SITE}/`,
  image: `${SITE}/images/hero-1.jpg`,
  logo: `${SITE}/apple-touch-icon.png`,
  telephone: PHONE,
  email: EMAIL,
  description:
    'Landscape construction specialising in pool surrounds, paving, concreting, retaining walls and stone cladding across the Central Coast, Lake Macquarie and Newcastle, NSW.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '31 Reynolds Rd',
    addressLocality: 'Noraville',
    addressRegion: 'NSW',
    postalCode: '2263',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.264475,
    longitude: 151.5529397,
  },
  // Mirrors the 16 places declared on the Google Business Profile. NAP and
  // service area have to agree between the site and GBP, and the GBP is the
  // client's own verified declaration of where they work.
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Central Coast, NSW' },
    { '@type': 'AdministrativeArea', name: 'Lake Macquarie, NSW' },
    { '@type': 'AdministrativeArea', name: 'Newcastle, NSW' },
  ],
  // Mirrors the Google Business Profile, which is the source of truth for
  // hours: open 7 days, 6am to 7pm.
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/fibonaccilandscapes',
    'https://www.facebook.com/Fibonaccilandscape',
  ],
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: BRAND,
  publisher: { '@id': `${SITE}/#business` },
}

function breadcrumb(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  }
}

function serviceSchema(svc) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/service/${svc.slug}#service`,
    name: svc.title,
    description: svc.text,
    serviceType: svc.title,
    provider: { '@id': `${SITE}/#business` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Central Coast, NSW' },
      { '@type': 'AdministrativeArea', name: 'Lake Macquarie, NSW' },
      { '@type': 'AdministrativeArea', name: 'Newcastle, NSW' },
    ],
    url: `${SITE}/service/${svc.slug}`,
  }
}

const STATIC_TRAILS = {
  '/about': [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }],
  '/services': [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }],
  '/portfolio': [{ name: 'Home', path: '/' }, { name: 'Our Work', path: '/portfolio' }],
  '/contact': [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }],
  '/privacy': [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }],
  '/terms': [{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }],
}

export function schemaFor(pathname) {
  const path = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'

  if (path === '/') {
    return [BUSINESS, WEBSITE]
  }

  const m = /^\/service\/([^/]+)$/.exec(path)
  if (m) {
    const svc = SERVICES.find((s) => s.slug === m[1])
    if (!svc) return [BUSINESS]
    return [
      BUSINESS,
      serviceSchema(svc),
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: svc.title, path: `/service/${svc.slug}` },
      ]),
    ]
  }

  if (STATIC_TRAILS[path]) {
    return [BUSINESS, breadcrumb(STATIC_TRAILS[path])]
  }

  return [BUSINESS]
}
