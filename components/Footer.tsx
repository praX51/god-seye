'use client'
import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <div className="container">© {new Date().getFullYear()} God's Eye — All rights reserved.</div>
    </footer>
  )
}
