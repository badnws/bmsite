import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { PostCard } from "@/components/blog/PostCard";
import { PostCardSkeleton } from "@/components/blog/PostCardSkeleton";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/posts";
import { usePosts } from "@/hooks/use-posts";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const category = params.get("categoria") ?? undefined;
  const [q, setQ] = useState("");
  const { data, isLoading } = usePosts(category);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return data ?? [];
    return (data ?? []).filter((p) => (p.title + " " + p.excerpt).toLowerCase().includes(term));
  }, [data, q]);

  const pick = (c?: string) => {
    const next = new URLSearchParams(params);
    if (c) next.set("categoria", c);
    else next.delete("categoria");
    setParams(next, { replace: true });
  };

  const chip = (active: boolean) =>
    cn(
      "h-9 rounded-sm border px-4 text-xs font-medium transition-colors",
      active ? "border-navy-950 bg-navy-950 text-silver" : "border-input bg-background text-navy-850 hover:bg-navy-50",
    );

  return (
    <Page title="Blog" description="Artigos informativos do Barbosa & Mortari Advogados sobre direito público, bancário, imobiliário, condominial e outras áreas.">
      <PageHeader eyebrow="Blog" title="Artigos e análises jurídicas" description="Conteúdo de caráter informativo sobre temas da nossa atuação. Não substitui a consulta a um advogado." />
      <section className="container py-14 md:py-20">
        <div className="flex flex-col gap-5 border-b pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            <button type="button" className={chip(!category)} onClick={() => pick()}>Todos</button>
            {categories.map((c) => (
              <button key={c} type="button" className={chip(category === c)} onClick={() => pick(c)}>
                {c}
              </button>
            ))}
          </div>
          <label className="relative w-full lg:w-72">
            <span className="sr-only">Buscar artigos</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar artigos" className="pl-10" />
          </label>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <PostCardSkeleton key={i} />)
            : list.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                  <PostCard post={p} />
                </Reveal>
              ))}
        </div>
        {!isLoading && list.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">Nenhum artigo encontrado para esta busca.</p>
        )}
      </section>
    </Page>
  );
}
