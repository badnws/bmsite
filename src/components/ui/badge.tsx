import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-6 items-center gap-1.5 whitespace-nowrap rounded-sm px-2.5 text-[10px] font-semibold uppercase tracking-wide2",
  {
    variants: {
      variant: {
        default: "bg-navy-950 text-silver",
        gold: "bg-gold-100 text-gold-900",
        secondary: "bg-secondary text-navy-700",
        outline: "border border-border text-navy-850",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
