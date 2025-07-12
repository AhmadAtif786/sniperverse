// components/VisionRoadmapSection.tsx
import Image from 'next/image'
import React from 'react'

const milestones = [
  {
    date: 'Q3 2025',
    title: 'Finicon breeding',
    description:
      'Advanced breeding mechanics with Pokémon style IV systems. Create unique combinations through strategic pairing.',
    linkText: 'Genetic algorithms',
    linkUrl: '#',
    icon: '/breeding.png',
  },
  {
    date: 'Q3-Q4 2025',
    title: 'Launch of Finiconpedia',
    description:
      'Comprehensive wiki with deep lore, trait analysis, and community-driven content creation.',
    linkText: 'Knowledge base',
    linkUrl: '#',
    icon: '/knowledge.png',
  },
  {
    date: 'Q4 2025',
    title: 'Finicon Duels',
    description:
      'Turn-based battle system where trading performance translates to combat power.',
    linkText: 'PvP battles',
    linkUrl: '#',
    icon: '/duels.png',
  },
  {
    date: 'Q3 2025',
    title: 'AI Finicon Assistants',
    description:
      'GPT-powered companions that chat, advise, and react to your trading performance in real time.',
    linkText: 'AI personalities',
    linkUrl: '#',
    icon: '/assistant.png',
  },
  {
    date: 'Q2 2026',
    title: 'SnipersVerse Marketplace',
    description:
      'Trade traits, craft characters, and unlock cosmetic upgrades for your Finicons.',
    linkText: 'Trading hub',
    linkUrl: '#',
    icon: '/marketplace.png',
  },
  {
    date: 'Q3 2026',
    title: 'Cross-Chain Expansion',
    description: 'Expand to Base, Ethereum, and Binance Smart Chain.',
    linkText: 'Cross-chain',
    linkUrl: '#',
    icon: '/bridge.png',
  },
  {
    date: 'Q4 2026',
    title: 'Animated Shorts & Meme Campaigns',
    description: 'Community-driven content creation and viral marketing.',
    linkText: 'Community',
    linkUrl: '#',
    icon: '/community.png',
  },
]

export default function VisionRoadmapSection() {
  return (
    <section
      className="
        relative
        bg-[url('/roadmapbg.png')]
        bg-cover bg-center
        text-gray-100
        py-16
      "
    >
      {/* Dark Overlay */}

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-2">

          <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1">             Vision &amp; Roadmap

          </h3>
          <h2 className="text-center text-white text-2xl font-bold mb-8">
            From sniper alerts to a financial anime universe.


          </h2>


        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Central line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-green-400" />

          <ul className="space-y-16">
            {milestones.map((m, i) => {
              // even index ⇒ left, odd ⇒ right
              const isLeft = i % 2 === 0

              return (
                <li key={i} className="grid grid-cols-9 items-start">
                  {/* Left Card */}
                  {isLeft ? (
                    <div className="col-span-4 pr-8" style={{
                      background: 'radial-gradient(89.5% 1050.94% at 8.92% 31.21%, rgba(5, 255, 217, 0.14) 0%, rgba(255, 255, 255, 0.0448) 100%)', /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
                      borderRadius: '9px',
                      padding: '20px',
                    }}>
                      <div style={{
                        background: 'rgb(22, 69, 45)',
                        width: 'max-content',

                        padding: '5px 10px',

                      }}>
                        <p className="text-sm font-semibold text-green-400"
                          style={{

                            background: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',

                          }}>
                          {m.date}
                        </p>
                      </div>
                      <h3 className="mt-1 text-xl font-bold">{m.title}</h3>
                      <p className="mt-2 text-gray-300">{m.description}</p>
                      <div className="mt-2 flex items-center gap-2 items-center ">
                        <div className='w-2 h-2 rounded' style={{
                          background: 'linear-gradient(90deg, #B95DFF 2.27%, #A100FF 97.73%)'
                        }}>
                        </div>   <p
                          className=" inline-block text-sm font-medium text-gray-200 "
                        >
                          {m.linkText}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="col-span-4" />
                  )}

                  {/* Icon + connector */}
                  <div className="col-span-1 flex flex-col items-center">
                    <span className="z-10 block w-13 h-13 bg-green-400 rounded-full flex items-center justify-center">
                      <Image
                        src={m.icon}
                        alt=""
                        width={36}
                        height={30}
                      />
                    </span>
                    {/* connector to next */}
                    {i < milestones.length - 1 && (
                      <span className="mt-1 block flex-1 w-px bg-green-400" />
                    )}
                  </div>

                  {/* Right Card */}
                  {!isLeft ? (

                    <div className="col-span-4 pr-8" style={{
                      background: 'radial-gradient(89.5% 1050.94% at 8.92% 31.21%, rgba(5, 255, 217, 0.14) 0%, rgba(255, 255, 255, 0.0448) 100%)', /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
                      borderRadius: '9px',
                      padding: '20px',
                    }}>
                      <div style={{
                        background: 'rgb(22, 69, 45)',
                        width: 'max-content',

                        padding: '5px 10px',

                      }}>
                        <p className="text-sm font-semibold text-green-400"
                          style={{

                            background: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',

                          }}>
                          {m.date}
                        </p>
                      </div>
                      <h3 className="mt-1 text-xl font-bold">{m.title}</h3>
                      <p className="mt-2 text-gray-300">{m.description}</p>
                      <div className="mt-2 flex items-center gap-2 items-center ">
                        <div className='w-2 h-2 rounded' style={{
                          background: 'linear-gradient(90deg, #B95DFF 2.27%, #A100FF 97.73%)'
                        }}>
                        </div>   <p
                          className=" inline-block text-sm font-medium text-gray-200 "
                        >
                          {m.linkText}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="col-span-4" />
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
