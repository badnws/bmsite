import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useSeo, type Seo } from "@/hooks/use-document-title";

export function Page({ children, ...seo }: Seo & { children: ReactNode }) {
  useSeo(seo);
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}>
      {children}
    </motion.main>
  );
}
