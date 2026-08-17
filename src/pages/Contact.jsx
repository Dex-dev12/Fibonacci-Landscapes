import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navbar from '../Navbar.jsx'

export default function Contact() {
  const pageRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.contact-hero p', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-content > div', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15, delay: 0.4 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero pt-32 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink tracking-tighter leading-tight mb-6">
            Let's talk about your project
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            Get in touch to discuss your vision. We'll provide a free consultation and detailed quote.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="contact-content grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-ink mb-1">Phone</div>
                    <a href="tel:+61412195698" className="text-muted hover:text-primary transition-colors text-lg">
                      0412 195 698
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-ink mb-1">Email</div>
                    <a href="mailto:hello@fibonaccilandscapes.com.au" className="text-muted hover:text-primary transition-colors">
                      hello@fibonaccilandscapes.com.au
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-ink mb-1">Address</div>
                    <div className="text-muted">31 Reynolds Rd<br />Noraville 2263<br />NSW, Australia</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-ink mb-1">Hours</div>
                    <div className="text-muted">Monday–Sunday: 7am–5pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-lg font-bold text-ink mb-4">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/fibonaccilandscapes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface border border-divider hover:border-primary hover:text-primary transition-all"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Fibonaccilandscape/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface border border-divider hover:border-primary hover:text-primary transition-all"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface border border-divider rounded-3xl p-8 lg:p-10 h-fit">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="0412 195 698"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-divider rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  status === 'idle'
                    ? 'bg-primary text-deep hover:shadow-lg hover:shadow-primary/30'
                    : status === 'sending'
                    ? 'bg-primary/80 text-deep'
                    : 'bg-green-600 text-white'
                }`}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && '✓ Message Sent'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
