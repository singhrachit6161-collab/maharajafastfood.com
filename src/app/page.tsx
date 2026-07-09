import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import OurStory from "@/components/OurStory";
import DigitalMenu from "@/components/DigitalMenu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ChefSection from "@/components/ChefSection";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <OurStory />
      <DigitalMenu />
      <Gallery />
      <Testimonials />
      <ChefSection />
      <Reservation />
      <Contact />
    </>
  );
}
