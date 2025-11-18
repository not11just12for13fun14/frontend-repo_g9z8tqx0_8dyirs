import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [category, setCategory] = useState('all')
  const base = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const url = `${base}/api/gallery${category !== 'all' ? `?category=${category}` : ''}`
    fetch(url).then(r => r.json()).then(setImages).catch(() => setImages([]))
  }, [category, base])

  const categories = ['all','kitten','adult','show','care','fun']

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Living Gallery</h2>
        <div className="flex gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 rounded-lg text-sm border ${category===c ? 'bg-sky-500 text-white border-sky-400' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div key={img.id || i} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.3, delay: i*0.03}} className="relative group">
            <img src={img.url} alt={img.caption || 'ragdoll'} className="rounded-xl border border-white/10 shadow-md"/>
            {img.caption && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-end p-3 text-white text-sm">{img.caption}</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
