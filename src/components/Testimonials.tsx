"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import { business, testimonials } from "@/data/site";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-sage">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < count ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section id="reviews" className="relative bg-noir py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-sage">
            Guest Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            What Our Guests Say
          </h2>

          <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full glass-panel px-5 py-2.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.8Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11C3.25 21.3 7.28 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.27 14.29A7.24 7.24 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.6H1.27A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.27 5.4l4-3.11Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.28 0 3.25 2.7 1.27 6.6l4 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
              />
            </svg>
            <span className="font-display text-lg font-bold">
              {business.rating.value}
            </span>
            <Stars count={Math.round(business.rating.value)} />
            <span className="font-body text-xs text-ivory-dim">
              ({business.rating.count.toLocaleString()} reviews)
            </span>
          </div>
        </Reveal>

        <div className="relative mt-14 h-72 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-panel absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl px-8 text-center sm:px-16"
            >
              <PlaceholderMedia
                variant="avatar"
                className="h-14 w-14 rounded-full"
              />
              <Stars count={current.rating} />
              <p className="font-body text-base italic text-ivory sm:text-lg">
                &ldquo;{current.text}&rdquo;
              </p>
              <p className="font-display text-sm font-semibold text-sage">
                {current.name}{" "}
                <span className="font-body font-normal text-ivory-dim">
                  &middot; {current.date}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${t.name}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-sage" : "w-2 bg-sage/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
