'use client'

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import gif from '@/assets/gifgit2.gif';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="px-6 py-20 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
}

export default function VisionPage() {
  const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
  return (
    <main className="bg-[#0a0a12] text-white font-['Sora']">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-blue-500/30 blur-md animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-10 h-10 rounded-full bg-purple-500/30 blur-md animate-float2"></div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 leading-tight">
              SnipersVerse isn't just a tool —<br />
              it's a new way to hunt, earn, and evolve.
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Where AI, crypto speed, NFT loyalty, and degen culture collide.<br />
              Built to reward precision. Designed for progression.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <motion.a
                href={TELEGRAM_BOT_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                ⚡ Join the Evolution
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16"
          >
            <div className="animate-bounce w-6 h-6 mx-auto border-r-2 border-b-2 border-blue-400 rounded-full transform rotate-45"></div>
            <p className="text-blue-300 text-sm mt-2">Scroll to explore</p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              🧭 Why We Exist
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              SnipersVerse is here to redefine what a "sniper bot" means in crypto.
              Not just fast. Not just filtered. But intelligent, evolving, and community-governed.
            </p>
            <p className="text-blue-200 text-lg mb-8">
              We believe the next generation of bots will be AI-native, NFT-integrated,
              progressive in reward mechanics, and cultural—not just functional.
            </p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p className="text-2xl md:text-3xl font-bold text-white italic">
                "Sniping is no longer just transactional — it's personal, competitive, and identity-driven."
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8">
              <Image 
                src={gif} 
                width={500} 
                height={500} 
                alt="Finicon Evolution" 
                className="rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Three Pillars Section */}
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          🧱 The Foundation of SnipersVerse
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🧠",
              title: "Intelligence",
              desc: "We integrate machine learning to score every new token on risk, velocity, and social heat. This isn't guesswork — it's real-time ranking by your invisible co-pilot."
            },
            {
              icon: "🐉",
              title: "Evolution",
              desc: "Your Finicon reflects your skill, speed, and strategy. It evolves with your actions — and in time, it will unlock unique tools, voting power, and rare drops."
            },
            {
              icon: "🌐",
              title: "Community Ownership",
              desc: "Our future is DAO-governed. From trait releases to marketplace fees to Finicon lore itself — our users will shape what comes next."
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8 hover:border-blue-500/70 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
              <p className="text-blue-200">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Product Flywheel Section */}
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          🔁 How Everything Connects
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Flywheel graphic placeholder - replace with your actual animation */}
          <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🌀</div>
              <p className="text-blue-200">Interactive flywheel animation showing the product ecosystem</p>
            </div>
          </div>
          
          {/* Flywheel steps */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: "1", title: "Snipe", desc: "Use the bot to find and snipe tokens" },
              { step: "2", title: "Earn XP", desc: "Gain experience points for every action" },
              { step: "3", title: "Evolve", desc: "Your Finicon levels up with XP" },
              { step: "4", title: "Unlock", desc: "Access new features and rewards" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-300 mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blurred Roadmap Section */}
      <Section>
        <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            🗺️ Vision Roadmap
          </h2>
          
          <div className="relative">
            <div className="blur-sm select-none pointer-events-none">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Phase 1", items: ["Bot Launch", "AI Scoring", "Basic XP"] },
                  { title: "Phase 2", items: ["Auto-Buy", "Trait System", "Staking"] },
                  { title: "Phase 3", items: ["DAO Governance", "Marketplace", "Cross-Chain"] }
                ].map((phase, i) => (
                  <div key={i} className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3 text-white">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="text-blue-200">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/80 border border-blue-500/30 rounded-lg p-6 text-center max-w-md">
                <h3 className="text-xl font-bold mb-3 text-white">Become a Founder</h3>
                <p className="text-blue-200 mb-4">Unlock the full roadmap by joining our founders tier</p>
                <a 
                  href="/upgrade" 
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Ready to Evolve Your Edge?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join the community shaping the future of crypto trading tools.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              href={TELEGRAM_BOT_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              ⚡ Launch the Bot
            </motion.a>
            <motion.a
              href="/upgrade"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              🚀 Upgrade Tier
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-12 border-t border-gray-800 mt-16 bg-[#0a0a12]">
        <div className="mb-4">
          <a href="#" className="mx-3 hover:text-white transition-colors">Home</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Vision</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Roadmap</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="mx-3 hover:text-white transition-colors">Join</a>
        </div>
        <div className="mb-4">© 2025 SnipersVerse – All rights reserved</div>
        <div>Contact: vision@snipersverse.com</div>
      </footer>

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
      `}</style>
    </main>
  );
}