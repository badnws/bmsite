import { useQuery } from "@tanstack/react-query";
import { posts, type Post } from "@/data/posts";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Swap these fetchers for a CMS / API call; the hooks' shape stays the same. */
async function fetchPosts(category?: string): Promise<Post[]> {
  await wait(250);
  const list = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return category ? list.filter((p) => p.category === category) : list;
}

async function fetchPost(slug: string): Promise<Post | null> {
  await wait(200);
  return posts.find((p) => p.slug === slug) ?? null;
}

export function usePosts(category?: string) {
  return useQuery({ queryKey: ["posts", category ?? "all"], queryFn: () => fetchPosts(category) });
}

export function usePost(slug: string) {
  return useQuery({ queryKey: ["post", slug], queryFn: () => fetchPost(slug), enabled: !!slug });
}
