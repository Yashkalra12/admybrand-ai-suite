"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes—get started with a 14-day free trial, no credit card required. Experience the full power of our AI marketing suite before making any commitment.",
  },
  {
    q: "What makes your AI unique?",
    a: "Our custom-trained models are specifically designed for marketing optimization and security. We use advanced machine learning algorithms that adapt to your brand's unique voice and audience behavior.",
  },
  {
    q: "Can I import my data?",
    a: "We support full CSV, API, and CRM integrations for hassle-free data onboarding. Our system can connect with over 100+ popular marketing tools and platforms.",
  },
  {
    q: "How secure is my data?",
    a: "We employ enterprise-grade security with end-to-end encryption, SOC 2 compliance, and AI-powered threat detection. Your data is protected with the highest industry standards.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Yes, our Enterprise plan includes custom integrations and dedicated API access. Our team will work with you to build seamless connections with your existing tech stack.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked</span>
            <br />
            Questions
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our AI marketing platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard variant="panel" className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
