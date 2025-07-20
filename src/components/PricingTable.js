// components/PlanComparisonTable.tsx
import Image from 'next/image'
import React from 'react'

const plans = [
  'FREE TIER',
  'PRO (£19.99/mo)',
  'PRO+ (£29.99/mo)',
  'FOUNDERS (£49.99/mo)',
]

const check = true
const cross = false

const data = [
  {
    title: '🧠 Core Sniping Tools',
    features: [
      { name: 'Manual Sniping', values: [check, check, check, check] },
      { name: 'Auto‑Buy Engine', values: [cross, check, check, check] },
      { name: 'Wallet Whitelists', values: [cross, check, check, check] },
      { name: 'Cooldown Reduction', values: [cross, check, check, check] },
      { name: 'Priority Alerts', values: [cross, check, check, check] },
      { name: 'Document Authentication', values: [check, check, check, check] },
      { name: 'AI Rug Scoring', values: [check, check, check, check] },
      { name: 'Basic Snipe Log', values: [check, check, check, check] },
      { name: 'Auto‑Sell (Coming August 2025)', values: [cross, check, check, check] },
    ],
  },
  {
    title: '🎮 XP & Progression',
    features: [
      { name: 'XP Tracking', values: [check, check, check, check] },
      { name: 'Invite XP Multiplier', values: [cross, check, check, check] },
      { name: '2× XP Boost (Permanent)', values: [cross, check, check, check] },
      { name: '2× Invite XP Multiplier', values: [cross, cross, check, check] },
      { name: 'Monthly Trait Reroll', values: [cross, cross, check, check] },
      { name: 'Early Airdrop Priority', values: [cross, cross, check, check] },
    ],
  },
  {
    title: '🐉 Finicon Features',
    features: [
      { name: 'Trait Boost Access', values: [check, check, check, check] },
      { name: 'Trait Crafting (Coming August 2025)', values: [cross, check, check, check] },
      { name: 'Monthly Trait Reroll', values: [cross, cross, check, check] },
      { name: 'Finicon Class Unlocks', values: [cross, cross, check, check] },
    ],
  },
  {
    title: '🌐 Community & Access',
    features: [
      { name: 'Monthly Reroll + Voting Rights', values: [cross, cross, cross, check] },
      { name: 'OG Bot Badge', values: [cross, cross, cross, check] },
      { name: 'Merch + Drop Priority', values: [cross, cross, cross, check] },
      { name: 'Invite Link', values: [check, check, check, check] },
      { name: 'Early Feature Access', values: [cross, cross, cross, check] },
    ],
  },
]

export default function PlanComparisonTable() {
  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-bold text-center mb-12"
          style={{ fontSize: '64px', fontWeight: 600 }}
        >
          Compare Plans
        </h2>

        <div className="overflow-x-auto">
          {/* Desktop header table */}
          <table className="hidden md:table w-full table-fixed mb-6">
            <colgroup>
              <col className="w-1/3" />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr
                className="bg-[#101627]"
                style={{ backdropFilter: 'blur(32px)', fontSize: '14px' }}
              >
                <th className="p-4 text-left font-semibold text-gray-300 rounded-tl-lg">
                  FEATURES NAME
                </th>
                {plans.map((plan, pi) => (
                  <th
                    key={pi}
                    className={`p-4 text-center font-semibold text-gray-300 ${pi === plans.length - 1 ? 'rounded-tr-lg' : ''
                      }`}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
          </table>

          {/* Mobile header cards */}


          <div className="hidden md:table space-y-12">
            {data.map((section, si) => (
              <div key={si} >
                {/* Section title */}
                <div className="text-white font-bold px-4 py-2 bg-[#0b0f1c] rounded-t-md text-sm">
                  {section.title}
                </div>

                {/* Desktop section table */}
                <table
                  className="hidden md:table w-full table-fixed bg-[#0b0f1c] rounded-b-md overflow-hidden"
                  style={{ border: '1px solid #FFFFFF1F' }}
                >
                  <colgroup>
                    <col className="w-1/3" />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <tbody>
                    {section.features.map((feature, fi) => (
                      <tr
                        key={fi}
                        className="hover:bg-[#151a2e]"
                        style={{ borderBottom: '1px solid #FFFFFF0D' }}
                      >
                        <td className="p-4 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            {feature.name}
                            <Image
                              src="/i.png"
                              alt="Info"
                              width={16}
                              height={16}
                            />
                          </div>
                        </td>
                        {feature.values.map((value, vi) => (
                          <td key={vi} className="p-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <Image
                                src={
                                  value
                                    ? '/greencheck.png'
                                    : '/maki_cross.png'
                                }
                                alt={value ? 'Yes' : 'No'}
                                width={16}
                                height={16}
                              />
                              <span className="text-white">
                                {value ? 'Yes' : 'No'}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>


              </div>
            ))}
          </div>
        </div>
        {/* ————— Mobile‑only table ————— */}
        <div className="md:hidden overflow-x-auto mb-6">
          <table className="min-w-[600px] w-full table-fixed bg-[#0b0f1c] rounded-md">
            <colgroup>
              <col className="w-1/3" />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="bg-[#101627]" style={{ backdropFilter: 'blur(32px)', fontSize: '14px' }}>
                <th className="p-4 text-left font-semibold text-gray-300">FEATURE</th>
                {plans.map((plan, pi) => (
                  <th key={pi} className="p-4 text-center font-semibold text-gray-300">
                    {plan.replace(/ .*/, '') /* show just “FREE”, “PRO”, etc. or adjust */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((section) => (
                <React.Fragment key={section.title}>
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-2 font-semibold text-gray-300 bg-[#0b0f1c] text-sm"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.features.map((feat) => (
                    <tr key={feat.name} className="hover:bg-[#151a2e]">
                      <td className="p-4 text-sm text-gray-300">{feat.name}</td>
                      {feat.values.map((val, idx) => (
                        <td key={idx} className="p-4 text-center">
                          <Image
                            src={val ? '/greencheck.png' : '/maki_cross.png'}
                            alt={val ? 'Yes' : 'No'}
                            width={16}
                            height={16}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        {/* ———————————————————————————————— */}

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center mb-2 md:mb-0">
            Cancel anytime. No commitments
          </p>
          <button
            className="bg-white text-black text-sm px-4 py-2 rounded-md"
            style={{ minWidth: '145px', fontSize: '13px', fontWeight: 600, minHeight: '45px' }}
          >
            Start Free
          </button>
          <button
            className="text-sm px-4 py-2 rounded-md text-black"
            style={{
              minWidth: '145px',
              fontSize: '13px',
              fontWeight: 600,
              minHeight: '45px',
              background: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
            }}
          >
            Upgrade to Pro
          </button>
          <button
            className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-md"
            style={{
              minWidth: '145px',
              fontSize: '13px',
              fontWeight: 600,
              minHeight: '45px',
              background: 'linear-gradient(90deg, #FFE609 2.27%, #BB8300 97.73%)',
            }}
          >
            Get Pro+ Now
          </button>
          <button
            className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md"
            style={{
              minWidth: '145px',
              fontSize: '13px',
              fontWeight: 600,
              minHeight: '45px',
              background: 'linear-gradient(90deg, #B95DFF 2.27%, #A100FF 97.73%)',
            }}
          >
            Join Founders Tier
          </button>
        </div>
      </div>
    </section>
  )
}
