# Landing Page Sections

This directory contains all the main sections for the ADmyBRAND AI Suite landing page.

## Structure

### Core Landing Page Sections

1. **Navigation** (`navigation.tsx`)
   - Main navigation bar
   - Logo, menu items, CTA button

2. **Hero Section** (`hero-section.tsx`)
   - Compelling headline and subtext
   - Primary CTA buttons
   - Hero image/video background

3. **Features Section** (`features-section.tsx`)
   - 6+ features with icons and descriptions
   - AI-powered capabilities showcase
   - Interactive elements

4. **Pricing Cards** (`pricing-section.tsx`)
   - 3 tiers with feature comparisons
   - Starter, Pro, Enterprise plans
   - Clear pricing and benefits

5. **Testimonials Carousel** (`testimonials-section.tsx`)
   - Customer reviews with photos
   - Star ratings and quotes
   - Carousel/slider functionality

6. **FAQ Section** (`faq-section.tsx`)
   - Collapsible questions and answers
   - Common customer inquiries
   - Interactive accordion

7. **Footer** (`footer.tsx`)
   - Links, social media, contact info
   - Company information
   - Legal links

### Additional Sections

- **Contact Section** (`../contact-section.tsx`)
- **Blog Section** (`../blog-section.tsx`)
- **CTA Banner** (`../cta-banner.tsx`)

## Usage

Import sections from the index file:

```tsx
import { 
  Navigation,
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  Footer
} from "@/components/sections"
```

## File Organization

- `components/sections/` - Core landing page sections
- `components/` - Additional sections and utilities
- `components/ui/` - Reusable UI components
- `components/bento/` - Specialized components 