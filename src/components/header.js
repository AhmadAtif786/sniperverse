"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sniperlogo from '../assets/sniperverse.png'
import Image from "next/image";

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 relative z-50 bg-black">
        <div className="flex items-center space-x-2">
          <Image width={120} height={100} src={sniperlogo} alt="Lens Logo" className="w-6 h-6" />
          <span className="font-bold text-white">SnipersVerse</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Vision</a>
          <a href="#" className="hover:underline">Roadmap</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Join</a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block px-4 py-1 bg-white text-black rounded-full text-sm font-bold">
          Launch Bot
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white text-xl">
          ☰
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 shadow-lg p-6 flex flex-col space-y-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="self-end text-gray-400 text-xl"
              >
                ×
              </button>
              {["Home", "Vision", "Roadmap", "Pricing", "Join"].map((label, i) => (
                <a key={i} href="#" className="text-white text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <a href="https://t.me/SnipersVerseBot?start=start" className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold text-center">
                Launch Bot
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
