import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCF7E6] text-zinc-900 selection:bg-black selection:text-white">
      {/* Background accents */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-10 -right-8 w-56 h-56 rotate-6 bg-[#FFD166] border-4 border-black rounded-[22px] shadow-[8px_8px_0_0_#000] opacity-60" />
        <div className="absolute top-40 -left-8 w-40 h-40 -rotate-6 bg-[#A7F3D0] border-4 border-black rounded-[22px] shadow-[8px_8px_0_0_#000] opacity-60" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rotate-12 bg-[#C4B5FD] border-4 border-black rounded-[12px] shadow-[8px_8px_0_0_#000] opacity-60" />
      </div>

      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}
