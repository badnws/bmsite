import type { Block } from "@/data/posts";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose prose-lg prose-brand max-w-none font-serif prose-headings:font-display prose-headings:font-medium prose-h2:text-[32px] prose-h2:leading-tight prose-p:leading-[1.75] prose-blockquote:border-l-2 prose-blockquote:font-display prose-blockquote:text-2xl prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:leading-snug prose-li:my-1.5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <p>{b.text}</p>
              </blockquote>
            );
          default:
            return <p key={i}>{b.text}</p>;
        }
      })}
    </div>
  );
}
