"use client";

import { motion } from "framer-motion";
import { Tag, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { festivalOffers } from "@/data/site";

export default function Offers() {
  return (
    <section id="offers" className="relative bg-maroon-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Limited Time
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Festival &amp; Combo Offers
          </h2>
          <p className="mt-4 font-body text-cream-dim">
            Seasonal feasts, family combos, and banquet packages — crafted for
            every celebration.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivalOffers.map((offer, i) => (
            <Reveal key={offer.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="ornate-border relative flex h-full flex-col rounded-2xl bg-maroon p-6"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-maroon">
                  <Tag className="h-3 w-3" />
                  {offer.badge}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {offer.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm text-cream-dim">
                  {offer.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cream-dim/80">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {offer.validity}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href="#banquet"
            className="inline-block rounded-full border border-gold/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-maroon"
          >
            Enquire About an Offer
          </a>
        </Reveal>
      </div>
    </section>
  );
}
