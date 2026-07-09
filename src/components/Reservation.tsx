"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock, Users } from "lucide-react";
import Reveal from "./Reveal";
import {
  reservationSchema,
  type ReservationInput,
} from "@/lib/reservation-schema";

export default function Reservation() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { guests: 2 },
  });

  async function onSubmit(data: ReservationInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/reservation", {
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
    <section id="reserve" className="relative bg-noir-soft py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-sage">
            Book Your Table
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Reserve a Table
          </h2>
          <p className="mt-4 font-body text-ivory-dim">
            Secure your evening at Maharaja. We&apos;ll confirm your booking
            shortly after you submit.
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
                <CheckCircle2 className="h-14 w-14 text-sage" strokeWidth={1.25} />
                <h3 className="font-display text-2xl font-bold">
                  Reservation Received!
                </h3>
                <p className="max-w-sm font-body text-ivory-dim">
                  Thank you for choosing {"Maharaja Fast Food"}. Our team will
                  call to confirm your table shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-full border border-sage/40 px-6 py-2 text-sm text-sage transition-colors hover:bg-sage hover:text-noir"
                >
                  Book Another Table
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
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-ivory-dim">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory-dim/50 focus:border-sage focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-ivory-dim">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory-dim/50 focus:border-sage focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-ivory-dim">
                    <Users className="h-3.5 w-3.5" /> Guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    {...register("guests", { valueAsNumber: true })}
                    className="w-full rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory focus:border-sage focus:outline-none"
                  />
                  {errors.guests && (
                    <p className="mt-1 text-xs text-red-400">{errors.guests.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-ivory-dim">
                    <CalendarDays className="h-3.5 w-3.5" /> Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register("date")}
                    className="w-full rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory focus:border-sage focus:outline-none [color-scheme:dark]"
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-400">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-body text-xs uppercase tracking-wide text-ivory-dim">
                    <Clock className="h-3.5 w-3.5" /> Time
                  </label>
                  <input
                    type="time"
                    {...register("time")}
                    className="w-full rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory focus:border-sage focus:outline-none [color-scheme:dark]"
                  />
                  {errors.time && (
                    <p className="mt-1 text-xs text-red-400">{errors.time.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block font-body text-xs uppercase tracking-wide text-ivory-dim">
                    Special Request (optional)
                  </label>
                  <textarea
                    {...register("specialRequest")}
                    rows={3}
                    placeholder="Anniversary, dietary needs, seating preference..."
                    className="w-full resize-none rounded-xl border border-sage/20 bg-transparent px-4 py-3 font-body text-sm text-ivory placeholder:text-ivory-dim/50 focus:border-sage focus:outline-none"
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
                  className="sm:col-span-2 mt-2 rounded-full bg-sage px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-noir transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Confirm Reservation"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
