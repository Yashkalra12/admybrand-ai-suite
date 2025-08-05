"use client"

import { NeonButton } from "@/components/ui/neon-button"
import { Bot } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-panel flex items-center gap-8 px-6 py-3 rounded-full border-2 border-primary/20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/40 flex items-center justify-center neon-glow">
            <Bot className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            Benefits
          </a>
          <a
            href="#testimonials"
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Case Studies
          </a>
        </div>

        {/* CTA Button */}
        <NeonButton size="sm" className="px-6 py-2" glow>
          Book a call
        </NeonButton>
      </div>
    </nav>
  )
}
