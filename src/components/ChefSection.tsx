import { ChefHat, Clock, Quote } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { chef } from "@/data/site";

export default function ChefSection() {
  return (
    <section id="chef" className="relative bg-maroon-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <PlaceholderMedia
            variant="chef"
            label={chef.name}
            className="h-[26rem] w-full rounded-3xl sm:h-[32rem]"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Meet the Chef
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            {chef.name}
          </h2>

          <div className="mt-5 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-cream-dim">
              <ChefHat className="h-5 w-5 text-gold" />
              <span className="font-body text-sm">{chef.title}</span>
            </div>
            <div className="flex items-center gap-2 text-cream-dim">
              <Clock className="h-5 w-5 text-gold" />
              <span className="font-body text-sm">{chef.experience} Experience</span>
            </div>
          </div>

          <div className="glass-panel-light relative mt-8 rounded-2xl p-6">
            <Quote className="h-6 w-6 text-gold/60" />
            <p className="mt-3 font-display text-lg italic leading-relaxed text-cream">
              {chef.philosophy}
            </p>
          </div>

          <p className="mt-6 font-body leading-relaxed text-cream-dim">
            {chef.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
