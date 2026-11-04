import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactBand } from "@/components/layout/ContactBand";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { team } from "@/data/team";
import { asset } from "@/lib/utils";

export default function Equipe() {
  return (
    <Page title="Advogados sócios" description="Matheus Barbosa (OAB/PR 132.397), especialista em Direito Público, e Anthony Mortari (OAB/PR 130.304), direito privado — sócios do Barbosa & Mortari Advogados." image="assets/equipe.jpg">
      <PageHeader eyebrow="Equipe" title="Os sócios" description="Cada caso é conduzido pessoalmente pelos sócios do escritório." />
      <section className="container grid gap-14 py-24 md:grid-cols-2 lg:gap-20">
        {team.map((m, i) => (
          <Reveal key={m.oab} delay={i * 0.08} className="grid gap-8 sm:grid-cols-[220px_1fr] md:grid-cols-1 lg:grid-cols-[240px_1fr]">
            {m.photo ? <img src={asset(m.photo)} alt={m.name} className="aspect-[4/5] w-full object-cover object-[center_20%]" /> : <PortraitPlaceholder initials={m.initials} />}
            <div className="flex flex-col gap-3 self-start">
              <span className="text-[11px] font-semibold uppercase tracking-label text-gold-800">{m.role}</span>
              <h2 className="font-display text-4xl font-medium leading-tight text-navy-950">{m.name}</h2>
              <span className="text-xs font-semibold tracking-wide2 text-navy-700">{m.oab}</span>
              {m.bio.map((b) => (
                <p key={b} className="text-sm leading-relaxed text-muted-foreground first-of-type:pt-2">{b}</p>
              ))}
              <ul className="flex flex-wrap gap-2 pt-2">
                {m.focus.map((f) => (
                  <li key={f} className="rounded-sm border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide2 text-navy-700">{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
      <ContactBand />
    </Page>
  );
}
