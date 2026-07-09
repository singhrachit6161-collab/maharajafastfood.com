import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  guests: z
    .number({ error: "Please enter number of guests" })
    .int()
    .min(1, "At least 1 guest")
    .max(20, "For parties over 20, please call us directly"),
  specialRequest: z.string().trim().max(500).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
