'use client';

import Image from 'next/image';
import { useState } from 'react';

const features = [
  { title: 'New Token Drops', icon: '/1feat.png' },
  { title: 'Smart \n Filters   ', icon: '/stash_filter.png' },
  { title: 'Telegram \n Alert', icon: '/tel.png' },
  { title: 'Buy \n Button', icon: '/works/auto-buy.png' },
  { title: 'Finicon \n XP', icon: '/fin.png' },
  { title: 'Rewards \n  ', icon: '/fluent_reward-20-filled.png' },
];

const highlights = [
  { text: 'People Make Money',       highlight: 'Make Money'       },
  { text: 'Finicons Reward System',  highlight: 'Finicons'         },
  { text: "It's Fast + Automatic",   highlight: 'Fast + Automatic' },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-4 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {features.map((f, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={f.title}
                onClick={() => setActiveIndex(idx)}
                className="h-full flex flex-col rounded-xl p-[1px] bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D] cursor-pointer"
              >
                <div
                  className={
                    `flex-1 flex flex-col items-center justify-center text-center rounded-xl p-6 transition-all ` +
                    (isActive
                      ? `bg-gradient-to-r from-[#15FFDF] to-[#00C965] shadow-[0_0_20px_rgba(19,242,196,0.5)]`
                      : `bg-[#071225] hover:shadow-md`)
                  }
                >
                  <div
                    className="bg-[#00000026] rounded-full h-15 w-15"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={33}
                      height={29}
                      className="w-7 h-7"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1 whitespace-pre-line mt-4">
                    {f.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* HIGHLIGHT BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {highlights.map(({ text, highlight }) => {
            const [before, after] = text.split(highlight);
            return (
              <button
                key={text}
                className="w-full rounded-xl p-[1px] bg-gradient-to-r from-[#15FFDF4D] to-[#00C9654D]"
              >
                <div
                  className="rounded-xl bg-[#071225] px-6 py-4 flex items-center justify-center text-center transition hover:shadow-md"
                  style={{ boxShadow: '0px 0px 8px rgba(0,229,255,0.1)' }}
                >
                  {before}
                  <span className="mx-1 text-[#00ffad] font-semibold">
                    {highlight}
                  </span>
                  {after}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
