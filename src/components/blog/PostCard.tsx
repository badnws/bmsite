import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={"/blog/" + post.slug}
      className="group flex h-full flex-col gap-4 rounded-sm border bg-card p-7 shadow-soft transition-[border-color,box-shadow,transform] duration-200 ease-brand hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-card focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-label text-gold-800">{post.category}</span>
        <ArrowUpRight className="h-4 w-4 text-navy-400 transition-colors group-hover:text-gold-700" />
      </div>
      <h3 className="font-display text-[26px] font-medium leading-[1.15] text-navy-950">{post.title}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <div className="mt-auto flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} min de leitura</span>
      </div>
    </Link>
  );
}
