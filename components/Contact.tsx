'use client'
import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container glass p-8 text-center">
        <h3 className="text-2xl font-bold">Contact</h3>
        <p className="mt-3 text-gray-300">Minimal and elegant — request a demo or reach out for enterprise discussions.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a className="cta btn-primary" href="mailto:agherapoojan333@gmail.com">Request Demo</a>
          <a className="cta btn-ghost" href="#founder">Meet the Founder</a>
        </div>
        <div className="mt-6 text-xs text-gray-500">Email: <a href="mailto:agherapoojan333@gmail.com">agherapoojan333@gmail.com</a></div>
      </div>
    </section>
  )
}
