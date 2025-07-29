'use client'

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import gif from '@/assets/gifgit2.gif';
import Header from '@/components/header';
import HowItWorks from '@/components/howItWorks';
import WhyItWinsSection from '@/components/whyItWins';
import MonetizationSection from '@/components/MonetizationSection';
import VisionRoadmapSection from '@/components/VisionRoadmapSection';
import VisionJoinUs from '@/components/visionJoinUs';
import Footer from '@/components/footer';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="px-6 py-20 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
}

export default function VisionPage() {
  const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
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



          {/* Hero Content */}
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 pb-12">
  {/* Left Image */}
  <img
    src="/lefthero.png"
    alt="Left Graphic"
    className="hidden md:block w-1/4 lg:w-1/5"
  />

  {/* Center Content */}
  <div className="flex-1 text-center px-4">
    {/* Headline */}
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
        Snipe the future
      </span>
    </h1>
    <h1 className="text-white mt-4" style={{ fontSize: '54px', fontWeight: 400 }}>
      Evolve your legend.
    </h1>

    {/* Subtext */}
    <p
      className="text-gray-300 mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
      style={{ fontSize: '20px', fontWeight: 400 }}
    >
      The AI-powered sniper bot where every trade evolves your Finicon — a mythical soulbound collectible.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <a
        href="https://juicebox.money/v4/eth:111?tabid=about"
        className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition"
      >
        🚀 Live on Juicebox
      </a>
      <a
        href="/upgrade"
        className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[#0A0A0A] border border-[#00C965] text-white hover:shadow-md hover:shadow-green-500/20 transition"
      >
        🛠️ Join the Bot
      </a>
    </div>
  </div>

  {/* Right Image */}
  <img
    src="/righthero.png"
    alt="Right Graphic"
    className="hidden md:block w-1/4 lg:w-1/5"
  />
</div>


        </section>
        <section className="bg-[#040720] py-16 px-6 md:px-12 text-white">
          <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1">What is SnipersVerse?</h3>
                <h2 className="text-center text-white text-2xl font-bold mb-8">
                  The world’s first sniper bot where performance <br/> unlocks evolving AI-powered collectibles.
                </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-15">
         
            {/* Phone Image */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
  <Image
    src="/mobile.png"
    alt="Phone"
    width={280}
    height={440}
    className="object-contain"
  />

  <Image
    src="/avatar.png"
    alt="Finicon"
    width={320}
    height={440}
    className="object-contain"
  />
</div>

            {/* Text Content */}
            <div className='pr-10'>
              <h2 style={{
                fontWeight: 400,
                fontSize: 20,
                color: '#FFEDEDCC'

              }}
                className="leading-relaxed text-gray-200 pl-10">
                SnipersVerse is a sniper bot built for serious degens who want the edge — but with a twist.
                Every snipe you take, every token you hold, feeds a living, evolving Finicon — a mythical digital creature
                powered by your trading habits.
              </h2>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                color: '#FFEDEDCC'

                }} className="text-base md:text-lg font-semibold text-white mt-4 pl-10">
                <span className="text-white">
                  Think Pokémon meets pump.fun meets  ChatGPT.
                </span>
              </p>
            </div>
          </div>
        </section>
        <HowItWorks />

        <WhyItWinsSection/>
        <MonetizationSection />
        <VisionRoadmapSection />
        <VisionJoinUs/>
        
        <Footer/>
      </main>
    </>
  );
}