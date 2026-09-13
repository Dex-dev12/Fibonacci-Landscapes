import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { PORTFOLIO_ITEMS } from '../data/portfolio.js'
import { PORTFOLIO_DETAIL, PORTFOLIO_PAGE } from '../data/portfolioDetail.js'
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

      <section ref={ref} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 mb-16 sm:mb-20">
          <p className="portfolio-intro text-ink leading-relaxed text-lg sm:text-xl">{PORTFOLIO_PAGE.intro}</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-24">
          {PORTFOLIO_ITEMS.map((item, i) => {
            const d = PORTFOLIO_DETAIL[item.slug]
            const flip = i % 2 === 1
            return (
              <article key={item.slug} className="portfolio-tile grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={flip ? 'lg:order-2' : ''}>
                  <a
                    href={item.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-3xl overflow-hidden border border-divider group aspect-[4/3]"
                  >
                    <Img
                      src={item.img}
                      alt={item.alt}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                  {d?.note && <p className="mt-3 text-xs text-muted">{d.note}</p>}
                </div>

                <div className={flip ? 'lg:order-1' : ''}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-3">{item.category}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-4">{item.title}</h2>
                  <p className="text-muted leading-relaxed text-base sm:text-lg">{d?.detail || item.summary}</p>
                  <a
                    href={item.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    View full photo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 mt-20">
          <p className="text-ink leading-relaxed text-base sm:text-lg border-t border-divider pt-8">{PORTFOLIO_PAGE.closing}</p>
        </div>
      </section>

      <PortfolioClosingCta />
    </>
  )
}
