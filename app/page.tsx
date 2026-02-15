import dynamic from 'next/dynamic'
import React from 'react'

const NeuralBackground = dynamic(() => import('../components/NeuralBackground'), { ssr: false })
const SmoothScrollProvider = dynamic(() => import('../components/SmoothScrollProvider'), { ssr: false })
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const Hero = dynamic(() => import('../components/Hero'), { ssr: false })
const Vision = dynamic(() => import('../components/Vision'), { ssr: false })
const HowItWorks = dynamic(() => import('../components/HowItWorks'), { ssr: false })
const TrainMode = dynamic(() => import('../components/TrainMode'), { ssr: false })
const Architecture = dynamic(() => import('../components/Architecture'), { ssr: false })
const Enterprise = dynamic(() => import('../components/Enterprise'), { ssr: false })
const Roadmap = dynamic(() => import('../components/Roadmap'), { ssr: false })
const Founder = dynamic(() => import('../components/Founder'), { ssr: false })
const Contact = dynamic(() => import('../components/Contact'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main>
      <SmoothScrollProvider />
      <Navbar />
      <NeuralBackground />

      <Hero />

      <Vision />
      <HowItWorks />
      <TrainMode />
      <Architecture />
      <Enterprise />
      <Roadmap />
      <Founder />
      <Contact />

      <Footer />
    </main>
  )
}
