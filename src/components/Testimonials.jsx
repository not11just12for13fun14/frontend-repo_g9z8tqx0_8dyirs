import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const [items, setItems] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetch(`${base}/api/testimonials`).then(r => r.json()).then(setItems).catch(() => setItems([]))
  }, [base])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Loved by humans</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={t.id || i} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-white backdrop-blur">
            <div className="flex items-center gap-3">
              {t.avatar_url ? (
                <img src={t.avatar_url} alt={t.name} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-sky-500/30 border border-white/20" />
              )}
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-sky-200/80">{t.location || 'Ragdoll admirer'}</div>
              </div>
            </div>
            <p className="mt-3 text-sky-100/90">{t.message}</p>
            <div className="mt-3 flex gap-1 text-yellow-300">
              {Array.from({ length: t.rating || 5 }).map((_, idx) => <Star key={idx} className="w-4 h-4 fill-yellow-300" />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
