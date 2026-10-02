import { Link } from "react-router-dom";
import { Page } from "@/components/motion/Page";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Page title="Página não encontrada" noindex>
      <section className="container flex flex-col items-start gap-6 py-32">
        <span className="font-serif text-sm font-bold text-gold-800">– 404 –</span>
        <h1 className="font-display text-5xl font-medium text-navy-950 md:text-6xl">Página não encontrada</h1>
        <p className="text-muted-foreground">O endereço acessado não existe ou foi alterado.</p>
        <Button asChild>
          <Link to="/">Voltar ao início</Link>
        </Button>
      </section>
    </Page>
  );
}
