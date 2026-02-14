'use client'
import React from 'react'

export default function Founder(){
  return (
    <section id="founder" className="section">
      <div className="container glass p-8 flex items-center gap-8">
        <div style={{width:96,height:96,borderRadius:20,background:'linear-gradient(135deg,#001115,#003327)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:28,color:'#9ef3c4'}}>PA</div>
        <div>
          <div className="text-sm text-gray-400">Founder</div>
          <div className="mt-2 text-xl font-bold">Poojan Aghera</div>
          <div className="mt-1 text-sm text-gray-300">God of Hackers — visionary founder building autonomous security that thinks and acts.</div>
        </div>
      </div>
    </section>
  )
}
