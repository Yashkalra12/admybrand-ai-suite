"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of AI in Marketing: 2025 Predictions",
    excerpt: "Discover the latest trends and technologies that will shape marketing automation in the coming year.",
    image: "/placeholder.svg?height=200&width=400&text=AI+Marketing",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "AI Trends",
  },
  {
    title: "How to Implement Conversational AI for Better Customer Engagement",
    excerpt: "A comprehensive guide to deploying chatbots and AI assistants that actually convert leads.",
    image: "/placeholder.svg?height=200&width=400&text=Chatbot+Guide",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    category: "Implementation",
  },
  {
    title: "ROI Optimization: Measuring Success with AI-Powered Analytics",
    excerpt: "Learn how to track and optimize your marketing ROI using advanced AI analytics and predictive modeling.",
    image: "/placeholder.svg?height=200&width=400&text=Analytics+ROI",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Analytics",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Case Studies</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Marketing AI</span>
            <br />
            Resources & Insights
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with our latest articles on AI marketing trends, implementation guides, and success
            stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                variant="panel"
                className="overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full border border-primary/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="text-primary hover:text-primary/80 font-medium transition-colors">
            View All Articles →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
