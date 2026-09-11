import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Waves, Mountain, MapPin, Sofa } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import Img from '../components/Img.jsx'

const STORY_PHOTOS = [
  { src: '/images/hero-1.jpg', alt: 'Pool surround with light stone paving and glass pool fencing' },
  { src: '/images/service-stone-cladding.jpg', alt: 'Natural stone cladding feature wall around an indoor fireplace' },
  { src: '/images/service-retaining-wall.jpg', alt: 'Natural sandstone retaining wall beside a pool' },
  { src: '/images/process-2-build.jpg', alt: 'Fibonacci crew mid-build on a landscape construction project' },
]

const WHY_PHOTOS = [
  { src: '/images/hero-2.jpg', alt: 'Pool with travertine paving and timber fencing' },
  { src: '/images/service-paving.jpg', alt: 'Granite pool paving at golden hour' },
  { src: '/images/service-fencing.jpg', alt: 'Colorbond fencing beside pool paving and garden bed' },
  { src: '/images/service-gardens.jpg', alt: 'Garden pathway with stepping stones and native planting' },
]

const WHY_HIGHLIGHTS = [
  {
    icon: Waves,
    title: 'Pool Surrounds Specialist',
    text: "7-8 years of experience working around pools, engineered for drainage, chemical exposure and heavy foot traffic.",
  },
  {
    icon: Mountain,
    title: 'Stone Cladding Specialty',
    text: "One of the areas we're best known for, with a quality of finish that's noticeably top-tier.",
  },
  {
    icon: MapPin,
    title: 'Local to the Coast',
    text: "Based in Noraville, servicing the Central Coast, Lake Macquarie and Newcastle.",
  },
  {
    icon: Sofa,
    title: 'One Crew, Every Step',
    text: "From first sketch to final sweep, the same crew handles the whole project, start to finish.",
  },
]

function WhyChooseUsSection() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.why-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
      gsap.from('.why-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="why-heading max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-4 text-ink">
            Real experience, real finish quality.
          </h2>
          <p className="text-muted leading-relaxed">
            A beautiful outdoor space can greatly enhance the value and appeal of any property. That's the standard every project is held to, whether it's a pool surround, a full backyard rebuild, or a single retaining wall.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {WHY_PHOTOS.map((p) => (
            <div key={p.src} className="why-photo rounded-2xl overflow-hidden border border-divider aspect-square">
              <Img src={p.src} alt={p.alt} sizes="(min-width: 1024px) 50vw, 100vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_HIGHLIGHTS.map((h) => (
            <div key={h.title} className="why-card rounded-3xl border border-divider bg-background p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <h.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-ink mb-1.5">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurStory() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.story-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
        <div className="story-text">
          <h2 className="relative inline-block w-fit font-display text-3xl sm:text-4xl font-bold tracking-tighter pb-2 mb-6 text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary">
            Our Story
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            At Fibonacci Landscape Construction, we understand that a beautiful outdoor space can greatly enhance the value and appeal of any property. That's why we offer a wide range of services designed to transform your backyard and pool area into a functional and visually stunning area.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Our services include pool surrounds, paving, concreting, gardens, retaining walls and more. If you are looking for a pool surrounds specialist or a trusted and experienced landscaping company in the Central Coast, Newcastle and surrounding areas, look no further than Fibonacci.
          </p>
          <p className="text-muted leading-relaxed">
            We've spent 7-8 years working around pools and outdoor construction, and stone cladding is one of the areas we're best known for. Every project gets the same level of care, from first sketch to final sweep.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STORY_PHOTOS.map((p) => (
            <div key={p.src} className="story-photo rounded-2xl overflow-hidden border border-divider aspect-square">
              <Img src={p.src} alt={p.alt} sizes="(min-width: 1024px) 50vw, 100vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A pool surrounds specialist, built around the Central Coast."
        subtitle="7-8 years of experience transforming backyards and pool areas across the Central Coast, Lake Macquarie and Newcastle."
        img="/images/hero-3.jpg"
      />

      <OurStory />

      <WhyChooseUsSection />
    </>
  )
}
