import { NextResponse } from "next/server";
import { banquetSchema } from "@/lib/banquet-schema";
import { business } from "@/data/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = banquetSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const enquiry = parsed.data;

  // Email notifications: wire up a provider (e.g. Resend, SMTP via
  // Nodemailer) here once credentials are available. Without an
  // EMAIL_PROVIDER_API_KEY configured, we log the request server-side so
  // enquiries are never silently dropped.
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${business.name} <events@${business.email.split("@")[1]}>`,
          to: business.email,
          subject: `New banquet enquiry — ${enquiry.name} (${enquiry.eventType})`,
          text: `Name: ${enquiry.name}\nPhone: ${enquiry.phone}\nEvent type: ${enquiry.eventType}\nDate: ${enquiry.eventDate}\nGuests: ${enquiry.guestCount}\nHall preference: ${enquiry.hallPreference}\nMessage: ${enquiry.message || "-"}`,
        }),
      });
    } catch (err) {
      console.error("Failed to send banquet enquiry email:", err);
    }
  } else {
    console.log("New banquet enquiry:", enquiry);
  }

  return NextResponse.json({ ok: true });
}
