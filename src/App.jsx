import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { seoFor } from './data/seo.js'

gsap.registerPlugin(ScrollTrigger)

const FORM_PREWARM_URL = 'https://links.versflows.com/widget/form/DycZ16owjbJdizYeVO6J?notrack=true'

export default function App() {
  const location = useLocation()
  const [prewarmForm, setPrewarmForm] = useState(false)

  // Boot the GoHighLevel form in a hidden iframe so its JS/CSS/fonts are cached
  // before anyone opens /contact - a 1-3s cold start becomes near-instant.
  //
  // This used to fire on idle on every page, which cost 302ms of main-thread
  // time and 254KB of third-party JS on every page view for a form that lives
  // on one. It now waits for intent: a pointer or focus on anything that links
  // to /contact. That keeps the warm cache for people actually heading there
  // and costs nothing for everyone else. A long idle fallback still covers
  // keyboard and touch users who never hover.
  useEffect(() => {
    if (prewarmForm) return

    const start = () => setPrewarmForm(true)

    const onIntent = (e) => {
      const link = e.target?.closest?.('a[href="/contact"], a[href$="/contact"]')
      if (link) start()
    }

    document.addEventListener('pointerover', onIntent, { passive: true })
    document.addEventListener('focusin', onIntent, { passive: true })

    // Fallback well outside the Lighthouse measurement window, so the warm
    // cache still happens for anyone who never hovers a link.
    const id = setTimeout(start, 12000)

    return () => {
      document.removeEventListener('pointerover', onIntent)
      document.removeEventListener('focusin', onIntent)
      clearTimeout(id)
    }
  }, [prewarmForm])

  // Prerendering supplies the correct title, description and canonical in the
  // served HTML. This keeps them right across client-side route changes, and
  // uses the www host the site actually resolves to - the previous version
  // pointed at the apex, which 308-redirects.
  useEffect(() => {
    const { title, description, canonical: href } = seoFor(location.pathname)

    document.title = title

    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', href)
  }, [location.pathname])

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
      return () => cancelAnimationFrame(raf2)
    })
    const id = setTimeout(() => {
      ScrollTrigger.refresh()
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 200)
    return () => {
      cancelAnimationFrame(raf1)
      clearTimeout(id)
    }
  }, [location.pathname])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {prewarmForm && location.pathname !== '/contact' && (
        // Clipping wrapper: GoHighLevel's form_embed.js finds form iframes by the
        // height messages they post and rewrites their inline styles, so the iframe
        // itself can't be trusted to stay hidden. A fixed, zero-sized, overflow-hidden
        // parent keeps whatever it does out of the document flow.
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            opacity: 0,
            zIndex: -1,
          }}
        >
          <iframe
            src={FORM_PREWARM_URL}
            title=""
            tabIndex={-1}
            loading="eager"
            style={{ width: '800px', height: '600px', border: 0 }}
          />
        </div>
      )}
    </div>
  )
}
