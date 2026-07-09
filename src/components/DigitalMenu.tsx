"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { menu, type Dish } from "@/data/site";

const categories = Object.keys(menu) as Dish["category"][];

const mediaVariant: Record<Dish["category"], "food" | "dessert" | "drink"> = {
  starters: "food",
  mains: "food",
  desserts: "dessert",
  drinks: "drink",
};

export default function DigitalMenu() {
  const [active, setActive] = useState<Dish["category"]>("starters");

  return (
    <section id="menu" className="relative bg-noir py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-sage">
            Digital Menu
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Explore Our Menu
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-6 py-2.5 font-body text-sm font-medium capitalize transition-colors ${
                active === cat ? "text-noir" : "text-ivory-dim hover:text-sage"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-sage"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{menu[cat].label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {menu[active].items.map((item) => (
              <div
                key={item.slug}
                className="flex gap-4 rounded-2xl border border-sage/10 bg-noir-soft p-4"
              >
                <PlaceholderMedia
                  variant={mediaVariant[active]}
                  className="h-20 w-20 shrink-0 rounded-xl"
                />
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate font-display text-base font-semibold">
                      {item.name}
                    </h3>
                    {item.chefsPick && (
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-sage" />
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 font-body text-xs text-ivory-dim">
                    {item.description}
                  </p>
                  <p className="mt-2 font-display text-sm font-bold text-sage">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
