"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Check, Star, Zap } from "lucide-react"
import { config } from "@/lib/config"

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for small businesses getting started with AI marketing",
    features: ["Up to 2 campaigns", "Basic AI insights", "Email support", "Standard dashboards", "5GB storage"],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$129",
    period: "/mo",
    description: "Advanced AI tools for growing marketing teams",
    features: [
      "10 campaigns",
      "Advanced AI tools",
      "Personalization Engine",
      "Priority support",
      "Advanced dashboards",
      "50GB storage",
      "API access",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    period: "",
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated AI strategist",
      "Full API access",
      "Unlimited storage",
      "24/7 phone support",
      "Custom training",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const openBookingLink = () => {
    window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden section-container">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-semibold">Pricing Plans</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Choose Your</span>
            <br />
            AI Marketing Power
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scale your marketing with AI-powered tools designed for every business size
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  {" "}
                  {/* Adjusted top position */}
                  <div className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold text-white neon-glow">
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard
                variant="panel"
                className={`p-8 h-full relative overflow-hidden ${tier.popular ? "scale-105" : ""}`}
                glow={tier.popular}
              >
                {tier.popular && <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />}

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <NeonButton 
                    className="w-full" 
                    variant={tier.popular ? "primary" : "ghost"} 
                    size="lg"
                    onClick={openBookingLink}
                  >
                    {tier.popular && <Zap className="w-4 h-4 mr-2" />}
                    {tier.cta}
                  </NeonButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Pricing Calculator Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Need a custom quote?
            <button 
              className="ml-2 text-primary hover:text-primary/80 underline transition-colors"
              onClick={openBookingLink}
            >
              Try our interactive pricing calculator
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
