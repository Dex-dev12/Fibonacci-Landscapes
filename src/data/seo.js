// Per-route title and meta description.
//
// Every page previously shipped the same title ("Fibonacci Landscape
// Construction - Pool Surround Specialist") and the same description, so the
// paving, fencing and concreting pages were indistinguishable to Google on the
// strongest on-page signal there is. These are consumed by the prerenderer at
// build time and by App.jsx on client navigation.
//
// Titles follow service + location + brand and stay under 60 characters so
// they are not truncated in results. Descriptions sit between 140 and 160.

import { SERVICES } from './services.js'

export const SITE = 'https://www.fibonaccilandscapes.com.au'
export const BRAND = 'Fibonacci Landscape Construction'
export const OG_IMAGE = `${SITE}/images/hero-1.jpg`

const SERVICE_SEO = {
  'pool-surrounds': {
    title: 'Pool Surrounds Central Coast | Coping & Paving | Fibonacci',
    description:
      'Pool coping, paving and non-slip surrounds engineered for drainage and chemical exposure. Central Coast and Lake Macquarie, backed by 7-8 years on pool edges.',
  },
  paving: {
    title: 'Paving Central Coast | Driveways, Patios & Pool Decks',
    description:
      'Natural stone, travertine and paver driveways, patios and pool decks across the Central Coast and Lake Macquarie. Proper base prep and grading for drainage.',
  },
  concreting: {
    title: 'Concreting Central Coast | Driveways, Paths & Slabs',
    description:
      'Exposed aggregate, plain and coloured concrete for driveways, paths and slabs across the Central Coast and Lake Macquarie, graded correctly for drainage.',
  },
  'retaining-walls': {
    title: 'Retaining Walls Central Coast | Fibonacci Landscapes',
    description:
      'Engineered retaining walls in block, stone and timber across the Central Coast and Lake Macquarie, built with proper drainage and correct footings.',
  },
  gardens: {
    title: 'Garden & Landscape Design Central Coast | Fibonacci',
    description:
      'Garden design, planting and soft landscaping across the Central Coast and Lake Macquarie, chosen for the local climate and how the space is actually used.',
  },
  'full-service': {
    title: 'Landscape Construction Central Coast | Full Service',
    description:
      'Full-service landscape construction across the Central Coast and Lake Macquarie: excavation through to paving, walls, fencing and planting, managed end to end.',
  },
  fencing: {
    title: 'Fencing Central Coast | Pool & Boundary | Fibonacci',
    description:
      'Pool-compliant glass, aluminium, timber and Colorbond fencing across the Central Coast and Lake Macquarie, set true and built to last in coastal conditions.',
  },
  'stone-cladding': {
    title: 'Stone Cladding Central Coast | Fibonacci Landscapes',
    description:
      'Sandstone and natural stone cladding for walls, pillars and pool surrounds across the Central Coast and Lake Macquarie. One of the services we are known for.',
  },
}

const STATIC_SEO = {
  '/': {
    title: 'Landscape Construction Central Coast | Fibonacci',
    description:
      'Pool surrounds, paving, concreting, retaining walls and stone cladding across the Central Coast and Lake Macquarie NSW. 7-8 years specialising around pools.',
  },
  '/about': {
    title: 'About Fibonacci Landscape Construction | Central Coast',
    description:
      'A pool surrounds specialist working across the Central Coast and Lake Macquarie, with 7-8 years building paving, walls, cladding and full landscape projects.',
  },
  '/services': {
    title: 'Landscaping Services Central Coast & Lake Macquarie',
    description:
      'Pool surrounds, paving, concreting, retaining walls, gardens, fencing and stone cladding across the Central Coast and Lake Macquarie NSW. See what we build.',
  },
  '/portfolio': {
    title: 'Our Work | Landscape Projects Central Coast | Fibonacci',
    description:
      'Completed pool surrounds, paving, retaining walls and stone cladding projects across the Central Coast and Lake Macquarie. Real jobs, photographed on site.',
  },
  '/contact': {
    title: 'Contact Fibonacci Landscape Construction | Central Coast',
    description:
      'Get a quote for pool surrounds, paving, concreting or landscape construction across the Central Coast and Lake Macquarie. Call 0412 195 698 or send a message.',
  },
  '/privacy': {
    title: `Privacy Policy | ${BRAND}`,
    description:
      'How Fibonacci Landscape Construction collects, uses and stores the personal information you provide through this website.',
  },
  '/terms': {
    title: `Terms of Use | ${BRAND}`,
    description:
      'The terms that apply to your use of the Fibonacci Landscape Construction website, including quotes, content and liability.',
  },
}

export function seoFor(pathname) {
  const path = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'

  if (STATIC_SEO[path]) {
    return { ...STATIC_SEO[path], canonical: `${SITE}${path === '/' ? '/' : path}` }
  }

  const m = /^\/service\/([^/]+)$/.exec(path)
  if (m && SERVICE_SEO[m[1]]) {
    return { ...SERVICE_SEO[m[1]], canonical: `${SITE}${path}` }
  }

  // Unknown route: fall back to the site defaults rather than emitting nothing.
  return { ...STATIC_SEO['/'], canonical: `${SITE}${path}` }
}

// Routes the prerenderer walks. Keep in sync with main.jsx.
export const ROUTES = [
  '/',
  '/about',
  '/services',
  ...SERVICES.map((s) => `/service/${s.slug}`),
  '/portfolio',
  '/contact',
  '/privacy',
  '/terms',
]

// Privacy and terms stay crawlable via the footer but do not belong in the
// sitemap competing for crawl attention.
export const SITEMAP_EXCLUDE = new Set(['/privacy', '/terms'])
