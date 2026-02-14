'use client'
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScrollProvider(){
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })

    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Allow natural scroll and pointer events to flow normally
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
