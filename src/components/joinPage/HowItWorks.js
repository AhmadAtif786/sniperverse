'use client';
import { Send, Bell, TrendingUp, ShoppingCart } from 'lucide-react';

const STEPS = [
  { icon: Send, number: '01', title: 'Join via Telegram', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  { icon: Bell, number: '02', title: 'Get Live Alerts', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  { icon: TrendingUp, number: '03', title: 'Snipe & Profit', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  { icon: ShoppingCart, number: '04', title: 'Upgrade for Auto‑Buy Features', desc: 'Lorem ipsum dolor sit amet consectetur.' },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gray-900 py-24 overflow-visible">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-semibold text-white">How It Works</h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#15FFDF] to-[#00C965] rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold text-gray-300">{step.number}</span>
              </div>
              <h3 className="text-lg font-medium text-white">{step.title}</h3>
              <p className="text-sm text-gray-400 max-w-[220px] text-center md:text-start">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
