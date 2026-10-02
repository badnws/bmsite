import { Banknote, Briefcase, Building2, FileText, Handshake, Home, Landmark, Scale, ShieldCheck, type LucideIcon } from "lucide-react";

export type Area = { slug: string; title: string; icon: LucideIcon; summary: string; topics: string[] };

export const areas: Area[] = [
  {
    slug: "direito-publico",
    title: "Direito Público",
    icon: Landmark,
    summary: "Atuação junto a entes e órgãos públicos, licitações, contratos administrativos e responsabilidade do Estado, com especialização em terceiro setor — associações e cooperativas.",
    topics: ["Licitações e contratos (Lei n.º 14.133/2021)", "Improbidade administrativa", "Responsabilidade civil do Estado", "Servidores públicos", "Saúde pública (SUS)", "Terceiro setor: associações e cooperativas"],
  },
  {
    slug: "direito-bancario",
    title: "Direito Bancário",
    icon: Banknote,
    summary: "Revisão de contratos, defesa em execuções e negociação de passivos com instituições financeiras.",
    topics: ["Revisão de contratos e encargos", "Defesa em execuções e buscas e apreensões", "Superendividamento", "Fraudes e golpes bancários"],
  },
  {
    slug: "direito-administrativo",
    title: "Direito Administrativo",
    icon: FileText,
    summary: "Processos administrativos, defesas perante órgãos e conselhos e regularização junto à Administração.",
    topics: ["Processos administrativos disciplinares", "Autos de infração e multas", "Licenças e autorizações", "Mandado de segurança"],
  },
  {
    slug: "direito-civil",
    title: "Direito Civil",
    icon: Scale,
    summary: "Direito de família e sucessões, responsabilidade civil e obrigações, com atuação consultiva e contenciosa.",
    topics: ["Família: divórcio, guarda e alimentos", "União estável e regime de bens", "Inventários, partilhas e testamentos", "Indenizações", "Ações de cobrança", "Relações de consumo"],
  },
  {
    slug: "direito-contratual",
    title: "Direito Contratual",
    icon: Handshake,
    summary: "Elaboração, revisão e negociação de contratos com foco na prevenção de litígios.",
    topics: ["Contratos empresariais", "Prestação de serviços", "Distratos e rescisões", "Notificações extrajudiciais"],
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário",
    icon: Building2,
    summary: "Segurança jurídica na compra, venda, locação e regularização de imóveis.",
    topics: ["Due diligence imobiliária", "Contratos de compra e venda", "Locações", "Usucapião e regularização"],
  },
  {
    slug: "direito-condominial",
    title: "Direito Condominial",
    icon: Home,
    summary: "Assessoria a condomínios, síndicos e condôminos, da convenção à cobrança.",
    topics: ["Cobrança de cotas condominiais", "Convenção e regimento interno", "Assembleias", "Conflitos entre condôminos"],
  },
  {
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    icon: ShieldCheck,
    summary: "Concessão, revisão e restabelecimento de benefícios perante o INSS e os regimes próprios dos servidores.",
    topics: ["Aposentadorias", "Benefícios por incapacidade", "BPC/LOAS", "Revisão de benefícios"],
  },
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    icon: Briefcase,
    summary: "Atuação em reclamações trabalhistas e assessoria preventiva nas relações de trabalho.",
    topics: ["Reclamações trabalhistas", "Verbas rescisórias", "Horas extras e adicionais", "Acordos e rescisões"],
  },
];
