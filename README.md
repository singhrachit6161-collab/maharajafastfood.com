# Maharaja Fast Food — Premium Restaurant Website

A premium, dark-luxury restaurant website built with Next.js (App Router),
Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Important: replace placeholder business data

`src/data/site.ts` contains the restaurant's name, address, phone number,
opening hours, coordinates, Google Maps embed URL, and sample reviews.
These are **placeholder values** — the Google Maps listing for this business
could not be fetched automatically (Google Maps domains were blocked by the
build environment's network policy), so every value in the `business` export
must be replaced with the real details before launch:

- `business.name`, `phoneDisplay`, `phoneHref`, `whatsappNumber`, `email`
- `business.address`, `business.coordinates`
- `business.mapEmbedSrc` — get this from Google Maps → Share → Embed a map
- `business.hours`
- `business.rating` and the `testimonials` array — replace with real Google
  reviews

## Structure

- `src/app` — routes (`/`, `/privacy`, `/api/reservation`)
- `src/components` — page sections (Hero, SignatureDishes, OurStory,
  DigitalMenu, Gallery, Testimonials, ChefSection, Reservation, Contact,
  Footer, Navbar, WhatsAppButton, PageLoader)
- `src/data/site.ts` — all business content in one place
- `src/lib/reservation-schema.ts` — Zod schema for the reservation form

## Photography

Dish, interior, and chef photos are currently illustrated placeholder cards
(`PlaceholderMedia` component) rather than real photography, since no photo
assets were provided. Swap them for real photos by replacing
`PlaceholderMedia` usages with `next/image`, and add the image host to
`images.remotePatterns` in `next.config.ts` if hosting remotely.

## Email notifications

`src/app/api/reservation/route.ts` logs reservation submissions server-side.
To send real email notifications, set a `RESEND_API_KEY` environment
variable (or swap in your own email provider) — see the comment in that
file.
