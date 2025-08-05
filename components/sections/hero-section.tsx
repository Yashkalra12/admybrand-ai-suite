"use client"

import { motion } from "framer-motion"
import { NeonButton } from "@/components/ui/neon-button"
import { Zap, ArrowRight } from "lucide-react"
import { config } from "@/lib/config"

export function HeroSection() {
  const openBookingLink = () => {
    window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 section-container">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Headline with improved contrast and readability */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-12 leading-tight tracking-tighter">
            <span className="text-foreground">Unlock the Future</span>
            <br />
            <span className="text-foreground">of Marketing with</span>
            <br />
            <span className="text-foreground">ADmyBRAND AI Suite</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Drive growth, automate campaigns, and supercharge ROI with the #1 AI-powered marketing toolkit designed for
            the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Buttons with consistent styling */}
          <NeonButton variant="primary" size="lg" className="px-10 py-4 text-lg group" glow>
            <Zap className="w-5 h-5 mr-3" />
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </NeonButton>
          <NeonButton 
            variant="primary" 
            size="lg" 
            className="px-10 py-4 text-lg" 
            glow
            onClick={openBookingLink}
          >
            Book a Call
          </NeonButton>
        </motion.div>
      </div>
    </section>
  )
}
