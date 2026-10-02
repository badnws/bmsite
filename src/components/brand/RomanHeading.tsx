import { cn } from "@/lib/utils";

const roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** "– I –" topic numeral from the firm's petition template. */
export function RomanHeading({ n, title, inverse, className }: { n: number; title: string; inverse?: boolean; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className={cn("font-serif text-sm font-bold", inverse ? "text-gold-300" : "text-gold-800")}>– {roman[n] ?? n} –</span>
      <span className={cn("font-display text-2xl font-medium", inverse ? "text-silver" : "text-navy-950")}>{title}</span>
    </div>
  );
}
