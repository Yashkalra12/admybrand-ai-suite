"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { MapPin, Plane, Bus, Train, Car, Building, Landmark, Church, Truck, Zap } from "lucide-react"
import { config } from "@/lib/config"

const advertisingLocations = [
  { name: "Airport", icon: Plane, description: "High-traffic airport ads" },
  { name: "Bus Station", icon: Bus, description: "Local bus displays" },
  { name: "Metro Station", icon: Train, description: "Underground metro ads" },
  { name: "Railway Station", icon: Train, description: "Train station ads" },
  { name: "City Center", icon: Building, description: "Downtown ad spaces" },
  { name: "City Landmarks", icon: Landmark, description: "Iconic landmark ads" },
  { name: "Religious Centers", icon: Church, description: "Community center ads" },
  { name: "Truck Advertising", icon: Truck, description: "Mobile truck ads" },
  { name: "AC Bus", icon: Bus, description: "Air-conditioned bus ads" },
  { name: "Auto Rickshaw", icon: Car, description: "Auto ad wraps" },
  { name: "Regular Bus", icon: Bus, description: "Standard bus ads" },
  { name: "Cab Advertising", icon: Car, description: "Taxi cab ads" },
  { name: "Van Advertising", icon: Car, description: "Delivery van ads" },
  { name: "Metro Trains", icon: Train, description: "Metro train ads" },
  { name: "Car Wraps", icon: Car, description: "Personal vehicle ads" },
]

export function HyperlocalAdsSection() {
  const openBookingLink = () => {
    window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden section-container">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Hyperlocal Advertising</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Reach Your Audience</span>
            <br />
            Where They Are
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Target localities with precision. From transportation hubs to city landmarks, our hyperlocal advertising network covers every corner of your market.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {advertisingLocations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <GlassCard
                  variant="panel"
                  className="p-6 h-full hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 inline-flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300 text-primary">
                      <location.icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {location.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <GlassCard variant="panel" className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Ready to Dominate</span>
                <br />
                Your Local Market?
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8">
                Get started with hyperlocal advertising and reach your target audience 
                with precision targeting and AI-powered optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={openBookingLink}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Hyperlocal Campaign
                </NeonButton>
                
                <NeonButton 
                  variant="ghost" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                >
                  View Coverage Map
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
} 