import dynamic from 'next/dynamic'
import React from 'react'

const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false })
const NeuralBackground = dynamic(() => import('../components/NeuralBackground'), { ssr: false })
const SmoothScrollProvider = dynamic(() => import('../components/SmoothScrollProvider'), { ssr: false })
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
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

      <section className="section">
        <div className="container flex gap-12 items-center">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">See Everything. Miss Nothing.</h1>
            <p className="mt-6 text-lg text-gray-300">AI‑Powered Autonomous Security Intelligence</p>
            <div className="mt-8 flex gap-4">
              <a href="mailto:agherapoojan333@gmail.com" className="cta btn-primary">Request Demo</a>
              <a href="#architecture" className="cta btn-ghost">View Architecture</a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <strong>Investor-grade —</strong> Apple‑level polish; Tesla‑level innovation; Palantir‑level intelligence.
            </div>
          </div>
          <div className="flex-1 relative">
            <Hero3D />
          </div>
        </div>
      </section>

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
