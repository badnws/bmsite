import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-sm text-navy-200">
      <div className="container flex flex-col gap-10 border-t border-white/[0.08] py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <Logo variant="reverse" lazy className="h-8 self-start" />
          <p className="max-w-sm leading-relaxed">
            Sociedade de advogados inscrita na {site.registration.oab}. CNPJ {site.registration.cnpj}.
          </p>
        </div>
        <ul className="flex flex-col gap-1.5 leading-relaxed">
          {site.partners.map((p) => (
            <li key={p.oab}>
              {p.name}, {p.oab}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-1.5 leading-relaxed">
          <span>{site.address.street}</span>
          <span>{site.address.cityLine.replace(" · ", ", ")}</span>
          <a href={"mailto:" + site.email} className="hover:text-silver">{site.email}</a>
        </div>
      </div>
      <div className="container flex flex-col gap-2 border-t border-white/[0.08] py-6 text-xs text-navy-300 md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Conteúdo informativo, conforme o Provimento n.º 205/2021 do Conselho Federal da OAB.</span>
      </div>
    </footer>
  );
}
