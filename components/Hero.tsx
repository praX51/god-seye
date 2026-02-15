'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Hero3D from './Hero3D'

export default function Hero(){
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-lines" />
      <div className="orb parallax-layer" data-parallax="0.08" style={{top: '-140px', left: '-120px'}} />
      <div className="orb parallax-layer" data-parallax="0.12" style={{bottom: '-160px', right: '-120px', background: 'radial-gradient(circle at 70% 20%, rgba(255,56,92,0.35), transparent 60%)'}} />

      <div className="container grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease:[0.22,0.8,0.2,1]}}>
          <div className="badge">Autonomous Security Intelligence</div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-semibold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text)] via-[#7fffc5] to-[var(--accent)]">See Everything.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7fffc5] to-[var(--accent-2)]">Miss Nothing.</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-2xl">
            God&apos;s Eye is an AI‑powered autonomous security intelligence platform that monitors, validates, and responds in real time —
            delivering measurable resilience with zero alert fatigue.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:agherapoojan333@gmail.com" className="cta btn-primary">Request Demo</a>
            <a href="#architecture" className="cta btn-ghost">View Architecture</a>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              {label: 'Autonomous workflows', value: '24/7'},
              {label: 'Mean time to verify', value: '< 30 sec'},
              {label: 'Threats correlated', value: '10K+/day'}
            ].map((stat) => (
              <div key={stat.label} className="glass p-4 card-tilt">
                <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                <div className="mt-2 text-xl font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-[var(--muted)]">
            Investor-grade polish — Apple-level clarity, Tesla-level innovation, Palantir-level intelligence.
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.9, delay:0.1}}>
          <div className="relative">
            <Hero3D />
            <div className="scan-beam" />
            <div className="absolute -bottom-6 left-6 glass px-4 py-2 text-xs text-[var(--muted)]">
              Live scan — adaptive intelligence pulse
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
