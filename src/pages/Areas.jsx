import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { AREAS, ALSO_SERVICED, AREAS_PAGE } from '../data/areas.js'

export default function Areas() {
  return (
    <>
      <PageBanner
        eyebrow="Service Area"
        title="Where we work"
        subtitle="Central Coast, Lake Macquarie and Newcastle, NSW."
        img="/images/hero-3.jpg"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-ink leading-relaxed text-lg sm:text-xl mb-12">{AREAS_PAGE.intro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {AREAS.map((a) => (
              <Link key={a.slug} to={`/areas/${a.slug}`} className="rounded-3xl border border-divider p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink">{a.name}</h2>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{a.lead}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {a.region} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-3">Also covered</p>
            <p className="text-muted leading-relaxed text-sm sm:text-base">{ALSO_SERVICED.join(' · ')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
