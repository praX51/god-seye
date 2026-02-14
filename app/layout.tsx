import './globals.css'
import React from 'react'
import type { ReactNode } from 'react'

export const metadata = {
  title: "God's Eye — Autonomous Security Intelligence",
  description: "See Everything. Miss Nothing. AI-powered autonomous security intelligence for enterprise.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* top-level app shell */}
        <div className="min-h-screen bg-[var(--bg)] text-white">
          {children}
        </div>
      </body>
    </html>
  )
}
