import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Page } from "@/components/motion/Page";
import { Button } from "@/components/ui/button";
import { areas, otherAreas } from "@/data/areas";
import { team } from "@/data/team";
import { usePosts } from "@/hooks/use-posts";
import { site } from "@/lib/site";
import { asset, cn, formatDate } from "@/lib/utils";

const textLink = "underline decoration-gold-500 decoration-1 underline-offset-[5px] transition-colors hover:decoration-navy-950";

/** Seção da home: título à esquerda, conteúdo à direita (empilha no celular). */
function Section({ id, title, children, className }: { id: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={id + "-titulo"} className={cn("scroll-mt-[72px]", className)}>
      <div className="container grid gap-8 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <h2 id={id + "-titulo"} className="font-serif text-[32px] leading-tight text-navy-950 md:col-span-4 md:text-[38px]">
          {title}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export default function Index() {
  const { data: posts = [] } = usePosts();
  const [phone] = site.phones;

  return (
    <Page>
      {/* Abertura: foto do escritório ao fundo, sob uma camada azul-marinho */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <picture>
          <source media="(min-width: 768px)" type="image/webp" srcSet={asset("assets/escritorio-sala.webp")} />
          <source media="(min-width: 768px)" srcSet={asset("assets/escritorio-sala.jpg")} />
          <source type="image/webp" srcSet={asset("assets/escritorio-sala-m.webp")} />
          <img
            src={asset("assets/escritorio-sala-m.jpg")}
            alt=""
            width={900}
            height={1125}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
        </picture>
        {/* Opacidade da camada: ajuste os valores rgba abaixo (0 = foto pura, 1 = azul sólido). */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,33,0.9)_0%,rgba(8,11,33,0.78)_55%,rgba(8,11,33,0.62)_100%)]" />
        <div className="container flex min-h-[min(calc(100svh-72px),760px)] flex-col justify-center gap-8 py-24">
          <h1 className="max-w-[14ch] font-serif text-[44px] leading-[1.06] text-white sm:text-[60px] lg:text-[76px]">
            Advocacia e consultoria jurídica em Londrina/PR
          </h1>
          <p className="max-w-[50ch] text-[17px] leading-relaxed text-navy-100">
            Sede em Londrina e atendimento on-line em todo o Brasil.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild size="lg" variant="accent">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      <Section id="areas" title="Áreas de atuação">
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {areas.map((a) => (
            <li key={a.slug} className="border-t border-navy-200 py-6">
              <Link to={"/areas-de-atuacao#" + a.slug} className="group block">
                <h3 className="font-serif text-[23px] leading-snug text-navy-950 group-hover:underline group-hover:decoration-gold-500 group-hover:decoration-1 group-hover:underline-offset-[5px]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{a.line}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-navy-200 pt-6 text-[15px] text-navy-700">{otherAreas}</p>
      </Section>

      <Section id="escritorio" title="O escritório" className="bg-navy-50">
        <p className="max-w-[60ch] text-[17px] leading-relaxed text-navy-800">
          Fundado por Matheus Barbosa e Anthony Mortari, formados em Direito pela Universidade Estadual de Londrina. O escritório atua na Justiça
          Estadual, na Justiça Federal e na Justiça do Trabalho, e em órgãos como INSS, ParanaPrevidência e DETRAN/PR.
        </p>
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {[
            ["Clientes", "Pessoas físicas, servidores públicos, empresas, condomínios, associações e entes públicos."],
            ["Atendimento", "Presencial em Londrina e on-line para clientes de outras cidades."],
            ["Sede", "Rua Pernambuco, 390, sala 407, Centro, Londrina/PR."],
          ].map(([dt, dd]) => (
            <div key={dt} className="flex flex-col gap-2 border-t border-navy-200 pt-4">
              <dt className="text-sm font-semibold text-navy-950">{dt}</dt>
              <dd className="text-[15px] leading-relaxed text-navy-700">{dd}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="socios" title="Sócios">
        <div className="grid gap-14 sm:grid-cols-2 sm:gap-10">
          {team.map((m) => (
            <article key={m.oab} className="flex flex-col">
              {m.photo && (
                <img src={asset(m.photo)} alt={m.name} width={600} height={750} loading="lazy" className="aspect-[4/5] w-full bg-navy-50 object-cover object-[center_20%]" />
              )}
              <h3 className="mt-6 font-serif text-[28px] leading-tight text-navy-950">{m.name}</h3>
              <p className="mt-1 text-sm tabular-nums text-navy-600">{m.oab}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-800">{m.credentials}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-700">{m.practice}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="artigos" title="Artigos" className="border-t border-navy-100">
        <ul>
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug} className="grid gap-1 border-t border-navy-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
              <time dateTime={p.date} className="whitespace-nowrap pt-1 text-sm tabular-nums text-navy-600">
                {formatDate(p.date)}
              </time>
              <div>
                <Link to={"/blog/" + p.slug} className="font-serif text-[22px] leading-snug text-navy-950 hover:underline hover:decoration-gold-500 hover:decoration-1 hover:underline-offset-[5px]">
                  {p.title}
                </Link>
                <p className="mt-1 text-sm text-navy-600">{p.category}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/blog" className={cn("mt-8 inline-block text-[15px] text-navy-950", textLink)}>
          Todos os artigos
        </Link>
      </Section>

      <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-[72px] bg-navy-950 text-navy-200">
        <div className="container grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <h2 id="contato-titulo" className="font-serif text-[32px] leading-tight text-silver md:text-[38px]">
              Contato
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-silver">Telefone e WhatsApp</h3>
              <a href={phone.href} className="font-serif text-[30px] leading-none tabular-nums text-silver hover:text-gold-200">
                {phone.label}
              </a>
              <Button asChild variant="accent" className="mt-2 self-start">
                <a href={site.whatsapp} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
              </Button>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-silver">E-mail</h3>
                <a href={"mailto:" + site.email} className="text-[15px] hover:text-silver">
                  {site.email}
                </a>
              </div>
              <address className="flex flex-col gap-2 not-italic">
                <h3 className="text-sm font-semibold text-silver">Endereço</h3>
                <span className="text-[15px] leading-relaxed">
                  Rua Pernambuco, 390, sala 407, Centro
                  <br />
                  Londrina/PR, CEP 86020-120
                </span>
                <a href={site.address.maps} target="_blank" rel="noreferrer" className="text-[15px] text-silver underline decoration-gold-500 decoration-1 underline-offset-[5px] hover:decoration-silver">
                  Abrir no Google Maps
                </a>
              </address>
            </div>
            <iframe
              title="Mapa: Rua Pernambuco, 390, Centro, Londrina/PR"
              src="https://www.google.com/maps?q=Rua+Pernambuco,+390,+Centro,+Londrina+-+PR,+86020-120&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 bg-navy-900 grayscale-[0.6] sm:col-span-2"
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
