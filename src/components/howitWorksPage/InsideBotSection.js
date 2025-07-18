// components/InsideBotSection.tsx
import Image from 'next/image'

const items = [
  {
    title: 'Token Alert',
    image: '/1inside.png',
    caption: 'Showing a token alert + auto‑buy trigger',
  },
  {
    title: 'Smart Scan & Filters',
    image: '/2inside.png',
    caption: 'Showing rug score + filters',
  },
  {
    title: 'Your Finicon Leveled Up!',
    image: '/3inside.png',
    caption: 'Showing a Finicon earning XP or evolving',
  },
]

export default function InsideBotSection() {
  return (
    <section className="bg-[#01061a] text-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Here’s What You See
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
            Inside the Bot
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {items.map(({ title, image, caption }) => (
            <div
              key={title}
               className="
                bg-[#0A192F] rounded-xl border border-teal-400/20
                p-1 flex flex-col transition hover:border-teal-400/60
              "
              style={{minHeight:'476px'}}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
                </div>
              
                <p className="text-sm text-center py-4  text-white"
                
                style={{fontSize:'16px',fontWeight:'700'}}>{caption}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
