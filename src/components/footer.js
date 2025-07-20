'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import sniperlogo from '../../public/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/">
                <Image
                  src={sniperlogo}
                  alt="Snipersverse"
                  width={148}
                  height={75}
                  className="rounded-lg"
                />
              
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#00ffad] transition">Home
                </Link>
              </li>
              <li>
                <Link href="/howItWorks" className="hover:text-[#00ffad] transition">How it Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#00ffad] transition">FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#00ffad] transition">Pricing
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-[#00ffad] transition">Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="hover:text-[#00ffad] transition">Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#00ffad] transition">Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00ffad] transition">Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-xl hover:text-[#00ffad] transition"
              >
                <FaTwitter />
                </a>
              
              <a
                href="#"
                aria-label="Telegram"
                className="text-xl hover:text-[#00ffad] transition"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="text-xl hover:text-[#00ffad] transition"
              >
                <FaDiscord />
</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center space-y-4">
          <p>&copy; 2025 Snipersverse. All rights reserved.</p>
          <p className="text-xs text-gray-500 max-w-xl mx-auto">
            Snipersverse is a crypto trading tool, not financial advice.
            Cryptocurrency trading is highly volatile and carries significant
            risk. Users should conduct their own research before making any
            trades. Past performance is not indicative of future results. Use
            of Snipersverse is at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
