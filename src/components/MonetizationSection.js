// components/MonetizationSection.tsx
import Image from 'next/image'
import React from 'react'




const plans = [
  {
    stage: 'Stage 1',
    title: 'Freemium Bot',
    tiers: [
      {
        name: 'Free Tier',
        items: [
          'Basic alerts',
          '1 Finicon',
          'Standard-response time',
        ],
      },
      {
        name: 'Paid Tier',
        items: [
          'Faster alerts',
          'Auto-buy features',
          'Elite Finicon images',
          'Priority access',
        ],
      },
    ],
  },
  {
    stage: 'Stage 2',
    title: 'Token Launch',
    subtitle: 'Q4 2025 – Q1 2026',
    tiers: [
      {
        name: 'Utility',
        items: [
          'Premium access',
          'DAO voting rights',
          'Finicon trait rerolls',
          'Community events access',
        ],
      },
      {
        name: 'Revenue',
        items: [
          '% of subscription fees',
          'Trait marketplace fees',
        ],
      },
    ],
  },
  {
    stage: 'Stage 3',
    title: 'Finicon Ecosystem',
    tiers: [
      {
        name: 'Soulbound NFTs',
        items: [
          'Tied to your wallet',
          'Trait rarity determines value',
          'Standard response time',
        ],
      },
      {
        name: 'Future Resale',
        items: [
          'Synthetic swappers',
          'Marketplace mechanics',
          'Trait trading',
        ],
      },
    ],
  },
]

export default function MonetizationSection() {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1"> Monetization
          </h3>
          <h2 className="text-center text-white text-2xl font-bold mb-8">
            Free to try. Built to print.

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.stage}
              style={{
                background: 'radial-gradient(89.5% 1050.94% at 8.92% 31.21%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.0224) 100%)' /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
              }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col"
            >
              <div className="space-y-1 text-center ">
                <p className="inline-block text-sm font-semibold bg-gradient-to-r from-[#15FFDF] to-[#00C965] bg-clip-text text-transparent">
                  {plan.stage}
                </p>

                <h3 className="text-xl font-bold "
                  style={{
                    fontWeight: 700,
                    fontSize: 24
                  }}
                >{plan.title}</h3>
                {plan.subtitle && (
                  <p className="text-xs text-gray-400">({plan.subtitle})</p>
                )}
              </div>

              <div className="mt-6 space-y-6 flex-1">
                {plan.tiers.map((tier) => (
                  <div key={tier.name} className="space-y-3"
                    style={{
                      background: '#FFFFFF0A',
                      borderRadius: '9px',
                      padding: '20px',
                    }}>
                    <h4 className="uppercase  font-poppins        /* make sure you’ve added Poppins in your tailwind.config.js */
  font-bold
  text-[11px]
  leading-[16.9px]
  tracking-[0.14em]
  uppercase
  bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)]
  bg-clip-text
  text-transparent">
                      {tier.name}
                    </h4>
                    <ul className="space-y-2">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start space-x-3 mt-4">
                          <Image src="/smallcheckmark.png" alt="Checkmark" width={12} height={16} className="mt-1" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
