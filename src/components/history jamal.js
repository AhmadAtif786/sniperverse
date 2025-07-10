'use client'

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import gif from '@/assets/gifgit2.gif';
import Image from 'next/image';

export default function HomePage() {
  const Header = dynamic(() => import('@/components/header'), { ssr: false });
  const TELEGRAM_BOT_URL = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL;
  return (
    <main className="bg-black text-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-black relative overflow-hidden">
        {/* Static background glitch layer */}
        <div className="absolute inset-0 opacity-20 bg-[url('/radar-glitch.svg')] bg-cover z-0 pointer-events-none" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex justify-center mb-6 relative z-10"
        >
          <Image src={gif} width={200} height={200} alt="SnipersVerse Animation" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Snipe live tokens. Score faster than the crowd. Evolve your edge.
          </h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Solana sniper bot with AI alerts, manual execution, XP rewards, and evolving Finicons. Live now—multi-chain support coming soon (Base & ETH).
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            {[
              {
                href: TELEGRAM_BOT_URL,
                text: '⚡ Launch SnipersVerse Bot',
                bg: 'bg-green-500',
              },
              {
                href: '/reserve',
                text: '🐉 Reserve Your Finicon',
                bg: 'bg-white text-black',
              },
              {
                href: '/upgrade',
                text: '💸 Upgrade for Auto Access',
                bg: 'bg-yellow-400 text-black',
              },
            ].map(({ href, text, bg }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full text-sm font-bold transition ${bg}`}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Core Bot Functionality Section */}
      <section className="px-6 py-20 bg-gray-900 text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🔥 Live on Solana — Fully Functional Bot
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: "🧠", title: "AI Rug Scoring (Free)", desc: "Auto-contract safety checks" },
            { icon: "⚔", title: "Manual Snipes (Free)", desc: "One-click snipe inside Telegram" },
            { icon: "🚀", title: "New Token Feed (Free)", desc: "Tracks Solana listings" },
            { icon: "💬", title: "Telegram UX (Free)", desc: "No web interface needed" },
            { icon: "🧬", title: "Finicon XP Tracker (Free)", desc: "Earn XP with every activity" },
            { icon: "📣", title: "Invite-to-XP (Free)", desc: "Viral growth via referral rewards" },
            { icon: "🧾", title: "Snipe History Log (Free)", desc: "Keep track of your activity" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="border border-gray-700 rounded-lg p-6 bg-black hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href={TELEGRAM_BOT_URL}
            className="inline-block bg-green-500 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition"
          >
            💬 Launch Bot Now — Start Sniping
          </a>
        </div>
      </section>

      {/* Upgrade Tiers Section */}
      <section className="px-6 py-20 bg-black text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Unlock More Power. Pick Your Path.
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Free Tier – £0",
              features: [
                "Manual Sniping",
                "AI Rug Scoring",
                "XP Tracking",
                "Invite Link",
                "Basic Snipe Log",
              ],
              button: { label: "Start Free", href: "/upgrade" },
              bg: "bg-gray-800",
            },
            {
              title: "Pro – £19.99 / month",
              features: [
                "Auto‑Buy Engine",
                "Wallet Whitelists",
                "Cooldown Reduction",
                "Priority Alerts",
                "Trait Boost Access",
                "Invite XP Multiplier",
                "Auto‑Sell (Soon)",
              ],
              button: { label: "Upgrade to Pro", href: "/upgrade" },
              bg: "bg-gray-900",
            },
            {
              title: "Pro+ XP Pack – £29.99 / month",
              features: [
                "All Pro features",
                "2× XP Boost (Permanent)",
                "2× Invite XP Multiplier",
                "Monthly Trait Reroll",
                "Early Airdrop Priority",
                "Trait Crafting (Soon)",
              ],
              button: { label: "Get Pro+ Now", href: "/upgrade" },
              bg: "bg-gray-800",
            },
            {
              title: "Founders Tier – £49.99 / month",
              features: [
                "All Pro+ benefits",
                "Early Feature Access",
                "Finicon Class Unlocks",
                "Trait Staking Beta",
                "OG Bot Badge",
                "Monthly Reroll, Voting Rights",
                "Merch + Drop Priority",
              ],
              button: { label: "Join Founders Tier", href: "/upgrade" },
              bg: "bg-gray-900",
            },
          ].map((tier, index) => (
            <motion.div
              key={tier.title}
              className={`${tier.bg} border border-gray-700 rounded-xl p-6 text-left hover:border-green-500 transition`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <a
                href={tier.button.href}
                className="inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition"
              >
                {tier.button.label}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Finicon Evolution Section */}
      <section className="px-6 py-20 bg-gray-950 text-center">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🧬 One Companion, Infinite Power
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {[
            "XP from snipes and invites",
            "Evolution through levels",
            "Leaderboard coming soon",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black border border-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm">✅ {item}</p>
            </motion.div>
          ))}
        </div>

        {/* Upsell Hooks */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 text-left">
          {[
            "Trait Fusion",
            "Paid Rerolls",
            "Staking to Reduce Cooldowns",
            "PvP Mode",
            "Trait Crafting Marketplace",
          ].map((hook, i) => (
            <motion.div
              key={hook}
              className="border border-gray-800 bg-gray-900 rounded-lg p-5 text-sm text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              viewport={{ once: true }}
            >
              ⚡ {hook}
            </motion.div>
          ))}
        </div>

        {/* Reserve Box */}
        <motion.div
          className="mt-16 max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-green-600 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">🐉 Reserve Your Finicon – £69 (One-time)</h3>
          <ul className="text-gray-300 text-sm space-y-2 mb-6">
            <li>• Season 1 Finicon</li>
            <li>• Trait Class Unlock</li>
            <li>• Custom Name + Reroll Credit</li>
            <li>• Fusion Whitelist</li>
            <li>• Future Token Multiplier</li>
          </ul>
          <a
            href="/reserve"
            className="inline-block bg-green-500 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition"
          >
            🐉 Reserve Now
          </a>
        </motion.div>
      </section>

      {/* SECTION 5 – Boost Packs */}
      <section className="px-6 py-20 bg-black text-center">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          ⚡ Supercharge Your Growth
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { title: "7-Day XP Pack – £12.99", desc: "2× XP, 1.5× Invite XP, Early Fusion Preview", button: "Buy XP Boost" },
            { title: "Invite Blitz Pack – £9.99", desc: "+5 invite credits, XP multiplier", button: "Boost My Invites" },
            { title: "Trait Reroll Credit – £4.99", desc: "Reroll any Uncommon trait (Pro+ & Founders only)", button: "Reroll Now" },
            { title: "Fusion Pass – £14.99 (Coming Soon)", desc: "Reserve advanced merging", button: "Coming Soon" }
          ].map((item, i) => (
            <motion.div key={i} className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
              <a href="#" className="inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition">
                {item.button}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 – Viral XP Engine */}
      <section className="px-6 py-20 bg-gray-950 text-center">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          📈 Invite. Climb. Evolve.
        </motion.h2>
        <div className="max-w-2xl mx-auto text-gray-300 text-sm space-y-4">
          <p>✅ Earn XP per invite</p>
          <p>✅ XP = Finicon progression</p>
          <p>✅ Monthly leaderboard</p>
          <p>✅ Weekly trait drops for top referrers</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <a href={TELEGRAM_BOT_URL} className="bg-green-500 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            📣 Get My Invite Link
          </a>
          <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            🎯 View Leaderboard (Soon)
          </a>
          <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            🚀 Boost My Rank
          </a>
        </div>
      </section>

      {/* SECTION 7 – Roadmap Overview */}
      <section className="px-6 py-20 bg-black text-center">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          🗺️ What’s Next for SnipersVerse
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left text-sm text-gray-300">
          {[
            { title: "Phase 1 – Core (Live)", items: ["Bot", "AI Rug Scoring", "XP & Invites", "Finicon Live"] },
            { title: "Phase 2 – Power (Soon)", items: ["Auto‑Buy", "Trait Features", "Staking", "Auto‑Sell"] },
            { title: "Phase 3 – Infinite (Future)", items: ["PvP", "Token + DAO", "Cross‑Chain", "Market Features"] }
          ].map((phase, i) => (
            <motion.div key={i} className="bg-gray-900 border border-gray-700 rounded-lg p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}>
              <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
              <ul className="space-y-1">
                {phase.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 8 – Final Engagement Block */}
      <section className="px-6 py-20 bg-gray-950 text-center">
        <motion.h2 className="text-2xl md:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          You’ve seen it live. Now transform your tool into an edge.
        </motion.h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10">
          Evolve your Finicon. Climb the ranks.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href={TELEGRAM_BOT_URL} className="bg-green-500 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            ⚡ Launch the Bot
          </a>
          <a href="/reserve" className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            🐉 Reserve Finicon
          </a>
          <a href="/upgrade" className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition">
            💸 Upgrade Tier
          </a>
        </div>
      </section>


      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-8 border-t border-gray-800 mt-16">
        <div className="mb-2">
          <a href="#" className="mx-2 hover:underline">Home</a>
          <a href="#" className="mx-2 hover:underline">Vision</a>
          <a href="#" className="mx-2 hover:underline">Roadmap</a>
          <a href="#" className="mx-2 hover:underline">Pricing</a>
          <a href="#" className="mx-2 hover:underline">Join</a>
        </div>
        <div className="mb-2">
          <a href="#" className="mx-2 hover:underline">Twitter</a>
          <a href="#" className="mx-2 hover:underline">Telegram</a>
          <a href="#" className="mx-2 hover:underline">Discord</a>
          <a href="#" className="mx-2 hover:underline">Mirror</a>
        </div>
        <div className="mb-2">Contact: support@snipersverse.com</div>
        <div className="mb-2">Disclaimer: Use at your own risk. Not financial advice.</div>
        <div>© 2025 SnipersVerse – All rights reserved</div>
      </footer>
    </main>
  );
}
