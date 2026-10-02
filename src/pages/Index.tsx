import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { GoldBar } from "@/components/brand/GoldBar";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { RomanHeading } from "@/components/brand/RomanHeading";
import { PostCard } from "@/components/blog/PostCard";
import { PostCardSkeleton } from "@/components/blog/PostCardSkeleton";
import { ContactBand } from "@/components/layout/ContactBand";
import { areas } from "@/data/areas";
import { pillars } from "@/data/pillars";
import { usePosts } from "@/hooks/use-posts";
import { asset } from "@/lib/utils";

export default function Index() {
  const { data: posts, isLoading } = usePosts();
  return (
    <Page>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <img src={asset("assets/logo-mark.png")} alt="" aria-hidden className="pointer-events-none absolute -right-32 top-1/2 hidden w-[760px] -translate-y-1/2 opacity-[0.07] md:block" />
        <div className="container relative flex min-h-[620px] flex-col justify-center gap-8 py-24 md:min-h-[680px]">
          <Reveal>
            <Eyebrow inverse>Advocacia estratégica e especializada</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-4xl font-display text-[56px] font-medium leading-[0.98] text-silver md:text-[88px]">
              Rigor técnico.
              <br />
              <em className="font-normal text-gold-300">Atuação estratégica.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-base leading-relaxed text-navy-200 md:text-[17px]">
              Consultoria e contencioso em direito público e privado, previdenciário e trabalhista — com atendimento próximo dos sócios em cada etapa.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="accent" size="lg">
              <Link to="/contato">
                Agende uma consulta <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <Link to="/areas-de-atuacao">Áreas de atuação</Link>
            </Button>
          </Reveal>
        </div>
        <GoldBar />
      </section>

      {/* Áreas */}
      <section className="container py-24 md:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Atuação" title="Nossas áreas de atuação" description="Dentre nossas áreas, atuamos em:" />
          <Button asChild variant="ghost" className="self-start md:self-auto">
            <Link to="/areas-de-atuacao">
              Ver detalhes <ArrowRight />
            </Link>
          </Button>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.05} className="bg-background">
              <Link to={"/areas-de-atuacao#" + a.slug} className="group flex h-full flex-col gap-4 p-7 transition-colors duration-200 hover:bg-paper">
                <a.icon className="h-6 w-6 text-gold-700" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-medium leading-tight text-navy-950">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                <span className="mt-auto pt-2 text-[11px] font-semibold uppercase tracking-wide2 text-navy-700 transition-colors group-hover:text-gold-800">Saiba mais →</span>
              </Link>
            </Reveal>
          ))}
          <div className="flex flex-col justify-end gap-4 bg-navy-950 p-7 lg:col-span-3">
            <p className="font-display text-2xl leading-snug text-silver">Não encontrou sua demanda?</p>
            <Link to="/contato" className="text-[11px] font-semibold uppercase tracking-wide2 text-gold-300 hover:text-gold-200">Fale com o escritório →</Link>
          </div>
        </div>
      </section>

      {/* Escritório */}
      <section className="bg-paper">
        <div className="container grid items-center gap-14 py-24 md:py-28 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="O escritório"
              title="Uma advocacia de proximidade, construída sobre técnica."
              description="O Barbosa & Mortari reúne atuação consultiva e contenciosa com um compromisso simples: cada cliente conhece a estratégia do seu caso e fala diretamente com quem o conduz."
            />
            <Button asChild variant="outline" className="self-start">
              <Link to="/escritorio">Conheça o escritório</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-sm bg-navy-950 p-10 md:p-12">
            <div className="flex flex-col gap-9">
              {pillars.map((p, i) => (
                <div key={p.title} className="flex flex-col gap-2">
                  <RomanHeading n={i + 1} title={p.title} inverse />
                  <p className="text-sm leading-relaxed text-navy-200">{p.text}</p>
                </div>
              ))}
            </div>
            <GoldBar className="absolute inset-x-0 bottom-0 h-1" />
          </Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="container py-24 md:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Blog" title="Artigos e análises" description="Conteúdo informativo sobre temas recorrentes da nossa atuação." />
          <Button asChild variant="ghost" className="self-start md:self-auto">
            <Link to="/blog">
              Todos os artigos <ArrowRight />
            </Link>
          </Button>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <PostCardSkeleton key={i} />)
            : posts?.slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <PostCard post={p} />
                </Reveal>
              ))}
        </div>
      </section>

      <ContactBand />
    </Page>
  );
}
