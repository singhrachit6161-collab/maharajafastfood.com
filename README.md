# Keshari Food Plaza and Banquet — Premium Website

A premium, royal maroon &amp; gold luxury website for a combined food plaza
and banquet/event venue, built with Next.js (App Router), Tailwind CSS, and
Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important: replace placeholder business data

`src/data/site.ts` contains the business's name, address, phone number,
opening hours, coordinates, Google Maps embed URL, sample reviews, banquet
halls, and offers. These are **placeholder values** — the Google Maps
listing for this business could not be fetched automatically (Google Maps
domains were blocked by the build environment's network policy), so every
value in the `business` export must be replaced with the real details
before launch:

- `business.name`, `phoneDisplay`, `phoneHref`, `whatsappNumber`, `email`
- `business.address`, `business.coordinates`, `business.city`, `serviceArea`
- `business.mapEmbedSrc` — get this from Google Maps → Share → Embed a map
- `business.hours`
- `business.rating` and the `testimonials` array — replace with real Google
  reviews
- `banquetHalls` — replace with your venue's actual halls/capacities

## Features

- Animated hero, signature dishes, our story/awards, tabbed digital menu
  with veg/non-veg filtering, festival & combo offers, masonry gallery
  (dining + banquet imagery), animated testimonials with Google rating,
  chef profile
- **Banquet & Event Booking** form (`#banquet`) — separate from table
  reservations, for weddings/corporate events/parties, posts to
  `/api/banquet-booking`
- **Table Reservation** form (`#reserve`), posts to `/api/reservation`
- WhatsApp deep links (floating button + contact section) and Google Maps
  embed + directions link
- Sticky glassmorphism nav, floating WhatsApp button, page loader, mobile-first
  responsive layout
- SEO: per-page metadata, Open Graph/Twitter cards, JSON-LD structured data
  (`Restaurant`/`EventVenue`) in `src/components/StructuredData.tsx`,
  `src/app/sitemap.ts`, `src/app/robots.ts`

## Structure

- `src/app` — routes (`/`, `/privacy`, `/api/reservation`,
  `/api/banquet-booking`, `/sitemap.xml`, `/robots.txt`)
- `src/components` — page sections (Hero, SignatureDishes, OurStory,
  DigitalMenu, Offers, Gallery, Testimonials, ChefSection, BanquetBooking,
  Reservation, Contact, Footer, Navbar, WhatsAppButton, PageLoader,
  StructuredData)
- `src/data/site.ts` — all business content in one place
- `src/lib/reservation-schema.ts`, `src/lib/banquet-schema.ts` — Zod schemas
  for the two forms

## Photography

Dish, interior, chef, and banquet photos are currently illustrated
placeholder cards (`PlaceholderMedia` component) rather than real
photography, since no photo assets were provided. Swap them for real photos
by replacing `PlaceholderMedia` usages with `next/image`, and add the image
host to `images.remotePatterns` in `next.config.ts` if hosting remotely.

## Email notifications

`src/app/api/reservation/route.ts` and `src/app/api/banquet-booking/route.ts`
log submissions server-side. To send real email notifications, set a
`RESEND_API_KEY` environment variable (or swap in your own email provider) —
see the comments in those files.
