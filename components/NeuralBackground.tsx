'use client'
import React, { useEffect, useRef } from 'react'

export default function NeuralBackground(){
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let isDark = document.documentElement.classList.contains('dark')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let running = document.visibilityState === 'visible'

    const points = Array.from({length: 40}).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }))

    function resize(){
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      isDark = document.documentElement.classList.contains('dark')
    }
    window.addEventListener('resize', resize)

    function draw(){
      ctx.clearRect(0,0,width,height)
      isDark = document.documentElement.classList.contains('dark')
      // subtle radial gradient
      const grd = ctx.createLinearGradient(0,0,width,height)
      grd.addColorStop(0, 'rgba(0,0,0,0)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0,0,width,height)

      const linkBase = isDark ? '0,255,106' : '0,80,45'
      const nodeBase = isDark ? '0,255,106' : '0,80,45'

      // draw links
      for (let i = 0; i < points.length; i++){
        const p = points[i]
        for (let j = i+1; j < points.length; j++){
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 180){
            ctx.strokeStyle = 'rgba(' + linkBase + ',' + (0.08 * (1 - d/180)) + ')'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x,p.y)
            ctx.lineTo(q.x,q.y)
            ctx.stroke()
          }
        }
      }

      // draw nodes
      for (const p of points){
        ctx.beginPath()
        ctx.fillStyle = 'rgba(' + nodeBase + ',0.06)'
        ctx.arc(p.x, p.y, 3, 0, Math.PI*2)
        ctx.fill()
      }

      // update
      for (const p of points){
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      if (!reduceMotion && running) {
        rafRef.current = requestAnimationFrame(draw)
      }
    }
    draw()

    function handleVisibility(){
      running = document.visibilityState === 'visible'
      if (running && !reduceMotion && !rafRef.current) {
        rafRef.current = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{position:'fixed',inset:0,zIndex:0,opacity:0.3,pointerEvents:'none'}} />
  )
}
