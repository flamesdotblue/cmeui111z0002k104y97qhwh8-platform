import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Crisp Cart — Grocery UX Revamp',
    blurb: 'Reduced time-to-checkout by 28% with a clearer IA, progressive disclosure, and playful affordances.',
    color: '#FFD166',
    tags: ['IA', 'Usability Testing', 'Mobile'],
    role: 'Lead UX + Prototyper',
  },
  {
    title: 'Pocket Paws — Pet Care App',
    blurb: 'Onboarded users 2x faster with a curiosity-driven flow and delightful guidance puppers.',
    color: '#C4B5FD',
    tags: ['Onboarding', 'Motion', 'Design System'],
    role: 'Product Designer',
  },
  {
    title: 'Civic Easy — City Services',
    blurb: 'Accessible forms that feel human. WCAG AA and a 40% completion lift.',
    color: '#A7F3D0',
    tags: ['Accessibility', 'Forms', 'Research'],
    role: 'UX Researcher',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Selected Projects</h2>
        <span className="px-3 py-1 bg-black text-white text-xs font-bold border-4 border-black rounded-[10px] shadow-[6px_6px_0_0_#000]">2022 – 2025</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, blurb, tags, color, role, index }) {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: index * 0.05 }}
      className="relative p-4 bg-white border-4 border-black rounded-[18px] shadow-[12px_12px_0_0_#000]"
    >
      <div
        className="aspect-[16/9] w-full border-4 border-black rounded-[14px] mb-4 grid place-items-center text-center"
        style={{ backgroundColor: color }}
      >
        <div className="px-6">
          <p className="font-bold">{title}</p>
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
      <p className="mb-3">{blurb}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-white border-4 border-black rounded-[10px] shadow-[4px_4px_0_0_#000] font-bold">{t}</span>
        ))}
      </div>
      <motion.a
        href="#contact"
        whileHover={{ x: 4 }}
        className="mt-4 inline-block px-4 py-2 bg-black text-white border-4 border-black rounded-[12px] shadow-[6px_6px_0_0_#000] font-bold"
      >
        Case Study →
      </motion.a>
    </motion.article>
  )
}
