// pages/roadmap.tsx
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Footer from './footer';
import { FaMedium, FaTelegramPlane } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { FaYoutube, FaDiscord } from 'react-icons/fa'

const ecosystemItems = [
  'Finicons – soulbound, evolving avatars tied to your trading style',
  'Token utility – earn XP, unlock perks, flex rare badges',
  'Cross-chain expansion – Base, Ethereum, maybe even op-chains',
  'DAO – founding members, votes on future modules, community-led features',
  'Drops – Finicon airdrops, seasonal events, even IRL gear',
  'Public sniper marketplace – trade, copy-trade, or sell custom filters/scripts',
]

const foundersItems = [
  'Access first-run airdrops',
  'Vote on new feature releases',
  'Share in protocol revenue',
  'Unlock exclusive founder-only perks',
]

const longGameItems = [
  'Real utility people use daily',
  'A meme ecosystem that makes people care',
  'Token mechanics that reward long-term holders',
  'A visual and collectible layer that keeps it fun',
  'An AI layer that ties it all together',

]

export default function RoadmapPage() {
  return (
    <div>



      {/* ───── Section 1: Ecosystem ───────────────────────────────── */}
      <section className="py-16 mt-30">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* text */}
          <div className="space-y-6">
            <p style={{ fontSize: '20px' }} className="inline-block font-semibold bg-gradient-to-r from-[#15FFDF] to-[#00C965] bg-clip-text text-transparent">

              The Bot Is Just the Beginning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              From sniper to ecosystem.
            </h2>
            <p className="text-gray-300 leading-relaxed" style={{ color: '#FFEDEDCC', fontSize: '16px' }}>
              We started with a Solana sniper bot — clean, fast, early entries, with smart filtering
              and whale-tracking. But SnipersVerse was always built to be more than that.
            </p>
            <h3 className="text-lg font-semibold">What we’re building next:</h3>
            <ul className="space-y-3">
              {ecosystemItems.map((item) => (
                <li key={item} className="flex items-start">
                  <Image src="/checkmark.png" alt="Checkmark" width={20} height={20} className="mt-1" />
                  <span className="ml-3 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* globe image */}
          <div className="mx-auto relative">
            <Image
              src="/1R.png"
              alt="Foreign Exchange Globe"
              width={480}
              height={560}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ───── Section 2: Finicon Evolution ─────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* diamond */}
          <div className="mx-auto  relative">
            <Image
              src="/2R.png"
              alt="Finicon Evolution Diamond"
              width={512}
              height={512}
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="space-y-4">
            <p style={{ fontSize: '20px' }} className="inline-block font-semibold bg-gradient-to-r from-[#15FFDF] to-[#00C965] bg-clip-text text-transparent">
              Finicons – soulbound, quantified identity
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              The more you snipe, the <br /> more your Finicon evolves.
            </h2>
            <p className="leading-relaxed"
              style={{ color: '#FFEDEDCC', fontSize: '16px' }}>
              Each wallet gets a Finicon — a mythical creature that evolves as you trade. They gain traits based on your strategy, risk tolerance, and XP score.<br /><br />
              These aren’t PFPs. They’re your soulbound, collectible, memetic identity within SnipersVerse.<br /><br />Some will be common. Others will be absurdly rare. And one — just one — will be a legendary multi-million spawn.
            </p>
            <p className="text-white">
              We’re building what Pokémon would have been if it launched on Solana.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Section 3: Founders Banner ───────────────────────────── */}
      <section className="text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className=" rounded-2xl p-8 space-y-12"
            style={{
              background: '#D9D9D912'
            }}>
            {/* — Header */}
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase 
                      bg-gradient-to-r from-[#15FFDF] to-[#00C965] 
                      bg-clip-text text-transparent mt-15">
                SnipersDAO – Not Just Governance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                You’re not just a user — you’re a founder.
              </h2>
              <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#FFEDEDCC', fontSize: '16px' }}>
                The top 100 wallets by XP in Season 0 will form the founding circle of the SnipersDAO.
              </p>
            </div>

            {/* — Body */}
            <div className="md:flex items-start gap-8">
              {/* Left: grid list */}
              <div className="flex-1 space-y-4">
                <p className="text-gray-200 font-medium" style={{ fontSize: '20px' }}>
                  This isn’t just some voting gimmick. Founders will:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    "Vote on feature releases",
                    "Shape tokenomics",
                    "Help write the lore and IP that powers SnipersVerse",
                    "Get first access to new Finicon drops",
                    "Share revenue on advanced modules"
                  ].map((text, idx) => (
                    <li key={idx} style={{ color: '#BCD4D0' }} className="flex items-start">
                      <Image
                        alt="Checkmark"
                        src="/checkmark.png" height={20} width={20} />
                      <span className="ml-3">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white mt-4" style={{ fontSize: '20px' }}>
                  We’re building this together. Not for you — with you.
                </p>
              </div>

              {/* Right: swirl */}
              <div className="flex-none mx-auto md:mx-0">
                <Image
                  src="/3R.png"
                  alt="Founders’ Reward Swirl"
                  width={287}
                  height={287}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ───── Section 4: The Long Game ─────────────────────────────── */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* ninja */}
          <div className="mx-auto  relative">
            <Image
              src="/4R.png"
              alt="Level Up Ninja"
              width={512}
              height={512}
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase 
                      bg-gradient-to-r from-[#15FFDF] to-[#00C965] 
                      bg-clip-text text-transparent">
              Our infinite cycle
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              $100M Meme + Utility + Brand = The Long Game
            </h2>
            <p className="text-gray-300 leading-relaxed"
              style={{ color: '#FFEDEDCC', fontSize: '16px' }}>
              We’re not chasing hype. We’re building something that sticks.
              <span className='text-white font-semibold'>Our roadmap is focused on: </span>
            </p>
            <ul className="space-y-3">
              {longGameItems.map((item) => (
                <li key={item} className="flex items-start" style={{ color: '#BCD4D0', fontSize: '16px' }}>
                  <Image src="/checkmark.png" alt="Checkmark" width={20} height={20} className="mt-1" />

                  <span className="ml-3 text-white">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white mt-4" style={{ fontSize: '20px', fontWeight: '500' }}>
              If we execute — <span className='  bg-gradient-to-r from-[#15FFDF] to-[#00C965] 
                      bg-clip-text text-transparent'>this is a $100M+ platform</span>. Not off fluff. Off function, fun, and fire.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#0A0F2C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Glowing globe illustration */}
          <div className="flex justify-center "
            style={{ marginBottom: '-250px' }}
          >
            <Image
              src="/globe.png" // Replace with your animation or image
              alt="Globe"
              width={695}
              height={614}
              className="animate-pulse z-2"
            />
          </div>

          <section className="py-16 bg-[#0e1e2c] text-white">
            <div className="container mx-auto px-6 lg:px-8 text-center space-y-6">
              {/* — Heading */}
              <h2 className="text-3xl md:text-4xl font-light mt-70">
                Join Our&nbsp;
                <span
                  className="font-bold bg-gradient-to-r from-[#15FFDF] to-[#00C965]
                       bg-clip-text text-transparent"
                >
                  Verse
                </span>
              </h2>

              {/* — Subhead */}
              <p className="text-xl">We’re building it now. You in?</p>

              {/* — Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-[#15FFDF] to-[#00C965]
                       text-black shadow-md hover:opacity-90 transition"
                >
                  <FaTelegramPlane /> Join Our Telegram
                </button>
                <a className="flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-[#00C965] text-[#00C965] rounded-md font-semibold hover:bg-gray-700 transition">
                  {/* group icon */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zm-7 8a4 4 0 118 0H6z" />
                  </svg>
                  <span>Mint Your Finicon</span>
                </a>
              </div>

              {/* — Coming Soon Card */}
              <div
                className="mt-10 inline-flex items-center space-x-4
                     bg-[#0a1e33] rounded-xl px-6 py-4"
              >
                <div className='w-30 md:w-100'>
                  <div className="bg-[#0e1e2c] p-3 rounded-full w-max m-auto mb-3" >
                    <Image
                      src="/copy.png"
                      alt="DAO Pape"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-[#00FF9F] font-medium">DAO Pape</span>
                  <span className="text-gray-400">– Coming Soon</span>
                </div></div>

              {/* — Social / app links */}

              <div className="flex justify-center gap-4 mt-10 text-xl">
                <a href="https://x.com/SnipersVerses" className="hover:text-green-400">
                  <FiX />
                </a>
                <a href="https://discord.gg/uYFFSDbw" className="hover:text-green-400">
                  <FaDiscord />
                </a>
                <a href="#" className="hover:text-green-400">
                  <FaMedium />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}

      </section>
      <Footer />
    </div>
  )
}
