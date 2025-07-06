'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import sniperlogo from '../../public/logo.png';

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
      <header className="flex justify-between items-center px-6 pb-4 border-gray-800 relative z-50  ">
        <div className="flex items-center space-x-3 mt-2">
          <Link href="/">
            <Image
              width={148}
              height={75}
              src={sniperlogo}
              alt="SnipersVerse Logo"
              className="rounded-lg border cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm">
          {navItems.map(({ label, href }, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Link
                href={href}
                className="text-white transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
                href="https://t.me/SnipersVerseBot?start=start"
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]"
              >
                Coming soon
              </a>

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
                    width={102}
                    height={52}
                    src={sniperlogo}
                    alt="SnipersVerse Logo"
                  />
              
                  
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

            <a
                href="https://t.me/SnipersVerseBot?start=start"
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]"
              >
                🚀 Launch SnipersVerse Bot
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
