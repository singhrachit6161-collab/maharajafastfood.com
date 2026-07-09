"use client";

import { useState, type FormEvent } from "react";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons/SocialIcons";
import Logo from "./Logo";
import { business, navLinks } from "@/data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer id="footer" className="border-t border-gold/10 bg-maroon-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs font-body text-sm text-cream-dim">
            {business.tagline}. Royal recipes and grand banquet halls,
            reimagined for every celebration.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: InstagramIcon, href: business.social.instagram, label: "Instagram" },
              { icon: FacebookIcon, href: business.social.facebook, label: "Facebook" },
              { icon: TwitterIcon, href: business.social.twitter, label: "Twitter / X" },
              { icon: YoutubeIcon, href: business.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-cream-dim transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-cream-dim transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Visit Us
          </h4>
          <address className="mt-4 space-y-2 font-body text-sm not-italic text-cream-dim">
            <p>{business.address.line1}</p>
            <p>{business.address.line2}</p>
            <p>{business.phoneDisplay}</p>
            <p>{business.email}</p>
          </address>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            Newsletter
          </h4>
          <p className="mt-4 font-body text-sm text-cream-dim">
            Special menus, chef events, and early reservation access.
          </p>
          {subscribed ? (
            <p className="mt-4 font-body text-sm text-gold">
              You&apos;re on the list. Thank you!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-gold/20 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream-dim/60 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-maroon transition-transform hover:scale-105"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="section-divider mx-6 lg:mx-10" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream-dim/70 sm:flex-row lg:px-10">
        <p>
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
        <a href="/privacy" className="transition-colors hover:text-gold">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
