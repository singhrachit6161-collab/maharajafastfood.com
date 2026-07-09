import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/reservation-schema";
import { business } from "@/data/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = reservationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const reservation = parsed.data;

  // Email notifications: wire up a provider (e.g. Resend, SMTP via
  // Nodemailer) here once credentials are available. Without an
  // EMAIL_PROVIDER_API_KEY configured, we log the request server-side so
  // reservations are never silently dropped.
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${business.name} <reservations@${business.email.split("@")[1]}>`,
          to: business.email,
          subject: `New reservation — ${reservation.name} (${reservation.guests} guests)`,
          text: `Name: ${reservation.name}\nPhone: ${reservation.phone}\nDate: ${reservation.date}\nTime: ${reservation.time}\nGuests: ${reservation.guests}\nSpecial request: ${reservation.specialRequest || "-"}`,
        }),
      });
    } catch (err) {
      console.error("Failed to send reservation email:", err);
    }
  } else {
    console.log("New reservation request:", reservation);
  }

  return NextResponse.json({ ok: true });
}
