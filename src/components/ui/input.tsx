import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-sm border border-input bg-background px-3.5 text-sm text-foreground transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
