// components/DifferenceSection.tsx
import Image from 'next/image'

const cards = [
  {
    title: 'Real‑Time Solana Indexing',
    icon: '/tabler_currency-solana.png',
    description: 'No lag. See new tokens the second they appear',
  },
  {
    title: 'Smart Snipe Filters',
    icon: '/iconoir_brain.png',
    description: 'Filter by LP, deployer wallet, volume, rug score',
  },
  {
    title: 'Gamified Rewards',
    icon: '/game.png',
    description:
      'Your snipes level up Finicons—some evolve into ultra‑rares worth serious money',
  },
  {
    title: 'Freemium + Simple Onboarding',
    icon: '/hand.png',
    description: 'No wallet needed. Just jump in via Telegram',
  },
]

export default function DifferenceSection() {
  return (
    <section className="bg-[#01061a] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          What Makes{' '} <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
            SnipersVerse
          </span>{' '}
          Different?
        </h2>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {cards.map(({ title, icon, description }) => (
            <div
              key={title}
              className="
                h-full flex flex-col
                rounded-xl p-[1px]
                bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D]
              "
            >
              <div
                className="
                  flex-1 bg-[#071225] rounded-xl
                  p-6 flex items-start gap-4
                  transition hover:shadow-md
                "
                style={{ boxShadow: '0px 0px 8px rgba(0,229,255,0.1)' }}
              >
                <div className="
                  bg-[#00000026] rounded-full h-12 w-12
                  flex items-center justify-center
                ">
                  <Image src={icon} alt={title} width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-[#BCD4D0]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
