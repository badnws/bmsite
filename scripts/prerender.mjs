// Pré-renderiza cada rota em HTML estático (dist/<rota>/index.html) com title, description,
// canonical, Open Graph e JSON-LD próprios, gera dist/404.html e o sitemap.xml.
// Roda depois de `vite build` e `vite build --ssr` (ver "build" no package.json).
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, routes, siteUrl } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = await readFile(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function headFor(seo) {
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    seo.robots.startsWith("noindex") ? "" : `<link rel="canonical" href="${seo.url}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${seo.url}" />`,
    `<meta property="og:image" content="${seo.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.image}" />`,
    seo.jsonLd ? `<script type="application/ld+json" id="page-jsonld">${seo.jsonLd.replace(/</g, "\\u003c")}</script>` : "",
  ]
    .filter(Boolean)
    .map((l) => "    " + l)
    .join("\n");
}

function page(url) {
  const { html, seo } = render(url);
  const seoBlock = /<!--seo:start[\s\S]*?<!--seo:end-->/;
  if (!seoBlock.test(template)) throw new Error("index.html sem os marcadores <!--seo:start--> / <!--seo:end-->");
  return template
    .replace(seoBlock, headFor(seo).trimStart())
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

async function emit(file, contents) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents);
}

for (const { path } of routes) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  await emit(file, page(path));
  console.log("  ✓", path);
}

// Página 404 (noindex): configure o servidor para responder com ela e status 404.
await emit(join(dist, "404.html"), page("/404"));
console.log("  ✓ /404.html");

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes
    .map(({ path, lastmod }) => `<url><loc>${siteUrl}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`)
    .join("\n") +
  "\n</urlset>\n";
await emit(join(dist, "sitemap.xml"), sitemap);
console.log("  ✓ sitemap.xml (" + routes.length + " URLs)");

await rm(ssrDir, { recursive: true, force: true });
