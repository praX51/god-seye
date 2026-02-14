'use client'
import React from 'react'

const modules = [
  {title: 'Agent Core', desc: 'Autonomous agents that orchestrate reconnaissance and remediation.'},
  {title: 'Skill Engine', desc: 'Reusable, versioned automation primitives.'},
  {title: 'Memory Layer', desc: 'Contextual memory and state for continuous learning.'},
  {title: 'Execution Layer', desc: 'Safe, auditable execution fabrics across fleets.'},
  {title: 'Audit Layer', desc: 'Immutable logs, evidence, and compliance exports.'}
]

export default function Architecture(){
  return (
    <section id="architecture" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-8">
          <h3 className="text-2xl font-bold">🛡 Security Architecture</h3>
          <p className="mt-3 text-gray-400 max-w-2xl">Modular, auditable, and cloud-native. Scale agents per workload, plug in custom skill packs, and retain provable evidence for every action.</p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {modules.map(m => (
              <div key={m.title} className="glass p-6 hover:scale-105 transition-transform">
                <div className="text-sm text-gray-300/70">{m.title}</div>
                <div className="mt-3 text-gray-300">{m.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-400">Diagram: Agent Core ↔ Skill Engine ↔ Memory Layer ↔ Execution Layer ↔ Audit Layer</div>
        </div>
      </div>
    </section>
  )
}
