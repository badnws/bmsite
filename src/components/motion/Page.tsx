import { useEffect, type ReactNode } from "react";
import { useSeo, type Seo } from "@/hooks/use-document-title";

/** A primeira página (vinda pré-renderizada) aparece sem fade; as navegações seguintes têm uma transição curta em CSS. */
let firstPaintDone = false;

export function Page({ children, ...seo }: Seo & { children: ReactNode }) {
  useSeo(seo);
  const animate = firstPaintDone;
  useEffect(() => {
    firstPaintDone = true;
  }, []);
  return <main className={animate ? "page-enter" : undefined}>{children}</main>;
}
