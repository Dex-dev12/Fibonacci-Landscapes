import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

const FORM_PREWARM_URL = 'https://links.versflows.com/widget/form/DycZ16owjbJdizYeVO6J?notrack=true'

export default function App() {
  const location = useLocation()
  const [prewarmForm, setPrewarmForm] = useState(false)

  // Boot the GoHighLevel form in a hidden iframe once the page is idle, so its
  // JS/CSS/fonts are cached before anyone opens /contact. Their static assets are
  // cached for a year, so this turns a 1-3s cold start into a near-instant render.
  useEffect(() => {
    if (prewarmForm) return
    const start = () => setPrewarmForm(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(start, 2500)
    return () => clearTimeout(id)
  }, [prewarmForm])

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://fibonaccilandscapes.com.au${location.pathname}`)
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
