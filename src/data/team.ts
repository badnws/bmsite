export type Member = { name: string; initials: string; role: string; oab: string; bio: string[]; focus: string[]; photo?: string };

export const team: Member[] = [
  {
    name: "Matheus Barbosa",
    initials: "MB",
    role: "Sócio · Especialista em Direito Público",
    oab: "OAB/PR 132.397",
    photo: "assets/matheus.jpg",
    bio: [
      "Graduado em Direito pela Universidade Estadual de Londrina (UEL) e pós-graduado em Direito Público. Atuou no Poder Judiciário como assessor de juiz em Vara da Fazenda Pública e em Vara Cível.",
      "No escritório, concentra-se no direito público — improbidade administrativa, licitações, saúde pública (SUS), servidores públicos e terceiro setor (associações e cooperativas) —, além do direito condominial e imobiliário. Membro fundador do Grupo de Estudos em Processo Civil da UEL.",
    ],
    focus: ["Direito Público", "Improbidade", "Licitações", "SUS", "Servidores", "Terceiro Setor", "Condominial", "Imobiliário"],
  },
  {
    name: "Anthony Mortari",
    initials: "AM",
    role: "Sócio",
    oab: "OAB/PR 130.304",
    photo: "assets/anthony.jpg",
    bio: [
      "Bacharel em Direito pela Universidade Estadual de Londrina (UEL). Conduz a frente de direito privado do escritório, com atuação em direito civil — incluindo família e sucessões (divórcios, alimentos, inventários e partilhas) —, bancário, médico e empresarial.",
      "Presidente do Grupo de Estudos em Processo Civil da UEL.",
    ],
    focus: ["Direito Privado", "Civil", "Família", "Inventários", "Bancário", "Médico", "Empresarial"],
  },
];
