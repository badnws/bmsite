import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "@/pages/Index";
import Escritorio from "@/pages/Escritorio";
import AreasAtuacao from "@/pages/AreasAtuacao";
import AreaDetail from "@/pages/AreaDetail";
import Equipe from "@/pages/Equipe";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

/** Rotas compartilhadas entre o navegador (App) e a pré-renderização (entry-server). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="escritorio" element={<Escritorio />} />
        <Route path="areas-de-atuacao" element={<AreasAtuacao />} />
        <Route path="areas-de-atuacao/:slug" element={<AreaDetail />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
