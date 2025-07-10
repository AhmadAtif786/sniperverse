'use client';

import Image from 'next/image';

export default function CoreFeatures() {
    const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
    const features = [
        {
            title: "Auto Buy",
            desc: "Snipe tokens the moment they drop",
            icon: "/works/auto-buy.png",
        },
        {
            title: "Rug Score Detection",
            desc: "Helps avoid scams",
            icon: "/works/rug-score.png",
        },
        {
            title: "Volume Spike Alerts",
            desc: "(coming soon)",
            icon: "/works/volume-spike.png",
        },
        {
            title: "Wallet Tracker",
            desc: "See where smart money is going",
            icon: "/works/wallet-tracker.png",
        },
        {
            title: "Category & LP Filtering",
            desc: "Category & LP Filtering",
            icon: "/works/filter.png",
        },
        {
            title: "Telegram",
            desc: "Telegram Buy Button Integration",
            icon: "/works/telegram.png",
        },
    ];

    return (
        <section className="bg-[#01061a] py-12 px-4 text-white font-sans">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1">How It Works</h3>
                <h2 className="text-center text-white text-2xl font-bold mb-8">
                    Core Features of SnipersVerse
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

            <div className="text-center mt-10">
                <a
                    href={TELEGRAM_BOT_URL}
                    className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]"
                >
                    🚀 Launch SnipersVerse Bot
                </a>
            </div>
        </div>
        </section >
    );
}
