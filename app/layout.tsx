import './globals.css'
import React from 'react'
import type { ReactNode } from 'react'

export const metadata = {
  title: "God's Eye — Autonomous Security Intelligence",
  description: "See Everything. Miss Nothing. AI-powered autonomous security intelligence for enterprise.",
  keywords: ['Gods Eye', 'cybersecurity', 'autonomous security', 'AI security', 'threat intelligence'],
  openGraph: {
    title: "God's Eye — Autonomous Security Intelligence",
    description: "See Everything. Miss Nothing. AI-powered autonomous security intelligence for enterprise.",
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "God's Eye — Autonomous Security Intelligence",
    description: "See Everything. Miss Nothing. AI-powered autonomous security intelligence for enterprise."
  }
}

export const viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#05070a' }, { media: '(prefers-color-scheme: light)', color: '#f4f7fb' }]
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {/* top-level app shell */}
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
          {children}
        </div>
      </body>
    </html>
  )
}
