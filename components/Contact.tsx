'use client'
import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container">
        <div className="glass p-10 text-center" data-reveal>
          <div className="badge">Contact</div>
          <h3 className="mt-5 text-3xl font-semibold">Minimal, elegant, decisive.</h3>
          <p className="mt-3 text-[var(--muted)]">Request a private demo or reach out for enterprise discussions.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="cta btn-primary" href="mailto:agherapoojan333@gmail.com">Request Demo</a>
            <a className="cta btn-ghost" href="#founder">Meet the Founder</a>
          </div>
          <div className="mt-6 text-xs text-[var(--muted)]">Email: <a href="mailto:agherapoojan333@gmail.com">agherapoojan333@gmail.com</a></div>
        </div>
      </div>
    </section>
  )
}
