import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { business } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-maroon py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Contact &amp; Location
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-gold/10">
              <iframe
                title={`${business.name} location map`}
                src={business.mapEmbedSrc}
                className="h-80 w-full grayscale-[40%] invert-[92%] contrast-[90%] sm:h-full sm:min-h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass-panel flex h-full flex-col justify-between gap-8 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-body text-sm text-cream">
                      {business.address.line1}
                    </p>
                    <p className="font-body text-sm text-cream-dim">
                      {business.address.line2}
                    </p>
                    <a
                      href={business.mapsShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-body text-xs text-gold underline underline-offset-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <a
                    href={`tel:${business.phoneHref}`}
                    className="font-body text-sm text-cream-dim transition-colors hover:text-gold"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-gold" />
                  <div className="w-full space-y-1">
                    {business.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-4 font-body text-sm text-cream-dim"
                      >
                        <span>{h.day}</span>
                        <span className="text-cream">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${business.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-maroon transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-maroon transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
