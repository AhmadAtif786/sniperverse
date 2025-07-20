// components/PricingSection.tsx
'use client';

import { useState } from 'react';
import PricingCard from '../PricingCards';
import Image from 'next/image';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  /** Monthly + Annual data */
  const plans = [
    {
      title: 'Free Tier',
      subtitle: 'Solid if you’re just checking it out.',
      monthlyPrice: '£0',
      annualPrice: '£0/yr',
      monthlyFeatures: [
        'Manual Sniping',
        'AI Rug Scoring',
        'XP Tracking',
        'Invite Links',
        'Basic Snipe Log',
      ],
      // same set of features on annual
      annualFeatures: [
        'Manual Sniping',
        'AI Rug Scoring',
        'XP Tracking',
        'Invite Links',
        'Basic Snipe Log',
      ],
      buttonText: 'Start Free',
      buttonColor: 'bg-white hover:bg-gray-100 text-black',
    },
    {
      title: 'Pro',
      subtitle: 'Where the real edge begins.',
      monthlyPrice: '£19.99/mo',
      annualPrice: '£192/yr',
      monthlyFeatures: [
        'Auto-buy Engine',
        'Wallet Whitelists',
        'Cooldown Reduction',
        'Priority Alerts',
        'Trait Boost Access',
        'Invite XP Multiplier',
        'Auto-sell (Soon)',
      ],
      // all Pro features plus save copy
      annualFeatures: [
        'Auto-buy Engine',
        'Wallet Whitelists',
        'Cooldown Reduction',
        'Priority Alerts',
        'Trait Boost Access',
        'Invite XP Multiplier',
        'Auto-sell (Soon)',
        'Save over £47 with annual billing',
      ],
      buttonText: 'Upgrade to Pro',
      buttonColor: 'bg-green-500 hover:bg-green-400 text-white',
      priceGradient: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
    },
    {
      title: 'Pro+ XP Pack',
      subtitle: 'Max XP. More edge. Real tools.',
      monthlyPrice: '£29.99/mo',
      annualPrice: '£288/yr',
      monthlyFeatures: [
        'All Pro Features',
        '2× XP Boost (Permanent)',
        '2× Invite XP Multiplier',
        'Monthly Trait Reroll',
        'Early Airdrop Priority',
        'Trait Crafting (Soon)',
      ],
      annualFeatures: [
        'All Pro Features',
        '2× XP Boost (Permanent)',
        '2× Invite XP Multiplier',
        'Monthly Trait Reroll',
        'Early Airdrop Priority',
        'Trait Crafting (Soon)',
        'Save over £71 with annual billing',
      ],
      buttonText: 'Get Pro+ Now',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-300 text-black',
      highlighted: true,
      badge: 'Most Popular',
      priceGradient: 'linear-gradient(90deg, #FFE609 2.27%, #BB8300 97.73%)',
    },
    {
      title: 'Founders Tier',
      subtitle: 'Built for day ones. Apex tools, future‑proofed.',
      monthlyPrice: '£49.99/mo',
      annualPrice: '£480/yr',
      monthlyFeatures: [
        'All Pro+ Benefits',
        'Early Feature Access',
        'Finicon Class Unlocks',
        'Trait Staking Beta',
        'OG Bot Badge',
        'Monthly Reroll, Voting Rights',
        'Merch + Drop Priority',
      ],
      annualFeatures: [
        'All Pro+ Benefits',
        'Early Feature Access',
        'Finicon Class Unlocks',
        'Trait Staking Beta',
        'OG Bot Badge',
        'Monthly Reroll, Voting Rights',
        'Merch + Drop Priority',
        'Save over £119 with annual billing',
      ],
      buttonText: 'Join Founders Tier',
      buttonColor: 'bg-purple-600 hover:bg-purple-500 text-white',
      borderColor: 'border-purple-600',
      priceGradient: 'linear-gradient(90deg, #B95DFF 2.27%, #A100FF 97.73%)',
    },
  ];

  return (
    <section className="py-16 px-4">
      {/* Toggle */}
      <div className="flex justify-center items-center mb-12 space-x-4">
        <span className='text-white'>
          Monthly
        </span>

        <button
          onClick={() => setIsAnnual(prev => !prev)}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
            isAnnual ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isAnnual ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>

        <span className={'text-white'}>
          Annually 
        </span>
        <Image src='/join/save.png'  height={30} width={100}  alt='save'/>
      </div>  

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {plans.map(plan => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            subtitle={plan.subtitle}
            price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
            features={isAnnual ? plan.annualFeatures : plan.monthlyFeatures}
            buttonText={plan.buttonText}
            buttonColor={plan.buttonColor}
            highlighted={plan.highlighted}
            badge={plan.badge}
            borderColor={plan.borderColor}
            priceGradient={plan.priceGradient}
          />
        ))}
      </div>
    </section>
  );
}
