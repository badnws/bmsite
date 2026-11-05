import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Resolve a file in /public respecting Vite's base URL. */
export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}

const dateFmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
export function formatDate(iso: string) {
  return dateFmt.format(new Date(iso + "T12:00:00"));
}

/** "assets/matheus.jpg" -> srcset com as versões WebP de 600, 720 e 880 px geradas em public/assets. */
export function photoSrcSet(path: string) {
  const base = path.replace(/\.(jpe?g|png)$/i, "");
  return `${asset(base + "-600.webp")} 600w, ${asset(base + "-720.webp")} 720w, ${asset(base + "-880.webp")} 880w`;
}
