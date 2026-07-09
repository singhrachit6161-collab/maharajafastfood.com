import {
  ChefHat,
  Flame,
  Soup,
  UtensilsCrossed,
  Wine,
  Building2,
  IceCreamCone,
  Sparkles,
} from "lucide-react";

type Variant =
  | "hero"
  | "interior"
  | "food"
  | "chef"
  | "avatar"
  | "dessert"
  | "drink"
  | "story";

const VARIANT_STYLES: Record<
  Variant,
  { gradient: string; icon: React.ReactNode }
> = {
  hero: {
    gradient:
      "from-[#1a2416] via-[#0d100e] to-[#060807]",
    icon: <Flame className="h-10 w-10" strokeWidth={1.25} />,
  },
  interior: {
    gradient: "from-[#1c2a1e] via-[#131a12] to-[#0a0d09]",
    icon: <Building2 className="h-9 w-9" strokeWidth={1.25} />,
  },
  food: {
    gradient: "from-[#2b1a10] via-[#1a1310] to-[#0a0806]",
    icon: <Soup className="h-9 w-9" strokeWidth={1.25} />,
  },
  chef: {
    gradient: "from-[#20261a] via-[#151812] to-[#0a0b08]",
    icon: <ChefHat className="h-9 w-9" strokeWidth={1.25} />,
  },
  avatar: {
    gradient: "from-[#243020] to-[#0d120c]",
    icon: <UtensilsCrossed className="h-5 w-5" strokeWidth={1.5} />,
  },
  dessert: {
    gradient: "from-[#2a2015] via-[#1a1410] to-[#0a0806]",
    icon: <IceCreamCone className="h-8 w-8" strokeWidth={1.25} />,
  },
  drink: {
    gradient: "from-[#16241f] via-[#111a15] to-[#0a0d0b]",
    icon: <Wine className="h-8 w-8" strokeWidth={1.25} />,
  },
  story: {
    gradient: "from-[#1e2818] via-[#141a11] to-[#080a07]",
    icon: <Sparkles className="h-9 w-9" strokeWidth={1.25} />,
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
            "radial-gradient(circle at 1px 1px, var(--color-sage) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 border border-sage/10" />
      <div className="relative z-10 flex flex-col items-center gap-2 text-sage/70">
        {style.icon}
        {label && (
          <span className="font-display text-xs tracking-[0.2em] uppercase text-ivory-dim/70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
