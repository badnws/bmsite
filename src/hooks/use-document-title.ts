import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/lib/site";

export type Seo = {
  title?: string;
  description?: string;
  /** Path inside /public, e.g. "assets/equipe.png". */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
};

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
export function useSeo({ title, description, image, type = "website", noindex, jsonLd }: Seo = {}) {
  const { pathname } = useLocation();
  const json = jsonLd ? JSON.stringify(jsonLd) : "";
  useEffect(() => {
    const full = title ? `${title} · ${site.name}` : `${site.name} · Advogados em Londrina/PR`;
    const desc = description ?? site.description;
    const url = site.url + pathname;
    const img = `${site.url}/${image ?? "assets/cover-navy.jpg"}`;
    document.title = full;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", full);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", img);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
    let script = document.getElementById("page-jsonld");
    if (json) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld";
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = json;
    } else script?.remove();
  }, [title, description, image, type, noindex, json, pathname]);
}

export const useDocumentTitle = (title?: string) => useSeo({ title });
