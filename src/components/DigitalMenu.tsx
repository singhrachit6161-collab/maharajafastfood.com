"use client";

import { useMemo, useState } from "react";
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

type DietFilter = "all" | "veg" | "nonveg";

function VegBadge({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
        isVeg ? "border-green-500" : "border-red-600"
      }`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <span
        className={`h-2 w-2 rounded-full ${isVeg ? "bg-green-500" : "bg-red-600"}`}
      />
    </span>
  );
}

export default function DigitalMenu() {
  const [active, setActive] = useState<Dish["category"]>("starters");
  const [diet, setDiet] = useState<DietFilter>("all");

  const items = useMemo(() => {
    return menu[active].items.filter((item) => {
      if (diet === "veg") return item.isVeg;
      if (diet === "nonveg") return !item.isVeg;
      return true;
    });
  }, [active, diet]);

  return (
    <section id="menu" className="relative bg-maroon py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
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
                active === cat ? "text-maroon" : "text-cream-dim hover:text-gold"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{menu[cat].label}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {(
            [
              { key: "all", label: "All" },
              { key: "veg", label: "Veg" },
              { key: "nonveg", label: "Non-Veg" },
            ] as const
          ).map((f) => (
            <button
              key={f.key}
              onClick={() => setDiet(f.key)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-body text-xs font-medium transition-colors ${
                diet === f.key
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-gold/15 text-cream-dim hover:border-gold/40 hover:text-gold"
              }`}
            >
              {f.key === "veg" && <VegBadge isVeg />}
              {f.key === "nonveg" && <VegBadge isVeg={false} />}
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${diet}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.length === 0 && (
              <p className="col-span-full text-center font-body text-sm text-cream-dim">
                No {diet === "veg" ? "vegetarian" : "non-vegetarian"} items in
                this category yet.
              </p>
            )}
            {items.map((item) => (
              <div
                key={item.slug}
                className="flex gap-4 rounded-2xl border border-gold/10 bg-maroon-soft p-4"
              >
                <PlaceholderMedia
                  variant={mediaVariant[active]}
                  className="h-20 w-20 shrink-0 rounded-xl"
                />
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <VegBadge isVeg={item.isVeg} />
                      <h3 className="truncate font-display text-base font-semibold">
                        {item.name}
                      </h3>
                    </div>
                    {item.chefsPick && (
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold" />
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 font-body text-xs text-cream-dim">
                    {item.description}
                  </p>
                  <p className="mt-2 font-display text-sm font-bold text-gold">
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
