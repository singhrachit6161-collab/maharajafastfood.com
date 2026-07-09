import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-noir-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-sage">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Ambience &amp; Craft
          </h2>
          <p className="mt-4 font-body text-ivory-dim">
            A glimpse into our dining room, our kitchen, and the plates in
            between.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <PlaceholderMedia
                variant={img.variant}
                label={img.alt}
                className={`w-full rounded-2xl ${img.tall ? "h-96" : "h-64"} transition-transform duration-500 hover:scale-[1.02]`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
