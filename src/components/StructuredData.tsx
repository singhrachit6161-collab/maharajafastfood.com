import { business } from "@/data/site";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function parseHours(time: string) {
  const [opens, closes] = time.split("–").map((s) => s.trim());
  return { opens, closes };
}

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "EventVenue"],
    name: business.name,
    description: business.tagline,
    telephone: business.phoneDisplay,
    email: business.email,
    servesCuisine: ["Indian", "North Indian", "Mughlai"],
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.city,
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    hasMap: business.mapsShareUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      ...parseHours(h.time),
    })),
    sameAs: Object.values(business.social),
    areaServed: business.serviceArea,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
