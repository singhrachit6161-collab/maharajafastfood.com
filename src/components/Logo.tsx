import { Crown } from "lucide-react";
import { business } from "@/data/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Crown className="h-6 w-6 text-gold" strokeWidth={1.5} />
      <span className="font-display text-xl font-bold tracking-wide text-cream">
        {business.shortName}
        <span className="text-gold">.</span>
      </span>
    </span>
  );
}
