// Build-time static generation.
//
// The site previously shipped one client-rendered shell for all 15 URLs: 7
// words, no H1, no structured data, and a canonical pointing at the homepage.
// Google rendered it and indexed 14 of 15, but rendering is a deferred second
// pass and crawlers that do not execute JavaScript - most AI bots - saw an
// empty page. This renders every route to real HTML using react-dom/server in
// plain Node, so nothing depends on a browser being present at build time.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const SSR_ENTRY = path.join(__dirname, 'dist-ssr', 'entry-server.js')
const SITE = 'https://www.fibonaccilandscapes.com.au'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headFor({ title, description, canonical }, ogImage) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(ogImage)}" />`,
  ].join('\n    ')
}

// JSON-LD goes in the served HTML rather than being injected by React, so it
// does not depend on Google's rendering budget. </script> is escaped because a
// literal one inside a script block would terminate it early.
function jsonLd(blocks) {
  if (!blocks || !blocks.length) return ''
  return blocks
    .map(
      (b) =>
        `<script type="application/ld+json">${JSON.stringify(b).replace(/<\//g, '<\\/')}</script>`
    )
    .join('\n    ')
}

async function main() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8')
  const { render, ROUTES, SITEMAP_EXCLUDE, OG_IMAGE } = await import(SSR_ENTRY)

  let failures = 0
  for (const route of ROUTES) {
    try {
      const { html, seo, schema } = render(route)

      if (html.trim().length < 500) {
        console.error(`  x ${route} produced only ${html.trim().length} chars - check the route exists`)
        failures++
        continue
      }

      const page = template
        // Drop the build-time title/description/canonical; per-route ones replace them.
        .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
        .replace(/<link\s+rel="canonical"[^>]*>\s*/i, '')
        .replace('</head>', `  ${headFor(seo, OG_IMAGE)}\n  ${jsonLd(schema)}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

      const outDir = route === '/' ? DIST : path.join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), page, 'utf-8')
      console.log(`  ok ${route.padEnd(34)} ${String(page.length).padStart(6)} bytes`)
    } catch (e) {
      console.error(`  x ${route} failed: ${e.message}`)
      failures++
    }
  }

  if (failures) {
    console.error(`\nPrerender finished with ${failures} failed route(s).`)
    process.exit(1)
  }

  // Per-page lastmod from the last commit touching the files the route is
  // built from. A single build-wide date moves all URLs in lockstep, and
  // Google discounts a lastmod that is always identical and always current.
  const SOURCES = {
    '/': ['src/pages/Home.jsx'],
    '/about': ['src/pages/About.jsx'],
    '/services': ['src/pages/Services.jsx', 'src/data/services.js'],
    '/portfolio': ['src/pages/Portfolio.jsx', 'src/data/portfolio.js'],
    '/contact': ['src/pages/Contact.jsx'],
  }
  const sourcesFor = (r) =>
    SOURCES[r] || ['src/pages/ServiceDetail.jsx', 'src/data/services.js']

  // Vercel clones shallowly, so git log can legitimately return nothing.
  const today = new Date().toISOString().slice(0, 10)
  const gitDate = (files) => {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], {
        cwd: __dirname,
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
      return out ? out.slice(0, 10) : null
    } catch {
      return null
    }
  }

  const PRIORITY = {
    '/': '1.0',
    '/services': '0.9',
    '/contact': '0.9',
    '/about': '0.8',
    '/portfolio': '0.8',
  }
  const sitemapRoutes = ROUTES.filter((r) => !SITEMAP_EXCLUDE.has(r))
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemapRoutes
      .map((r) => {
        const loc = `${SITE}${r === '/' ? '/' : r}`
        const lastmod = gitDate(sourcesFor(r)) || today
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${PRIORITY[r] || '0.7'}</priority>\n  </url>`
      })
      .join('\n') +
    '\n</urlset>\n'
  await writeFile(path.join(DIST, 'sitemap.xml'), sitemap)
  console.log(`Sitemap written: ${sitemapRoutes.length} URLs (privacy/terms excluded).`)

  console.log(`\nPrerendered ${ROUTES.length} routes.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
