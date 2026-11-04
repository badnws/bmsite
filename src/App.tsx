import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/layout/Layout";
import Index from "@/pages/Index";
import Escritorio from "@/pages/Escritorio";
import AreasAtuacao from "@/pages/AreasAtuacao";
import Equipe from "@/pages/Equipe";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

export const createQueryClient = () =>
  new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } } });

/** Rotas compartilhadas entre o navegador (App) e a pré-renderização (entry-server). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="escritorio" element={<Escritorio />} />
        <Route path="areas-de-atuacao" element={<AreasAtuacao />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

const queryClient = createQueryClient();
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}
