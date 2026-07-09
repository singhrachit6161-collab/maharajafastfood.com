import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maharajafastfood.com"),
  title: `${business.name} | ${business.tagline}`,
  description:
    "Maharaja Fast Food is a premium Indian fine-dining destination serving royal recipes — from tandoori classics to slow-cooked biryani. Reserve your table today.",
  keywords: [
    "Maharaja Fast Food",
    "Indian fine dining",
    "best Indian restaurant",
    "biryani",
    "tandoori",
    "restaurant reservation",
  ],
  openGraph: {
    title: `${business.name} | ${business.tagline}`,
    description:
      "An unforgettable fine dining experience — royal Indian recipes, reimagined.",
    siteName: business.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: "An unforgettable fine dining experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#060807",
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
      <body className="min-h-full flex flex-col bg-noir text-ivory">
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
