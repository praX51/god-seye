'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <section id="vision" className="section">
      <div className="container glass p-8">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold">🔎 Vision</h2>
          <p className="mt-4 text-gray-300 max-w-3xl">God's Eye shifts security from reactive scanning to proactive autonomous intelligence. Our platform continuously hunts, validates, and remediates threats using adaptive AI agents that learn from every event — reducing time‑to‑detect and eliminating alert fatigue.</p>
        </motion.div>
      </div>
    </section>
  )
}
