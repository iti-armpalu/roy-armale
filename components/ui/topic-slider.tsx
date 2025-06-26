"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TopicCard {
    id: number
    title: string
    subtitle: string
    image: string
}

interface TopicSliderProps {
    cards: TopicCard[]
    className?: string
}

export function TopicSlider({ cards, className = "" }: TopicSliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const cardWidth = 280 // Width of each card
    const cardGap = 20 // Gap between cards

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)

        const nextIndex = currentIndex >= cards.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(nextIndex)

        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: -(nextIndex * (cardWidth + cardGap)),
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
            })
        }
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)

        const prevIndex = currentIndex <= 0 ? cards.length - 1 : currentIndex - 1
        setCurrentIndex(prevIndex)

        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: -(prevIndex * (cardWidth + cardGap)),
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
            })
        }
    }

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)

        setCurrentIndex(index)

        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: -(index * (cardWidth + cardGap)),
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
            })
        }
    }

    useEffect(() => {
        if (sliderRef.current) {
            gsap.set(sliderRef.current, { x: 0 })
        }
    }, [])

    return (
        <div className={`relative ${className}`}>
            {/* Slider Container */}
            {/* <div className="overflow-hidden" style={{ width: `${(cardWidth * 2) + cardGap + cardWidth * 0.7}px` }}> */}
            <div className="overflow-hidden" style={{ width: `100%` }}>
                <div ref={sliderRef} className="flex transition-none" style={{ gap: `${cardGap}px` }}>
                    {cards.map((card, index) => {
                        const isActive = index === currentIndex
                        const isSecond = index === (currentIndex + 1) % cards.length
                        const isThird = index === (currentIndex + 2) % cards.length

                        return (
                            <div
                                key={card.id}
                                className="flex-shrink-0 transition-all duration-300"
                                style={{
                                    width: `${cardWidth}px`,
                                    opacity: isActive ? 1 : isSecond ? 1 : isThird ? 0.7 : 0.3,
                                    transform: isActive ? "scale(1)" : "scale(0.95)",
                                }}
                            >
                                <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
                                    <Image
                                        src={`/placeholder.svg?height=300&width=400&text=${card.image}`}
                                        alt={card.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-white text-sm font-medium line-clamp-1">{card.title}</h4>
                                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{card.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-6 bg-[#FF6B35] hover:bg-[#E55A2B] text-white p-3 rounded-full transition-colors disabled:opacity-50 z-10 shadow-lg"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-6 bg-[#FF6B35] hover:bg-[#E55A2B] text-white p-3 rounded-full transition-colors disabled:opacity-50 z-10 shadow-lg"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#FF6B35] w-6" : "bg-gray-500 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
