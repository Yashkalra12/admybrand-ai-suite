"use client"

import { 
  Navigation,
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  Footer
} from "@/components/sections"
import { 
  ContactSection,
  BlogSection,
  CTABanner
} from "@/components/additional"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Compelling headline, subtext, CTA, hero image/video */}
      <HeroSection />
      
      {/* Features Section - 6+ features with icons and descriptions */}
      <FeaturesSection />
      
      {/* Pricing Cards - 3 tiers with feature comparisons */}
      <PricingSection />
      
      {/* Testimonials Carousel - Customer reviews with photos */}
      <TestimonialsSection />
      
      {/* FAQ Section - Collapsible questions */}
      <FAQSection />
      
      {/* Additional Sections */}
      <ContactSection />
      <BlogSection />
      <CTABanner />
      
      {/* Footer - Links, social media, contact info */}
      <Footer />
    </div>
  )
}
