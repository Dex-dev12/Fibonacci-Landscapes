import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Clock } from 'lucide-react'
import Navbar from '../Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.about-hero p', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.from('.about-content > div', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15, delay: 0.4 })
      gsap.from('.about-stat', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.6 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero pt-32 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink tracking-tighter leading-tight mb-6">
            About Fibonacci Landscape Construction
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            We transform outdoor spaces into functional, visually stunning areas — one project at a time, with precision and care.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="about-content grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-6">Our Story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                At Fibonacci Landscape Construction, we understand that a beautiful outdoor space can greatly enhance the value and appeal of any property. That's why we offer a wide range of services designed to transform your backyard and pool area into a functional and visually stunning area.
              </p>
              <p>
                With 7-8 years of focused experience around pools and outdoor construction, we've built a reputation for top-tier stone cladding work and precision craftsmanship. Whether it's pool surrounds, paving, concreting, retaining walls, or complete garden design, every project gets the same meticulous attention from first sketch to final sweep.
              </p>
              <p>
                We're not just contractors — we're your partner in creating outdoor spaces your family will actually use and love. If you're looking for a pool surrounds specialist or a trusted, experienced landscaping company on the Central Coast, we're ready to help.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="about-stat bg-surface border border-divider rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">7-8</div>
              <div className="text-sm text-muted">Years Experience</div>
              <div className="mt-3 text-xs text-muted/60">Around pools & outdoor construction</div>
            </div>

            <div className="about-stat bg-surface border border-divider rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted">Projects</div>
              <div className="mt-3 text-xs text-muted/60">From design to completion</div>
            </div>

            <div className="about-stat bg-surface border border-divider rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Central Coast</div>
              <div className="text-sm text-muted">Local Experts</div>
              <div className="mt-3 text-xs text-muted/60">Lake Macquarie to Newcastle</div>
            </div>

            <div className="about-stat bg-surface border border-divider rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">⭐ Top Tier</div>
              <div className="text-sm text-muted">Stone Cladding</div>
              <div className="mt-3 text-xs text-muted/60">Quality you can see</div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8">Service Areas</h2>
          <div className="bg-surface border border-divider rounded-3xl p-8 lg:p-12">
            <p className="text-lg text-muted mb-6">We serve the Central Coast and surrounding regions:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Lake Macquarie</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Central Coast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12">
          <h2 className="font-display text-2xl font-bold text-ink mb-8">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-ink">Phone</div>
                <a href="tel:+61412195698" className="text-muted hover:text-primary transition-colors">
                  0412 195 698
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-ink">Address</div>
                <div className="text-muted">31 Reynolds Rd, Noraville 2263</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-ink">Hours</div>
                <div className="text-muted">Mon–Sun: 7am–5pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
