import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data/services.js'
import FibonacciMark from '../Logo.jsx'

export default function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Pool surrounds,
            <span className="font-serif italic font-medium text-primary block">built to last.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              Fibonacci Landscape Construction, based in Noraville, servicing the Central Coast, Lake Macquarie and Newcastle.
            </p>
            <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FibonacciMark className="h-10 w-10" />
              <span className="font-display font-semibold text-lg">Fibonacci Landscapes</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Pool surrounds, paving, concreting, retaining walls and garden landscaping across the Central Coast, Lake Macquarie and Newcastle.
            </p>
            <a
              href="https://www.facebook.com/Fibonaccilandscape/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-primary transition mt-6"
            >
              Follow on Facebook <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/service/${s.slug}`} className="text-white/65 hover:text-primary transition text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-white/65 hover:text-primary transition text-sm">About Us</Link></li>
              <li><Link to="/areas" className="text-white/65 hover:text-primary transition text-sm">Service Area</Link></li>
              <li><Link to="/portfolio" className="text-white/65 hover:text-primary transition text-sm">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/65 hover:text-primary transition text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/65 hover:text-primary transition text-sm">Privacy</Link></li>
              <li><Link to="/terms" className="text-white/65 hover:text-primary transition text-sm">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+61412195698" className="text-white/65 hover:text-primary transition text-sm">0412 195 698</a>
              </li>
              <li className="text-white/65 text-sm">31 Reynolds Rd, Noraville 2263</li>
              <li className="text-white/65 text-sm">Open 7 days<br />6am&ndash;7pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">Now booking pool-surround projects</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms</Link>
            <span>&copy; 2026 Fibonacci Landscape Construction</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
