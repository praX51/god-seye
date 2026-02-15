'use client'
import React, { useEffect } from 'react'

export default function SmoothScrollProvider(){
  useEffect(() => {
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    let rafId: number | null = null
    let running = document.visibilityState === 'visible'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
        } else {
          entry.target.classList.remove('in')
        }
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -12% 0px' })

    revealTargets.forEach((el) => {
      el.classList.add('motion-fade')
      observer.observe(el)
    })

    function updateParallax(){
      if (!running) return
      const scrollY = window.scrollY || 0
      parallaxElements.forEach((el) => {
        const speed = Number(el.dataset.parallax ?? 0.1)
        const offset = scrollY * speed
        el.style.transform = `translate3d(0, ${offset}px, 0)`
      })
      rafId = requestAnimationFrame(updateParallax)
    }

    const handleVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running && rafId === null) {
        rafId = requestAnimationFrame(updateParallax)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    rafId = requestAnimationFrame(updateParallax)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return null
}
