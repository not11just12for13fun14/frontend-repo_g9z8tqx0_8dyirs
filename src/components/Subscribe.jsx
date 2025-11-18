import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const base = import.meta.env.VITE_BACKEND_URL

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${base}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold">Get whisker mail</h3>
        <p className="mt-2 text-white/90">Monthly care tips, adorable galleries, and breed insights.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 bg-white/10 border border-white/30 rounded-xl flex items-center px-4">
            <Mail className="w-5 h-5 mr-2" />
            <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="w-full bg-transparent outline-none py-3 placeholder-white/70" />
          </div>
          <button disabled={status==='loading'} className="px-6 py-3 rounded-xl bg-white text-sky-700 font-semibold hover:bg-sky-100 disabled:opacity-70">Subscribe</button>
        </form>
        {status==='success' && <div className="mt-3 text-sm">Thanks! Please check your inbox.</div>}
        {status==='error' && <div className="mt-3 text-sm">Something went wrong. Try again.</div>}
      </div>
    </section>
  )
}
