import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', service: '', budget: '', timeline: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: data.message || 'Submitted', error: null })
      setForm({ name: '', email: '', phone: '', subject: '', message: '', service: '', budget: '', timeline: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="bg-white text-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Tell us about your project</h2>
            <p className="mt-3 text-slate-600">Share a few details and our team will get back within 24 hours.</p>
            <div className="mt-8 space-y-3 text-slate-600 text-sm">
              <div>Phone: +1 (555) 010-2233</div>
              <div>Email: projects@illuminati.build</div>
              <div>HQ: 221B Industrial Avenue, Sector 7G</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
              <select className="bg-white border border-slate-300 rounded-md px-3 py-2" name="service" value={form.service} onChange={handleChange}>
                <option value="">Select Service</option>
                <option>General Contracting</option>
                <option>Industrial EPC</option>
                <option>Design & Build</option>
                <option>Renovation & Retrofit</option>
              </select>
              <select className="bg-white border border-slate-300 rounded-md px-3 py-2" name="budget" value={form.budget} onChange={handleChange}>
                <option value="">Budget Range</option>
                <option>$10k - $50k</option>
                <option>$50k - $250k</option>
                <option>$250k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <input className="mt-4 w-full bg-white border border-slate-300 rounded-md px-3 py-2" name="timeline" placeholder="Timeline (e.g. Q1 2025)" value={form.timeline} onChange={handleChange} />
            <textarea className="mt-4 w-full bg-white border border-slate-300 rounded-md px-3 py-2 h-32" name="message" placeholder="Project details" value={form.message} onChange={handleChange} required />
            <button type="submit" disabled={status.loading} className="mt-4 w-full bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-amber-300 transition">
              {status.loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            {status.success && <p className="mt-3 text-green-600 text-sm">{status.success}</p>}
            {status.error && <p className="mt-3 text-red-600 text-sm">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
