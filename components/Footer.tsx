'use client'
import React from 'react'

export default function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-[var(--muted)]">
      <div className="container" data-reveal>
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} God&apos;s Eye — All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-[var(--text)]">Contact</a>
            <a href="#architecture" className="hover:text-[var(--text)]">Architecture</a>
            <a href="#roadmap" className="hover:text-[var(--text)]">Roadmap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
