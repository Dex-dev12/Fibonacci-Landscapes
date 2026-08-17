import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowLeft, CheckCircle2, Waves, LayoutGrid, HardHat, Layers, Trees, Sofa, Hammer } from 'lucide-react'
import Navbar from '../Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

const SERVICES_MAP = {
  'pool-surrounds': {
    icon: Waves,
    title: 'Pool Surrounds',
    tagline: 'Engineered edges that handle it all',
    overview: 'Pool surrounds are where function meets design. We create coping, paving, and non-slip finishes built to handle chemical exposure, drainage, and heavy use — while looking stunning.',
    benefits: [
      'Non-slip surfaces engineered for wet conditions',
      'Proper slope and drainage around pool edge',
      'Chemical-resistant materials and finishes',
      'Natural stone or premium paver options',
      'Compliant with safety standards',
      'Enhances property value',
    ],
    process: [
      { step: 'Assessment', desc: 'We measure your pool, discuss your vision, and recommend materials suited to your style and budget.' },
      { step: 'Design', desc: 'Custom layout showing coping style, paving pattern, and drainage solutions.' },
      { step: 'Prep', desc: 'Remove old surround, prepare base, ensure proper grading for drainage.' },
      { step: 'Installation', desc: 'Precision laying of materials, sealing, and grouting to our quality standards.' },
      { step: 'Finishing', desc: 'Final sweep, sealing application, and handover.' },
    ],
    cta: 'Get a pool surround quote',
  },
  'paving': {
    icon: LayoutGrid,
    title: 'Paving',
    tagline: 'Paths, patios, and driveways done right',
    overview: 'Beautiful paving that handles Central Coast weather. We work with natural stone, travertine, and premium pavers — all laid level, sloped correctly for drainage, and built to last.',
    benefits: [
      'Wide range of premium material options',
      'Expert grading and drainage design',
      'Handles seasonal movement and weather',
      'Professional installation and finishing',
      'Increases curb appeal and property value',
      'Low-maintenance solutions available',
    ],
    process: [
      { step: 'Consultation', desc: 'Discuss your space, preferred materials, and budget.' },
      { step: 'Design & Layout', desc: 'We plan the pattern, finishes, and ensure proper drainage.' },
      { step: 'Preparation', desc: 'Remove old paving, prepare and compact base materials.' },
      { step: 'Installation', desc: 'Lay pavers, set height, and grout with precision.' },
      { step: 'Sealing', desc: 'Apply protective sealant to enhance appearance and durability.' },
    ],
    cta: 'Get a paving quote',
  },
  'concreting': {
    icon: HardHat,
    title: 'Concreting',
    tagline: 'Strong, durable foundations for any project',
    overview: 'Concrete is the backbone of outdoor construction. We pour exposed aggregate, plain, and coloured concrete with proper slope, finishing, and durability in mind.',
    benefits: [
      'Exposed aggregate finishes',
      'Plain or colour options',
      'Engineered for proper drainage slope',
      'Built for Central Coast weather',
      'Low maintenance',
      'Cost-effective durability',
    ],
    process: [
      { step: 'Planning', desc: 'Discuss thickness, finish type, and colour options.' },
      { step: 'Prep', desc: 'Prepare subgrade, install forms, and check levels.' },
      { step: 'Pouring', desc: 'Mix and pour concrete with proper slope for drainage.' },
      { step: 'Finishing', desc: 'Trowel, broom, or expose aggregate as specified.' },
      { step: 'Curing', desc: 'Allow proper curing time before use.' },
    ],
    cta: 'Get a concreting quote',
  },
  'retaining-walls': {
    icon: Layers,
    title: 'Retaining Walls',
    tagline: 'Hold your ground, literally',
    overview: 'Sloped blocks are expensive to maintain and dangerous. We engineer retaining walls that terrace your space, add usable area, and prevent erosion.',
    benefits: [
      'Engineered for safety and compliance',
      'Terraces sloped property into usable space',
      'Prevents soil erosion',
      'Multiple material options',
      'Professional drainage design',
      'Adds property value and function',
    ],
    process: [
      { step: 'Survey', desc: 'Assess slope, soil conditions, and desired height.' },
      { step: 'Design', desc: 'Engineer retaining wall with proper reinforcement and drainage.' },
      { step: 'Foundation', desc: 'Prepare compacted base and install drainage system.' },
      { step: 'Build', desc: 'Install wall blocks or stone with precision alignment.' },
      { step: 'Backfill', desc: 'Fill behind wall with proper material and compaction.' },
    ],
    cta: 'Get a retaining wall quote',
  },
  'gardens': {
    icon: Trees,
    title: 'Garden & Landscape Design',
    tagline: 'Tie it all together with thoughtful landscaping',
    overview: 'Gardens complete the picture. We design and install garden beds, turf, and planting schemes that tie your entire outdoor space together — fence line to pool edge.',
    benefits: [
      'Cohesive landscape design',
      'Plant selection for climate and light',
      'Turf installation and lawn prep',
      'Garden bed design and edging',
      'Sustainable plant options',
      'Seasonal colour and interest',
    ],
    process: [
      { step: 'Walk & Discuss', desc: 'Tour your property, discuss vision, sun exposure, and preferences.' },
      { step: 'Design Concept', desc: 'Propose planting layout, plant types, and colour scheme.' },
      { step: 'Prep & Beds', desc: 'Create garden beds, amend soil, and install edging.' },
      { step: 'Planting', desc: 'Install plants, trees, turf, and mulch.' },
      { step: 'Establish', desc: 'Initial watering and care guidance.' },
    ],
    cta: 'Get a garden design quote',
  },
  'full-service': {
    icon: Sofa,
    title: 'Full Service Landscape & Construction',
    tagline: 'From sketch to finished space',
    overview: 'Why coordinate multiple contractors? We handle it all. Design, permitting, construction, and finishing — one crew, one vision, from first sketch to final sweep.',
    benefits: [
      'Single point of contact for entire project',
      'Integrated design across all elements',
      'Streamlined timeline and coordination',
      'Consistent quality and finishing',
      'Simplified communication and changes',
      'Complete peace of mind',
    ],
    process: [
      { step: 'Consultation', desc: 'Understand your goals, budget, and timeline.' },
      { step: 'Design', desc: 'Create comprehensive landscape design incorporating all elements.' },
      { step: 'Permits', desc: 'Handle all necessary permits and approvals.' },
      { step: 'Construction', desc: 'Execute design with coordinated crews and quality control.' },
      { step: 'Handover', desc: 'Final touches, walk-through, and care instructions.' },
    ],
    cta: 'Get a full-service quote',
  },
  'fencing': {
    icon: Hammer,
    title: 'Fencing',
    tagline: 'Define your space with quality fencing',
    overview: 'Fencing sets the boundary and character of your property. We install quality timber, composite, and metal fencing solutions tailored to your needs.',
    benefits: [
      'Privacy and security',
      'Property boundary definition',
      'Multiple material options',
      'Professional installation',
      'Weather-resistant options',
      'Compliant with council standards',
    ],
    process: [
      { step: 'Assessment', desc: 'Measure, discuss style, and confirm boundary lines.' },
      { step: 'Design', desc: 'Select material, height, and finishing options.' },
      { step: 'Posts & Base', desc: 'Install posts with proper depth and concrete for stability.' },
      { step: 'Panels', desc: 'Attach fencing panels or build custom sections.' },
      { step: 'Finishing', desc: 'Apply finishes, paint, or stain as required.' },
    ],
    cta: 'Get a fencing quote',
  },
  'stone-cladding': {
    icon: LayoutGrid,
    title: 'Stone Cladding',
    tagline: 'Premium quality, top-tier craftsmanship',
    overview: 'This is where our 7+ years of expertise truly shines. We specialize in top-tier stone cladding that transforms exterior surfaces with natural beauty and lasting durability.',
    benefits: [
      'Premium stone selection and sourcing',
      '7+ years of specialist expertise',
      'Flawless installation and finishing',
      'Weather-sealed and long-lasting',
      'Natural beauty and character',
      'Increases property value significantly',
    ],
    process: [
      { step: 'Consultation', desc: 'View your project, discuss stone options and finishes.' },
      { step: 'Stone Selection', desc: 'Choose premium stone that matches your vision.' },
      { step: 'Prep & Base', desc: 'Prepare surface, install moisture barrier and base layer.' },
      { step: 'Installation', desc: 'Expert installation with precision mortar work and alignment.' },
      { step: 'Finishing', desc: 'Grout, seal, and final inspection for perfection.' },
    ],
    cta: 'Get a stone cladding quote',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const pageRef = useRef(null)
  const service = SERVICES_MAP[slug]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.detail-hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.detail-hero p', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.from('.benefit-item', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.4 })
      gsap.from('.process-step', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1, delay: 0.6 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">Service not found</h1>
          <Link to="/services" className="text-primary hover:text-primary-light">
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="detail-hero pt-32 pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
        <div className="flex items-start gap-6 mb-8">
          <Icon className="h-12 w-12 text-primary flex-shrink-0" />
          <div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink tracking-tighter leading-tight mb-3">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted">{service.tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-surface border border-divider rounded-3xl p-8 lg:p-12">
          <p className="text-lg text-muted leading-relaxed max-w-3xl">{service.overview}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-10">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-item flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-10">Our Process</h2>
        <div className="space-y-4">
          {service.process.map((item, idx) => (
            <div
              key={idx}
              className="process-step bg-surface border border-divider rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{item.step}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote.
          </p>
          <Link
            to="/contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30"
          >
            {service.cta}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
