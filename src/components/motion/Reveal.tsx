import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & { delay?: number };

/**
 * Surge suavemente ao entrar na tela. Feito com CSS + IntersectionObserver (sem biblioteca).
 * Sem JavaScript, a regra em <noscript> no index.html mantém o conteúdo visível.
 */
export function Reveal({ delay = 0, className, style, children, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return setVisible(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", visible && "is-visible", className)} style={delay ? { ...style, transitionDelay: `${delay}s` } : style} {...props}>
      {children}
    </div>
  );
}
