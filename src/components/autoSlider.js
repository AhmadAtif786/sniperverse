'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/slider/1.png',
  '/slider/2.png',
  '/slider/3.png',
  '/slider/4.png',
  '/slider/5.png',
]

export default function SquareCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Double the array for seamless looping
  const carouselImages = [...images, ...images]

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] to-[#0f172a]">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {carouselImages.map((src, index) => (
          <div 
            key={`${index}-${src}`}
            className="min-w-[20%] p-1" // 5 slides = 20% each
          >
            <div className="relative aspect-square"> {/* Perfect square container */}
              <Image
                src={src}
                alt=""
                fill
                className="object-contain rounded-lg"
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}