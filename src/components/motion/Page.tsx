import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useSeo, type Seo } from "@/hooks/use-document-title";

/** A primeira página (vinda pré-renderizada) aparece sem fade; as navegações seguintes mantêm a transição. */
let firstPaintDone = false;

export function Page({ children, ...seo }: Seo & { children: ReactNode }) {
  useSeo(seo);
  const animate = firstPaintDone;
  useEffect(() => {
    firstPaintDone = true;
  }, []);
  return (
    <motion.main initial={animate ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}>
      {children}
    </motion.main>
  );
}
