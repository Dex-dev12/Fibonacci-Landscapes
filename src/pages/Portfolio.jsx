import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

const PORTFOLIO_IMAGES = [
  { src: '/images/hero-1.jpg', alt: 'Pool surround with glass fencing and light stone paving' },
  { src: '/images/hero-2.jpg', alt: 'Pool with travertine paving and timber fencing' },
  { src: '/images/hero-3.jpg', alt: 'Pool deck at golden hour' },
  { src: '/images/process-1-design.jpg', alt: 'Landscape design consultation and planning' },
  { src: '/images/process-2-build.jpg', alt: 'Active construction and installation work' },
  { src: '/images/process-3-finish.jpg', alt: 'Finished landscape project detail' },
]

function PortfolioCard({ image, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="portfolio-card relative h-64 sm:h-72 overflow-hidden rounded-2xl group cursor-pointer"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`absolute inset-0 flex items-end p-6 transition-all duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>
          <p className="text-white text-sm font-medium">{image.alt}</p>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.portfolio-hero p', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.from('.portfolio-card', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.4 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="portfolio-hero pt-32 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink tracking-tighter leading-tight mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            A selection of recent projects showcasing our range of work — from pool surrounds to complete landscape transformations.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_IMAGES.map((image, idx) => (
            <PortfolioCard key={idx} image={image} index={idx} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Inspired by what you see?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Let's create something just as stunning for your property. Contact us to discuss your project.
          </p>
          <a
            href="tel:+61412195698"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30"
          >
            Call: 0412 195 698
          </a>
        </div>
      </section>
    </div>
  )
}
