import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Waves, LayoutGrid, HardHat, Layers, Trees, Sofa, Hammer } from 'lucide-react'
import Navbar from '../Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    slug: 'pool-surrounds',
    icon: Waves,
    title: 'Pool Surrounds',
    description: 'Coping, paving and non-slip finishes engineered around the drainage and chemical exposure of a working pool edge.',
    details: 'We specialize in creating beautiful, functional pool surrounds that handle Central Coast weather and pool chemistry. From travertine to natural stone, every edge is built for durability.',
  },
  {
    slug: 'paving',
    icon: LayoutGrid,
    title: 'Paving',
    description: 'Natural stone, travertine and paver driveways, patios and paths — laid level and built to shed water the right way.',
    details: 'Custom paving solutions that enhance your property's appeal while handling water drainage and seasonal movement. We work with premium materials and precision installation.',
  },
  {
    slug: 'concreting',
    icon: HardHat,
    title: 'Concreting',
    description: 'Exposed aggregate, plain and coloured concrete for slabs, paths and pool surrounds built for Central Coast weather.',
    details: 'Durable concrete solutions for any application. We engineer for proper slope, finishing, and longevity in the local climate.',
  },
  {
    slug: 'retaining-walls',
    icon: Layers,
    title: 'Retaining Walls',
    description: 'Engineered retaining walls that terrace sloped sites and hold ground before erosion becomes a problem.',
    details: 'Structural solutions that transform sloped blocks into usable space. Built to code and designed to last.',
  },
  {
    slug: 'gardens',
    icon: Trees,
    title: 'Garden & Landscape Design',
    description: 'Garden beds, turf and planting design that ties the whole property together, fence line to pool edge.',
    details: 'Complete garden solutions from design concept through installation. We create cohesive landscapes that enhance your outdoor living space.',
  },
  {
    slug: 'full-service',
    icon: Sofa,
    title: 'Full Service Landscape & Construction',
    description: 'Complete backyard transformations, from first sketch to a finished space your family will actually use.',
    details: 'The complete package: design, permitting, construction, and finishing. We handle every aspect of your project.',
  },
  {
    slug: 'fencing',
    icon: Hammer,
    title: 'Fencing',
    description: 'Quality fencing solutions for privacy, safety and property definition.',
    details: 'Timber, composite, and metal fencing options tailored to your needs and budget.',
  },
  {
    slug: 'stone-cladding',
    icon: LayoutGrid,
    title: 'Stone Cladding',
    description: 'Top-tier stone cladding work that transforms exterior surfaces with natural beauty and durability.',
    details: 'We specialize in premium stone cladding applications. This is where our 7+ years of expertise really shines.',
  },
]

export default function Services() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.services-hero p', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.from('.service-card', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.4 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="services-hero pt-32 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink tracking-tighter leading-tight mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            From pool surrounds to complete landscape transformations, we offer a full range of outdoor construction and design services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                to={`/service/${service.slug}`}
                className="service-card group bg-surface border border-divider rounded-3xl p-8 hover:border-primary hover:bg-surface/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <ArrowUpRight className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">Ready to start your project?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're ready to transform your outdoor space.
          </p>
          <Link
            to="/contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30"
          >
            Get a Quote
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
