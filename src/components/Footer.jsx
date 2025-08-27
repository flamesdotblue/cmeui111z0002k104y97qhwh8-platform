import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-extrabold">Let’s make something joyfully usable.</h3>
            <p className="mt-2">Available for product design, UX research, and playful prototyping. Remote-friendly.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:hello@emilyux.design" className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD166] border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] font-bold"><Mail size={18}/> hello@emilyux.design</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] font-bold"><Github size={18}/> GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] font-bold"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </div>
          <div className="p-5 bg-white border-4 border-black rounded-[16px] shadow-[10px_10px_0_0_#000]">
            <form onSubmit={(e)=>e.preventDefault()} className="grid gap-3">
              <label className="grid gap-1">
                <span className="text-sm font-bold">Your Email</span>
                <input type="email" required placeholder="you@awesome.dev" className="px-3 py-2 border-4 border-black rounded-[10px] focus:outline-none focus:ring-2 focus:ring-black" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm font-bold">Message</span>
                <textarea required rows={4} placeholder="Let’s chat about…" className="px-3 py-2 border-4 border-black rounded-[10px] focus:outline-none focus:ring-2 focus:ring-black" />
              </label>
              <button className="justify-self-start px-4 py-2 bg-black text-white border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] font-bold hover:translate-y-0.5 transition-transform">Send (pretend)</button>
            </form>
          </div>
        </div>
        <p className="mt-8 text-xs opacity-70">© {new Date().getFullYear()} Emily — UX Designer. Built in a neo‑brutalist mood.</p>
      </div>
    </footer>
  )
}
