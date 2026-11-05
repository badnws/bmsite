import type { ReactNode } from "react";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { GoldBar } from "@/components/brand/GoldBar";
import { asset } from "@/lib/utils";

type PageHeaderProps = { eyebrow: string; title: ReactNode; description?: ReactNode };

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img src={asset("assets/logo-mark.webp")} alt="" aria-hidden className="pointer-events-none absolute -right-24 top-1/2 w-[520px] -translate-y-1/2 opacity-[0.06]" />
      <div className="container relative flex flex-col gap-5 pb-16 pt-14 md:pb-20 md:pt-20">
        <Eyebrow inverse>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.04] text-silver md:text-6xl">{title}</h1>
        {description && <p className="max-w-2xl text-[15px] leading-relaxed text-navy-200">{description}</p>}
      </div>
      <GoldBar />
    </section>
  );
}
