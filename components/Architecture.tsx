'use client'
import React from 'react'
import { motion } from 'framer-motion'

const modules = [
  {title: 'Agent Core', desc: 'Autonomous agents orchestrate reconnaissance and response.'},
  {title: 'Skill Engine', desc: 'Reusable, versioned automation primitives and playbooks.'},
  {title: 'Memory Layer', desc: 'Contextual memory and state for continuous learning.'},
  {title: 'Execution Layer', desc: 'Safe, auditable execution across fleets and clouds.'},
  {title: 'Audit Layer', desc: 'Immutable evidence, compliance exports, and traceability.'}
]

export default function Architecture(){
  return (
    <section id="architecture" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div>
              <div className="badge">🛡 Security Architecture</div>
              <h3 className="mt-5 text-3xl font-semibold">Modular, auditable, cloud-native.</h3>
              <p className="mt-3 text-[var(--muted)] max-w-2xl">
                Deploy autonomous agents per workload, plug in custom skill packs, and retain provable evidence for every action.
              </p>
            </div>
            <div className="text-xs text-[var(--muted)] uppercase tracking-[0.2em]">Agent ↔ Audit</div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div key={m.title} className="glass p-6 card-tilt" whileHover={{scale:1.02}}>
                <div className="text-xs text-[var(--muted)]">Layer {i + 1}</div>
                <div className="mt-2 text-lg font-semibold">{m.title}</div>
                <div className="mt-3 text-sm text-[var(--muted)]">{m.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 glass p-6" data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">System diagram</div>
            <div className="mt-4 grid md:grid-cols-5 gap-4 text-center text-sm">
              {modules.map((m) => (
                <div key={m.title} className="glass px-3 py-4">{m.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
