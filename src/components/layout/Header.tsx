import { Link } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container flex h-[72px] items-center justify-between gap-8">
        <Link to="/" aria-label="Barbosa & Mortari Advogados, página inicial" className="shrink-0">
          <Logo variant="primary" className="h-8 md:h-9" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {site.sections.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-navy-700 transition-colors hover:text-navy-950">
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="whatsapp" size="sm" className="hidden lg:inline-flex">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden /> Falar pelo WhatsApp
          </a>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navegação do site</SheetDescription>
            <div className="px-7 pt-6">
              <Logo variant="reverse" className="h-8" />
            </div>
            <nav className="mt-10 flex flex-col px-7">
              {site.sections.map((l) => (
                <SheetClose asChild key={l.to}>
                  <Link to={l.to} className="border-b border-white/[0.08] py-4 font-serif text-2xl text-silver transition-colors hover:text-gold-200">
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 px-7 pb-8">
              <Button asChild variant="whatsapp">
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden /> Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
