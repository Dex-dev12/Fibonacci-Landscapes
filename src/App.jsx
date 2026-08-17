import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Upload,
  Waves,
  LayoutGrid,
  HardHat,
  Layers,
  Trees,
  Sofa,
} from 'lucide-react'
import Navbar from './Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

const SERVICES_FULL = [
  {
    icon: Waves,
    title: 'Pool Surrounds',
    text: 'Coping, paving and non-slip finishes engineered around the drainage and chemical exposure of a working pool edge.',
  },
  {
    icon: LayoutGrid,
    title: 'Paving',
    text: 'Natural stone, travertine and paver driveways, patios and paths — laid level and built to shed water the right way.',
  },
  {
    icon: HardHat,
    title: 'Concreting',
    text: 'Exposed aggregate, plain and coloured concrete for slabs, paths and pool surrounds built for Central Coast weather.',
  },
  {
    icon: Layers,
    title: 'Retaining Walls',
    text: 'Engineered retaining walls that terrace sloped sites and hold ground before erosion becomes a problem.',
  },
  {
    icon: Trees,
    title: 'Garden & Landscape Design',
    text: 'Garden beds, turf and planting design that ties the whole property together, fence line to pool edge.',
  },
  {
    icon: Sofa,
    title: 'Outdoor Living Areas',
    text: 'Full backyard transformations, from first sketch to a finished space your family will actually use.',
  },
]


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
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
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
          Central Coast · Lake Macquarie · Newcastle, NSW
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
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="magnetic-btn group inline-flex items-center gap-2 bg-primary text-deep font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/30"
          >
            Get a quote
            <ArrowUpRight className="h-4 w-4" />
          </a>
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
   Feature Card 1 — Service Shuffler
---------------------------------------------------------------- */
function ServiceShuffler() {
  const items = [
    { tag: 'Pool Surrounds', label: 'Coping, paving & drainage fitted around the shell', metric: '3–5 days' },
    { tag: 'Retaining Walls', label: 'Engineered walls that terrace sloped Central Coast blocks', metric: '2–4 days' },
    { tag: 'Garden Design', label: 'Turf, planting & garden beds tying the site together', metric: '1–3 days' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-surface border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-light bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.metric}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">{item.label}</div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span key={idx} className="h-1 w-1 rounded-full" style={{ background: idx < 24 - offset * 6 ? '#CC9A3C' : '#28374F' }} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Fibonacci Ripple (signature animation)
   Golden-ratio spiral drawn continuously over a pool-water surface,
   with ripples on the waterline. Re-skinned from the reference's
   falling-raindrops motif to match the pool / "Fibonacci" branding.
---------------------------------------------------------------- */
function useGoldenSpiralPath(cx, cy, turns = 2.6, points = 140, scale = 1) {
  return useMemo(() => {
    const phi = (1 + Math.sqrt(5)) / 2
    const b = Math.log(phi) / (Math.PI / 2)
    const maxTheta = turns * 2 * Math.PI
    let d = ''
    for (let i = 0; i <= points; i++) {
      const theta = (i / points) * maxTheta
      const r = 2.4 * Math.exp(b * theta) * scale
      const x = cx + r * Math.cos(theta)
      const y = cy + r * Math.sin(theta)
      d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`
    }
    return d
  }, [cx, cy, turns, points, scale])
}

function FibonacciRipple() {
  const [statusIdx, setStatusIdx] = useState(0)

  const statuses = [
    { text: 'Levels set · falls checked', label: 'Design', tone: 'primary' },
    { text: 'Base compacted · pipe laid', label: 'Prep', tone: 'accent' },
    { text: 'Coping & pavers set', label: 'Build', tone: 'primary' },
    { text: 'Swept & handed over', label: 'Done', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => (idx + 1) % statuses.length)
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const spiralD = useGoldenSpiralPath(58, 92, 2.5, 140, 1)

  const ripples = [
    { left: '20%', delay: '0.2s' },
    { left: '48%', delay: '1.1s' },
    { left: '78%', delay: '1.9s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-400' : status.tone === 'accent' ? 'text-accent' : 'text-primary-light'
  const toneDot = status.tone === 'emerald' ? 'bg-emerald-400' : status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(165deg, #0E2430 0%, #123A44 55%, #0B2E3A 100%)' }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-accent/10 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-primary-light text-sm">φ</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-light">Set to the golden ratio</span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">1.618</span>
      </div>

      {/* Golden spiral */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 176" preserveAspectRatio="xMidYMid meet">
        <path
          d={spiralD}
          fill="none"
          stroke="#E2BC70"
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: 'spiral-draw 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 3px rgba(226,188,112,0.35))',
          }}
        />
      </svg>

      {/* Water surface line */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <path
          d="M 0,6 Q 12.5,2 25,6 T 50,6 T 75,6 T 100,6 T 125,6 T 150,6 T 175,6 T 200,6"
          fill="none"
          stroke="#3E9C93"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />
      </svg>

      {/* Ripples on water surface */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary-light/50"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span key={status.text} className={`font-mono text-[10px] truncate ${toneText}`} style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>{status.label}</span>
      </div>

      <style>{`
        @keyframes spiral-draw {
          0%   { stroke-dashoffset: 1; opacity: 0; }
          8%   { opacity: 1; }
          55%  { stroke-dashoffset: 0; opacity: 1; }
          85%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Cursor + Scheduler (Site Visit booking)
---------------------------------------------------------------- */
function SiteVisitScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-surface border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Week 32 · August</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-light bg-primary/10 px-2 py-0.5 rounded-full">
          Site Visit
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay ? 'bg-primary text-deep scale-110 shadow-lg shadow-primary/30' : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 11}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Site visit booked' : 'Pick a day'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#F5F1E6" stroke="#0B1524" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Capability',
      heading: 'Built for Pool Sites',
      sub: 'Coping to concrete',
      text: 'From pool coping and non-slip paving to structural retaining walls, we plan every surface around drainage, falls and the way water actually moves through a backyard.',
      Component: ServiceShuffler,
    },
    {
      eyebrow: '02 / Precision',
      heading: 'Set to the Golden Ratio',
      sub: 'Proportion by design',
      text: 'Every layout is measured against proportion, not guesswork — coping lines, paver spacing and step falls are set out before a single stone is cut.',
      Component: FibonacciRipple,
    },
    {
      eyebrow: '03 / Booking',
      heading: 'Site Visits, Booked Fast',
      sub: 'Free on-site measure',
      text: 'Send a few photos or book a site visit — we measure, quote, and lock in a start date without the back-and-forth.',
      Component: SiteVisitScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ How we work</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three principles.
            <span className="block font-serif italic font-medium text-primary-light mt-1">One backyard.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-light text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(target)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
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

  const pillars = [
    {
      n: '01',
      title: 'Availability',
      target: 13,
      suffix: 'hrs',
      label: 'open daily',
      desc: 'Six days a week, 6am–7pm — early starts to get concrete and coping work done before the Central Coast heat sets in.',
    },
    {
      n: '02',
      title: 'Coverage',
      target: 3,
      suffix: '+',
      label: 'regions serviced',
      desc: 'Lake Macquarie, Toukley and Gosford, plus the surrounding Central Coast and Newcastle area.',
    },
    {
      n: '03',
      title: 'Specialties',
      target: 5,
      suffix: '',
      label: 'core service lines',
      desc: 'Pool surrounds, paving, concreting, retaining walls and garden landscaping — one crew, start to finish.',
    },
  ]

  return (
    <section id="approach" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-light mb-5">╱ Why Fibonacci</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers
              <span className="block font-serif italic font-medium text-primary-light">behind the work.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three facts that shape how we schedule and run jobs — not marketing, just how we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-bold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                {p.suffix && (
                  <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-light mb-3 sm:mb-4">
                    {p.suffix}
                  </span>
                )}
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-light mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
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
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

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
            Residential and commercial jobs across the Central Coast, Lake Macquarie and Newcastle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary group-hover:text-deep" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
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

  const badges = [
    {
      Icon: Waves,
      title: 'Pool Surrounds Specialist',
      text: 'Built around the drainage, coping and chemical-exposure demands of a working pool edge — not a general paving afterthought.',
    },
    {
      Icon: MapPin,
      title: 'Local to the Coast',
      text: 'Based on the NSW Central Coast, servicing Lake Macquarie, Toukley, Gosford, Newcastle and the surrounding suburbs.',
    },
    {
      Icon: Clock,
      title: 'Early Starts, Six Days',
      text: 'Open 6am–7pm, Monday to Saturday — real availability when you’re trying to get a job scheduled.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Why people choose us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">More than a quote.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-surface border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Contact</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              How can
              <span className="block font-serif italic font-medium text-primary-light">we help?</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Tell us about your pool area or backyard project and we'll get back to you to arrange a free site visit.
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+61412195698" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-deep" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Call direct</span>
                  <span className="font-display font-semibold text-ink text-lg">0412 195 698</span>
                </span>
              </a>

              <a href="mailto:fibonaccilandscapes@gmail.com" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-deep" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Email</span>
                  <span className="font-display font-semibold text-ink text-lg">fibonaccilandscapes@gmail.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Servicing</span>
                  <span className="font-display font-semibold text-ink text-lg">Lake Macquarie, Toukley & Gosford, NSW</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-light mb-2">Your privacy</p>
              <p className="text-sm text-muted leading-relaxed">
                Your details are safe with us. We only use them to respond to your enquiry — we don't sell or share your information with third parties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Phone number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Postcode" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">Your message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us about your pool area or backyard project..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-light mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach photos of your pool area or backyard</p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5 images)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-light text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We'll get back to you as soon as we can. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send enquiry'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-light" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thanks — we'll be in touch</h3>
                  <p className="text-muted max-w-md mx-auto">We'll get back to you shortly to arrange a site visit.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
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
              Fibonacci Landscape Construction — based on the NSW Central Coast, servicing Lake Macquarie, Toukley, Gosford, Newcastle and surrounding areas.
            </p>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FibonacciMark className="h-10 w-10" />
              <span className="font-display font-semibold text-lg">Fibonacci Landscapes</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Fibonacci Landscape Construction — pool surrounds, paving, concreting, retaining walls and garden landscaping across the Central Coast, Lake Macquarie and Newcastle.
            </p>
            <a
              href="https://www.facebook.com/Fibonaccilandscape/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition mt-6"
            >
              Follow on Facebook <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-primary transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Company</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#approach" className="text-white/65 hover:text-primary transition text-sm">Why Fibonacci</a>
              </li>
              <li>
                <a href="#process" className="text-white/65 hover:text-primary transition text-sm">Process</a>
              </li>
              <li>
                <a href="#contact" className="text-white/65 hover:text-primary transition text-sm">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+61412195698" className="text-white/65 hover:text-primary transition text-sm">0412 195 698</a>
              </li>
              <li>
                <a href="mailto:fibonaccilandscapes@gmail.com" className="text-white/65 hover:text-primary transition text-sm">fibonaccilandscapes@gmail.com</a>
              </li>
              <li className="text-white/65 text-sm">Lake Macquarie, NSW</li>
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
            <span>© 2026 Fibonacci Landscape Construction</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
