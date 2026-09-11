import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  ArrowUpRight,
  ArrowRight,
  Star,
  ShieldCheck,
  BadgeCheck,
  Waves,
  Mountain,
  MapPin,
} from 'lucide-react'
import { SERVICES as SERVICES_FULL } from '../data/services.js'
import Img from '../components/Img.jsx'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
const HERO_IMAGES = [
  { src: '/images/hero-1.jpg', alt: 'Fibonacci-built pool surround with glass fencing and light stone paving' },
  { src: '/images/hero-2.jpg', alt: 'Fibonacci-built pool with travertine paving and timber fencing' },
  { src: '/images/hero-3.jpg', alt: 'Fibonacci-built pool deck at golden hour' },
]

function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {HERO_IMAGES.map((img, i) => (
        <Img
          key={img.src}
          src={img.src}
          alt={img.alt}
          sizes="100vw"
          fetchPriority={i === 0 ? 'high' : 'low'}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            animation: `hero-kenburns 18s ease-in-out infinite alternate`,
            animationDelay: `${i * -6}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/55 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      <style>{`
        @keyframes hero-kenburns {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1.5%, -1.5%); }
        }
      `}</style>
    </div>
  )
}

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <HeroCarousel />

      {/* Decorative floating particles (gold, echoing the pool-surround theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-primary/60 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[100dvh] flex flex-col justify-end">
        <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-white/70 mb-6">
          Central Coast · Lake Macquarie, NSW
        </p>
        <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">Pool surrounds and outdoor spaces,</span>
          <span className="hero-line-2 block font-serif italic font-medium text-primary mt-1">
            built with precision.
          </span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
          Fibonacci Landscape Construction transforms backyards and pool areas into functional, visually
          stunning spaces — paving, concreting, retaining walls and garden design, handled by one crew
          from first sketch to final sweep.
        </p>

        <div className="hero-meta mt-5 flex items-center gap-2.5 flex-wrap">
          <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={2.2} />
          <span className="shimmer-text font-display font-bold text-base tracking-wide">8+ Years in Operation</span>
          <span className="text-primary/30">|</span>
          <BadgeCheck className="h-4 w-4 text-primary" strokeWidth={2.2} />
          <span className="shimmer-text font-display font-bold text-base tracking-wide">100% Insured</span>
        </div>
        <style>{`
          .shimmer-text {
            background: linear-gradient(110deg, #A87B27 30%, #F5E3B8 48%, #E2BC70 52%, #A87B27 70%);
            background-size: 250% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: shimmer-text-sweep 3.2s ease-in-out infinite;
          }
          @keyframes shimmer-text-sweep {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>

        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="magnetic-btn group inline-flex items-center gap-2 bg-primary text-deep font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/30"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+61412195698"
            className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15"
          >
            <Phone className="h-4 w-4" /> 0412 195 698
          </a>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Who We Are
---------------------------------------------------------------- */
const WHO_WE_ARE_HIGHLIGHTS = [
  {
    icon: Waves,
    title: 'Pool Surrounds Specialist',
    text: '7-8 years of experience working around pools, engineered for drainage, chemical exposure and heavy foot traffic.',
  },
  {
    icon: Mountain,
    title: 'Stone Cladding Specialty',
    text: "One of the areas we're best known for, with a quality of finish that's noticeably top-tier.",
  },
  {
    icon: MapPin,
    title: 'Local to the Coast',
    text: 'Based in Noraville, servicing the Central Coast and Lake Macquarie.',
  },
]

function WhoWeAre() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="approach" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div
        className={`relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl overflow-hidden border border-divider aspect-[16/11]">
            <Img src="/images/hero-3.jpg" alt="Pool deck at golden hour" sizes="(min-width: 1024px) 33vw, 100vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-divider aspect-square">
            <Img src="/images/process-1-design.jpg" alt="Landscape design and site planning" sizes="(min-width: 1024px) 33vw, 100vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-divider aspect-square">
            <Img src="/images/service-retaining-wall-2.jpg" alt="Sandstone retaining wall with garden bed planting" sizes="(min-width: 1024px) 33vw, 100vw" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">╱ Who We Are</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-6">
            Built by hand,
            <span className="block font-serif italic font-medium text-primary">one job at a time.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Every job gets the same crew and the same standard — pool surrounds, paving, concreting, retaining walls, gardens and stone cladding across the Central Coast and Lake Macquarie.
          </p>

          <div className="space-y-7">
            {WHO_WE_ARE_HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
                className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <h.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-lg mb-1">{h.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.set(card, { filter: 'blur(0px) saturate(1)' })
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Consultation & Design',
      tagline: 'We measure twice.',
      text: 'We walk the site, talk through how you actually use the pool area and backyard, and set out paving, coping and garden lines before anything is costed.',
      image: '/images/process-1-design.jpg',
      alt: 'Fibonacci-built paved steps and terraced garden beds on a sloped site',
      meta: 'Step 1 / Design',
    },
    {
      num: '02',
      title: 'Paving, Concreting & Walls',
      tagline: 'Built to hold.',
      text: 'Retaining walls, drainage, base preparation and paving or concreting are carried out in sequence, engineered for the way Central Coast ground moves and drains.',
      image: '/images/process-2-build.jpg',
      alt: 'Fibonacci job in progress: stone-paved pool edge and plunge pool under construction',
      meta: 'Step 2 / Build',
    },
    {
      num: '03',
      title: 'Garden & Handover',
      tagline: 'Ready to use.',
      text: 'Turf, planting and final finishing complete the space, then we walk it with you before handover — no half-swept job sites.',
      image: '/images/process-3-finish.jpg',
      alt: 'Finished Fibonacci pool build with paving and pool safety fencing',
      meta: 'Step 3 / Finish',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ How a job runs</span>
        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-light">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-light bg-primary/10 px-2.5 py-1 rounded-full">
                    Fibonacci Protocol
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-bold text-[7rem] sm:text-[10rem] leading-none text-primary/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-light text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <Img src={step.image} alt={step.alt} sizes="(min-width: 1024px) 33vw, 100vw" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Fibonacci
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Everything we do</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              One crew,
              <span className="block font-serif italic font-medium text-primary">every surface.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Residential and commercial jobs across the Central Coast and Lake Macquarie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group relative overflow-hidden min-h-[340px] flex flex-col justify-between p-7 sm:p-9 transition-all duration-500">
                <Img
                  src={svc.thumb}
                  alt={svc.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/35 to-transparent" />
                <div className="relative flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary group-hover:text-deep" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="relative">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2 leading-tight">{svc.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{svc.text}</p>
                </div>
              </div>
            )
          })}
          <Link
            to="/services"
            className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 min-h-[340px] flex flex-col items-start justify-center"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
              <ArrowRight className="h-5 w-5 text-primary group-hover:text-deep" strokeWidth={2} />
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">View All Services</h3>
            <p className="text-white/55 text-sm leading-relaxed">See the full list of what Fibonacci can help with.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
const REVIEWS = [
  {
    text: "Jay from Fibonacci Landscape provided a stress free easy going service. Jay was very punctual, polite and professional. The work speaks for itself. Thanks again for the incredible job!",
    author: 'Verified customer',
    placeholder: false,
  },
  { placeholder: true },
  { placeholder: true },
]

function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Reviews</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">What clients are saying.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {REVIEWS.map((r, i) =>
            r.placeholder ? (
              <div
                key={i}
                style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
                className={`border border-dashed border-divider rounded-4xl p-6 flex flex-col items-center justify-center text-center min-h-[200px] transition-all duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">Review coming soon</span>
              </div>
            ) : (
              <div
                key={i}
                style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
                className={`bg-surface border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-ink text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{r.author}</p>
              </div>
            )
          )}
        </div>

        <div className="text-center">
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}



/* ----------------------------------------------------------------
   Home
---------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Protocol />
      <ServicesGrid />
      <TrustSignals />
    </>
  )
}
