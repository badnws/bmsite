import * as React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: "!rounded-sm !border-0 !border-b-2 !border-gold-500 !bg-navy-950 !text-silver !shadow-lift !font-sans",
          title: "!text-[13px] !font-semibold",
          description: "!text-[13px] !text-navy-200",
          icon: "!text-gold-300",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
export { toast } from "sonner";
