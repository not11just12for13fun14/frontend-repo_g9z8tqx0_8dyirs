import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Articles() {
  const [articles, setArticles] = useState([])
  const base = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetch(`${base}/api/articles`).then(r => r.json()).then(setArticles).catch(() => setArticles([]))
  }, [base])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Guides & Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.article key={a.id || i} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35, delay: i*0.05}} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-white backdrop-blur">
            {a.image_url && <img src={a.image_url} alt={a.title} className="rounded-xl mb-4" />}
            <h3 className="font-semibold text-xl">{a.title}</h3>
            <p className="text-sky-100/90 mt-2 text-sm">{a.excerpt}</p>
            <div className="mt-3 text-xs text-sky-200/70">{a.tags?.join(' • ')}</div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
