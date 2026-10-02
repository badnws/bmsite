import { Link, NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GoldBar } from "@/components/brand/GoldBar";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative py-2 text-[11px] font-semibold uppercase tracking-wide2 transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-300 hover:text-silver hover:after:scale-x-100",
    isActive ? "text-silver after:scale-x-100" : "text-navy-200",
  );

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/85">
      <div className="container flex h-20 items-center justify-between gap-8">
        <Link to="/" aria-label="Página inicial" className="shrink-0">
          <Logo variant="reverse" className="h-9 md:h-10" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="accent" size="sm">
            <Link to="/contato">Agende uma consulta</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="inverse" size="icon" className="lg:hidden" aria-label="Abrir menu">
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
              {[{ to: "/", label: "Início" }, ...site.nav].map((l) => (
                <SheetClose asChild key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      cn("border-b border-white/[0.08] py-4 font-display text-2xl transition-colors", isActive ? "text-gold-300" : "text-silver hover:text-gold-200")
                    }
                  >
                    {l.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 px-7 pb-8">
              <a href={site.phones[0].href} className="flex items-center gap-2 text-sm text-navy-200 hover:text-silver">
                <Phone className="h-4 w-4 text-gold-300" /> {site.phones[0].label}
              </a>
              <SheetClose asChild>
                <Button asChild variant="accent">
                  <Link to="/contato">Agende uma consulta</Link>
                </Button>
              </SheetClose>
            </div>
            <GoldBar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
