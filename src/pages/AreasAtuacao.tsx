import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactBand } from "@/components/layout/ContactBand";
import { areas } from "@/data/areas";

export default function AreasAtuacao() {
  return (
    <Page title="Áreas de atuação em Londrina/PR" description="Advogados em Londrina/PR: direito público e terceiro setor, civil, família e sucessões, bancário, imobiliário, condominial, previdenciário e trabalhista.">
      <PageHeader
        eyebrow="Áreas de atuação"
        title="Nossas áreas de atuação"
        description="Atuação consultiva, preventiva e contenciosa, com estratégia definida a partir das particularidades de cada caso. Dentre nossas áreas, atuamos em:"
      />
      <section className="container py-12 md:py-16">
        {areas.map((a) => (
          <Reveal key={a.slug}>
            <article id={a.slug} className="grid scroll-mt-28 gap-8 border-b py-12 last:border-b-0 md:grid-cols-[1fr_1fr] md:gap-16">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-navy-950">
                  <a.icon className="h-6 w-6 text-gold-300" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-4xl font-medium leading-tight text-navy-950">{a.title}</h2>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{a.summary}</p>
                </div>
              </div>
              <ul className="grid gap-x-8 gap-y-3 self-center sm:grid-cols-2">
                {a.topics.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-gold-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>
      <ContactBand />
    </Page>
  );
}
