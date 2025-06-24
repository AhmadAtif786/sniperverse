'use client'

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// Remove the dynamic import or handle it differently
import Header from '@/components/header'

export default function HomePage() {
  // const Header = dynamic(() => import('@/components/header'), { ssr: false });

  return (
    <>
      <Head>
        <title>SnipersVerse – Dominate Solana with AI Sniping</title>
        <meta name="description" content="SnipersVerse is an AI-powered Solana sniping bot with XP rewards, Finicon evolution, and live token detection." />
        <meta property="og:title" content="SnipersVerse – Dominate Solana with AI Sniping" />
        <meta property="og:description" content="Join the most advanced Telegram sniping bot on Solana." />
        <meta property="og:image" content="/preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <main className="bg-[#0a0a12] text-white font-['Sora']">

        <Header />

        {/* Hero Section */}
        <section className="text-center px-6 py-16 bg-gradient-to-b from-[#0a0a12] to-[#0f172a] relative overflow-hidden">
          {/* Glitch effect background */}
          <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.png')] bg-[length:100px_100px] z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex justify-center mb-6 relative z-10"
          >

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
              Snipe live tokens. Score faster than the crowd.
            </h1>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
              Solana sniper bot with AI alerts, manual execution, XP rewards, and evolving Finicons.
              <span className="block mt-2 text-blue-300 font-semibold">Live now—multi-chain support coming soon</span>
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              {[
                {
                  href: 'https://t.me/SnipersVerseBot?start=start',
                  text: '⚡ Launch SnipersVerse Bot',
                  bg: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-blue-500/40',
                },
                {
                  href: '/reserve',
                  text: '🐉 Reserve Your Finicon',
                  bg: 'bg-gradient-to-r from-white to-gray-300 text-black hover:shadow-white/30',
                },
                {
                  href: '/upgrade',
                  text: '💸 Upgrade for Auto Access',
                  bg: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-yellow-400/40',
                },
              ].map(({ href, text, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 rounded-full font-bold transition shadow-lg hover:shadow-xl ${bg}`}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Floating NFTs animation */}
          <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-blue-500/30 blur-md animate-float1"></div>
          <div className="absolute top-1/3 right-20 w-10 h-10 rounded-full bg-purple-500/30 blur-md animate-float2"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-400/20 blur-md animate-float3"></div>
        </section>

        {/* Partners Section */}


        {/* Core Bot Functionality Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-[#0f172a] to-[#0a0a12] text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
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
                className="border border-gray-800 rounded-xl p-6 bg-[#0a0a18] hover:border-blue-500/50 transition-all hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="https://t.me/SnipersVerseBot?start=start"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              💬 Launch Bot Now — Start Sniping
            </a>
          </div>
        </section>

        {/* Upgrade Tiers Section */}
        <section className="px-6 py-20 bg-[#0a0a12] text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
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
                bg: "bg-gradient-to-b from-[#0f172a] to-[#0a0a18]",
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
                bg: "bg-gradient-to-b from-blue-900/20 to-[#0a0a18]",
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
                bg: "bg-gradient-to-b from-purple-900/20 to-[#0a0a18]",
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
                bg: "bg-gradient-to-b from-blue-900/30 to-[#0a0a18]",
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.title}
                className={`${tier.bg} border border-gray-800 rounded-xl p-6 text-left hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
                <ul className="text-sm text-blue-200 space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.button.href}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-md hover:shadow-blue-500/20 transition-all"
                >
                  {tier.button.label}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Finicon Evolution Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a12] to-[#0f172a] text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
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
                className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6 hover:border-blue-500/70 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-blue-300 text-sm">✅ {item}</p>
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
                className="border border-blue-900/50 bg-[#0a0a18] rounded-xl p-5 text-sm text-blue-300 hover:border-blue-500/70 transition-all"
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
            className="mt-16 max-w-xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500 rounded-2xl p-8 shadow-xl shadow-blue-500/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">🐉 Reserve Your Finicon – £69 (One-time)</h3>
            <ul className="text-blue-200 text-sm space-y-2 mb-6">
              <li>• Season 1 Finicon</li>
              <li>• Trait Class Unlock</li>
              <li>• Custom Name + Reroll Credit</li>
              <li>• Fusion Whitelist</li>
              <li>• Future Token Multiplier</li>
            </ul>
            <a
              href="/reserve"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              🐉 Reserve Now
            </a>
          </motion.div>
        </section>

        {/* SECTION 5 – Boost Packs */}
        <section className="px-6 py-20 bg-[#0a0a12] text-center">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            ⚡ Supercharge Your Growth
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "7-Day XP Pack – £12.99", desc: "2× XP, 1.5× Invite XP, Early Fusion Preview", button: "Buy XP Boost" },
              { title: "Invite Blitz Pack – £9.99", desc: "+5 invite credits, XP multiplier", button: "Boost My Invites" },
              { title: "Trait Reroll Credit – £4.99", desc: "Reroll any Uncommon trait (Pro+ & Founders only)", button: "Reroll Now" },
              { title: "Fusion Pass – £14.99 (Coming Soon)", desc: "Reserve advanced merging", button: "Coming Soon" }
            ].map((item, i) => (
              <motion.div key={i} className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6 text-left hover:border-blue-500/70 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-200 text-sm mb-4">{item.desc}</p>
                <a href="#" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-md hover:shadow-blue-500/20 transition-all">
                  {item.button}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 6 – Viral XP Engine */}
        <section className="px-6 py-20 bg-gradient-to-b from-[#0f172a] to-[#0a0a12] text-center">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            📈 Invite. Climb. Evolve.
          </motion.h2>
          <div className="max-w-2xl mx-auto text-blue-200 text-sm space-y-4">
            <p>✅ Earn XP per invite</p>
            <p>✅ XP = Finicon progression</p>
            <p>✅ Monthly leaderboard</p>
            <p>✅ Weekly trait drops for top referrers</p>
          </div>
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <a href="https://t.me/SnipersVerseBot?start=invite" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              📣 Get My Invite Link
            </a>
            <a href="#" className="bg-[#0a0a18] border border-blue-900/50 text-white px-6 py-3 rounded-full font-bold hover:border-blue-500/70 transition-all">
              🎯 View Leaderboard (Soon)
            </a>
            <a href="#" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
              🚀 Boost My Rank
            </a>
          </div>
        </section>

        {/* SECTION 7 – Roadmap Overview */}
        <section className="px-6 py-20 bg-[#0a0a12] text-center">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            🗺️ What's Next for SnipersVerse
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left text-sm text-blue-200">
            {[
              { title: "Phase 1 – Core (Live)", items: ["Bot", "AI Rug Scoring", "XP & Invites", "Finicon Live"] },
              { title: "Phase 2 – Power (Soon)", items: ["Auto‑Buy", "Trait Features", "Staking", "Auto‑Sell"] },
              { title: "Phase 3 – Infinite (Future)", items: ["PvP", "Token + DAO", "Cross‑Chain", "Market Features"] }
            ].map((phase, i) => (
              <motion.div key={i} className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6 hover:border-blue-500/70 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}>
                <h3 className="text-lg font-bold mb-3 text-white">{phase.title}</h3>
                <ul className="space-y-1">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 8 – Final Engagement Block */}
        <section className="px-6 py-20 bg-gradient-to-b from-[#0a0a12] to-[#0f172a] text-center">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Transform your tool into an edge.
          </motion.h2>
          <p className="text-blue-300 text-lg max-w-xl mx-auto mb-10">
            Evolve your Finicon. Climb the ranks.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://t.me/SnipersVerseBot?start=start" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              ⚡ Launch the Bot
            </a>
            <a href="/reserve" className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-white/30 transition-all">
              🐉 Reserve Finicon
            </a>
            <a href="/upgrade" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
              💸 Upgrade Tier
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 py-8 border-t border-gray-800 mt-16 bg-[#0a0a12]">
          <div className="mb-2">
            <a href="#" className="mx-2 hover:text-white transition-colors">Home</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Vision</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Roadmap</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Join</a>
          </div>
          <div className="mb-2">
            <a href="#" className="mx-2 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Discord</a>
            <a href="#" className="mx-2 hover:text-white transition-colors">Mirror</a>
          </div>
          <div className="mb-2">Contact: support@snipersverse.com</div>
          <div className="mb-2">Disclaimer: Use at your own risk. Not financial advice.</div>
          <div>© 2025 SnipersVerse – All rights reserved</div>
        </footer>

        {/* Add this to your global CSS */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
      </main> </>
  );
}