// components/ReadySection.tsx
import Image from 'next/image'

const steps = [
  { icon: '/tel.png', label: 'Join Telegram' },
  { icon: '/works/wallet-tracker.png',   label: 'Connect Wallet' },
  { icon: '/st.png',  label: 'Start Sniping' },
]

export default function ReadySection() {
  return (
    <section className="bg-[#01061a] py-16 px-4 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D] overflow-hidden">
          {/* Inner dark panel */}
          <div className="bg-[#071225] rounded-xl p-8 pt-12 flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Ready to Catch the{' '}
              <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
                Next 100x Gem?
              </span>
            </h2>
            {/* Subtext */}
            <p className="text-sm text-[#BCD4D0]">
              Start sniping free in under 60 seconds. No wallet. No signup forms
            </p>

            {/* Steps */}
            <div className="mt-8  w-full">
              <div className=" md:flex items-center justify-center space-y-4 space-x-4 px-4">
                 {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  {/* step pill */}
                  <div className="rounded-lg p-[1px] bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D] min-w-[200]">
                    <div
                      className="bg-[#071225] rounded-lg px-5 py-2.5 flex items-center gap-2 transition hover:shadow-md"
                      style={{ boxShadow: '0px 0px 8px rgba(0,229,255,0.1)' }}
                    >
                      <Image src={step.icon} alt={step.label} width={20} height={20} />
                      <span className="text-sm text-white font-medium">
                        {step.label}
                      </span>
                    </div>
                  </div>

                  {/* arrow */}
                  {i < steps.length - 1 && (
                    <svg
                      className="w-6 h-6 text-[#00ffad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/reserve"
                className="
                  inline-block px-8 py-3 rounded-lg font-medium  mb-20
                  bg-gradient-to-r from-[#15FFDF] to-[#00C965]
                  text-black shadow-md hover:opacity-90 transition
                "
              >
                Launch Sniper Bot on Telegram
              </a>
            </div>

            {/* Bottom fade bar */}
            <div className="absolute bottom-0 left-0 w-full py-4 px-6"
            style={{background: 'linear-gradient(180deg, rgba(21, 255, 223, 0.33) 0%, #00C965 100%)'
}}>
              <p className="text-center text-md font-[700] text-white">
                Built for Solana. Auto-buy, alerts, Finicon XP, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
