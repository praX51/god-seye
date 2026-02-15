'use client'
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {title: 'Recon', copy: 'Autonomous sensors map assets, attack surfaces, and signals.'},
  {title: 'Analysis', copy: 'AI correlates risk with business context and priority.'},
  {title: 'Validation', copy: 'Deterministic checks remove noise and false positives.'},
  {title: 'Report', copy: 'Evidence packs and executive-ready summaries generated.'},
  {title: 'Learn', copy: 'Models update from verified outcomes and analyst input.'},
  {title: 'Improve', copy: 'Playbooks refine themselves to close gaps automatically.'}
]

export default function HowItWorks(){
  return (
    <section id="how" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="badge">⚙️ How It Works</div>
              <h3 className="mt-5 text-3xl font-semibold">An autonomous intelligence loop.</h3>
              <p className="mt-3 text-[var(--muted)] max-w-2xl">
                A continuous pipeline that converts telemetry into verified intelligence, then self-improves through deterministic learning.
              </p>
            </div>
            <div className="text-xs text-[var(--muted)] uppercase tracking-[0.2em]">Recon → Improve</div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.title} className="glass p-6 card-tilt" whileHover={{scale:1.02}}>
                <div className="text-xs text-[var(--muted)]">Step {i+1}</div>
                <div className="mt-2 font-semibold text-lg">{s.title}</div>
                <div className="mt-3 text-sm text-[var(--muted)]">{s.copy}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 relative h-16" data-parallax="0.06">
            {/* animated connecting line (decorative) */}
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{width:'100%',height:80}}>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00ff6a" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ff385c" stopOpacity="0.24" />
                </linearGradient>
              </defs>
              <motion.path d="M40 40 C 200 0, 400 80, 560 40 C 720 0, 920 80, 1160 40" fill="none" stroke="url(#g1)" strokeWidth={2} strokeLinecap="round" strokeDasharray="1200" animate={{strokeDashoffset:[1200,0]}} transition={{duration:2.4, repeat:Infinity, repeatType:'reverse'}} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
