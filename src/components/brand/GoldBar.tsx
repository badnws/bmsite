import { cn } from "@/lib/utils";

/** Metallic foil bar from the e-mail signature — one per surface, flush to an edge. */
export function GoldBar({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-1.5 w-full bg-gold-foil", className)} />;
}
