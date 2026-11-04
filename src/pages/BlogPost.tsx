import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/motion/Page";
import { Reveal } from "@/components/motion/Reveal";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { GoldBar } from "@/components/brand/GoldBar";
import { usePost, usePosts } from "@/hooks/use-posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const { data: post, isLoading } = usePost(slug);
  const { data: all } = usePosts();
  const related = (all ?? []).filter((p) => p.slug !== slug).slice(0, 2);

  if (isLoading) {
    return (
      <div className="container max-w-3xl py-24">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="mt-6 h-12 w-full" />
        <Skeleton className="mt-3 h-12 w-2/3" />
        <Skeleton className="mt-10 h-64 w-full" />
      </div>
    );
  }

  if (!post) {
    return (
      <Page title="Artigo não encontrado" noindex>
        <div className="container flex flex-col items-start gap-6 py-32">
          <h1 className="font-display text-5xl text-navy-950">Artigo não encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/blog">Voltar ao blog</Link>
          </Button>
        </div>
      </Page>
    );
  }

  return (
    <Page
      title={post.title}
      description={post.excerpt}
      type="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${site.url}/blog/${post.slug}#artigo`,
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          image: `${site.url}/assets/cover-navy.jpg`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "pt-BR",
          articleSection: post.category,
          author: { "@type": "Person", name: post.author, url: `${site.url}/equipe` },
          publisher: { "@id": `${site.url}/#escritorio` },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
          ],
        },
      ]}
    >
      <article>
        <header className="bg-paper">
          <div className="container max-w-3xl py-16 md:py-20">
            <nav aria-label="Trilha" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide2 text-muted-foreground">
              <Link to="/blog" className="hover:text-navy-950">Blog</Link>
              <span aria-hidden>/</span>
              <Link to={"/blog?categoria=" + encodeURIComponent(post.category)} className="text-gold-800 hover:text-gold-900">{post.category}</Link>
            </nav>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.05] text-navy-950 md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-navy-850">{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime} min de leitura</span>
            </div>
          </div>
          <GoldBar className="h-px bg-gold-500 bg-none" />
        </header>
        <Reveal className="container max-w-3xl py-16">
          <PostBody blocks={post.content} />
          <aside className="mt-14 rounded-sm border bg-paper p-6 text-sm leading-relaxed text-muted-foreground">
            Este conteúdo tem caráter exclusivamente informativo e não substitui a consulta a um advogado. Para análise do seu caso,{" "}
            <Link to="/contato" className="font-medium text-navy-700 underline decoration-gold-500 underline-offset-4 hover:text-gold-800">entre em contato</Link>.
          </aside>
          <Button asChild variant="ghost" className="mt-10 -ml-4">
            <Link to="/blog">
              <ArrowLeft /> Voltar ao blog
            </Link>
          </Button>
        </Reveal>
      </article>
      {related.length > 0 && (
        <section className="border-t bg-paper">
          <div className="container py-20">
            <h2 className="font-display text-3xl font-medium text-navy-950">Leia também</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Page>
  );
}
