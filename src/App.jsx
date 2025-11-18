import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Articles from './components/Articles'
import Testimonials from './components/Testimonials'
import Subscribe from './components/Subscribe'
import Quiz from './components/Quiz'

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const base = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    // attempt to seed data on first load
    fetch(`${base}/api/seed`, { method: 'POST' }).then(()=>setSeeded(true)).catch(()=>{})
  }, [base])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight">Ragdoll Cats</div>
          <nav className="flex items-center gap-6 text-sky-100/90">
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#articles" className="hover:text-white">Guides</a>
            <a href="#subscribe" className="hover:text-white">Subscribe</a>
          </nav>
        </div>
      </header>

      <Hero onOpenQuiz={() => setShowQuiz(true)} />

      <main>
        <div id="articles"><Articles /></div>
        <Gallery />
        <Testimonials />
        <div id="subscribe"><Subscribe /></div>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sky-200/80">
        Crafted with love for ragdolls • {new Date().getFullYear()}
      </footer>

      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>
  )
}

export default App
