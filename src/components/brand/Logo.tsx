import { asset, cn } from "@/lib/utils";

/** WebP no tamanho de exibição (os PNG originais ficam só para dados estruturados). */
const files = { primary: "logo-primary.webp", reverse: "logo-reverse.webp", mark: "logo-mark.webp" } as const;
const dims = { primary: [584, 88], reverse: [584, 88], mark: [506, 439] } as const;

type LogoProps = { variant?: keyof typeof files; className?: string; lazy?: boolean };

/** Official logo files only — never retype the wordmark. */
export function Logo({ variant = "primary", className, lazy }: LogoProps) {
  return <img src={asset("assets/" + files[variant])} alt="Barbosa & Mortari Advogados" loading={lazy ? "lazy" : undefined} decoding="async" width={dims[variant][0]} height={dims[variant][1]} className={cn("block h-10 w-auto max-w-none object-contain", className)} />;
}
