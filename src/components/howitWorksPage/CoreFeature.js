'use client';

import Image from 'next/image';

export default function CoreFeatures() {
    const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
    const features = [
        {
            title: "Auto Buy",
            desc: "Snag new tokens without lifting a finger",
            icon: "/works/auto-buy.png",
        },
        {
            title: "Telegram Buy Button",
            desc: "One tap snipe from your mobile",
            icon: "/tel.png",
        },
        {
            title: "Rug Score + Filters",
            desc: "Avoid traps with smart protections",
                        icon: "/works/filter.png",

        },
        {
            title: "Whale + Wallet Alerts",
            desc: "Track big wallets. Ride smart money",
            icon: "/works/wallet-tracker.png",
        },
        {
            title: "Volume + LP Filters",
            desc: "Only snipe high-quality launches",
            icon: "/works/filter.png",
        },
        {
            title: "Finicon XP System",
            desc: "Earn rare creatures with every snipe",
            icon: "/st.png",
        },
    ];

    return (
        <section className=" py-12 px-4 text-white font-sans">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-white text-2xl font-bold mb-8">
                    Core Features of  <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
            SnipersVerse
          </span>{' '} 
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
  <div
    key={index}
    className="rounded-xl p-[1px] bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D]"
  >
    <div
      className="rounded-xl bg-[#071225] px-6 py-8 flex flex-col items-center gap-3 text-center transition hover:shadow-md"
      style={{
        boxShadow: '0px 0px 8px 0px rgba(0, 229, 255, 0.10)',
      }}
    >
      <Image
        src={feature.icon}
        alt={feature.title}
        width={40}
        height={40}
        className="mb-2"
      />
      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
      <p className="text-sm text-[#BCD4D0]">{feature.desc}</p>
    </div>
  </div>
))}


            </div>

        </div>
        </section >
    );
}
