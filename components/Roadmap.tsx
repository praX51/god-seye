'use client'
import React from 'react'
import { motion } from 'framer-motion'

const roadmap = [
  {title: 'Mid 2026', items: ['Adaptive AI playbooks', 'Self-improving workflows']},
  {title: 'Late 2026', items: ['Enterprise orchestration fabric', 'Regulatory evidence exports']},
  {title: '2027+', items: ['Autonomous remediation marketplace', 'Global deployment mesh']}
]

export default function Roadmap(){
  return (
    <section id="roadmap" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-10" data-reveal>
          <div className="badge">🚀 Future Roadmap</div>
          <h3 className="mt-5 text-3xl font-semibold">Built for the next decade of cyber defense.</h3>
          <p className="mt-3 text-[var(--muted)] max-w-2xl">
            God&apos;s Eye evolves alongside the threat landscape with adaptive intelligence and scalable deployment primitives.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {roadmap.map((r) => (
              <motion.div className="p-6 glass card-tilt" key={r.title} whileHover={{scale:1.02}}>
                <div className="text-sm font-semibold">{r.title}</div>
                <ul className="mt-4 text-[var(--muted)] text-sm space-y-2">
                  {r.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
