'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function TrainMode(){
  return (
    <section id="train" className="section">
      <div className="container glass p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold">🧠 Train Mode</h3>
          <p className="mt-4 text-gray-300 max-w-xl">Teach once. Execute forever. Train Mode lets security teams demonstrate intent with a single workflow; God’s Eye compiles it into deterministic, replayable skills that scale across environments.</p>
          <ul className="mt-6 space-y-3 text-gray-400">
            <li>• Visual trainer with human-in-the-loop validation</li>
            <li>• Versioned skills & audit trail</li>
            <li>• Safe sandboxed execution</li>
          </ul>
        </div>
        <motion.div className="flex-1 glass p-6" initial={{scale:0.98,opacity:0.8}} whileInView={{scale:1,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
          <div className="h-40 bg-gradient-to-br from-[#001118] via-[rgba(0,255,106,0.02)] to-transparent rounded-lg flex items-center justify-center text-sm text-gray-300">
            Live training visual — replay, validate, publish.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
