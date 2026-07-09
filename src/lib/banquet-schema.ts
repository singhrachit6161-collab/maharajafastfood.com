import { z } from "zod";

export const banquetSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please choose a date"),
  guestCount: z
    .number({ error: "Please enter expected guest count" })
    .int()
    .min(10, "Minimum 10 guests for banquet bookings")
    .max(2000, "For events over 2000 guests, please call us directly"),
  hallPreference: z.string().min(1, "Please select a hall preference"),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export type BanquetInput = z.infer<typeof banquetSchema>;
