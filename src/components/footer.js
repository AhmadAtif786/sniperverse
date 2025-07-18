'use client';

import React from 'react';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import sniperlogo from '../../public/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-sm text-gray-500 bg-[#151515]">
      <div className="py-7 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-6 gap-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
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

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
            <a href="#" className="hover:text-[#00ffad] transition">Home</a>
            <a href="/howItWorks" className="hover:text-[#00ffad] transition">How it works</a>
            <Link href="/faq" className="hover:text-[#00ffad] transition">FAQ</Link>
            <a href="#" className="hover:text-[#00ffad] transition">Pricing</a>
            <a href="#" className="hover:text-[#00ffad] transition">Community</a>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4 text-white text-lg">
            <a href="#" className="hover:text-[#00ffad] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#00ffad] transition">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-[#00ffad] transition">
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-4 text-center text-gray-400">
          &copy; 2025 Snipersverse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
