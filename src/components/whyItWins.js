// components/WhyItWinsSection.tsx
import Image from 'next/image'
const features = [
  {
    title: 'Memeability Baked In',
    description: 'Finicons are made to go viral: seasonal drops, soulbound flex, meme formats, cosplay contests',
  },
  {
    title: 'Built for Degens, Not Normies',
    description: 'Every feature has a performance edge (alert speed, LP filters, rug score, inflow signals)',
  },
  {
    title: 'AI in the DNA',
    description: 'Not just buzzwords. GPT-driven Finicons will become companions, not just trackers',
  },
  {
    title: 'Web3-Native Virality',
    description: 'Collectible traits, status flex, evolution events → natural Telegram/Discord spread',
  },
  {
    title: 'Future-Proof',
    description: 'Solana-first now, Base and cross-chain later. Modular infra for CEX sniping and cross-chain Finicon evolution',
  },
]

export default function WhyItWinsSection() {
  return (
   <section className="bg-gray-900 text-gray-100 pb-0 pt-16 sm:pb-12 md:pb-16">

     <div className="max-w-7xl mx-auto text-center mb-12">
      <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1"> Why It Wins</h3>
                <h2 className="text-center text-white text-2xl font-bold mb-8">
                                       This isn’t just another sniper bot. It’s a world.
  </h2>
      
      </div>
    
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left column */}
        <div className="flex-1 max-w-xl space-y-6">
        

          <ul className="space-y-4">
            {features.map((f, idx) => (
              <li
                key={idx}
                style={{ borderRadius: '36px' }}
                className={`flex items-start space-x-4 p-4 rounded-lg ${
                  f.highlighted
                    ? 'border-2 border-green-400 bg-gray-800'
                    : 'bg-gray-800/50'
                }`}
              >
                {/* inline SVG checkmark */}
                <div className="flex-shrink-0 mt-1">
                <Image src='/checkmark.png' className='mt-3' alt="Checkmark" width={43} height={43} />
                </div>

                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      f.highlighted ? 'text-white' : 'text-gray-100'
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="flex-1 w-full">
  <div className="relative w-full h-64 sm:h-80 md:h-[24rem] lg:h-[28rem]">
    <Image
      src="/OBJECTS.png"
      alt="Illustration of the Finicon world"
      fill
      className="object-contain"
      priority // Optional: ensures it loads early
    />
  </div>
</div>

      </div>
    </section>
  )
}
