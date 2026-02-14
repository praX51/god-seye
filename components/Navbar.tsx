'use client'
import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="container flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 glass flex items-center justify-center">
          <img src="/assets/logo.svg" alt="God's Eye" width={36} height={36} />
        </div>
        <div className="text-sm text-gray-300/80">God's Eye</div>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#how" className="text-sm text-gray-300/70 hover:text-white">How it works</a>
        <a href="#architecture" className="text-sm text-gray-300/70 hover:text-white">Architecture</a>
        <a href="#roadmap" className="text-sm text-gray-300/70 hover:text-white">Roadmap</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
