'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiChevronDown, FiZap, FiDollarSign, FiGift, FiUsers } from 'react-icons/fi';

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="bg-[#0a0a12] text-white font-['Sora']">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
              Upgrade Your Bot. Evolve Your Edge.
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              SnipersVerse is free to start — but if you want early access to automation, fusion, and advanced Finicon traits, it's time to level up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiered Plans Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              name: "Free",
              price: "£0",
              period: "/month",
              tagline: "Start sniping immediately.",
              features: [
                "Manual snipes on Solana",
                "AI Rug Scoring",
                "Finicon XP Tracker",
                "Invite XP",
                "Basic Token Feed",
                "Access to community Discord"
              ],
              button: "Start for Free",
              color: "from-green-500/20 to-green-900/10",
              border: "border-green-500/30",
              buttonColor: "bg-green-500 hover:bg-green-600"
            },
            {
              name: "Pro",
              price: "£19.99",
              period: "/month",
              tagline: "Unlock automation and trait-powered upgrades.",
              features: [
                "Everything in Free",
                "Auto-buy logic",
                "Wallet whitelists/blacklists",
                "Reduced cooldowns",
                "Trait Boosts activate",
                "Snipe history + P&L tracking",
                "Priority alerts"
              ],
              button: "Upgrade to Pro",
              color: "from-yellow-500/20 to-yellow-900/10",
              border: "border-yellow-500/30",
              buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-black"
            },
            {
              name: "Pro+ XP Pack",
              price: "£29.99",
              period: "/month",
              tagline: "Stack faster. Earn rarer.",
              features: [
                "All Pro features",
                "2× XP gain",
                "2× Invite XP",
                "Monthly trait reroll credit",
                "Access to early fusion beta",
                "Free reroll on seasonal events",
                "Exclusive role in Discord"
              ],
              button: "Boost with Pro+",
              color: "from-orange-500/20 to-orange-900/10",
              border: "border-orange-500/30",
              buttonColor: "bg-orange-500 hover:bg-orange-600"
            },
            {
              name: "Founders Tier",
              price: "£49.99",
              period: "/month",
              tagline: "Join the elite.",
              features: [
                "All Pro+ features",
                "Early access to experimental features",
                "Unlock rare Finicon classes",
                "Finicon staking (beta)",
                "2× trait slots",
                "Monthly airdrop priority",
                "Voting rights on trait releases",
                "Founders-only Discord",
                "Merch + trait drops",
                "Early DAO seat reservation"
              ],
              button: "Join Founders Tier",
              color: "from-red-500/20 to-red-900/10",
              border: "border-red-500/30",
              buttonColor: "bg-red-500 hover:bg-red-600"
            }
          ].map((tier, index) => (
            <motion.div
              key={index}
              className={`border rounded-xl p-6 bg-gradient-to-b ${tier.color} ${tier.border} hover:shadow-lg transition-all`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-blue-200 ml-1">{tier.period}</span>
                </div>
                <p className="text-blue-200 mt-2">{tier.tagline}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-blue-200">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#"
                className={`${tier.buttonColor} text-white px-4 py-3 rounded-lg font-bold w-full block text-center transition-colors`}
              >
                {tier.button}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-blue-300">
          <p>Finicon reservation available separately for £69 (one-time payment)</p>
        </div>
      </section>

      {/* Add-On Store */}
      <section className="px-6 py-16 bg-[#0a0a18] border-t border-b border-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Power Packs & Upgrades <span className="text-gray-500">(Coming Soon)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <FiZap className="text-yellow-400 text-2xl" />,
                name: "Boost Pack",
                price: "£12.99",
                desc: "7-day XP + Invite boost",
                note: "Pro+ or Founders tier required"
              },
              {
                icon: <FiDollarSign className="text-purple-400 text-2xl" />,
                name: "Trait Reroll Credit",
                price: "£4.99",
                desc: "Reroll unlocked trait",
                note: "Pro+ or Founders tier required"
              },
              {
                icon: <FiGift className="text-blue-400 text-2xl" />,
                name: "Fusion Access Pass",
                price: "£14.99",
                desc: "Reserve fusion for Season 1",
                note: "Founders tier required"
              },
              {
                icon: <FiUsers className="text-green-400 text-2xl" />,
                name: "Invite Blitz Bundle",
                price: "£9.99",
                desc: "+5 invite credits + ranking jump",
                note: "Pro tier required"
              },
              {
                icon: <FiGift className="text-red-400 text-2xl" />,
                name: "Reserved Trait Drop",
                price: "£6.99",
                desc: "Guaranteed trait in next drop",
                note: "Pro+ or Founders tier required"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a12] border border-blue-900/50 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                whileHover={{ y: -3 }}
              >
                <div className="mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-lg font-bold my-2">{item.price}</p>
                <p className="text-sm text-blue-200 mb-2">{item.desc}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Questions? Let's clear them up.
        </h2>
        
        <div className="space-y-4">
          {[
            {
              question: "Can I use SnipersVerse without paying?",
              answer: "Yes — manual sniping, AI alerts, and XP tracking are all free."
            },
            {
              question: "Why upgrade to Pro or Pro+?",
              answer: "Unlock powerful automation, cooldown reduction, and trait perks. Plus earn faster XP and get into advanced features early."
            },
            {
              question: "How do I reserve a Finicon?",
              answer: "You can reserve your Season 1 Finicon separately for £69. This is a one-time payment and is not included in tiers."
            },
            {
              question: "Can I cancel anytime?",
              answer: "Yes. You can downgrade or cancel directly in your Stripe account or by messaging the Telegram bot."
            },
            {
              question: "Are refunds available?",
              answer: "Boosts and trait packs are non-refundable. Monthly tiers can be paused or cancelled at any time."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-blue-900/50 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <FiChevronDown className={`transition-transform ${activeFaq === index ? 'transform rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 text-blue-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a12] to-[#0f172a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Ready to Snipe Smarter?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            You've seen the edge. Now claim it. SnipersVerse is live. The top degens are already hunting. It's your turn.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              href="https://t.me/SnipersVerseBot?start=start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              ⚡ Launch Bot
            </motion.a>
            <motion.a
              href="/upgrade"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              💸 Upgrade Now
            </motion.a>
            <motion.a
              href="/reserve"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-white to-gray-300 text-black hover:shadow-lg hover:shadow-white/30 transition-all"
            >
              🐉 Reserve Finicon
            </motion.a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a18] border-t border-blue-900/50 p-3 shadow-lg z-50">
        <div className="flex justify-between items-center">
          <a 
            href="https://t.me/SnipersVerseBot?start=start" 
            className="text-sm text-blue-300 flex items-center"
          >
            <FiZap className="mr-1" /> Launch
          </a>
          <a 
            href="/upgrade" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold"
          >
            Upgrade
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-12 px-6 border-t border-gray-800 bg-[#0a0a12]">
        <div className="mb-4">
          <a href="#" className="mx-3 hover:text-white transition-colors">Home</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Vision</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Roadmap</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Join</a>
        </div>
        <div className="mb-4">
          <a href="#" className="mx-2 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="mx-2 hover:text-white transition-colors">Telegram</a>
          <a href="#" className="mx-2 hover:text-white transition-colors">Discord</a>
          <a href="#" className="mx-2 hover:text-white transition-colors">Mirror</a>
        </div>
        <div className="mb-2">Contact: support@snipersverse.com</div>
        <div className="mb-2">Disclaimer: Use at your own risk. Not financial advice.</div>
        <div>© 2025 SnipersVerse – All rights reserved</div>
      </footer>
    </main>
  );
}