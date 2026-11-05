import { Link, useParams } from "react-router-dom";
import { Page } from "@/components/motion/Page";
import { Button } from "@/components/ui/button";
import { areaPageBySlug, areaPages } from "@/data/area-pages";
import { areas } from "@/data/areas";
import { usePosts } from "@/hooks/use-posts";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

const link = "underline decoration-gold-500 decoration-1 underline-offset-[5px] transition-colors hover:decoration-navy-950";

export default function AreaDetail() {
  const { slug = "" } = useParams();
  const page = areaPageBySlug(slug);
  const { data: allPosts } = usePosts();
  if (!page) return <NotFound />;

  const url = `${site.url}/areas-de-atuacao/${page.slug}`;
  const posts = page.postCategory ? allPosts.filter((p) => p.category === page.postCategory).slice(0, 3) : [];
  const others = areaPages.filter((p) => p.slug !== page.slug);
  const otherAreas = areas.filter((a) => a.slug !== page.slug && !areaPages.some((p) => p.slug === a.slug));

  return (
    <Page
      title={page.seoTitle}
      description={page.description}
      image="assets/og-escritorio.jpg"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": url + "#servico",
          name: page.h1,
          serviceType: page.h1,
          description: page.description,
          url,
          provider: { "@id": `${site.url}/#escritorio` },
          areaServed: [
            { "@type": "City", name: "Londrina" },
            { "@type": "Country", name: "Brasil" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Áreas de atuação", item: `${site.url}/areas-de-atuacao` },
            { "@type": "ListItem", position: 3, name: page.h1, item: url },
          ],
        },
      ]}
    >
      <article className="container max-w-[760px] pb-24 pt-12 md:pt-16">
        <nav aria-label="Trilha de navegação" className="text-sm text-navy-600">
          <Link to="/" className="hover:text-navy-950">Início</Link>
          <span aria-hidden className="mx-2 text-navy-300">/</span>
          <Link to="/areas-de-atuacao" className="hover:text-navy-950">Áreas de atuação</Link>
        </nav>

        <h1 className="mt-6 font-serif text-[40px] leading-[1.08] text-navy-950 sm:text-[54px]">{page.h1}</h1>
        {page.intro.map((p) => (
          <p key={p} className="mt-5 text-[18px] leading-relaxed text-navy-800">{p}</p>
        ))}
        <Button asChild size="lg" variant="accent" className="mt-8">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
        </Button>

        {page.sections.map((s) => {
          const ListTag = s.ordered ? "ol" : "ul";
          return (
            <section key={s.heading} className="mt-16">
              <h2 className="font-serif text-[30px] leading-tight text-navy-950">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-[17px] leading-relaxed text-navy-800">{p}</p>
              ))}
              {s.list && (
                <ListTag className={(s.ordered ? "list-decimal" : "list-disc") + " mt-4 space-y-2.5 pl-6 text-[17px] leading-relaxed text-navy-800 marker:text-navy-400"}>
                  {s.list.map((li) => (
                    <li key={li} className="pl-1">{li}</li>
                  ))}
                </ListTag>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-4 text-[17px] leading-relaxed text-navy-800">{p}</p>
              ))}
            </section>
          );
        })}

        <section className="mt-16" aria-labelledby="perguntas">
          <h2 id="perguntas" className="font-serif text-[30px] leading-tight text-navy-950">Perguntas frequentes</h2>
          <div className="mt-4">
            {page.faq.map((f) => (
              <div key={f.q} className="border-t border-navy-200 py-6">
                <h3 className="font-serif text-[21px] leading-snug text-navy-950">{f.q}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-navy-800">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {posts.length > 0 && (
          <section className="mt-12" aria-labelledby="artigos">
            <h2 id="artigos" className="font-serif text-[24px] text-navy-950">Artigos relacionados</h2>
            <ul className="mt-3">
              {posts.map((p) => (
                <li key={p.slug} className="border-t border-navy-200 py-4">
                  <Link to={"/blog/" + p.slug} className={"font-serif text-[19px] text-navy-950 " + link}>{p.title}</Link>
                  <p className="mt-1 text-sm text-navy-600">{formatDate(p.date)}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 border-t border-navy-200 pt-8">
          <p className="text-[17px] text-navy-800">Para falar com os sócios sobre o seu caso:</p>
          <Button asChild size="lg" variant="accent" className="mt-4">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
          </Button>
          <p className="mt-10 text-sm text-navy-600">
            Veja também:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                <Link to={"/areas-de-atuacao/" + o.slug} className={link}>{o.h1}</Link>
                {i < others.length - 1 ? ", " : ""}
              </span>
            ))}
            {" "}e{" "}
            <Link to="/areas-de-atuacao" className={link}>outras {otherAreas.length} áreas de atuação</Link>.
          </p>
          <p className="mt-6 text-xs text-navy-500">
            Conteúdo informativo, revisado em {formatDate(page.reviewed)}. Não substitui a análise do caso concreto.
          </p>
        </section>
      </article>
    </Page>
  );
}
