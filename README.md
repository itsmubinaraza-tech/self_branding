# Self Branding Portfolio

Modern, ADA-compliant portfolio site with a Sanity CMS admin panel and a minimalist, work-first design.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS
- Resend (contact form)

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` based on `.env.example`.

3. Run the dev server:

```bash
npm run dev
```

## Sanity Setup

1. Create a Sanity project in the Sanity dashboard.
2. Use the project ID and dataset name in `.env.local`.
3. Start the Studio at `/studio`.

## Contact

The contact page uses a `mailto:` link pointing to `contact@mubinaraza.com`.

## Deployment

Vercel is recommended for App Router + ISR. Set the environment variables in the Vercel project settings.
