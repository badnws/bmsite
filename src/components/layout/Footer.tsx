import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { GoldBar } from "@/components/brand/GoldBar";
import { site } from "@/lib/site";

const head = "mb-5 text-[11px] font-semibold uppercase tracking-label text-gold-300";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo variant="reverse" className="h-10" />
          <p className="max-w-xs text-sm leading-relaxed">{site.tagline} em direito público e privado, previdenciário e trabalhista.</p>
        </div>
        <div>
          <div className={head}>Navegação</div>
          <ul className="flex flex-col gap-3 text-sm">
            {site.nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-silver">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={head}>Contato</div>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href={"mailto:" + site.email} className="flex items-center gap-2.5 transition-colors hover:text-silver">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" /> {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-2.5 transition-colors hover:text-silver">
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" /> {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.address.maps} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-silver">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{site.address.street}<br />{site.address.cityLine}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className={head}>Sócios</div>
          <ul className="flex flex-col gap-4 text-sm">
            {site.partners.map((p) => (
              <li key={p.oab}>
                <div className="font-display text-lg leading-tight text-silver">{p.name}</div>
                <div className="mt-1 text-[11px] font-semibold tracking-wide2">{p.oab}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.08]">
        <div className="container flex flex-col gap-2 py-6 text-xs text-navy-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
          <span>Conteúdo de caráter informativo, conforme o Provimento n.º 205/2021 do CFOAB.</span>
        </div>
      </div>
      <GoldBar />
    </footer>
  );
}
