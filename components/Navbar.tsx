'use client'
import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="container flex items-center justify-between py-6 sticky top-0 z-20">
      <div className="absolute inset-0 -z-10" style={{backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)'}} />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 glass flex items-center justify-center">
          <img src="/assets/logo.svg" alt="God's Eye" width={36} height={36} />
        </div>
        <div>
          <div className="text-sm tracking-[0.25em] text-[var(--muted)]">GOD&apos;S EYE</div>
          <div className="text-xs text-[var(--muted)]">Autonomous Security</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#vision" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">Vision</a>
        <a href="#how" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">How it works</a>
        <a href="#architecture" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">Architecture</a>
        <a href="#roadmap" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">Roadmap</a>
        <ThemeToggle />
      </nav>
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </header>
  )
}
