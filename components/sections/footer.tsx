"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Bot, Twitter, Linkedin, Youtube, Mail } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/admybrand?lang=en" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/admybrand?originalSubdomain=in" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCEKgVQ1MeZx3lpyDqGtW30g" },
]

export function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <GlassCard variant="panel" className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">ADmyBRAND</span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Revolutionizing marketing with AI-powered automation, predictive analytics, and next-generation
                  customer engagement tools.
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:border-primary/50 hover:neon-glow transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-foreground font-semibold mb-4 capitalize">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@admybrand.com</span>
              </div>

              <p className="text-muted-foreground text-center">© 2025 ADmyBRAND AI Suite. All rights reserved.</p>

              <div className="text-sm text-muted-foreground">Made with ❤️ by Yash</div>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </footer>
  )
}
