import { Award } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { awards, business } from "@/data/site";

export default function OurStory() {
  return (
    <section id="story" className="relative bg-maroon-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderMedia
              variant="interior"
              label="Interior"
              className="col-span-2 h-64 rounded-2xl sm:h-80"
            />
            <PlaceholderMedia
              variant="story"
              label="Heritage"
              className="h-40 rounded-2xl"
            />
            <PlaceholderMedia
              variant="chef"
              label="Kitchen"
              className="h-40 rounded-2xl"
            />
          </div>
          <div className="glass-panel absolute -bottom-6 -right-4 rounded-2xl px-6 py-4 sm:right-6">
            <p className="font-display text-3xl font-bold text-gold">25+</p>
            <p className="font-body text-xs uppercase tracking-wide text-cream-dim">
              Years of Legacy
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            A Royal Kitchen &amp; Banquet, Reimagined
          </h2>
          <p className="mt-6 font-body leading-relaxed text-cream-dim">
            What began as a single tandoor in a family courtyard has grown into
            one of the city&apos;s most celebrated food plaza and banquet
            destinations. {business.name} brings recipes once reserved for
            royal kitchens to every table — and grand halls fit for your
            biggest celebrations.
          </p>
          <p className="mt-4 font-body leading-relaxed text-cream-dim">
            Every spice is roasted in-house, every kebab finished over
            charcoal, and every event — from an intimate family dinner to a
            500-guest wedding — hosted with the warmth of true hospitality.
          </p>

          <div className="mt-8 space-y-4">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-body text-sm text-cream">
                    {award.title}
                  </p>
                  <p className="font-body text-xs text-cream-dim">
                    {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
