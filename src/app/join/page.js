'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiCheck, FiChevronDown, FiZap, FiDollarSign, FiGift, FiUsers } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/header';
import PlanComparisonTable from '@/components/PricingTable';
import Footer from '@/components/footer';
import JoinSection from '@/components/joinPage/JoinSection';
import PricingSection from '@/components/joinPage/Pricing';
import JoinCommunity from '@/components/joinPage/Comunity';
import HowItWorks from '@/components/joinPage/HowItWorks';

export default function JoinPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handlePlanSelect = (planName, price) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (planName === 'Free') {
      return;
    }

    router.push(`/checkout?plan=${encodeURIComponent(planName)}&price=${encodeURIComponent(price)}`);
  };
  return (
    <>
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 z-[1]"
        aria-hidden="true"
      />
      <main className="bg-gradient-to-b from-[#0b0f1c] to-black text-white font-['Poppins']">

        <Header />


        {/* Hero Section */}
        <section className="text-center px-6 pb-16 relative overflow-hidden ">
          {/* 🖼️ Background Image */}
          <h1
            className="text-4xl md:text-6xl mb-4 text-white leading-[1.3] overflow-visible"
            style={{ fontSize: '54px', fontWeight: 400 }}
          >
            <span
              className="bg-clip-text text-transparent italic inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '48px',
                fontWeight: 700,
                overflow: 'visible',
                paddingRight: '3px',
              }}
            >
              Join the #1 Solana Sniper Bot
            </span>
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold mb-4" style={{ fontWeight: '400' }}>
            Snipe first, win big. Your edge starts now.
          </h1>
          <div className='mt-15'>
            <button
              style={{ minWidth: '279px', fontSize: '16px', fontWeight: '700', minHeight: '50px' }}
              href="https://t.me/SnipersVerseBot?start=start"
              className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition"
            >
              🚀 Launch Sniper Bot
            </button>
          </div>
        </section>

        <JoinSection />

        <h2 className="text-2xl font-semibold text-center mb-2">
          Choose your Plan
        </h2>
        <p className='text-gray-500 text-center mb-8' >
          Start Free, Upgrade when ready</p>
        <PricingSection />
        <HowItWorks />
        <JoinCommunity/>
        <Footer />
      </main>
    </>
  );
}