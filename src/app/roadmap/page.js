// pages/roadmap.tsx
import EcosystemSection from '@/components/EcoSystemSection'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'

export default function RoadmapPage() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 z-[1]"
        aria-hidden="true"
      />
      <main className="bg-[#0a0a12] text-white font-['Poppins']">

        <Header />


        {/* Hero Section */}
        <section className="text-center px-6 pb-16 relative overflow-hidden ">
          {/* 🖼️ Background Image */}
          <h1
            className="text-4xl md:text-6xl mb-4 text-white leading-[1.3] overflow-visible"
            style={{ fontSize: '54px', fontWeight: 400 }}
          >
            <span
              className="bg-clip-text text-transparent italic inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '62px',
                fontWeight: 700,
                overflow: 'visible',
                paddingRight: '3px',
              }}
            >
              Road Map
            </span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            This is bigger than a sniper bot
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
         SnipersVerse is evolving into a full-blown Web3 platform — part bot, part brand, part gamified financial universe. This page is your portal into the vision. Where we’re going. What we’re building. And how you’ll be part of it.


          </p>
        </section>

        {/* ─── SECTION 1 ───────────────────────────────────────── */}
        <EcosystemSection />



      </main>
    </>
  )
}
