'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function TrainMode(){
  return (
    <section id="train" className="section">
      <div className="container">
        <div className="glass p-10 grid lg:grid-cols-[1fr_1fr] gap-10 items-center" data-reveal>
          <div>
            <div className="badge">🧠 Train Mode</div>
            <h3 className="mt-5 text-3xl font-semibold">Teach once. Execute forever.</h3>
            <p className="mt-4 text-[var(--muted)] max-w-xl">
              Train Mode lets teams demonstrate intent with a single workflow. God&apos;s Eye compiles it into deterministic, replayable skills
              that scale across environments and never forget.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--muted)]">
              <li>• Visual trainer with human‑in‑the‑loop validation</li>
              <li>• Versioned skills with evidence-grade audit trail</li>
              <li>• Safe sandbox execution with policy guardrails</li>
            </ul>
          </div>
          <motion.div className="glass p-6 card-tilt" initial={{scale:0.98,opacity:0.8}} whileInView={{scale:1,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
            <div className="h-52 rounded-lg flex flex-col justify-between p-4" style={{background:'linear-gradient(135deg, rgba(0,255,106,0.08), rgba(0,0,0,0))'}}>
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Learning loop</div>
              <div className="text-sm text-[var(--muted)]">Record → Validate → Publish → Execute</div>
              <div className="text-lg font-semibold">Live training visual</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
