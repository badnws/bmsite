import { posts, type Post } from "@/data/posts";

/**
 * Os artigos vivem em src/data/posts.ts e são lidos de forma síncrona, então a
 * pré-renderização já entrega o conteúdo completo no HTML. O formato { data, isLoading }
 * foi mantido para facilitar uma futura troca por CMS/API.
 */
function listPosts(category?: string): Post[] {
  const list = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return category ? list.filter((p) => p.category === category) : list;
}

export function usePosts(category?: string) {
  return { data: listPosts(category), isLoading: false as const };
}

export function usePost(slug: string) {
  return { data: posts.find((p) => p.slug === slug) ?? null, isLoading: false as const };
}
