import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactBand } from "@/components/layout/ContactBand";
import { RomanHeading } from "@/components/brand/RomanHeading";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { pillars } from "@/data/pillars";
import { asset } from "@/lib/utils";

export default function Escritorio() {
  return (
    <Page title="Escritório de advocacia em Londrina" description="Conheça o Barbosa & Mortari Advogados, escritório em Londrina/PR com atuação consultiva e contenciosa conduzida pessoalmente pelos sócios." image="assets/equipe.jpg">
      <PageHeader
        eyebrow="O escritório"
        title="Advocacia estratégica e especializada"
        description="Sediado em Londrina/PR, o Barbosa & Mortari Advogados atua de forma consultiva e contenciosa para pessoas físicas, empresas, condomínios e entes públicos."
      />
      <section className="container grid gap-16 py-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="flex flex-col gap-6 text-[15px] leading-[1.8] text-foreground/90">
          <Eyebrow>Quem somos</Eyebrow>
          <h2 className="font-display text-4xl font-medium leading-tight text-navy-950 md:text-5xl">Personalidade e, ao mesmo tempo, sobriedade.</h2>
          <p>
            O escritório nasceu da convicção de que a boa advocacia combina profundidade técnica com uma relação de confiança. Por isso, cada demanda é conduzida pessoalmente pelos sócios, do primeiro atendimento à conclusão.
          </p>
          <p>
            Dentre nossas áreas, atuamos em direito público, bancário, administrativo, civil, contratual, imobiliário, condominial, previdenciário e trabalhista — áreas em que a prevenção de riscos é tão importante quanto a defesa em juízo.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative overflow-hidden rounded-sm bg-navy-950">
          <img src={asset("assets/equipe.jpg")} alt="Matheus Barbosa e Anthony Mortari, sócios do escritório" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-foil" />
        </Reveal>
      </section>
      <section className="border-t bg-background">
        <div className="container grid gap-12 py-20 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="flex flex-col gap-3">
              <RomanHeading n={i + 1} title={p.title} />
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBand />
    </Page>
  );
}
