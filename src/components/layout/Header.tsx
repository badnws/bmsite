import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  // Fecha o menu ao navegar.
  useEffect(() => setOpen(false), [pathname, hash]);

  // Menu aberto: trava a rolagem, foca o primeiro link, fecha com Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a, button")?.focus();
    const button = toggle.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      button?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container flex h-[72px] items-center justify-between gap-8">
          <Link
            to="/"
            aria-label="Barbosa & Mortari Advogados, página inicial"
            className="shrink-0"
          >
            <Logo variant="primary" className="h-8 md:h-9" />
          </Link>
          <nav
            aria-label="Principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {site.sections.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-navy-700 transition-colors hover:text-navy-950"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            variant="whatsapp"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden /> Falar pelo WhatsApp
            </a>
          </Button>
          <Button
            ref={toggle}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>

      {/* O painel fica fora do <header>: o backdrop-blur do cabeçalho prenderia o "fixed" dentro dele. */}
      {/* Ao fechar, a visibilidade só muda depois da animação; ao abrir, muda na hora (para o foco entrar no menu). */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "visible" : "invisible transition-[visibility] duration-300",
        )}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-950/60 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          id="menu-movel"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col bg-navy-950 pb-[env(safe-area-inset-bottom,0px)] transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-7 pt-6">
            <Logo variant="reverse" lazy className="h-8" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              tabIndex={open ? 0 : -1}
              className="flex h-10 w-10 items-center justify-center rounded-sm text-silver hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Menu" className="mt-10 flex flex-col px-7">
            {site.sections.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                tabIndex={open ? 0 : -1}
                className="border-b border-white/[0.08] py-4 font-serif text-2xl text-silver transition-colors hover:text-gold-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 px-7 pb-8">
            <Button asChild variant="whatsapp">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
              >
                <MessageCircle aria-hidden /> Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
