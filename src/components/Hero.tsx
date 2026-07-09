"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import { business } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderMedia variant="hero" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-noir/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-sm uppercase tracking-[0.5em] text-sage"
        >
          {business.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          An Unforgettable{" "}
          <span className="text-gradient-gold">Fine Dining</span> Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-xl font-body text-base text-ivory-dim sm:text-lg"
        >
          Royal Indian recipes, slow-cooked over charcoal and passed through
          generations — reimagined for the modern table.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-4 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#reserve"
            className="rounded-full bg-sage px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-noir shadow-lg shadow-sage/20 transition-transform hover:scale-105"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="rounded-full border border-ivory/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory backdrop-blur-sm transition-colors hover:border-sage hover:text-sage"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory-dim"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
