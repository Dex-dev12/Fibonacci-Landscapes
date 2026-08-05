import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import FibonacciMark from '../Logo.jsx'

export default function PrivacyPolicy() {
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
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">Privacy Policy</h1>
        <p className="text-muted mt-3 font-mono text-xs uppercase tracking-widest">Last updated August 2026</p>

        <div className="mt-10 space-y-8 text-white/75 leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">What we collect</h2>
            <p>When you submit an enquiry through our contact form, we collect your name, email address, phone number, postcode and any details or photos you choose to include about your project.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">How we use it</h2>
            <p>We use this information solely to respond to your enquiry, provide a quote, and schedule work you request. We do not sell or share your details with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Data storage</h2>
            <p>Enquiry details are stored securely and retained only as long as needed to respond to your request or fulfil a job. You can ask us to delete your information at any time by emailing fibonaccilandscapes@gmail.com.</p>
          </section>
          <section>
            <h2 className="font-display font-semibold text-xl text-ink mb-2">Contact</h2>
            <p>Questions about this policy can be sent to fibonaccilandscapes@gmail.com or by phone on 0412 195 698.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
