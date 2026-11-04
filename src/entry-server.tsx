import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes, createQueryClient } from "./App";
import { Toaster } from "@/components/ui/sonner";
import { SeoContext, type ResolvedSeo } from "@/hooks/use-document-title";
import { posts } from "@/data/posts";
import { site } from "@/lib/site";

/** Todas as URLs indexáveis do site — geram um HTML estático cada e entram no sitemap. */
export const routes: { path: string; lastmod?: string }[] = [
  { path: "/" },
  ...site.nav.map((n) => ({ path: n.to })),
  ...posts.map((p) => ({ path: "/blog/" + p.slug, lastmod: p.date })),
];

export const siteUrl = site.url;

export function render(url: string): { html: string; seo: ResolvedSeo } {
  const collector: { current?: ResolvedSeo } = {};
  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={collector}>
        <QueryClientProvider client={createQueryClient()}>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
          <Toaster />
        </QueryClientProvider>
      </SeoContext.Provider>
    </StrictMode>,
  );
  if (!collector.current) throw new Error(`A rota ${url} não chamou useSeo (envolva a página em <Page>).`);
  return { html, seo: collector.current };
}
