'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiZap, FiMail, FiUsers } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

export default function JoinPage() {
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    alert(`Thanks for joining! We'll notify you at ${email}`);
    setEmail('');
  };

  return (
    <main className="bg-[#0a0a12] text-white font-['Sora']">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
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
              Enter the SnipersVerse
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Everything starts when you step in.
            </p>
            <p className="text-lg text-blue-300 mb-8">
              This isn't a newsletter. This is access to alpha. Join the bot, enter the Discord, and get moving before you get left behind.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <motion.a
                href="https://t.me/SnipersVerseBot?start=start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                ⚡ Join the Bot
              </motion.a>
              <motion.a
                href="/reserve"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-white to-gray-300 text-black hover:shadow-lg hover:shadow-white/30 transition-all"
              >
                🐉 Reserve Your Finicon
              </motion.a>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
              >
                💸 Upgrade Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a12] to-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <FiZap className="text-2xl text-blue-400 mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                  The Bot Lives Here
                </h2>
              </div>
              <ul className="text-blue-200 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Runs directly inside Telegram
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Manual sniping is live now
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Get real-time alerts, earn XP, and evolve your Finicon
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Free to use — upgrades unlock trait power + automation
                </li>
              </ul>
              <motion.a
                href="https://t.me/SnipersVerseBot?start=start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-3 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Launch Bot Now
              </motion.a>
            </div>
            <div className="md:w-1/2 bg-[#0a0a18] border border-blue-900/50 rounded-xl p-4">
              {/* Placeholder for Telegram bot preview */}
              <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center">
                <p className="text-blue-300">Telegram Bot Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="px-6 py-20 bg-[#0a0a12]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              {/* Placeholder for Discord preview */}
              <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-4">
                <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-blue-300">Discord Community Preview</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center mb-4">
                <FaDiscord className="text-2xl text-purple-400 mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  Join the Discord Arena
                </h2>
              </div>
              <ul className="text-blue-200 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Finicon role-based channels
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Live support + feedback
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Trait drop announcements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Invite leaderboard (coming)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Founders-only chat room
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> Meme contests
                </li>
              </ul>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-3 rounded-full font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Join the Discord
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture (Optional) */}
      {showEmailForm && (
        <section className="px-6 py-16 bg-gradient-to-b from-[#0f172a] to-[#0a0a12]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <FiMail className="text-2xl text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Stay Ahead of the Chain
              </h2>
            </div>
            <p className="text-blue-200 mb-8">
              Get notified first when new trait drops go live, token airdrop snapshot is announced, PvP fusion arena opens, and boost bundles drop.
              <span className="block mt-2 text-blue-300">We don't spam. We just launch heat.</span>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-grow px-4 py-3 rounded-lg bg-[#0a0a18] border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Join the List
              </motion.button>
            </form>
          </div>
        </section>
      )}

      {/* Referral Loop */}
      <section className="px-6 py-20 bg-[#0a0a18] border-t border-b border-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <FiUsers className="text-2xl text-green-400 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-300">
              Get In. Bring Others. Get Paid.
            </h2>
          </div>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Your invite link = XP = evolution. Top inviters each month win boosts, Pro access, Finicon traits, and airdrop perks.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Generate My Invite Link
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:shadow-lg hover:shadow-gray-500/30 transition-all"
            >
              View Leaderboard (Coming Soon)
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
          <div className="text-sm text-blue-300">
            Your Finicon is waiting. So is your first snipe.
          </div>
          <div className="flex gap-2">
            <a 
              href="https://t.me/SnipersVerseBot?start=start" 
              className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-bold"
            >
              Start Free
            </a>
            <a 
              href="/pricing" 
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold"
            >
              Upgrade
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}