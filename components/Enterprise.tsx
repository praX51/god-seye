'use client'
import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  {title: 'Compliance', desc: 'SOC2, ISO, and zero-trust alignment with exportable evidence packs.'},
  {title: 'Audit Logs', desc: 'Immutable, tamper-evident audit trails across every autonomous action.'},
  {title: 'Reporting Engine', desc: 'Executive dashboards, SLA telemetry, and investor-ready metrics.'}
]

export default function Enterprise(){
  return (
    <section id="enterprise" className="section">
      <div className="container">
        <div className="glass p-10" data-reveal>
          <div className="badge">📊 Enterprise-Ready</div>
          <h3 className="mt-5 text-3xl font-semibold">Security built for regulated environments.</h3>
          <p className="mt-3 text-[var(--muted)] max-w-2xl">
            God&apos;s Eye ships with compliance tooling, audit-grade reporting, and operational transparency from day one.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <motion.div key={p.title} className="p-6 glass card-tilt" whileHover={{scale:1.02}}>
                <div className="text-sm text-[var(--muted)]">{p.title}</div>
                <div className="mt-3 text-base">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
