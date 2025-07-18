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
import FeatureSection from '@/components/howitWorksPage/FeatureSection';
import CoreFeatures from '@/components/howitWorksPage/CoreFeature';
import Image from 'next/image';
import DifferenceSection from '@/components/howitWorksPage/SnipeCardDifference';
import InsideBotSection from '@/components/howitWorksPage/InsideBotSection';
import ReadySection from '@/components/howitWorksPage/joinUs';
import FiniconsSection from '@/components/howitWorksPage/fincon';

export default function HowItWorks() {
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
                        Snipe Tokens
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
                            Win Finicons
                        </span>
                        <br />Stack Bags
                    </h1>
                    <p
                        className="text-gray-300 mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
                        style={{ fontSize: '20px', fontWeight: 400 }}
                    >
                        SnipersVerse gives you the edge on Solana — catch new launches, auto-<br />buy fast, and earn evolving Finicons while you do it.
                    </p>
                    <div className='mt-15'>
                        <button
                            style={{ minWidth: '279px', fontSize: '16px', fontWeight: '700', minHeight: '50px' }}
                            href="https://t.me/SnipersVerseBot?start=start"
                            className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition"
                        >
                            🚀 Try It Free on Telegram
                        </button>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto  my-12">
                    <FeatureSection />
                    <CoreFeatures />
                    <section className="py-16 mt-30">
                        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                            {/* text */}
                            <div className="space-y-6">

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
       What {''}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
            SnipersVerse
          </span>{' '} <br/>
         Actually Does
        </h2>

                                <p className="text-gray-300 leading-relaxed" style={{ color: '#FFEDEDCC', fontSize: '16px' }}>
                                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#15FFDF] to-[#00C965]">
            SnipersVerse
          </span>{' '}  scans Solana for brand new tokens the second they launch. You get an alert. You can auto-buy, or snipe manually straight from Telegram — no faffing around with wallets or copying addresses.<br />
                                    Built-in filters catch honeypots, low LP, dodgy deployers. Every snipe you make earns XP for your Finicon — our NFT creatures that evolve based on your trading activity.
                                </p>
                            </div>
                            {/* globe image */}
                            <div className="mx-auto relative">
                                <Image
                                    src="/howside.png"
                                    alt="Foreign Exchange Globe"
                                    width={480}
                                    height={560}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <DifferenceSection />
                <InsideBotSection />
                <FiniconsSection/>
                <ReadySection />
                <Footer />
            </main>
        </>
    );
}