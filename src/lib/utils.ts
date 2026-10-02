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
