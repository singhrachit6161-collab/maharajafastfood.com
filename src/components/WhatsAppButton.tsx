"use client";

import { motion } from "framer-motion";
import { business } from "@/data/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${business.name}, I'd like to make a reservation.`
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.258.6 4.372 1.646 6.2L3.2 28.8l6.79-1.62A12.74 12.74 0 0 0 16.004 28.8c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.8-12.8-12.8Zm0 23.226a10.36 10.36 0 0 1-5.29-1.448l-.38-.226-4.028.96.98-3.912-.248-.402a10.372 10.372 0 0 1-1.598-5.598c0-5.734 4.666-10.4 10.4-10.4s10.564 4.666 10.564 10.4-4.666 10.626-10.4 10.626Zm5.7-7.782c-.312-.156-1.846-.912-2.132-1.016-.286-.104-.494-.156-.702.156-.208.312-.806 1.016-.988 1.224-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.55-.928-.828-1.554-1.85-1.736-2.162-.182-.312-.02-.48.136-.636.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.694-.962-2.32-.254-.61-.512-.526-.702-.536-.182-.008-.39-.01-.598-.01a1.146 1.146 0 0 0-.832.39c-.286.312-1.09 1.066-1.09 2.6s1.116 3.02 1.272 3.228c.156.208 2.196 3.354 5.32 4.702.744.322 1.324.514 1.776.658.746.238 1.424.204 1.96.124.598-.09 1.846-.754 2.106-1.484.26-.73.26-1.354.182-1.484-.078-.13-.286-.208-.598-.364Z" />
      </svg>
    </motion.a>
  );
}
