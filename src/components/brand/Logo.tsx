import { asset, cn } from "@/lib/utils";

const files = { primary: "logo-primary.png", reverse: "logo-reverse.png", mark: "logo-mark.png" } as const;

type LogoProps = { variant?: keyof typeof files; className?: string };

/** Official logo files only — never retype the wordmark. */
export function Logo({ variant = "primary", className }: LogoProps) {
  return <img src={asset("assets/" + files[variant])} alt="Barbosa & Mortari Advogados" className={cn("block h-10 w-auto", className)} />;
}
