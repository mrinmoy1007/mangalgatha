# Mangalgatha — Haute Wedding Atelier & Luxury Indian Wedding Planner

> *"Every wedding is a story. We write yours."*

Mangalgatha is an ultra-luxury editorial wedding planning website built for a premier Indian wedding atelier based in Delhi, India, with studios in New Delhi, South Mumbai, and Jaipur.

The design language embodies couture fashion house discipline: wide letter spacing, Cormorant Garamond serif headings, Jost uppercase UI, rich ivory, cream, royal maroon, and gold palettes, tall portrait imagery (3:4, 2:3), no rounded corners, and slow, eased cinematic animations.

---

## Architecture & Tech Stack

- **Next.js 15+ (App Router)** with TypeScript
- **Tailwind CSS v4** with design tokens (`#F8F4EC` ivory, `#EFE7DA` cream, `#5C1A1B` maroon, `#B08D57` gold, `#1C1C1C` ink)
- **GSAP & ScrollTrigger** (`@gsap/react` and `useGSAP` hook) for all pinned scroll effects, line reveals, and scrubbed collages
- **Lenis Smooth Scroll** synced directly with GSAP's ticker (`gsap.ticker.add(...)`) and velocity-reactive marquee speed
- **Swiper.js** with `EffectFade`, custom SVG navigation arrows, fraction counter, and autoplay for curated disciplines & testimonials
- **next/image** with lazy loading, WebP optimization, and responsive `sizes`
- **next/font/google** with `Cormorant_Garamond`, `Jost`, and `Tiro_Devanagari_Hindi` for zero layout shift
- **React Hook Form + Zod** for confidential consultation dossier validation and Next.js Server Actions
- **Structured Data (JSON-LD)** for `EventVenue` & `LocalBusiness` schema for Google search rich snippets

---

## Global Features

1. **Preloader**: Full-screen ivory overlay with a gold monogram "M", an SVG circle that draws itself via `stroke-dashoffset`, 0–100 numerical counter, and a smooth slide-up animation (`sessionStorage` ensures it only shows on the first visit per session).
2. **Dynamic Header**: Centered logo with Devanagari accent (`मंगलगाथा`), split navigation (ABOUT, SERVICES, STORIES | DESTINATIONS, JOURNAL, CONTACT), transparent over the hero, transforming to ivory backdrop on scroll (>80px), auto-hiding on scroll down and reappearing on scroll up. Includes phone dropdown for Delhi, Mumbai, and Jaipur ateliers, plus a full-screen maroon mobile drawer.
3. **Custom Desktop Cursor**: Small gold dot tracking the mouse with lerp delay, expanding into a labeled "VIEW" badge when hovering imagery, slides, or archives.
4. **Pinned Cinematic Hero**: Centered portrait video loop framed by four staggered portrait wedding photos. As the user scrolls, the center video scales to full viewport while side images glide outward and fade out.
5. **Infinite Dual Marquees**: Scrolling in opposite directions, velocity-reactive to smooth scroll speed, pausing on hover.
6. **Rotating Circular Badge**: SVG text on a circular path spinning at 20s linear infinite (`✦ MANGALGATHA ✦ SIGNATURE ATELIER ✦`).
7. **Interactive Lightbox**: Full-screen modal with keyboard navigation (Esc, Left/Right arrows) for real wedding stories.
8. **Floating WhatsApp Concierge**: Fixed bottom-right quick liaison button for immediate client communication.

---

## How to Edit Content in `/data/`

All content is decoupled into TypeScript files in `/data/*.ts` for easy migration to headless CMS platforms like Sanity:

- `/data/services.ts`: Edit the 6 curated services, including short descriptions, full architectural scope, process steps, and galleries.
- `/data/stories.ts`: Add or modify real wedding stories (couples, venues, guest counts, testimonials, highlights, and gallery images).
- `/data/destinations.ts`: Update featured destinations (Udaipur, Jaipur, Jodhpur, Goa, Mussoorie, Lake Como, Dubai) and best seasons.
- `/data/testimonials.ts`: Add quotes and couple reviews.
- `/data/studios.ts`: Modify atelier addresses, phone numbers, opening hours, and Google Maps direction links.
- `/data/instagram.ts`: Update editorial Instagram feeds, captions, and reel links.
- `/data/journal.ts`: Add or edit long-form essays on wedding scenography and palace protocol.
- `/data/about.ts`: Edit founder biography, team members, philosophy pillars, and milestone timeline.

---

## How to Replace Images and Videos

### Replacing the Hero Video
Place your high-resolution MP4 video file in `/public/videos/hero.mp4` or update the `<video>` `<source>` tag in `/components/sections/HeroSection.tsx`:
```tsx
<video autoPlay muted loop playsInline poster="https://images.unsplash.com/...">
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
```

### Adding New Image Domains
If you load images from hostnames other than `images.unsplash.com` and `picsum.photos`, register them in `next.config.ts`:
```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-cdn.com',
      pathname: '/**',
    },
  ],
},
```

---

## Local Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```
