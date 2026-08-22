# Physiotherapy Clinic — Dr. Bhumika Jethwa

Website for Dr. Bhumika Jethwa, Consultant Physiotherapist (M.P.T — Community Health and
Rehabilitation), serving Ahmedabad. Built with Next.js (App Router) and Tailwind CSS,
statically exported and hosted on Cloudflare Pages.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Static export (`output: "export"`) for Cloudflare Pages

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Home (Hero, About, Services, Conditions,
│   │                            #  Why Choose Us, Testimonials, Location, Contact CTA)
│   ├── about/page.tsx           # About
│   ├── services/page.tsx        # Services
│   ├── contact/page.tsx         # Contact
│   ├── book-appointment/page.tsx
│   └── layout.tsx               # Header, Footer, SEO metadata
├── components/
│   ├── layout/                  # Header, Footer
│   └── home/                    # Home page sections
└── lib/
    └── clinic-data.ts           # Doctor info, services, conditions, contact details
```

Edit `src/lib/clinic-data.ts` to update clinic content across the whole site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static site in the `out/` directory.

## Deploying to Cloudflare

This repo is connected to Cloudflare's Git integration as a **Workers (static assets)**
project — Cloudflare's current unified path, which replaces the classic Pages product for
new projects. `wrangler.jsonc` declares the static export (`out/`) as the assets directory.

1. Push to GitHub (already connected to `drbhumikajethwa/physiotherapy-clinic`).
2. In the Cloudflare dashboard project settings, build settings should be:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
3. Cloudflare builds and runs `wrangler deploy` automatically on every push to `main`.
   Wrangler reads `wrangler.jsonc` and publishes the contents of `out/` as static assets.
4. The default URL is `<name>.<subdomain>.workers.dev` (not `*.pages.dev` — that naming is
   specific to the classic Pages product). Attach a custom domain from the Cloudflare
   dashboard once you're ready to go live under your own domain.

To verify the config locally without deploying:

```bash
npm run build
npx wrangler deploy --dry-run
```

## Roadmap

Planned additions (not yet implemented):

- WhatsApp floating appointment button
- Google Maps embed
- Appointment booking form with backend/API
- Database for appointments
- Admin dashboard
- Structured data (schema.org) for the clinic
- Google Business Profile integration
- Patient reviews widget
- Gallery
- Individual service detail pages
- Analytics
