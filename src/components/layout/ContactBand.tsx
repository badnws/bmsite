import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function ContactBand() {
  return (
    <section className="bg-paper">
      <Reveal className="container flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div className="flex max-w-xl flex-col gap-3">
          <h2 className="font-display text-4xl font-medium leading-tight text-navy-950">Precisa de orientação jurídica?</h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">Converse diretamente com os sócios e receba uma análise técnica do seu caso.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contato">
              Fale conosco <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
