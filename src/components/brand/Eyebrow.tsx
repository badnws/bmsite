import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = { children: ReactNode; inverse?: boolean; rule?: boolean; className?: string };

export function Eyebrow({ children, inverse, rule = true, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3 text-[11px] font-semibold uppercase tracking-label", inverse ? "text-gold-300" : "text-gold-800", className)}>
      {rule && <span aria-hidden className="h-px w-7 shrink-0 bg-gold-500" />}
      {children}
    </div>
  );
}
