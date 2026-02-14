'use client'
import React from 'react'

export default function Enterprise(){
  return (
    <section id="enterprise" className="section">
      <div className="container glass p-8">
        <h3 className="text-2xl font-bold">📊 Enterprise‑Ready</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="p-4 glass">
            <div className="text-sm text-gray-300/80">Compliance</div>
            <div className="mt-2 text-gray-300">SOC2, ISO-ready exports and role-based access controls.</div>
          </div>
          <div className="p-4 glass">
            <div className="text-sm text-gray-300/80">Audit Logs</div>
            <div className="mt-2 text-gray-300">Immutable, tamper-evident audit trails for every action.</div>
          </div>
          <div className="p-4 glass">
            <div className="text-sm text-gray-300/80">Reporting Engine</div>
            <div className="mt-2 text-gray-300">Custom reports, SLA dashboards, and automated evidence packs.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
