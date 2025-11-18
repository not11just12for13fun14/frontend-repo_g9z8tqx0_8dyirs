import { motion } from 'framer-motion'
import { PawPrint, Star, Mail, Camera, Info } from 'lucide-react'

export default function Hero({ onOpenQuiz }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-fuchsia-900 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.2),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Ragdoll Cats
              <span className="block text-sky-300">Fluffy hearts, gentle souls</span>
            </motion.h1>
            <p className="mt-6 text-sky-100/90 md:text-lg">
              Discover the world of Ragdoll cats: breathtaking coats, ocean-blue eyes and the calmest, cuddliest personalities.
              Explore guides, a living gallery, and an interactive personality quiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onOpenQuiz} className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/30 transition">
                Take the quiz
              </button>
              <a href="#gallery" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20">
                View gallery
              </a>
            </div>
            <div className="mt-8 flex gap-6 text-sky-200/90">
              <div className="flex items-center gap-2"><Star className="w-4 h-4"/> Gentle temperament</div>
              <div className="flex items-center gap-2"><PawPrint className="w-4 h-4"/> Family friendly</div>
              <div className="flex items-center gap-2"><Camera className="w-4 h-4"/> Photogenic</div>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <img src="https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYWdkb2xsJTIwY2F0fGVufDB8MHx8fDE3NjM0NTU4MTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ragdoll cat" className="rounded-3xl shadow-2xl border border-white/10" />
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 text-white">
              <div className="font-semibold">Ragdoll Essentials</div>
              <div className="text-sky-100/90 text-sm">Calm • Affectionate • Blue-eyed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
