# GIRAF™ Landing Page

Production-ready Next.js 14 landing page for GIRAF — Get Investment Ready by Accelerator Frankfurt.

## Features

- **Next.js 14 App Router** with TypeScript
- **Tailwind CSS v4** with custom design tokens
- **shadcn/ui** components (NavigationMenu, Button, Card, Accordion, Badge, Dialog)
- **Responsive design** with mobile-first approach
- **Accessibility** (ARIA labels, keyboard navigation, semantic HTML)
- **SEO optimized** (meta tags, Open Graph, JSON-LD schema)
- **Analytics ready** (dataLayer events for key interactions)
- **Performance optimized** (lazy-loaded images, Next/Image, Lighthouse ≥ 90)

## Design Tokens

All brand colors are defined in `app/globals.css`:

\`\`\`css
--ink: #0B0D11;      /* Primary text, dark backgrounds */
--paper: #F6F7F9;    /* Light backgrounds */
--signal: #FF4D00;   /* Primary CTA, accents */
--slate: #1C2530;    /* Secondary elements */
--steel: #7C8B9A;    /* Muted text, borders */
\`\`\`

**Fonts:**
- **Space Grotesk** for headlines (configured in `app/layout.tsx`)
- **Inter** for body text (configured in `app/layout.tsx`)

## Content Management

**All copy is centralized in one file:** `lib/site-config.ts`

Edit this file to update:
- Navigation links
- Hero headlines and CTAs
- Value propositions
- How it works steps
- Program details
- Results metrics
- Portfolio companies
- FAQ items
- Footer content

## Image Placeholders

Replace these placeholder images with your actual assets:

### Logo & Branding
- `/logo.png` (used in header) - Recommended: 200×60px, transparent PNG
- `/og-image.png` (social sharing) - Required: 1200×630px

### Portfolio Logos
- `/abstract-startup-logo.png` - Portfolio company 1
- `/tech-startup-logo.png` - Portfolio company 2
- `/abstract-saas-logo.png` - Portfolio company 3

**To replace images:**
1. Add your images to the `/public` folder
2. Update the file paths in `lib/site-config.ts` (portfolio section)
3. Update `/logo.png` and `/og-image.png` directly in `/public`

**Image specifications:**
- Use Next/Image optimized formats (WebP, AVIF)
- Portfolio logos: 120×120px minimum, square aspect ratio
- All images include proper alt text for accessibility

## Analytics Events

The following dataLayer events are tracked:

\`\`\`javascript
// Hero section view
{ event: 'view_hero', page: 'landing' }

// Apply button clicks
{ event: 'click_apply', location: 'hero|header|final_cta' }

// Book call button clicks
{ event: 'click_book_call', location: 'hero|header' }

// Form submission
{ event: 'submit_apply', form_data: {...} }

// FAQ interactions
{ event: 'view_faq', question: '...' }

// Portfolio tile clicks
{ event: 'click_portfolio_tile', company: '...' }
\`\`\`

Connect your Google Tag Manager or analytics platform to `window.dataLayer`.

## Form Endpoint

The apply form currently submits to a dummy endpoint. To connect your backend:

1. Open `components/apply-modal.tsx`
2. Find the `handleSubmit` function
3. Replace the dummy endpoint with your API:

\`\`\`typescript
const response = await fetch("YOUR_API_ENDPOINT", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
})
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy manually:

\`\`\`bash
npm run build
npm start
\`\`\`

## Lighthouse Scores

Target scores (all ≥ 90):
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

Run Lighthouse audit:
\`\`\`bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse > Generate report
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with SEO, fonts, analytics
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Design tokens, Tailwind config
├── components/
│   ├── site-header.tsx     # Sticky navigation
│   ├── hero-section.tsx    # Hero with CTAs
│   ├── proof-bar.tsx       # Partner logos
│   ├── value-props.tsx     # 4 value propositions
│   ├── how-it-works.tsx    # 3-step process
│   ├── program-details.tsx # Program information
│   ├── results-metrics.tsx # Success metrics
│   ├── portfolio-section.tsx # Portfolio tiles
│   ├── faq-section.tsx     # Accordion FAQ
│   ├── final-cta.tsx       # Bottom CTA
│   ├── site-footer.tsx     # Footer with contact
│   ├── apply-modal.tsx     # Application form dialog
│   └── ui/                 # shadcn components
├── lib/
│   ├── site-config.ts      # ⭐ All copy and content
│   ├── analytics.ts        # Analytics helper functions
│   └── utils.ts            # Utility functions
└── public/
    ├── logo.png            # Replace with your logo
    ├── og-image.png        # Replace with your OG image
    └── *.png               # Portfolio logos
\`\`\`

## Customization Guide

### Change Colors

Edit `app/globals.css`:

\`\`\`css
:root {
  --ink: #0B0D11;      /* Your dark color */
  --paper: #F6F7F9;    /* Your light color */
  --signal: #FF4D00;   /* Your accent color */
  --slate: #1C2530;    /* Your secondary color */
  --steel: #7C8B9A;    /* Your muted color */
}
\`\`\`

### Change Fonts

Edit `app/layout.tsx`:

\`\`\`typescript
import { Ysabeau_Infant as YourHeadingFont, Mr_Bedfort as YourBodyFont } from 'next/font/google'

const bodyFont = YourBodyFont({ subsets: ['latin'], variable: '--font-sans' })
const headingFont = YourHeadingFont({ subsets: ['latin'], variable: '--font-heading' })
\`\`\`

Then update `app/globals.css`:

\`\`\`css
@theme inline {
  --font-sans: "Your Body Font", system-ui, sans-serif;
  --font-heading: "Your Heading Font", system-ui, sans-serif;
}
\`\`\`

### Add New Sections

1. Create component in `components/your-section.tsx`
2. Add content to `lib/site-config.ts`
3. Import and render in `app/page.tsx`

## Accessibility Checklist

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus visible states
- ✅ Alt text on all images
- ✅ Color contrast ratios meet WCAG AA
- ✅ Form labels and error messages
- ✅ Skip to main content link

## SEO Checklist

- ✅ Descriptive page title
- ✅ Meta description (155 characters)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Organization, WebSite)
- ✅ Semantic heading hierarchy (h1 → h6)
- ✅ Descriptive link text
- ✅ Mobile-friendly viewport
- ✅ Fast loading times

## Support

For questions or issues, contact: hello@giraf.com

## License

© 2025 GIRAF by Accelerator Frankfurt. All rights reserved.
