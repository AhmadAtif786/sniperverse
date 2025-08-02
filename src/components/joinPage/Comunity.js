import React from "react";
import { FaTelegramPlane, FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function JoinCommunity() {
  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Glowing globe illustration */}
        <div className="flex justify-center "
          style={{ marginBottom: '-250px' }}
        >
          <Image
            src="/globe.png" // Replace with your animation or image
            alt="Globe"
            width={695}
            height={614}
            className="animate-pulse z-2"
          />
        </div>

        <div className="border border-green-500 rounded-xl p-10 backdrop-blur-md bg-[#0e1e2c] border border-[#00e5ff]">
          <h2 className=" font-bold mt-70" style={{ fontSize: '40px', fontWeight: '400' }}>
            Join Our <span style={{
              fontSize: '48px', fontWeight: '700', backgroundImage: 'linear-gradient(90deg, #15FFDF 2.27%, #00C965 97.73%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Verse</span>
          </h2>
          <p className="text-gray-300 mt-2 mb-8" style={{
            fontWeight: 500,
            fontSize: 36,
            leadingTrim: 'NONE',
            color: '#ffffff'

          }}>
            The fastest Solana sniper lives in Telegram
          </p>
          <a href="https://www.t.me/snipersversesniperbot">
            <button className="mt-10 d-flex px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]" style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', margin: '10px auto' }}>
              <FaTelegramPlane className="mr-2" /> Join Our Telegram
            </button>
          </a>

          <div className="flex justify-center gap-4 mt-10 text-xl">
            <a href="https://x.com/SnipersVerses" className="hover:text-green-400">
              <FiX />
            </a>
            <a href="https://discord.gg/uYFFSDbw" className="hover:text-green-400">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}

    </section>
  );
}
