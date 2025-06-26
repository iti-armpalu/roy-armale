"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SpeakingSection } from "@/components/sections/speaking-section"
import { ContactSection } from "@/components/sections/contact-section"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const speakingRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    // Collect references to all the section elements
    const sections = [heroRef.current, aboutRef.current, speakingRef.current, contactRef.current]

    // Loop through each section and configure its scroll-triggered animation
    sections.forEach((section, index) => {
      if (section) {
        // Set the stacking order of the sections using z-index
        gsap.set(section, { zIndex: index + 1 })

        // Don't apply scroll trigger to the last section (nothing to animate on top of it)
        if (index < sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,   // This section triggers the animation
            // start: "top top",   // Trigger starts when the section hits the top of viewport
            start: section === speakingRef.current ? "bottom bottom" : "top top",

            end: "bottom top",  // Ends when the bottom of the section hits the top of viewport
            pin: true,          // Pin the section during the scroll
            pinSpacing: false,  // Remove extra space caused by pinning (section won't take up scroll height)
            onUpdate: (self) => {
              const progress = self.progress            // Get the scroll progress (0 to 1)
              const nextSection = sections[index + 1]   // Reference to the next section

              // If we're past halfway through the pinned section, start revealing the next one
              if (nextSection && progress > 0.5) {
                gsap.set(nextSection, {
                  y: `${(1 - progress) * 100}vh`,     // Slide the next section into view
                  opacity: 1,                         // Fade it in
                })
              }
            },
            onLeave: () => {
              const nextSection = sections[index + 1]
              if (nextSection) {
                gsap.set(nextSection, { y: 0, opacity: 1 })
              }
            },
            onEnterBack: () => {
              const nextSection = sections[index + 1]
              if (nextSection) {
                gsap.set(nextSection, { y: "100vh", opacity: 0 })
              }
            },
          })
        }
      }
    })

    // Initialize positions
    sections.forEach((section, index) => {
      if (section && index > 0) {
        gsap.set(section, { y: "100vh", opacity: 0 })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative" style={{ height: `${400}vh` }}>
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <SpeakingSection ref={speakingRef} />
      <ContactSection ref={contactRef} />
    </div>
  )
}
