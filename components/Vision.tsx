'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <section id="vision" className="section">
      <div className="orb parallax-layer" data-parallax="0.06" style={{top: '-80px', right: '10%', width: 240, height: 240}} />
      <div className="container">
        <div className="glass p-10">
          <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <div className="badge">🔎 Vision</div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-semibold">From reactive scanning to proactive intelligence.</h2>
              <p className="mt-4 text-[var(--muted)] max-w-2xl">
                God&apos;s Eye transforms cybersecurity into a living intelligence system. Autonomous agents continuously map, correlate,
                and validate threats, turning noisy telemetry into precise, actionable outcomes that reduce time‑to‑detect and eliminate alert fatigue.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                <span className="glass px-3 py-2">Zero-trust ready</span>
                <span className="glass px-3 py-2">Autonomous validation</span>
                <span className="glass px-3 py-2">Evidence-grade reporting</span>
              </div>
            </div>
            <div className="glass p-6 card-tilt">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Security shift</div>
              <div className="mt-4 space-y-4">
                {[
                  {label: 'Reactive', desc: 'Static scanners and alert floods.'},
                  {label: 'Autonomous', desc: 'Continuous learning, validation, and response.'}
                ].map((item) => (
                  <div key={item.label} className="glass p-4">
                    <div className="text-sm text-[var(--muted)]">{item.label}</div>
                    <div className="mt-2 text-base">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
