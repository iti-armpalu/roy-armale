import { forwardRef } from "react"
import { NavLink } from "@/components/ui/nav-link"

interface HeroSectionProps {
  className?: string
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(({ className = "" }, ref) => {
  return (
    <div ref={ref} className={`min-h-screen bg-[#908B75] relative ${className}`}>
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#FC6415] rounded-full px-8 py-3">
          <div className="flex space-x-12 text-white text-base">
            <NavLink href="#about">About Roy</NavLink>
            <NavLink href="#speaking">Speaking Topics</NavLink>
            <NavLink href="#events">Future Events</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-48">
        <div className="max-w-2xl">
          <h1 className="text-8xl font-light text-[#1C1B16] mb-1 leading-tight font-serif">Roy Armale</h1>
          <span className="text-[#1C1B16] text-lg mb-16 font-light tracking-wide">Keynote speaker & innovation expert</span>
        </div>

        <div className="mt-44">
          <h2 className="text-8xl text-[#2E280B] leading-none max-w-8xl text-right">
            Inspiring innovation through storytelling
          </h2>
        </div>
      </div>
    </div>
  )
})

HeroSection.displayName = "HeroSection"
