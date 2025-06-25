'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiZap, FiDollarSign, FiGift, FiUsers, FiCheck, FiLock, FiTool } from 'react-icons/fi';

export default function RoadmapPage() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const togglePhase = (index) => {
    setExpandedPhase(expandedPhase === index ? -1 : index);
  };

  return (
    <main className="bg-[#0a0a12] text-white font-['Sora']">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
              We're Just Getting Started
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              SnipersVerse is more than a product — it's a system in motion.
            </p>
            <p className="text-lg text-blue-300 mb-8">
              What's live is just the beginning. What's coming will reshape how crypto traders snipe, evolve, and earn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-blue-900/50 transform -translate-x-1/2 z-0"></div>
          
          {[
            {
              name: "Phase 1 – Core Combat",
              status: "✅ Live Now",
              timeframe: "Current",
              description: "Launch complete. Bot active. Finicons evolving. XP flowing.",
              milestones: [
                "Telegram bot live on Solana",
                "Manual sniping with AI-powered rug scoring",
                "Invite-to-XP viral system",
                "Finicon XP tracker and base trait logic",
                "Pro tier activated with cooldown + automation",
                "First 100 Finicons reserved",
                "First leaderboards in Discord"
              ],
              ctas: [
                { text: "⚡ Launch the Bot", link: "https://t.me/SnipersVerseBot?start=start", color: "from-blue-500 to-purple-600" },
                { text: "💸 Upgrade to Pro", link: "/pricing", color: "from-yellow-400 to-amber-500 text-black" },
                { text: "🐉 Reserve My Finicon", link: "/reserve", color: "from-white to-gray-300 text-black" }
              ],
              icon: <FiCheck className="text-green-400" />,
              statusClass: "bg-green-900/20 border-green-500/30"
            },
            {
              name: "Phase 2 – Trait Awakening",
              status: "🛠️ In Progress",
              timeframe: "Short-Term (Weeks Ahead)",
              description: "Trait rarity starts to matter. Fusion is coming. Boosts now reshape progression.",
              milestones: [
                "Paid trait rerolls (Pro+ only)",
                "Finicon trait effects (e.g., snipe speed, alert delay reduction)",
                "Invite-based trait boosts",
                "Fusion Pass whitelist sales",
                "Seasonal trait drop #1",
                "PvE Finicon rank battles (Beta)"
              ],
              ctas: [
                { text: "Upgrade to Pro+", link: "/pricing", color: "from-orange-500 to-amber-600" },
                { text: "Buy Reroll Credits", link: "/upgrade", color: "from-purple-500 to-pink-600" },
                { text: "Reserve Fusion Pass", link: "/reserve", color: "from-blue-400 to-cyan-500" }
              ],
              icon: <FiTool className="text-yellow-400" />,
              statusClass: "bg-yellow-900/20 border-yellow-500/30"
            },
            {
              name: "Phase 3 – GameFi Loop",
              status: "🔒 Planning",
              timeframe: "Mid-Term (Quarter)",
              description: "You snipe. Your Finicon evolves. You climb. And now, the stakes matter.",
              milestones: [
                "Trait fusion system (merge 2 Finicons)",
                "Finicon staking = trait yield + cooldown buffs",
                "Leaderboard XP = Pro trait unlocks",
                "Trait Crafting shop (use XP or token)",
                "PvP bot challenges (win XP + airdrops)",
                "Ranked Finicon ladders (monthly reset)"
              ],
              ctas: [
                { text: "🐉 Upgrade to Founders Tier", link: "/pricing", color: "from-red-500 to-pink-600" },
                { text: "🧬 Reserve Finicon Fusion", link: "/reserve", color: "from-purple-500 to-indigo-600" }
              ],
              icon: <FiLock className="text-red-400" />,
              statusClass: "bg-red-900/20 border-red-500/30"
            },
            {
              name: "Phase 4 – Token & DAO Genesis",
              status: "🛠️ Internal Architecture",
              timeframe: "Later in Year",
              description: "Everything you've earned now crystallises. The Finicon Token fuels the full economy.",
              milestones: [
                "Finicon Token release (name TBA)",
                "Token utility: trait boosts, rerolls, access, P2P bets",
                "DAO voting begins (Finicon class, fusion odds, event design)",
                "Airdrop to top wallets, top XP earners, OG Finicon holders",
                "Treasury begins accumulating % of Pro subscriptions + trait sales"
              ],
              premiumBonus: "Founders Tier receives airdrop multiplier. Pro+ gets trait token vouchers.",
              icon: <FiLock className="text-purple-400" />,
              statusClass: "bg-purple-900/20 border-purple-500/30"
            },
            {
              name: "Phase 5 – The Network Awakens",
              status: "🔒 Future Vision",
              timeframe: "2025+",
              description: "SnipersVerse becomes a multi-chain memetic trading OS.",
              milestones: [
                "Sniping support for Base, ETH, & more",
                "Cross-chain Finicon evolutions",
                "Finicon mint marketplace (trade aesthetic traits)",
                "SnipersVerse mobile companion app",
                "Creator-designed Finicons (DAO voted)",
                "Partner-based fusion events"
              ],
              softCta: "You're still early. But not for long.",
              icon: <FiLock className="text-blue-400" />,
              statusClass: "bg-blue-900/20 border-blue-500/30"
            }
          ].map((phase, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'} pl-12 md:pl-0`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full flex items-center justify-center border-2 ${phase.statusClass} transform -translate-x-1/2 z-10`}>
                {phase.icon}
              </div>
              
              {/* Phase card */}
              <div 
                className={`bg-[#0a0a18] border ${phase.statusClass} rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer`}
                onClick={() => togglePhase(index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{phase.name}</h3>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-blue-900/20 text-blue-300">
                        {phase.status}
                      </span>
                      <span className="text-sm text-blue-300">{phase.timeframe}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-blue-200 mb-4">{phase.description}</p>
                
                {expandedPhase === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mb-4">
                      <h4 className="font-bold text-white mb-2">Key Milestones:</h4>
                      <ul className="space-y-2 text-blue-200">
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span> {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {phase.premiumBonus && (
                      <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-white mb-1">Premium User Bonus:</h4>
                        <p className="text-blue-200">{phase.premiumBonus}</p>
                      </div>
                    )}
                    
                    {phase.softCta && (
                      <p className="text-center text-blue-300 italic my-4">{phase.softCta}</p>
                    )}
                    
                    {(phase.ctas || phase.softCta) && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {phase.ctas?.map((cta, i) => (
                          <motion.a
                            key={i}
                            href={cta.link}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${cta.color} hover:shadow-lg transition-all`}
                          >
                            {cta.text}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Callout Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-blue-900/20 to-[#0a0a12]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            You're Here 🧭
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            You're in Phase 1 — but if you upgrade now, you'll be at the top of Phase 3 when it hits.
            Finicons evolve, traits stack, and early users win more than followers. They win first-mover advantage.
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
              href="/pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              💸 Upgrade to Pro+
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
            href="/pricing" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold"
          >
            Upgrade
          </a>
        </div>
      </div>
    </main>
  );
}