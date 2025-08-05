"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    photo: "/placeholder.svg?height=80&width=80&text=Anna",
    name: "Anna L.",
    title: "Marketing Director",
    company: "TechCorp",
    quote: "ADmyBRAND AI Suite turbocharged our campaigns. The futuristic design blew our clients away!",
    rating: 5,
  },
  {
    photo: "/placeholder.svg?height=80&width=80&text=Jay",
    name: "Jay P.",
    title: "Growth Manager",
    company: "StartupXYZ",
    quote: "The predictive analytics gave us an unfair edge. Beautiful, intuitive, and truly next-gen.",
    rating: 5,
  },
  {
    photo: "/placeholder.svg?height=80&width=80&text=Neha",
    name: "Neha S.",
    title: "CMO",
    company: "Enterprise Inc",
    quote: "The glassmorphism UI and smooth animations make data feel alive. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden section-container">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What Our Clients</span>
            <br />
            Say About Us
          </h2>
        </motion.div>

        <div className="relative">
          <GlassCard variant="strong" glow={true} className="p-8 md:p-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote */}
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />

              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonials[currentIndex].photo || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-primary/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
                </div>

                <div className="text-left">
                  <h4 className="text-xl font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].title}</p>
                  <p className="text-primary font-medium">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </GlassCard>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary neon-glow" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
