// components/JoinSection.tsx
'use client';

import Image from 'next/image';
import {
  Search,
  ShieldCheck,
  Eye,
  ShoppingCart,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const features = [
  {
    icon: '/join/1i.png',
    title: 'Real‑Time Token Discovery',
    subtitle: 'Be first to find new listings',
  },
  {
    icon: '/join/2i.png',
    title: 'Rug Detection',
    subtitle: 'Smart risk filters',
  },
  {
    icon: '/join/3i.png',
    title: 'Whale Tracking',
    subtitle: 'Catch big money moves',
  },
  {
    icon: '/join/4i.png',
    title: 'Auto‑Buy Engine',
    subtitle: 'Hands‑free sniper advantage',
  },
  {
    icon: '/join/5i.png',
    title: 'Start Free',
    subtitle: 'Try before you upgrade',
  },
];


const metrics = [
  {
    title: 'Tokens Sniped',
    value: '12,000+',
    image: '/join/1.png',
  },
  {
    title: 'Volume Sniped',
    value: '$3.2M+',
    image: '/join/2.png',
  },
  {
    title: 'Active Users',
    value: '1,800+',
    image: '/join/3.png',
  },
  {
    title: 'Fastest Snipe Time',
    value: '0.42 sec',
    image: '/join/4.png',
  },
];


export default function JoinSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Illustration */}
        <div className="flex justify-center lg:justify-center">
          <div className="relative w-104 h-104">
            <Image
              src="/join/side.png"
              alt="Sniper Bot"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: Features list */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Why Join Sniper Bot
          </h2>
          <ul className="space-y-4">
            {features.map(({ icon, title, subtitle }) => (
              <li key={title} className="flex items-start space-x-4 mt-8">
         <div className="w-6 h-6 relative flex-shrink-0 mt-1">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
        </div>
                <div>
                  <h3 className="font-medium">{title} {subtitle}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Social Proof
        </h2>
        <p className='text-gray-500 text-center mb-8' >
     Trusted by top degens worldwide. 
<br/>
SnipersVerse has sniped over $3.2M+ in volume and 12,000+ tokens with activity surging 40% in just the past week.
<br/>
Built for speed. 

Backed by results.</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {metrics.map(({ title, value, image }) => (
   
      <div className="relative w-90 h-40 md:w-70 md:h-70 mb-4 m-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
  ))}
</div>

      </div>
    </section>
  );
}
