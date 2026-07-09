import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";
import StructuredData from "@/components/StructuredData";
import { business } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const description = `${business.name} is a premium Indian food plaza and banquet venue in ${business.city} — royal-recipe dining plus wedding, birthday, and corporate event halls. Book your table or your celebration today.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kesharifoodplaza.com"),
  title: `${business.name} | ${business.tagline}`,
  description,
  keywords: [
    business.name,
    "Keshari Food Plaza",
    "banquet hall near me",
    `banquet hall in ${business.city}`,
    `wedding venue ${business.city}`,
    `party hall booking ${business.city}`,
    "Indian fine dining",
    "best Indian restaurant",
    "biryani",
    "tandoori",
    "restaurant reservation",
    "event booking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${business.name} | ${business.tagline}`,
    description,
    siteName: business.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-maroon text-cream">
        <StructuredData />
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
