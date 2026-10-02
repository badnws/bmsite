import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", inverse, className }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", center && "mx-auto items-center text-center", className)}>
      {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
      <h2 className={cn("font-display text-4xl font-medium leading-[1.08] md:text-5xl", inverse ? "text-silver" : "text-navy-950")}>{title}</h2>
      {description && <p className={cn("text-[15px] leading-relaxed", inverse ? "text-navy-200" : "text-muted-foreground")}>{description}</p>}
    </div>
  );
}
