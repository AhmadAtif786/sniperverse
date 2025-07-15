'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiCheck, FiChevronDown, FiZap, FiDollarSign, FiGift, FiUsers } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/header';
import PricingSection from '@/components/PricingCards';
import PricingCard from '@/components/PricingCards';
import ComparePlansSection from '@/components/PricingTable';
import PlanComparisonTable from '@/components/PricingTable';
import Footer from '@/components/footer';

export default function PricingPage() {
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
              Choose your tier. Get in or get left behind
            </span>
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold mb-4" style={{fontWeight:'400'}}>
           No middlemen. No fluff. Just faster,<br/> smarter, earlier entries.
          </h1>
        <div className='mt-15'>
          <button
          style={{minWidth: '279px',fontSize: '16px',fontWeight: '700',minHeight:'50px'}}
        href="https://t.me/SnipersVerseBot?start=start"
        className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition"
      >
        🚀 Start Free
      </button>
        </div>
        </section>

        <div className="max-w-7xl mx-auto text-center my-12">
      <h3 className="text-center text-[#00ffad] text-sm font-semibold mb-1"> Choose your Plan</h3>
                <h2 className="text-center text-white text-2xl font-bold mb-8">
                                     Pricing Tier Cards
  </h2>
      
      </div>
    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
   
        <PricingCard
          title="Free Tier"
          subtitle="Solid if you’re just checking it out."
          price="£0"
          features={[
            "Manual Sniping",
            "AI Rug Scorin",
            "XP Tracking",
            "Invite Links",
            "Basic Snipe Log",
            
          ]}
          buttonText="Start Free"
          buttonColor="bg-white hover:bg-white-700"
        />

        <PricingCard
          title="Pro"
          price="£19.99/mo"
          subtitle="Where the real edge begins."
          features={[
            "Auto-buy Engine",
            "Wallet Whitelists",
            "Cooldown Reduction",
            "Priority Alerts",
            "Trait Boost Access",
            "Invite XP Multiplier",
            "Auto-sell (Soon)",
          ]}
          buttonText="Upgrade to Pro"
          buttonColor="bg-green-500 hover:bg-green-400"
          priceGradient={'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)'}

        />

        <PricingCard
          title="Pro+ XP Pack"
          price="£29.99/mo"
          subtitle="Max XP. More edge. Real tools."
          features={[
            "All Pro Features",
            "2× XP Boost (Permanent)",
            "2x Invite XP Multiplier",
            "Monthly Trait Reroll",
            "Early Airdrop Priority",
            "Trait Crafting (Soon)",
          ]}
          buttonText="Get Pro+ Now"
          buttonColor="bg-yellow-400 hover:bg-yellow-300 text-black"
          highlighted
          badge="Most Popular"
          priceGradient={'linear-gradient(90deg, #FFE609 2.27%, #BB8300 97.73%)'
}
        />

        <PricingCard
          title="Founders Tier"
          subtitle="Built for day ones. Apex tools, future-proofed."
          price="£49.99/mo"
          features={[
            "All Pro+ Benefits",
            "Early Feature Access",
            "Finicon Class Unlocks",
            "Trait Staking Beta",
            "OG Bot Badge",
            "Monthly Reroll, Voting Rights",
            "Merch + Drop Priority",
          ]}
          buttonText="Join Founders Tier"
          buttonColor="bg-purple-600 hover:bg-purple-500"
          borderColor="border-purple-600"
          priceGradient={'linear-gradient(90deg, #B95DFF 2.27%, #A100FF 97.73%)'}
        />
      </div>
<PlanComparisonTable/>
<Footer/>
      </main>
    </>
  );
}