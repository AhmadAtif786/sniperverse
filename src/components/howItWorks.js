'use client'

import Image from 'next/image'

const features = [
  {
    number: '01',
    title: 'Token Sniper Bot',
    desc: 'Live on Telegram. Solana-first. Filters rugs, detects inflows, alerts instantly.',
    icon: '/tw.png',
  },
  {
    number: '02',
    title: 'Finicons: Soulbound Creatures',
    desc: 'Your wallet’s performance shapes your Finicon’s growth. It’s not just for flex — ultra-rare Finicons could become million-dollar collectibles.',
    icon: '/ca.png',
  },
  {
    number: '03',
    title: 'AI Engine',
    desc: 'Each Finicon has AI-backed personality traits, memetic reactions, and eventual in-chat replies. We’re training GPT agents to power lore, advice, and evolution reactions in real time.',
    icon: '/mi.png',
  },
  {
    number: '04',
    title: 'DAO + Token Utility',
    desc: 'Governance, access to elite alpha, early token snipes, revenue share from bot usage, and exclusive Finicon drops all get tied to the future token.',
    icon: '/bo.png',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#040720] text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20">
      {/* Heading */}
      <div className="max-w-3xl text-center mb-12">
        <h3 className="text-sm text-[#00FF9F] font-semibold tracking-widest uppercase mb-2">
          How It Works
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Built by degens, for degens — with AI, lore, and <br /> automation at the core.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] gap-y-20">
        {features.map((f) => (
          <div
            key={f.number}
            className="p-[1px] rounded-xl bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D] w-[338px]"
          >
            <div className="relative bg-[#071225] rounded-xl p-6 h-full flex flex-col hover:shadow-[0_0_8px_rgba(0,229,255,0.1)]">
              <Image src={f.icon} alt={f.title} width={75} height={75} className="mb-3" />
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-[#BCD4D0] flex-1">{f.desc}</p>
              <span
                className="absolute top-4 right-6 text-[#5F7998] font-bold opacity-30"
                style={{
                  fontSize: 47.52,
                }}
              >
                {f.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
