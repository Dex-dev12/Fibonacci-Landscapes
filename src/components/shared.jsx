import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Img from './Img.jsx'

export function PageBanner({ eyebrow, title, subtitle, img }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.banner-eyebrow, .banner-title, .banner-subtitle', {
        y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden bg-deep">
      <div className="absolute inset-0">
        <Img src={img} alt="" sizes="100vw" fetchPriority="high" decoding="async" className="h-full w-full object-cover brightness-[0.4]" />
      </div>
      <div className="absolute inset-0 bg-deep/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="banner-eyebrow font-mono text-xs uppercase tracking-[0.25em] text-primary-light mb-3">{eyebrow}</p>
        <h1 className="banner-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05] max-w-3xl">{title}</h1>
        {subtitle && <p className="banner-subtitle mt-5 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
