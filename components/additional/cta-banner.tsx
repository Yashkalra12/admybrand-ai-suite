"use client"

import { motion } from "framer-motion"
import { NeonButton } from "@/components/ui/neon-button"
import { User } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card" // Import GlassCard

export function CTABanner() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <GlassCard variant="panel" glow={true} className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency Text */}
            <p className="text-muted-foreground mb-6 text-lg">
              Only <span className="text-primary font-semibold">3 slots left</span> for August
            </p>

            {/* Main CTA Text */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              <span className="gradient-text">Ready to level up your business?</span>
            </h2>

            {/* CTA Button with Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <NeonButton size="lg" className="px-8 py-4 text-lg group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-primary-foreground" /> {/* Changed icon color for visibility */}
                </div>
                Book a Call With Our Expert
              </NeonButton>
            </motion.div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  )
}
