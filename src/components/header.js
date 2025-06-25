'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import sniperlogo from '../assets/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Vision', href: '/vision' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Join', href: '/join' },
  ];

  return (
    <>
      <header className="flex justify-between items-center px-6 pb-4 border-gray-800 relative z-50 bg-[#0a0a12]">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              width={140}
              height={80}
              src={sniperlogo}
              alt="SnipersVerse Logo"
              className="w-50 h-40 rounded-lg border cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {navItems.map(({ label, href }, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Link
                href={href}
                className="text-blue-200 hover:text-white transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Button */}
        <motion.a
          href="https://t.me/SnipersVerseBot?start=start"
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg hover:shadow-blue-500/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Launch Bot
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 w-72 h-full bg-[#0a0a18] z-50 shadow-2xl p-6 flex flex-col space-y-6 border-l border-blue-900/50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <Image
                    width={32}
                    height={32}
                    src={sniperlogo}
                    alt="SnipersVerse Logo"
                    className="w-7 h-7 rounded-lg border border-blue-500/30"
                  />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    SnipersVerse
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white text-2xl transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navItems.map(({ label, href }, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={href}
                      className="text-blue-200 hover:text-white py-2 px-3 rounded-lg hover:bg-blue-900/20 transition-colors border-b border-blue-900/30"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://t.me/SnipersVerseBot?start=start"
                className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-full font-bold text-center shadow-lg hover:shadow-blue-500/30 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Launch Bot
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
