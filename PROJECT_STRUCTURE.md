# ADmyBRAND AI Suite - Project Structure

## 📁 Directory Structure

```
AdMyBrand Ai Suite/
├── app/
│   ├── globals.css
│   ├── layout.tsx          # Root layout with favicon and metadata
│   └── page.tsx            # Main landing page
├── components/
│   ├── sections/           # Core landing page sections
│   │   ├── index.ts
│   │   ├── README.md
│   │   ├── navigation.tsx      # Main navigation bar
│   │   ├── hero-section.tsx    # Hero with headline, CTA, image
│   │   ├── features-section.tsx # 6+ features with icons
│   │   ├── pricing-section.tsx  # 3 pricing tiers
│   │   ├── testimonials-section.tsx # Customer reviews carousel
│   │   ├── faq-section.tsx      # Collapsible FAQ
│   │   └── footer.tsx           # Links, social, contact
│   ├── additional/         # Additional sections
│   │   ├── index.ts
│   │   ├── contact-section.tsx  # Contact form
│   │   ├── blog-section.tsx     # Blog/resources
│   │   └── cta-banner.tsx       # Call-to-action banner
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (40+ components)
│   ├── bento/             # Specialized components
│   │   ├── ai-code-reviews.tsx
│   │   ├── easy-deployment.tsx
│   │   └── ... (6 components)
│   └── index.ts           # Main component exports
├── public/
│   ├── favicon.ico        # Browser tab icon
│   ├── favicon.svg        # SVG favicon
│   ├── apple-touch-icon.png # iOS home screen icon
│   ├── images/            # Image assets
│   └── logos/            # Logo assets
└── lib/
    └── utils.ts          # Utility functions
```

## 🎯 Landing Page Sections

### 1. **Navigation** (`components/sections/navigation.tsx`)
- Main navigation bar
- Logo, menu items, CTA button
- Responsive design

### 2. **Hero Section** (`components/sections/hero-section.tsx`)
- Compelling headline and subtext
- Primary CTA buttons
- Hero image/video background
- Animated elements

### 3. **Features Section** (`components/sections/features-section.tsx`)
- 6+ features with icons and descriptions
- AI-powered capabilities showcase
- Interactive elements
- Grid layout

### 4. **Pricing Cards** (`components/sections/pricing-section.tsx`)
- 3 tiers with feature comparisons
- Starter, Pro, Enterprise plans
- Clear pricing and benefits
- Toggle between monthly/annual

### 5. **Testimonials Carousel** (`components/sections/testimonials-section.tsx`)
- Customer reviews with photos
- Star ratings and quotes
- Carousel/slider functionality
- Multiple testimonials

### 6. **FAQ Section** (`components/sections/faq-section.tsx`)
- Collapsible questions and answers
- Common customer inquiries
- Interactive accordion
- Search functionality

### 7. **Footer** (`components/sections/footer.tsx`)
- Links, social media, contact info
- Company information
- Legal links
- Newsletter signup

## 🔧 Additional Sections

### **Contact Section** (`components/additional/contact-section.tsx`)
- Contact form
- Company information
- Map integration

### **Blog Section** (`components/additional/blog-section.tsx`)
- Latest articles
- Resource links
- Content marketing

### **CTA Banner** (`components/additional/cta-banner.tsx`)
- Call-to-action banner
- Urgency messaging
- Lead generation

## 📦 Component Organization

### **Core Sections** (`components/sections/`)
All main landing page sections are organized here for easy maintenance.

### **Additional Sections** (`components/additional/`)
Extra sections that enhance the landing page but aren't core.

### **UI Components** (`components/ui/`)
Reusable UI components following shadcn/ui patterns.

### **Specialized Components** (`components/bento/`)
Complex, feature-specific components.

## 🚀 Usage

### Import Core Sections
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

### Import Additional Sections
```tsx
import { 
  ContactSection,
  BlogSection,
  CTABanner
} from "@/components/additional"
```

### Import All Components
```tsx
import * as Components from "@/components"
```

## 🎨 Design System

- **Colors**: Primary, secondary, accent colors
- **Typography**: Inter font family
- **Components**: shadcn/ui based
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📱 Responsive Design

All sections are fully responsive with:
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Touch-friendly interactions

## 🔍 SEO & Performance

- **Meta tags**: Proper title, description, keywords
- **Favicon**: Multiple formats for compatibility
- **Images**: Optimized and lazy-loaded
- **Performance**: Fast loading times 