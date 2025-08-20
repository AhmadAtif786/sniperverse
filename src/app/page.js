'use client'

import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import Header from '@/components/header';
import CoreFeatures from '@/components/coreFeature';
import FiniconsSection from '@/components/team';
import PricingTiers from '@/components/priceTier';
import JoinCommunity from '@/components/joinUs';

export default function HomePage() {
  // const Header = dynamic(() => import('@/components/header'), { ssr: false });
  const AutoSlider = dynamic(() => import('@/components/autoSlider'), { ssr: false })
  const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
  return (
    <>
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 z-[1]"
        aria-hidden="true"
      />
      <main className="bg-[#0a0a12] text-white font-['Poppins']">

        <Header />


        {/* Hero Section */}
        <section className="text-center px-6 py-2 relative overflow-hidden md:py-16 ">
          {/* 🖼️ Background Image */}



          {/* Hero Content */}
          <div >
            {/* Headline */}
            <h1
              className="text-4xl md:text-6xl mb-4 text-white overflow-visible leading-[1.3]"
              style={{
                fontSize: '54px',
                fontWeight: '400',
                lineHeight: '1.3',
                overflow: 'visible',
              }}
            >
              <span
                className="bg-clip-text text-transparent italic"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '62px',
                  fontWeight: '700',
                  overflow: 'visible',
                  display: 'inline-block', // prevents text clipping
                  paddingRight: '3px',
                }}
              >
                Snipe
              </span>{" "}
              Live{" "}
              <span
                className="bg-clip-text text-transparent italic"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '62px',
                  fontWeight: '700',
                  overflow: 'visible',
                  display: 'inline-block', // prevents text clipping
                  paddingRight: '5px',
                  textShadow: '0 0 1px rgba(0,0,0,0)', // fake expansion
                }}
              >
                Tokens
              </span>
            </h1>

            <h1 className=" text-white mt-4" style={{ fontSize: '54px', fontWeight: '400' }}>
              Score Faster Than The Crowd
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed" style={{ fontSize: '20px', fontWeight: '400' }}>
              Solana Sniper Bot With AI Alerts, Manual Execution, XP Rewards, And Evolving Finicons.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={TELEGRAM_BOT_URL}
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg] cursor-pointer z-10"
              >
                🚀 Launch Bot
              </a>
              <a
                href="/join"
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[#0A0A0A] border border-[#00C965] text-white hover:shadow-md hover:shadow-green-500/20 transition transform rotate-[0.1deg] z-10"
              >
                🛠️ To Join Page
              </a>
              <a
                href="/signup"
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg] z-10"
              >
                🐉 Sign-up page
              </a>
            </div>
          </div>

        </section>


        {/* Partners Section */}

        <AutoSlider />
        {/* Core Bot Functionality Section */}

        <CoreFeatures />


        <FiniconsSection />
        {/* Upgrade Tiers Section */}
        <PricingTiers />

        <JoinCommunity />

        <Footer />
      </main> </>
  );
}