# Project Plan: Portfolio Website with Admin Panel

Owner: Mubina Raza  
Repo: `self_branding`

## Objectives

- Build a modern, ADA-compliant, CMS-driven portfolio website.
- Provide an admin panel for projects, experience, and speaking content.
- Maintain high performance (Lighthouse 90+).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS
- Resend (contact form)

## Milestones

1. Foundation
2. CMS Setup
3. Portfolio Grid
4. Project Detail Pages
5. Remaining Pages
6. Polish and QA

## Phase 1: Foundation

- Scaffold Next.js project
- Configure Tailwind theme and global styles
- Build layout shell with navigation and footer
- Add routes: Home, Experience, Portfolio, Speaking, Contact

## Phase 2: CMS Setup

- Create Sanity schemas for projects, experience, speaking, home
- Configure Studio at `/studio`
- Add ordering and featured controls
- Document environment variables

## Phase 3: Portfolio Grid

- CMS-powered grid with visual tiles
- Hover reveal interactions
- Routes to `/portfolio/[slug]`

## Phase 4: Project Pages

- Case-study layout with hero
- CMS-driven narrative sections
- Optional gallery and media handling

## Phase 5: Remaining Pages

- Home (CMS-driven hero + featured projects)
- Experience (case snapshots)
- Speaking (topics + dynamic list)
- Contact (Resend form)

## Phase 6: Polish and QA

- Accessibility review (keyboard, contrast, focus states)
- Performance review (images, caching, ISR)
- Security headers and validation

## Definition of Done

- Admin panel live at `/studio`
- Portfolio grid matches minimalist Jaden Kim–style layout
- All content editable via CMS
- Lighthouse score 90+ on key pages
- Ready for ongoing iteration
