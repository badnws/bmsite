export const site = {
  name: "Barbosa & Mortari Advogados",
  tagline: "Advocacia estratégica e especializada",
  /** Domínio de produção — usado em canonical, Open Graph, sitemap e llms.txt. */
  url: "https://barbosamortari.com.br",
  description:
    "Advogados em Londrina/PR, atendimento on-line em todo o Brasil: direito público, precatórios, servidor público, INSS, golpe do PIX e fraudes bancárias.",
  city: "Londrina/PR",
  address: {
    street: "Rua Pernambuco, 390, sala 407, Centro",
    cityLine: "CEP 86020-120 · Londrina, Paraná",
    maps: "https://www.google.com/maps/place/Barbosa+e+Mortari+Advogados/@-23.3113669,-51.1655619,761m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94eb45bff2d77869:0xf469d1a7902b25ff!8m2!3d-23.3113718!4d-51.162987!16s%2Fg%2F11zyzb9ddb",
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
    { to: "/#areas", label: "Áreas de atuação" },
    { to: "/#escritorio", label: "Escritório" },
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
