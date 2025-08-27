import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Pointer, SmilePlus } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="pt-10 sm:pt-16 lg:pt-20 pb-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block mb-4 bg-black text-white text-xs tracking-widest uppercase px-3 py-1 rounded-[10px] border-4 border-black shadow-[6px_6px_0_0_#000]">Neo‑Brutal & Proud</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm Emily —
            <br />
            a UX Designer who makes
            <span className="inline-block mx-2 rotate-1 px-2 pb-1 bg-[#FFD166] border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000]">delight</span>
            usable.
          </h1>
          <p className="mt-4 text-lg max-w-prose">
            I craft playful, accessible experiences with punchy visuals and honest usability. I believe in research, rapid prototyping, and a tiny dash of chaos to spark joy.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-[#A7F3D0] border-4 border-black rounded-[14px] shadow-[8px_8px_0_0_#000] hover:-translate-y-1 active:translate-y-0 transition-transform font-bold">
              See Projects <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 bg-white border-4 border-black rounded-[14px] shadow-[8px_8px_0_0_#000] hover:-translate-y-1 active:translate-y-0 transition-transform font-bold">
              About Me <Pointer size={18} />
            </a>
          </div>

          <div id="about" className="mt-8 grid sm:grid-cols-3 gap-3">
            <Badge color="#C4B5FD">UX Research</Badge>
            <Badge color="#FFD166">Wireframes</Badge>
            <Badge color="#A7F3D0">Prototyping</Badge>
            <Badge color="#FCA5A5">Accessibility</Badge>
            <Badge color="#86EFAC">Design Systems</Badge>
            <Badge color="#93C5FD">Usability Testing</Badge>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ rotate: -2, y: 10, opacity: 0 }}
            animate={{ rotate: -2, y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="p-4 bg-white border-4 border-black rounded-[18px] shadow-[12px_12px_0_0_#000]"
          >
            <div className="aspect-[4/3] w-full bg-[#FFEFD5] border-4 border-black rounded-[14px] grid place-items-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -left-6 -top-6 w-24 h-24 bg-[#A7F3D0] border-4 border-black rounded-[14px] shadow-[8px_8px_0_0_#000]"
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute right-6 bottom-6 w-16 h-16 bg-[#C4B5FD] border-4 border-black rounded-[10px] shadow-[6px_6px_0_0_#000]"
              />
              <div className="text-center">
                <SmilePlus className="mx-auto mb-2" />
                <p className="font-bold">Friendly micro‑interactions</p>
                <p className="text-sm opacity-80">because usability can be fun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Badge({ children, color }) {
  return (
    <div
      className="px-3 py-2 text-sm font-bold border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000]"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  )
}
