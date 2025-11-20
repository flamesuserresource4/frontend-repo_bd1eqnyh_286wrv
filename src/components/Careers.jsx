import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '', linkedin: '', portfolio: '', resume_url: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: data.message || 'Submitted', error: null })
      setForm({ name: '', email: '', phone: '', role: '', message: '', linkedin: '', portfolio: '', resume_url: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="careers" className="bg-white text-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Join Our Team</h2>
            <p className="mt-3 text-slate-600">We’re always looking for talented engineers, project managers, and craftspeople.</p>
            <ul className="mt-6 space-y-2 text-slate-600 text-sm list-disc list-inside">
              <li>Project Manager – Industrial EPC</li>
              <li>Structural Engineer – Design & Build</li>
              <li>Site Safety Officer – Compliance</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
              <input className="bg-white border border-slate-300 rounded-md px-3 py-2" name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
            </div>
            <input className="mt-4 w-full bg-white border border-slate-300 rounded-md px-3 py-2" name="linkedin" placeholder="LinkedIn URL" value={form.linkedin} onChange={handleChange} />
            <input className="mt-3 w-full bg-white border border-slate-300 rounded-md px-3 py-2" name="portfolio" placeholder="Portfolio / Website URL" value={form.portfolio} onChange={handleChange} />
            <input className="mt-3 w-full bg-white border border-slate-300 rounded-md px-3 py-2" name="resume_url" placeholder="Resume Link" value={form.resume_url} onChange={handleChange} />
            <textarea className="mt-4 w-full bg-white border border-slate-300 rounded-md px-3 py-2 h-32" name="message" placeholder="Tell us why you'd be a great fit" value={form.message} onChange={handleChange} />
            <button type="submit" disabled={status.loading} className="mt-4 w-full bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 text-slate-900 font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
              {status.loading ? 'Submitting...' : 'Submit Application'}
            </button>
            {status.success && <p className="mt-3 text-green-600 text-sm">{status.success}</p>}
            {status.error && <p className="mt-3 text-red-600 text-sm">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
