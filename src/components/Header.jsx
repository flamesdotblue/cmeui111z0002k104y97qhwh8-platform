import React from 'react'
import { Sparkles, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#FCF7E6]/70 backdrop-blur border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="group inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-[10px] border-4 border-black shadow-[6px_6px_0_0_#000] group-hover:translate-y-0.5 transition-transform"><Sparkles size={18} /></span>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight">Emily • UX</span>
          </a>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 bg-[#FFD166] border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform font-semibold">Projects</a>
            <a href="#about" className="px-4 py-2 bg-[#A7F3D0] border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform font-semibold">About</a>
            <a href="#contact" className="px-4 py-2 bg-[#C4B5FD] border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 active:translate-y-0 transition-transform font-semibold">Contact</a>
          </nav>
          <button aria-label="Open Menu" className="md:hidden inline-flex items-center justify-center px-3 py-2 bg-white border-4 border-black rounded-[10px] shadow-[6px_6px_0_0_#000]">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
