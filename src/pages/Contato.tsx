import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type Item = { icon: LucideIcon; label: string; value: string; sub?: string; href: string; external?: boolean };

const items: Item[] = [
  { icon: Mail, label: "E-mail", value: site.email, href: "mailto:" + site.email },
  ...site.phones.map((p) => ({ icon: Phone, label: "Telefone", value: p.label, href: p.href })),
  { icon: MapPin, label: "Endereço", value: site.address.street, sub: site.address.cityLine, href: site.address.maps, external: true },
];

export default function Contato() {
  return (
    <Page title="Contato" description="Fale com o Barbosa & Mortari Advogados: e-mail, telefones, WhatsApp e endereço na Rua Pernambuco, 390, Sala 407, Londrina/PR.">
      <PageHeader eyebrow="Contato" title="Fale com o escritório" description="Atendimento direto com os sócios, com sigilo e objetividade." />
      <section className="container grid gap-12 py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal className="flex flex-col">
          <Eyebrow>Atendimento</Eyebrow>
          <ul className="mt-8 flex flex-col divide-y border-y">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})} className="group flex items-center gap-5 py-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy-950">
                    <it.icon className="h-5 w-5 text-gold-300" strokeWidth={1.5} />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-label text-gold-800">{it.label}</span>
                    <span className="break-words font-display text-2xl leading-tight text-navy-950 transition-colors group-hover:text-gold-800 md:text-[28px]">{it.value}</span>
                    {it.sub && <span className="text-sm text-muted-foreground">{it.sub}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="relative flex flex-col gap-8 self-start overflow-hidden rounded-sm bg-navy-950 p-8 md:p-10">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-label text-gold-300">WhatsApp</span>
            <h2 className="font-display text-4xl font-medium leading-tight text-silver">Converse diretamente com o escritório</h2>
            <p className="text-sm leading-relaxed text-navy-200">Envie sua mensagem e retornaremos com a orientação inicial sobre o seu caso.</p>
          </div>
          <Button asChild variant="accent" size="lg" className="w-full">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle /> Conversar pelo WhatsApp
            </a>
          </Button>
          <p className="text-xs leading-relaxed text-navy-200">
            O contato não estabelece relação cliente-advogado. Informações compartilhadas são tratadas com sigilo profissional.
          </p>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-foil" />
        </Reveal>
      </section>
    </Page>
  );
}
