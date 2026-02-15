'use client'
import React from 'react'

export default function Founder(){
  return (
    <section id="founder" className="section">
      <div className="container">
        <div className="glass p-10 flex flex-col md:flex-row items-center gap-8" data-reveal>
          <div style={{width:120,height:120,borderRadius:24,background:'linear-gradient(135deg,#001115,#003327)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:28,color:'#9ef3c4'}}>
            GE
          </div>
          <div>
            <div className="badge">Founder</div>
            <div className="mt-4 text-2xl font-semibold">Poojan Aghera</div>
            <div className="mt-2 text-[var(--muted)] max-w-2xl">
              Visionary security architect focused on building autonomous intelligence that sees, learns, and acts with absolute precision.
              God&apos;s Eye is engineered to deliver unmatched clarity and control for modern enterprises.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
