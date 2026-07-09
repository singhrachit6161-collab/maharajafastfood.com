import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import OurStory from "@/components/OurStory";
import DigitalMenu from "@/components/DigitalMenu";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ChefSection from "@/components/ChefSection";
import BanquetBooking from "@/components/BanquetBooking";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <OurStory />
      <DigitalMenu />
      <Offers />
      <Gallery />
      <Testimonials />
      <ChefSection />
      <BanquetBooking />
      <Reservation />
      <Contact />
    </>
  );
}
