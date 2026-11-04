import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/lib/site";

export type Seo = {
  title?: string;
  description?: string;
  /** Path inside /public, e.g. "assets/equipe.jpg". */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/** Metadados finais de uma página — usados no navegador (useSeo) e na pré-renderização (entry-server). */
export type ResolvedSeo = {
  title: string;
  description: string;
  url: string;
  image: string;
  type: "website" | "article";
  robots: string;
  jsonLd: string;
};

export function resolveSeo({ title, description, image, type = "website", noindex, jsonLd }: Seo, pathname: string): ResolvedSeo {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  return {
    title: !title
      ? `${site.name} · Advogados em Londrina/PR`
      : title.length + site.name.length + 3 > 65
        ? title // títulos longos (artigos) ficam sem o sufixo para não serem cortados no Google
        : `${title} · ${site.name}`,
    description: description ?? site.description,
    url: path === "/" ? site.url + "/" : site.url + path,
    image: `${site.url}/${image ?? "assets/cover-navy.jpg"}`,
    type,
    robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    jsonLd: jsonLd ? JSON.stringify(jsonLd) : "",
  };
}

/** Na pré-renderização, coleta o SEO da página renderizada (no navegador fica vazio). */
export const SeoContext = createContext<{ current?: ResolvedSeo } | null>(null);

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Title, description, canonical, Open Graph, Twitter and page-level JSON-LD. */
export function useSeo(seo: Seo = {}) {
  const { pathname } = useLocation();
  const r = resolveSeo(seo, pathname);
  const collector = useContext(SeoContext);
  if (collector) collector.current = r;

  useEffect(() => {
    document.title = r.title;
    setMeta("name", "description", r.description);
    setMeta("name", "robots", r.robots);
    setMeta("property", "og:type", r.type);
    setMeta("property", "og:title", r.title);
    setMeta("property", "og:description", r.description);
    setMeta("property", "og:url", r.url);
    setMeta("property", "og:image", r.image);
    setMeta("name", "twitter:title", r.title);
    setMeta("name", "twitter:description", r.description);
    setMeta("name", "twitter:image", r.image);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (r.robots.startsWith("noindex")) link?.remove();
    else {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = r.url;
    }
    let script = document.getElementById("page-jsonld");
    if (r.jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld";
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = r.jsonLd;
    } else script?.remove();
  }, [r.title, r.description, r.url, r.image, r.type, r.robots, r.jsonLd]);
}

export const useDocumentTitle = (title?: string) => useSeo({ title });
