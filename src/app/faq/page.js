'use client'
import Header from '@/components/header'
import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Footer from '@/components/footer'

/**
 * Accordion with isolated state per section
 */
const FAQSection = ({ title, faqs, mascot,image }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const handleClick = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx))

  return (
    <section className="mt-12 pb-12 text-white max-w-4xl mx-auto px-4">
      {/* Header: castle icon + title + mascot */}
      <div className="grid grid-cols-3 items-center mb-6">
        <div />
        <div className="flex flex-col items-center">
          <Image src={image} alt="Castle Icon" width={100} height={100} />
          <h2 className="text-sm md:text-base uppercase tracking-widest text-center md:whitespace-nowrap" style={{fontSize:'24px'}}>
            {title}
          </h2>
        </div>
        <div className="flex justify-end">
          <Image src={mascot} alt="Mascot" width={114} height={149} style={{marginBottom:'-20px'}} />
        </div>
      </div>


      {/* FAQs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className={`${idx === faqs.length - 1 ? 'md:col-span-2' : ''}`}>              
              <div className={`bg-gray-800 rounded-lg transition-colors ${isOpen ? 'border-l-4 border-teal-500 shadow-md' : 'hover:shadow-sm'}`}>
                <button
                  onClick={() => handleClick(idx)}
                  className="w-full p-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-100">Q. {faq.question}</span>
                  {isOpen ? (
                    <FaTimes className="text-teal-300 transition-transform" />
                  ) : (
                    <FaPlus className="text-teal-400 transition-transform" />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer || 'Answer content goes here.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function Faq() {
  const gettingStarted = [
    { question: 'What is SnipersVerse?', answer: 'A: SnipersVerse is a crypto sniper bot and NFT platform built on Solana. It helps you snipe early token launches, filter rugs, and collect Finicons — digital creatures that evolve based on your trading activity.' },
    { question: 'How do I start using the bot?', answer: 'A: Join our Telegram, verify yourself, and follow the bot instructions. You don’t need a login on the website — it all runs through Telegram for now.' },
    { question: 'Do I need a wallet to use this?', answer: 'A: SnipersVerse is a crypto sniper bot and NFT platform built on Solana. It helps you snipe early token launches, filter rugs, and collect Finicons — digital creatures that evolve based on your trading activity.' },
    { question: 'Can I use this from mobile?', answer: 'A: Join our Telegram, verify yourself, and follow the bot instructions. You don’t need a login on the website — it all runs through Telegram for now.' },
    { question: 'Is SnipersVerse beginner-friendly?', answer: 'A: Join our Telegram, verify yourself, and follow the bot instructions. You don’t need a login on the website — it all runs through Telegram for now.' },
  ]

  const botFeatures = [
    { question: 'What chains does the bot support?', answer: 'A: We currently support Solana. Support for Base and Ethereum may be added in future phases.' },
    { question: 'What filters are included in the bot?', answer: 'A: You can filter by LP lock, new token age, rug score, wallet inflow, holder growth, honeypot risk, and more.' },
    { question: "What's 'auto-buy'?", answer: 'A: SnipersVerse is a crypto sniper bot and NFT platform built on Solana. It helps you snipe early token launches, filter rugs, and collect Finicons — digital creatures that evolve based on your trading activity.' },
    { question: 'Can I use custom filters?', answer: 'A: Yes, premium users can set up custom rug filters and thresholds (e.g., volume, token age, wallet activity).' },
    { question: 'Can I track specific wallets or tokens?', answer: 'A: Yes. You can track whale wallets, specific deployers, and trending tokens via alerts in the bot.' },
  ]

  const finicons = [
    { question: 'What are Finicons?', answer: 'A: Finicons are soulbound NFT companions that evolve based on your activity in SnipersVerse — sniping, holding, or trading.' },
    { question: 'How does a Finicon evolve?', answer: 'A: Evolution depends on your trade behaviour: high win rates, volume sniped, token survival, and bot engagement all influence growth.' },
    { question: 'Are Finicons tradable?', answer: 'A: In Season 1, Finicons are soulbound (non-transferable). Later seasons will introduce tradable variants with rare traits.' },
    { question: 'What makes a Finicon rare?', answer: 'A: Traits like origin, battle wins, special evolution triggers, and secret “mythic events” determine rarity.' },
    { question: 'Can I own more than one Finicon?', answer: 'A: Yes. Each wallet can mint multiple Finicons across seasons, but only one evolves at a time by default.' },
  ]

  const pricing = [
    { question: 'Is SnipersVerse free to use?', answer: 'A: Yes. There’s a free tier with basic alerts and manual sniping. Advanced features like auto-buy, premium filters, and Finicon tracking require a paid plan.' },
    { question: "What's included in the premium plan?", answer: 'A: Auto-buy, advanced rug filters, wallet linking, Finicon evolution tracking, exclusive snipes, and more.' },
    { question: 'How much does premium cost?', answer: 'A: Pricing will be announced at launch. It will include both monthly and lifetime options payable in SOL or credit card..' },
    { question: 'Do I need to pay for each chain separately?', answer: 'A: No. One premium plan will unlock features across all supported chains.' },
    { question: 'Is there a refund policy?', answer: 'A: No refunds on crypto payments. For card payments, you can cancel future renewals, but there are no partial refunds.' },
  ]

  const security = [
    { question: 'Is this safe to use?', answer: 'A: We never custody your funds. All transactions happen through your own wallet. We also provide anti-rug filters and real-time risk signals.' },
    { question: 'Can the bot drain my wallet?', answer: 'A: No. The bot never asks for private keys or signatures outside of your wallet. Always use a burner wallet when sniping.' },
    { question: 'Do you store user data?', answer: 'A: We only track public wallet addresses (if linked) and bot usage stats. No personal data is stored.' },
    { question: 'What is rug score and how does it work?', answer: 'A: Rug score is a proprietary indicator that ranks new tokens based on risk factors like LP size, wallet inflows, and holder changes.' },
    { question: 'Do you support hardware wallets?', answer: 'A: Yes — any Solana wallet compatible with Telegram and dApp browsers should work, including Ledger.' },
  ]

  const troubleshooting = [
    { question: 'The bot isn’t responding. What should I do?', answer: 'A: Make sure you’re in the right Telegram group, not blocked, and that you’ve started the bot. Try /start again or ask in the support group.' },
    { question: 'I sniped a token but didn’t receive it.', answer: 'A: Check your transaction hash on Solscan. If it failed or was frontrun, it may not have gone through. This can happen on high-traffic launches.' },
    { question: 'Can I recover my Finicon if I lose wallet access?', answer: 'A: Soulbound Finicons are tied to wallets. If you lose access, we can verify ownership via transaction history and restore it manually once per wallet.' },
    { question: 'My auto-buy triggered but I didn’t get the token.', answer: 'A: If the LP was pulled or transaction failed, we don’t retry for security reasons. You’ll see the error in your bot log.' },
    { question: 'Where can I report bugs or get help?', answer: 'A: Use the support Telegram group or submit feedback through the contact form linked in the footer. We usually reply within 24–48h' },
  ]

  return (
    <>
      <div
        className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 z-1 h-100"
        aria-hidden="true"
      />
      <main className="relative  bg-[#0a0a12] text-white font-['Poppins'] min-h-screen">
        <Header />
        <section className="text-center px-4 py-16">
          <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-600">
            Got Questions?
          </h1>
          <p className="text-3xl">We’ve Got Answers.</p>
        </section>

        <FAQSection title="Getting Started with SnipersVerse" faqs={gettingStarted} mascot="/slider/2.png" image="/faq/GettingStartedwithSnipersVerse.png" />
        <FAQSection title="Bot Features" faqs={botFeatures} mascot="/slider/5.png"  image="/faq/BotFeatures.png"  />
        <FAQSection title="Finicons (NFT)" faqs={finicons} mascot="/slider/4.png" image="/faq/nft.png"  />
        <FAQSection title="Pricing & Plans" faqs={pricing} mascot="/slider/3.png" image="/faq/Pricing&Plans.png"  />
        <FAQSection title="Security & Privacy" faqs={security} mascot="/slider/5.png"  image="/faq/Security&Safety.png"  />
        <FAQSection title="Troubleshooting" faqs={troubleshooting} mascot="/slider/1.png" image="/faq/troubleshooting.png"  />
      </main>
      <Footer/>
    </>
  )
}
