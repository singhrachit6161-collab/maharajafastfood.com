import {
  ChefHat,
  Flame,
  Soup,
  UtensilsCrossed,
  Wine,
  Building2,
  IceCreamCone,
  Sparkles,
  PartyPopper,
} from "lucide-react";

type Variant =
  | "hero"
  | "interior"
  | "food"
  | "chef"
  | "avatar"
  | "dessert"
  | "drink"
  | "story"
  | "banquet";

const VARIANT_STYLES: Record<
  Variant,
  { gradient: string; icon: React.ReactNode }
> = {
  hero: {
    gradient: "from-[#3a0f14] via-[#210a0d] to-[#120404]",
    icon: <Flame className="h-10 w-10" strokeWidth={1.25} />,
  },
  interior: {
    gradient: "from-[#33131a] via-[#1d0b0f] to-[#0f0405]",
    icon: <Building2 className="h-9 w-9" strokeWidth={1.25} />,
  },
  food: {
    gradient: "from-[#3a170f] via-[#22100a] to-[#100704]",
    icon: <Soup className="h-9 w-9" strokeWidth={1.25} />,
  },
  chef: {
    gradient: "from-[#301117] via-[#1b0a0d] to-[#0e0405]",
    icon: <ChefHat className="h-9 w-9" strokeWidth={1.25} />,
  },
  avatar: {
    gradient: "from-[#3a1720] to-[#170609]",
    icon: <UtensilsCrossed className="h-5 w-5" strokeWidth={1.5} />,
  },
  dessert: {
    gradient: "from-[#3a2413] via-[#22150c] to-[#100a05]",
    icon: <IceCreamCone className="h-8 w-8" strokeWidth={1.25} />,
  },
  drink: {
    gradient: "from-[#33121f] via-[#1c0a12] to-[#0e0509]",
    icon: <Wine className="h-8 w-8" strokeWidth={1.25} />,
  },
  story: {
    gradient: "from-[#341019] via-[#1e0a0f] to-[#0f0406]",
    icon: <Sparkles className="h-9 w-9" strokeWidth={1.25} />,
  },
  banquet: {
    gradient: "from-[#3d1a1a] via-[#241010] to-[#120706]",
    icon: <PartyPopper className="h-9 w-9" strokeWidth={1.25} />,
  },
};

export default function PlaceholderMedia({
  variant = "food",
  label,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const style = VARIANT_STYLES[variant];
  return (
    <div
      className={`grain-overlay relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 border border-gold/10" />
      <div className="relative z-10 flex flex-col items-center gap-2 text-gold/70">
        {style.icon}
        {label && (
          <span className="font-display text-xs tracking-[0.2em] uppercase text-cream-dim/70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
