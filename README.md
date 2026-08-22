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

## Deploying to Cloudflare Pages

1. Push this repository to GitHub (already connected to
   `drbhumikajethwa/physiotherapy-clinic`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
   select this repository.
3. Build settings:
   - **Framework preset:** None (or Next.js — Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Save and deploy. Cloudflare will build and deploy automatically on every push to
   `main`, and provide a `*.pages.dev` URL.

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
