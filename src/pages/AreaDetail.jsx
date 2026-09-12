import { useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { AREAS, ALSO_SERVICED, getAreaBySlug } from '../data/areas.js'
import { SERVICES } from '../data/services.js'

export default function AreaDetail() {
  const { slug } = useParams()
  const area = getAreaBySlug(slug)
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    if (!area) return
    const ctx = gsap.context(() => {
      gsap.from('.area-block', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [slug, area])

  if (!area) return <Navigate to="/services" replace />

  const others = AREAS.filter((a) => a.slug !== slug)

  return (
    <>
      <PageBanner eyebrow="Service Area" title={area.name} subtitle={area.lead} img="/images/hero-2.jpg" />

      <section ref={ref} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="area-block text-ink leading-relaxed text-lg sm:text-xl mb-12">{area.intro}</p>

          {area.sections.map((sec) => (
            <div key={sec.heading} className="area-block mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-4">{sec.heading}</h2>
              <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
            </div>
          ))}

          {area.serviceNotes?.length > 0 && (
            <div className="area-block border-t border-divider pt-12">
              {area.serviceNotes.map((n) => (
                <div key={n.heading} className="mb-10">
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink mb-3">{n.heading}</h2>
                  <p className="text-muted leading-relaxed text-base">{n.body}</p>
                </div>
              ))}
            </div>
          )}

          {area.faqs?.length > 0 && (
            <div className="area-block border-t border-divider pt-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-8">
                {area.name}, answered.
              </h2>
              <div className="divide-y divide-divider border-y border-divider">
                {area.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <h3 className="font-semibold text-ink mb-2 text-base sm:text-lg">{f.q}</h3>
                    <p className="text-muted leading-relaxed text-sm sm:text-base">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="area-block mt-12">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink mb-4">
              What we build in {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/service/${s.slug}`} className="flex items-center justify-between gap-3 rounded-2xl border border-divider px-5 py-4 text-ink hover:border-primary/50 transition-colors group">
                  <span className="font-medium text-sm sm:text-base">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="area-block mt-12 rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-3">Also covered</p>
            <p className="text-muted leading-relaxed text-sm sm:text-base">
              {ALSO_SERVICED.join(' · ')}
            </p>
          </div>

          {others.length > 0 && (
            <div className="area-block mt-12">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink mb-4">Other areas</h2>
              <div className="flex flex-wrap gap-3">
                {others.map((a) => (
                  <Link key={a.slug} to={`/areas/${a.slug}`} className="inline-flex items-center gap-2 rounded-full border border-divider px-5 py-2.5 text-sm text-ink hover:border-primary/50 transition-colors">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {a.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 mt-12">
            Get a quote in {area.name} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
