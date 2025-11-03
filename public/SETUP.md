# Quick Setup Guide

## 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

## 2. Replace Placeholder Images

Add your images to the `/public` folder:

- **Logo:** `/public/logo.png` (200×60px recommended)
- **OG Image:** `/public/og-image.png` (1200×630px required)
- **Portfolio logos:** Update paths in `lib/site-config.ts`

## 3. Update Copy (Optional)

All content is in `lib/site-config.ts`. The exact copy from your requirements is already implemented.

## 4. Connect Form Backend

Edit `components/apply-modal.tsx` and replace the dummy endpoint:

\`\`\`typescript
const response = await fetch("YOUR_API_ENDPOINT", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
})
\`\`\`

## 5. Add Analytics

The site pushes events to `window.dataLayer`. Connect your Google Tag Manager:

1. Add GTM script to `app/layout.tsx` (in `<head>`)
2. Events are already tracked for all key interactions

## 6. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 7. Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

Or use the Vercel dashboard to import your Git repository.

## 8. Verify Lighthouse Scores

After deployment:

1. Open your site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit for all categories
5. Verify all scores ≥ 90

## Done!

Your production-ready GIRAF landing page is live.
\`\`\`

```typescript file="" isHidden
