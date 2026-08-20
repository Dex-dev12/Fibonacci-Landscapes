import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { SERVICES } from '../data/services.js'
import FibonacciMark from '../Logo.jsx'

function TopBar() {
  return (
    <div className="hidden lg:flex fixed top-0 inset-x-0 z-50 h-8 bg-deep text-white/70 text-xs items-center gap-6 px-6 sm:px-12 lg:px-20">
      <a href="tel:+61412195698" className="inline-flex items-center gap-1.5 hover:text-primary-light transition-colors">
        <Phone className="h-3 w-3" /> 0412 195 698
      </a>
      <a href="mailto:contact@fibonaccilandscapes.com.au" className="inline-flex items-center gap-1.5 hover:text-primary-light transition-colors">
        <Mail className="h-3 w-3" /> contact@fibonaccilandscapes.com.au
      </a>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  return (
    <>
      <TopBar />
      <nav
        className={`fixed top-4 lg:top-[44px] left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <FibonacciMark className="h-9 w-9" />
            <span className="font-display font-semibold tracking-tight text-lg text-ink transition-colors">
              Fibonacci Landscapes
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-sm font-medium tracking-tight transition-colors ${
                        isActive ? 'text-primary' : 'text-ink/70 hover:text-primary'
                      }`
                    }
                  >
                    {link.label} <ChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="glass rounded-2xl p-2 w-72 shadow-xl">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/service/${s.slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <s.icon className="h-4 w-4 shrink-0" />
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-tight transition-colors ${
                      isActive ? 'text-primary' : 'text-ink/70 hover:text-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-deep px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-full text-ink" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 overflow-y-auto max-h-[90vh] ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <FibonacciMark className="h-8 w-8" />
              <span className="font-display font-semibold text-xl text-ink">Fibonacci Landscapes</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="border-b border-divider py-3">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center gap-1.5 font-display text-3xl font-semibold text-ink"
                  >
                    {link.label} <ChevronDown className={`h-6 w-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col gap-3 mt-4">
                      {SERVICES.map((s) => (
                        <Link key={s.slug} to={`/service/${s.slug}`} className="text-base text-muted">
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <Link
            to="/contact"
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-deep px-6 py-4 rounded-full font-semibold w-full"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  )
}
