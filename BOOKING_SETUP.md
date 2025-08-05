# 📅 Booking System Setup

## 🎯 Overview

The ADmyBRAND AI Suite landing page now includes booking functionality that opens third-party scheduling services when users click "Book a Call" buttons.

## 🔧 Current Implementation

### **Booking Buttons Added:**
1. **Navigation Bar** - "Book a call" button
2. **Hero Section** - "Book a Call" button  
3. **CTA Banner** - "Book a Call With Our Expert" button

### **Current Configuration:**
- **Demo URL**: `https://calendly.com/demo/admybrand-ai-suite-demo`
- **Opens in**: New tab/window
- **Security**: Uses `noopener,noreferrer` for security

## 🚀 How to Set Up Your Own Booking System

### **Option 1: Calendly (Recommended)**
1. Go to [calendly.com](https://calendly.com)
2. Create an account and set up your availability
3. Create a new event type for "ADmyBRAND AI Suite Demo"
4. Copy your Calendly link
5. Update `lib/config.ts`:
   ```ts
   demoUrl: "https://calendly.com/your-username/admybrand-demo"
   ```

### **Option 2: Acuity Scheduling**
1. Go to [acuityscheduling.com](https://acuityscheduling.com)
2. Set up your scheduling page
3. Update `lib/config.ts`:
   ```ts
   demoUrl: "https://your-company.acuityscheduling.com/"
   ```

### **Option 3: Cal.com**
1. Go to [cal.com](https://cal.com)
2. Create your scheduling page
3. Update `lib/config.ts`:
   ```ts
   demoUrl: "https://cal.com/your-username"
   ```

### **Option 4: HubSpot Meetings**
1. Set up HubSpot Meetings
2. Update `lib/config.ts`:
   ```ts
   demoUrl: "https://meetings.hubspot.com/your-username"
   ```

### **Option 5: Zoom Meeting**
1. Create a recurring Zoom meeting
2. Get the registration link
3. Update `lib/config.ts`:
   ```ts
   demoUrl: "https://zoom.us/meeting/register/your-meeting-id"
   ```

## 📝 Configuration File

Edit `lib/config.ts` to update your booking URL:

```ts
export const config = {
  booking: {
    demoUrl: "YOUR_BOOKING_URL_HERE",
    // ... other options
  }
}
```

## 🎨 Customization Options

### **Change Button Text:**
Edit the button text in the respective components:
- `components/sections/navigation.tsx`
- `components/sections/hero-section.tsx`
- `components/additional/cta-banner.tsx`

### **Add More Booking Buttons:**
1. Import the config: `import { config } from "@/lib/config"`
2. Add the function: 
   ```ts
   const openBookingLink = () => {
     window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
   }
   ```
3. Add `onClick={openBookingLink}` to your button

### **Add Analytics:**
Track booking clicks by adding analytics:
```ts
const openBookingLink = () => {
  // Track the click
  gtag('event', 'click', {
    'event_category': 'booking',
    'event_label': 'demo_call'
  })
  
  // Open booking link
  window.open(config.booking.demoUrl, '_blank', 'noopener,noreferrer')
}
```

## 🔍 Testing

1. **Local Testing**: Visit `http://localhost:3000`
2. **Click any "Book a Call" button**
3. **Verify**: Opens your booking service in a new tab

## 📊 Popular Booking Services

| Service | Pros | Cons | Best For |
|---------|------|------|----------|
| **Calendly** | Easy setup, great UX | Limited free plan | Most businesses |
| **Acuity** | Powerful features | More complex setup | Larger teams |
| **Cal.com** | Open source, privacy-focused | Self-hosted option | Privacy-conscious |
| **HubSpot** | CRM integration | Expensive | HubSpot users |
| **Zoom** | Built-in video | Limited features | Simple demos |

## 🎯 Next Steps

1. **Choose your booking service**
2. **Set up your availability**
3. **Update the config file**
4. **Test the booking flow**
5. **Add analytics tracking**

Your booking system is now ready to capture demo requests! 🎉 