'use client'
import React from 'react'

const roadmap = [
  {title: 'Q2 2026', items: ['Adaptive AI', 'Self‑improving workflows']},
  {title: 'Q4 2026', items: ['Enterprise orchestration', 'Regulatory exports']},
  {title: '2027+', items: ['Autonomous remediation market']}
]

export default function Roadmap(){
  return (
    <section id="roadmap" className="section bg-[rgba(255,255,255,0.01)]">
      <div className="container glass p-8">
        <h3 className="text-2xl font-bold">🚀 Future Roadmap</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {roadmap.map(r => (
            <div className="p-4 glass" key={r.title}>
              <div className="text-sm font-semibold">{r.title}</div>
              <ul className="mt-3 text-gray-300 text-sm space-y-2">
                {r.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
