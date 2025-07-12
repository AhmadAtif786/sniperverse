import React from "react";
import { FaTelegramPlane, FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function VisionJoinUs() {
    return (
        <section className="bg-[#0A0F2C] text-white py-20 px-4">
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

                    <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center mt-10 space-y-12">
                        {/* Title + Primary Buttons */}
                        <div className="space-y-4 text-center">


                            <div className="flex flex-wrap gap-4 justify-center">
                                <a className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#15FFDF] to-[#00C965] text-black rounded-md font-semibold shadow-md hover:opacity-90 transition">
                                    {/* telegram paper-plane */}
                                    <FaTelegramPlane className="mr-2" />
                                    <span>Join Our Telegram</span>
                                </a>

                                <a className="flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-[#00C965] text-[#00C965] rounded-md font-semibold hover:bg-gray-700 transition">
                                    {/* group icon */}
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zm-7 8a4 4 0 118 0H6z" />
                                    </svg>
                                    <span>SnipersVerse DAO</span>
                                </a>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 w-full max-w-4xl md:grid-cols-2">
                            {/* Investor Deck */}
                            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center space-y-4">
                                <h3 className="text-lg font-semibold text-white">Investor Deck</h3>
                                <p className="text-sm text-gray-400">Email capture for PDF</p>
                                <div className="w-full max-w-xs relative">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 pr-10 bg-gray-900 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00C965]"
                                    />
                                    <button className="absolute inset-y-0 right-1 flex items-center justify-center px-3 bg-[#00C965] rounded-md">
                                        <svg
                                            className="w-5 h-5 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 3l7 7-7 7-1.414-1.414L13.172 11H3V9h10.172L8.586 4.414z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Juice Box */}
                            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center space-y-4">
                                {/* juice-box icon */}
                                <div className="w-12 h-12 bg-[#00C965] rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-black"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 3h14v18H5V3zm2 2v14h10V5H7zm3 2h4v2h-4V7zm0 4h4v6h-4v-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white">Juice Box</h3>
                                <p className="text-sm text-gray-400">Support the project Early</p>
                            </div>
                        </div>


                    </div>



                    <div className="flex justify-center gap-4 mt-10 text-xl">
                        <a href="#" className="hover:text-green-400">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-green-400">
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
