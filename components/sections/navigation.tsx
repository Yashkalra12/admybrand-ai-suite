"use client"

import { NeonButton } from "@/components/ui/neon-button"
import { Bot } from "lucide-react"
import { config } from "@/lib/config"

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openBookingLink = () => {
    window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-panel flex items-center gap-2 md:gap-8 px-3 md:px-6 py-2 md:py-3 rounded-full border-2 border-primary/20">
        {/* Logo - Click to go to top */}
        <div 
          className="flex items-center gap-1 md:gap-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/40 flex items-center justify-center neon-glow">
            <Bot className="w-3 h-3 md:w-5 md:h-5 text-primary" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-2 md:gap-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-xs md:text-base"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-xs md:text-base"
          >
            Case Studies
          </button>
        </div>

        {/* CTA Button */}
        <NeonButton 
          size="sm" 
          className="px-3 md:px-6 py-1 md:py-2 text-xs md:text-sm" 
          glow
          onClick={openBookingLink}
        >
          Book a call
        </NeonButton>
      </div>
    </nav>
  )
}
