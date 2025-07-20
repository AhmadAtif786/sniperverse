// components/PricingCard.tsx
import Image from 'next/image'
import React from 'react'


export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  buttonText,
  buttonColor,
  ribbon,
  priceGradient,
  onClick,
}) {
  const gradientStyle = priceGradient
    ? {
        background: priceGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    : {}

  const priceClass = priceGradient ? '' : 'text-white'

  return (
    <div
      className={`relative flex flex-col justify-between bg-black bg-opacity-50 backdrop-blur-md rounded-md p-8 shadow-xl h-full z-10`}
      style={{
        boxShadow: '0px 14.08px 70.42px 0px #6464640A',
        background: '#FFFFFF12',
      }}
    >
      {ribbon && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-red-500 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-bl-lg">
          {ribbon}
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-4" style={{ minHeight: '4rem' }}>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
      </div>

      {/* Price */}
      <div className="mt-6 mb-6 text-center">
        <span className={`text-4xl font-extrabold ${priceClass}`} style={gradientStyle}>
          {price}
        </span>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Features */}
      <div>
        <h4 className="text-xs text-white uppercase mb-4" style={{ fontWeight: '700' }}>
          Features
        </h4>
        <ul className="space-y-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Image src="/smallcheckmark.png" alt="Check" width={16} height={16} />
              <span className="text-sm text-gray-100">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <button
          onClick={() => onClick && onClick(title, price)}
          className={`w-full py-3 mt-5 rounded-lg font-semibold cursor-pointer transition-all duration-200 hover:scale-105 relative z-20 ${title === 'Founders Tier' ? 'text_white' : 'text-black'} shadow-lg ${buttonColor}`}
        >
          {buttonText}
        </button>
        <p className="mt-2 text-xs text-gray-500 text-center">
          Cancel anytime. No commitments
        </p>
      </div>
    </div>
  )
}
