import { asset } from "@/lib/utils";

/** Stand-in until real partner photos are provided. */
export function PortraitPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
      <img src={asset("assets/logo-mark.webp")} alt="" aria-hidden className="absolute -right-12 top-10 w-[85%] opacity-[0.08]" />
      <span className="absolute bottom-8 left-8 font-display text-7xl text-silver/90">{initials}</span>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-foil" />
    </div>
  );
}
