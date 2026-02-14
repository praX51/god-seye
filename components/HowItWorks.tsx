'use client'
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  'Recon',
  'Analysis',
  'Validation',
  'Report',
  'Learn',
  'Improve'
]

export default function HowItWorks(){
  return (
    <section id="how" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-8">
          <h3 className="text-2xl font-bold">⚙️ How it works</h3>
          <p className="mt-3 text-gray-400 max-w-2xl">A visual, autonomous pipeline that continuously converts telemetry into verified intelligence and self-improving playbooks.</p>

          <div className="mt-8 grid grid-cols-6 gap-6 items-center">
            {steps.map((s, i) => (
              <motion.div key={s} className="glass p-4 text-center" whileHover={{scale:1.03, boxShadow:'0 8px 40px rgba(0,255,106,0.06)'}}>
                <div className="text-xs text-gray-300/70">Step {i+1}</div>
                <div className="mt-2 font-semibold text-lg">{s}</div>
                <div className="mt-2 text-sm text-gray-400">{getCopy(s)}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 relative h-12">
            {/* animated connecting line (decorative) */}
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{width:'100%',height:80}}>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00ff6a" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ff385c" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <motion.path d="M40 40 C 200 0, 400 80, 560 40 C 720 0, 920 80, 1160 40" fill="none" stroke="url(#g1)" strokeWidth={2} strokeLinecap="round" strokeDasharray="1200" animate={{strokeDashoffset:[1200,0]}} transition={{duration:2.2}} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function getCopy(s: string){
  switch(s){
    case 'Recon': return 'Autonomous sensors map the environment in real-time.'
    case 'Analysis': return 'AI correlates signals and prioritizes high-confidence risks.'
    case 'Validation': return 'Automated validation reduces false positives.'
    case 'Report': return 'Audit‑ready, contextual reports for teams and regulators.'
    case 'Learn': return 'Continuous model updates from verified findings.'
    case 'Improve': return 'Self-healing playbooks close gaps automatically.'
    default: return ''
  }
}
