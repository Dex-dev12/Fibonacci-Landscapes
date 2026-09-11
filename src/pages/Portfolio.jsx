import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { PORTFOLIO_ITEMS } from '../data/portfolio.js'
import Img from '../components/Img.jsx'

function PortfolioClosingCta() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 24, opacity: 0, duration: 1, ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="pb-24 sm:pb-32 text-center">
      <div className="portfolio-cta-content max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5 text-ink">Have a job in mind?</h2>
        <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30">
          Get in Touch <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title="Work across the Central Coast."
        subtitle="Real jobs from real properties — pool surrounds, stone cladding, retaining walls and full landscape builds."
        img="/images/service-stone-cladding.jpg"
      />

      <section ref={ref} className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <a
                key={item.slug}
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-tile relative rounded-3xl overflow-hidden border border-divider group aspect-[4/3] cursor-pointer"
              >
                <Img
                  src={item.img}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-light mb-1.5">{item.category}</p>
                    <p className="text-white font-display text-lg font-semibold leading-snug">{item.title}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-white/70 group-hover:text-primary-light transition-colors">
                    View more <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PortfolioClosingCta />
    </>
  )
}
