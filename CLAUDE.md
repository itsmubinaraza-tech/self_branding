# Project: mubinaraza.com

Personal branding website for Mubina Raza.

## Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Sanity CMS (embedded studio at `/studio`)
- **Styling:** Tailwind CSS with glass-morphism aesthetic
- **Hosting:** Vercel (auto-deploys from GitHub `main` branch)
- **Domain:** mubinaraza.com

## Deployment Workflow

1. Code changes → Push to GitHub → Vercel auto-deploys
2. Content changes → Edit in Sanity Studio (`/studio`) → Pages revalidate automatically (60s cache)

**No manual deployment steps required.**

## Content Management

All site content is managed via Sanity CMS:

- **Home page:** Hero text, value pillars, carousel images, CTAs
- **Experience page:** Heading, overview, case studies
- **Speaking page:** Profile, topics, video embeds
- **Contact page:** Body text, email, LinkedIn
- **Portfolio:** Project case studies

To edit content: Go to `mubinaraza.com/studio` and log in.

## Scripts

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `npm run dev` | Local development | When coding |
| `npm run build` | Production build | Vercel runs this automatically |
| `node scripts/seed.js` | Seed initial Sanity content | **Only for initial setup or content reset** - requires `SANITY_WRITE_TOKEN` |

## Key Directories

```
src/
├── app/              # Next.js pages
├── components/       # React components
├── lib/              # Sanity client, queries, types
sanity/
├── schemas/          # Sanity document schemas
scripts/
├── seed.js           # Initial content seeder
```

## Environment Variables

Required in `.env.local` (and Vercel dashboard):

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_WRITE_TOKEN` (only needed for seed script)
- `RESEND_API_KEY` (for contact form)

## Design System

- Dark theme with glass-morphism cards (`.glass` class)
- Accent color for CTAs and highlights
- Responsive: mobile-first with md/lg breakpoints
