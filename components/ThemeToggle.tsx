'use client'
import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState<'dark'|'light'>(() => (typeof window !== 'undefined' && document.documentElement.classList.contains('dark')) ? 'dark' : 'dark')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  function toggle(){
    if (theme === 'dark'){
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme','light')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme','dark')
      setTheme('dark')
    }
  }

  return (
    <button aria-label="Toggle theme" onClick={toggle} className="glass p-2 rounded-md">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
