import { useQuery } from "@tanstack/react-query";
import { posts, type Post } from "@/data/posts";

/**
 * Os artigos vivem em src/data/posts.ts, então são lidos de forma síncrona:
 * assim a pré-renderização já entrega o conteúdo completo no HTML (sem skeleton).
 * Ao trocar por um CMS/API, mantenha `initialData` com o conteúdo gerado no build.
 */
function listPosts(category?: string): Post[] {
  const list = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return category ? list.filter((p) => p.category === category) : list;
}

function findPost(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function usePosts(category?: string) {
  return useQuery({ queryKey: ["posts", category ?? "all"], queryFn: () => listPosts(category), initialData: () => listPosts(category) });
}

export function usePost(slug: string) {
  return useQuery({ queryKey: ["post", slug], queryFn: () => findPost(slug), initialData: () => findPost(slug), enabled: !!slug });
}
