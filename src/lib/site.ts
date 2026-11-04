export const site = {
  name: "Barbosa & Mortari Advogados",
  tagline: "Advocacia estratégica e especializada",
  /** Domínio de produção — usado em canonical, Open Graph, sitemap e llms.txt. */
  url: "https://barbosamortari.com.br",
  description:
    "Advogados em Londrina/PR: direito público, civil, família, bancário, imobiliário, condominial, previdenciário e trabalhista. Atendimento direto com os sócios.",
  city: "Londrina/PR",
  address: {
    street: "Rua Pernambuco, 390, Sala 407",
    cityLine: "CEP 86020-120 · Londrina, Paraná",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Pernambuco%2C+390%2C+Londrina%2C+PR%2C+86020-120",
  },
  email: "contato@barbosamortari.com.br",
  phones: [
    { label: "(43) 9 8832-3233", href: "tel:+5543988323233" },
    { label: "(43) 9 9982-2704", href: "tel:+5543999822704" },
  ],
  whatsapp: "https://wa.me/5543988323233",
  partners: [
    { name: "Matheus Barbosa", oab: "OAB/PR 132.397" },
    { name: "Anthony Mortari", oab: "OAB/PR 130.304" },
  ],
  /** Registro da sociedade (identificação exigida pelo Provimento 205/2021). */
  registration: { oab: "OAB/PR 23.014", cnpj: "65.844.801/0001-89" },
  /** Seções da página inicial — usadas no menu do cabeçalho. */
  sections: [
    { to: "/#escritorio", label: "Escritório" },
    { to: "/#areas", label: "Áreas de atuação" },
    { to: "/#socios", label: "Sócios" },
    { to: "/blog", label: "Artigos" },
    { to: "/#contato", label: "Contato" },
  ],
  /** Páginas internas — também definem as rotas pré-renderizadas. */
  nav: [
    { to: "/escritorio", label: "O Escritório" },
    { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
    { to: "/equipe", label: "Equipe" },
    { to: "/blog", label: "Blog" },
    { to: "/contato", label: "Contato" },
  ],
} as const;
