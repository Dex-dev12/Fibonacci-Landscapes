import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FibonacciMark from '../Logo.jsx'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink font-body">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition lift-on-hover">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <div className="flex items-center gap-2 mt-10 mb-8">
          <FibonacciMark className="h-8 w-8" />
          <span className="font-display font-semibold text-lg">Fibonacci Landscapes</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">Terms of Service</h1>
        <p className="text-muted mt-3 font-mono text-xs uppercase tracking-widest">Last updated August 2026</p>

        <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Quotes</h2>
            <p>Quotes provided by Fibonacci Landscape Construction are estimates based on the information and site access available at the time of enquiry. Final pricing is confirmed after a site visit and may vary based on ground conditions, access and scope changes.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Site content</h2>
            <p>This website is for general information about our services in Lake Macquarie, Toukley, Gosford and the wider Central Coast and Newcastle region. It does not constitute a binding offer of work.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Enquiries</h2>
            <p>Submitting the contact form does not create a contract for services. A job is confirmed only once both parties agree on scope and price in writing.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Contact</h2>
            <p>Questions about these terms can be sent to fibonaccilandscapes@gmail.com or by phone on 0412 195 698.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
