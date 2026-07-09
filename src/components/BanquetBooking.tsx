"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  PartyPopper,
  Users,
  Building2,
} from "lucide-react";
import Reveal from "./Reveal";
import { banquetSchema, type BanquetInput } from "@/lib/banquet-schema";
import { eventTypes, banquetHalls, business } from "@/data/site";

export default function BanquetBooking() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BanquetInput>({
    resolver: zodResolver(banquetSchema),
    defaultValues: { guestCount: 100 },
  });

  async function onSubmit(data: BanquetInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/banquet-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="banquet" className="relative bg-maroon py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Weddings &middot; Parties &middot; Corporate Events
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Banquet &amp; Event Booking
          </h2>
          <p className="mt-4 font-body text-cream-dim">
            From an intimate engagement to a 500-guest wedding, {business.shortName}&apos;s
            banquet halls and events team handle every detail.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="glass-panel mt-12 rounded-3xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-gold" strokeWidth={1.25} />
                <h3 className="font-display text-2xl font-bold">
                  Enquiry Received!
                </h3>
                <p className="max-w-sm font-body text-cream-dim">
                  Thank you for considering {business.name} for your event. Our
                  banquet team will contact you shortly to discuss availability
                  and packages.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-full border border-gold/40 px-6 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-maroon"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-5 sm:grid-cols-2"
                noValidate
              >
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-cream-dim">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-cream-dim">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-cream-dim">
                    <PartyPopper className="h-3.5 w-3.5" /> Event Type
                  </label>
                  <select
                    {...register("eventType")}
                    defaultValue=""
                    className="w-full rounded-xl border border-gold/20 bg-maroon-soft px-4 py-3 font-body text-sm text-cream focus:border-gold focus:outline-none"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="mt-1 text-xs text-red-400">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-cream-dim">
                    <CalendarDays className="h-3.5 w-3.5" /> Event Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register("eventDate")}
                    className="w-full rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream focus:border-gold focus:outline-none [color-scheme:dark]"
                  />
                  {errors.eventDate && (
                    <p className="mt-1 text-xs text-red-400">{errors.eventDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-cream-dim">
                    <Users className="h-3.5 w-3.5" /> Guest Count
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={2000}
                    {...register("guestCount", { valueAsNumber: true })}
                    className="w-full rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream focus:border-gold focus:outline-none"
                  />
                  {errors.guestCount && (
                    <p className="mt-1 text-xs text-red-400">{errors.guestCount.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-cream-dim">
                    <Building2 className="h-3.5 w-3.5" /> Hall Preference
                  </label>
                  <select
                    {...register("hallPreference")}
                    defaultValue=""
                    className="w-full rounded-xl border border-gold/20 bg-maroon-soft px-4 py-3 font-body text-sm text-cream focus:border-gold focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a hall
                    </option>
                    {banquetHalls.map((h) => (
                      <option key={h.name} value={h.name}>
                        {h.name} — {h.capacity}
                      </option>
                    ))}
                  </select>
                  {errors.hallPreference && (
                    <p className="mt-1 text-xs text-red-400">{errors.hallPreference.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-cream-dim">
                    Tell us more (optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Catering style, decor theme, budget range..."
                    className="w-full resize-none rounded-xl border border-gold/20 bg-transparent px-4 py-3 font-body text-sm text-cream placeholder:text-cream-dim/50 focus:border-gold focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="sm:col-span-2 text-sm text-red-400">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="sm:col-span-2 mt-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-maroon transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Send Enquiry"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
