import type { Metadata } from "next";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${business.name}`,
  description: `Privacy policy for ${business.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 font-body text-sm text-ivory-dim">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 font-body text-sm leading-relaxed text-ivory-dim">
        <section>
          <h2 className="font-display text-lg font-semibold text-ivory">
            Information We Collect
          </h2>
          <p className="mt-2">
            When you make a reservation or contact us through this website, we
            collect the information you provide directly — your name, phone
            number, email address, reservation date/time, party size, and any
            special requests you share with us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ivory">
            How We Use Your Information
          </h2>
          <p className="mt-2">
            We use this information solely to confirm and manage your
            reservation, respond to enquiries, and — if you opt in — send
            occasional newsletter updates about {business.name}. We do not
            sell or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ivory">
            Third-Party Services
          </h2>
          <p className="mt-2">
            Our contact page embeds Google Maps to help you find our
            location, and offers a WhatsApp link for direct messaging. These
            third-party services operate under their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ivory">
            Your Rights
          </h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            {business.email} or {business.phoneDisplay}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-ivory">
            Contact
          </h2>
          <p className="mt-2">
            Questions about this policy can be directed to {business.name} at{" "}
            {business.address.full}.
          </p>
        </section>
      </div>
    </div>
  );
}
