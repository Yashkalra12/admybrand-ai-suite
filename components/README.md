# ADmyBRAND AI Suite - Component Library

This directory contains all components for the ADmyBRAND AI Suite landing page with a comprehensive component system.

## 🏗️ Project Structure

### Core Landing Page Sections (`/sections`)

1. **Navigation** (`navigation.tsx`)
   - Main navigation bar with glassmorphism design
   - Logo, menu items, smooth scrolling navigation
   - "Book a Call" CTA button with Cal.com integration

2. **Hero Section** (`hero-section.tsx`)
   - Compelling headline and subtext
   - "Get Started Free" and "Book a Call" CTAs
   - Hero image/video background with animations

3. **Features Section** (`features-section.tsx`)
   - 6+ AI-powered features with icons
   - Glassmorphism cards with hover effects
   - Interactive elements and animations

4. **Pricing Section** (`pricing-section.tsx`)
   - 3 tiers: Starter, Pro, Enterprise
   - Interactive monthly/annual toggle with 20% discount
   - Dynamic pricing calculator
   - All CTAs link to Cal.com booking

5. **Hyperlocal Ads Section** (`hyperlocal-ads-section.tsx`)
   - 15 advertising locations in horizontal scroll
   - Transportation hubs, city centers, mobile advertising
   - Glassmorphism cards with brand colors
   - "Start Hyperlocal Campaign" CTA

6. **Testimonials Section** (`testimonials-section.tsx`)
   - Customer reviews with photos and ratings
   - Carousel/slider functionality
   - Star ratings and quotes

7. **FAQ Section** (`faq-section.tsx`)
   - Collapsible questions and answers
   - Common customer inquiries
   - Interactive accordion with animations

8. **Footer** (`footer.tsx`)
   - Social media links (YouTube, LinkedIn, Twitter)
   - Company information and legal links
   - Brand colors and glassmorphism design

### Additional Sections (`/additional`)

- **Contact Section** (`contact-section.tsx`)
  - Contact form with validation
  - Glassmorphism design
  - Success/error states

- **Blog Section** (`blog-section.tsx`)
  - Case studies with custom images
  - 3 blog posts with categories
  - Custom images (cs1.jpeg, cs2.jpeg, cs3.jpeg)

- **CTA Banner** (`cta-banner.tsx`)
  - Urgency messaging ("3 slots left")
  - "Book a Call With Our Expert" CTA
  - Glassmorphism panel with glow effects

- **Hyperlocal Ads Section** (`hyperlocal-ads-section.tsx`)
  - 15 advertising locations
  - Horizontal scrolling layout
  - Brand color integration

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#415a98`
- **Secondary Purple**: `#953e98` 
- **Accent Pink**: `#cc2487`
- **Destructive Red**: `#e43c64`
- **Pure White**: `#ffffff`

### Glassmorphism Effects
- `.glass-card` - Basic glass effect
- `.glass-strong` - Enhanced glass effect
- `.glass-panel` - Panel glass effect
- `.neon-glow` - Minimal neon glow
- `.gradient-text` - Brand gradient text

### Animations
- Framer Motion for smooth transitions
- Hover effects with scale and glow
- Scroll-triggered animations
- Loading states and micro-interactions

## 📱 Features

### Booking Integration
- All CTAs link to Cal.com booking page
- Centralized configuration in `lib/config.ts`
- Opens in new tab with security attributes

### Responsive Design
- Mobile-first approach
- Horizontal scrolling for hyperlocal ads
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Image optimization
- Lazy loading
- Minimal bundle size
- Fast loading times

## 🚀 Usage

### Import from Main Index
```tsx
import { 
  Navigation,
  HeroSection,
  FeaturesSection,
  PricingSection,
  HyperlocalAdsSection,
  TestimonialsSection,
  FAQSection,
  Footer
} from "@/components/sections"

import { 
  ContactSection,
  BlogSection,
  CTABanner
} from "@/components/additional"
```

### Import Individual Components
```tsx
import { NeonButton } from "@/components/ui/neon-button"
import { GlassCard } from "@/components/ui/glass-card"
```

## 📁 File Organization

```
components/
├── index.ts              # Main component exports
├── sections/             # Core landing page sections
│   ├── index.ts         # Section exports
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── pricing-section.tsx
│   ├── hyperlocal-ads-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   └── footer.tsx
├── additional/           # Additional sections
│   ├── index.ts         # Additional exports
│   ├── contact-section.tsx
│   ├── blog-section.tsx
│   ├── cta-banner.tsx
│   └── hyperlocal-ads-section.tsx
├── ui/                  # Reusable UI components
│   ├── neon-button.tsx
│   ├── glass-card.tsx
│   └── ... (40+ components)
└── bento/               # Specialized components
    ├── ai-code-reviews.tsx
    ├── easy-deployment.tsx
    └── ... (6 components)
```

## 🎯 Key Features

- **40+ Reusable Components**: Complete UI component library
- **Brand Integration**: ADmyBRAND colors and design system
- **Booking System**: Cal.com integration for demos
- **Hyperlocal Advertising**: 15 location types showcased
- **Modern Animations**: Framer Motion with glassmorphism
- **Mobile-First**: Responsive design for all devices
- **Performance Optimized**: Fast loading and smooth interactions 