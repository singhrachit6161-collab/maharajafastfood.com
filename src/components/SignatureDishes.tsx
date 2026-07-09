"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { signatureDishes } from "@/data/site";

export default function SignatureDishes() {
  return (
    <section id="dishes" className="relative bg-maroon py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Curated by the Chef
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Signature Dishes
          </h2>
          <p className="mt-4 font-body text-cream-dim">
            The plates our guests can&apos;t stop talking about — each one a
            centuries-old recipe, perfected.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-maroon-soft"
                style={{ perspective: 1000 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <PlaceholderMedia
                    variant="food"
                    label={dish.name}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {dish.chefsPick && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon">
                      <Sparkles className="h-3 w-3" /> Chef&apos;s Pick
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {dish.name}
                    </h3>
                    <span className="shrink-0 font-display text-lg font-bold text-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm text-cream-dim">
                    {dish.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-gold/40 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
