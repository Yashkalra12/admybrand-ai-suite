"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { TrendingUp, Users, MessageCircle, Gauge, Shield, Brain, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Campaign Automation",
    description: "Let smart algorithms plan, optimize, and analyze every campaign in real time.",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Anticipate customer behavior with deep learning-driven insights.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Personalization Engine",
    description: "Deliver hyper-personalized messaging at every touchpoint.",
    color: "text-accent",
  },
  {
    icon: MessageCircle,
    title: "Conversational AI",
    description: "Engage leads with human-like chatbots trained on your data.",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Real-time Performance Tracking",
    description: "Visualize results instantly with stunning dashboards and KPIs.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "AI-powered threat detection and compliance monitoring.",
    color: "text-accent",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden section-container">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">AI-Powered Features</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Next-Generation</span>
            <br />
            Marketing Intelligence
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your marketing strategy and achieve unprecedented
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                variant="strong"
                glow={true}
                className="p-6 h-full hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:neon-glow transition-all duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-ultra-contrast group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
