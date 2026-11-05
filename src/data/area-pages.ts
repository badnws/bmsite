/**
 * Páginas próprias de áreas de atuação (/areas-de-atuacao/<slug>).
 * Só ganham página as áreas com conteúdo aqui; as demais continuam descritas em /areas-de-atuacao.
 * Texto informativo (Provimento 205/2021): sem promessa de resultado e sem captação.
 * Revisar sempre que a legislação ou a jurisprudência citada mudar (campo `reviewed`).
 */
export type AreaSection = { heading: string; paragraphs?: string[]; list?: string[]; ordered?: boolean; after?: string[] };
export type AreaPage = {
  slug: string;
  /** Título para o Google (sem o nome do escritório). */
  seoTitle: string;
  description: string;
  h1: string;
  intro: string[];
  sections: AreaSection[];
  faq: { q: string; a: string }[];
  /** Categoria de artigos do blog relacionada, se houver. */
  postCategory?: string;
  /** Data da última revisão do conteúdo (AAAA-MM-DD). */
  reviewed: string;
};

export const areaPages: AreaPage[] = [
  {
    slug: "golpe-do-pix-e-fraudes-bancarias",
    seoTitle: "Golpe do PIX e fraudes bancárias: advogado em Londrina/PR",
    description:
      "Golpe do PIX, falsa central e fraude em cartões: quando o banco responde, o que fazer logo após o golpe e como funciona a ação. Advogados em Londrina/PR.",
    h1: "Golpe do PIX e fraudes bancárias",
    intro: [
      "O escritório atua em ações contra bancos e instituições de pagamento por golpe do PIX, falsa central de atendimento, falso gerente, fraude e clonagem de cartões, empréstimos não contratados e transações que fogem do perfil do cliente.",
      "O atendimento é presencial em Londrina e on-line para clientes de outras cidades.",
    ],
    sections: [
      {
        heading: "Quando o banco responde pela fraude",
        paragraphs: [
          "Pela Súmula 479 do Superior Tribunal de Justiça, bancos e instituições de pagamento respondem pelos danos causados por fraudes de terceiros praticadas no âmbito das operações bancárias, independentemente de culpa. A fraude é tratada como risco da própria atividade.",
          "Isso não significa que todo golpe gere direito à devolução. O STJ tem decidido que a responsabilidade depende das circunstâncias do caso, e alguns pontos costumam pesar na análise:",
        ],
        list: [
          "se as transações destoavam do perfil do cliente, pelo valor, pelo horário, pela sequência de operações ou pelo destinatário;",
          "se o banco deixou de acionar os mecanismos de segurança que a regulamentação do Banco Central exige diante de operações atípicas;",
          "se houve falha nos canais do próprio banco, como troca de aparelho, aumento de limite ou acesso remoto sem verificação adequada;",
          "se a conta que recebeu o dinheiro foi aberta ou mantida sem a verificação devida;",
          "como a vítima foi abordada e o que ela própria fez durante o golpe.",
        ],
        after: [
          "Quando a própria vítima faz as transferências, por iniciativa sua e sem qualquer sinal de anormalidade que o banco pudesse perceber, há decisões que afastam a responsabilidade da instituição. Por isso, cada caso precisa ser analisado com os extratos e as provas em mãos.",
        ],
      },
      {
        heading: "O que fazer logo após o golpe",
        ordered: true,
        list: [
          "Conteste a transação no aplicativo do banco, na função de devolução por fraude. Isso aciona o Mecanismo Especial de Devolução (MED) do PIX, que pode ser pedido em até 80 dias da transferência. Quanto antes, maior a chance de ainda haver saldo na conta que recebeu.",
          "Bloqueie cartões e acessos, troque senhas e, se o golpe envolveu o seu celular, peça o bloqueio da linha à operadora.",
          "Registre boletim de ocorrência, presencialmente ou pela delegacia on-line.",
          "Guarde as provas: comprovantes, prints das conversas, números de telefone e perfis usados pelo golpista, e os protocolos de atendimento do banco.",
          "Registre reclamação na ouvidoria do banco e, se não houver solução, no Banco Central e no consumidor.gov.br.",
        ],
        after: [
          "Desde fevereiro de 2026, o MED 2.0 permite rastrear o dinheiro mesmo depois de repassado para outras contas, o que aumenta a chance de recuperação pela via administrativa. Se a devolução não acontecer, ainda é possível buscar o ressarcimento na Justiça.",
        ],
      },
      {
        heading: "Como funciona a ação",
        paragraphs: [
          "A análise começa pelos documentos: extratos dos meses anteriores ao golpe (que mostram o perfil normal de uso da conta), comprovantes das transferências, conversas, boletim de ocorrência e a resposta do banco à contestação.",
          "Conforme o caso, a ação pode pedir a devolução dos valores e indenização por dano moral, contra o banco de origem, contra a instituição que recebeu o dinheiro ou contra ambos. Por se tratar de relação de consumo, é possível pedir a inversão do ônus da prova, para que o banco demonstre que a operação foi regular.",
          "Causas de até 40 salários mínimos podem tramitar no Juizado Especial Cível, sem custas no primeiro grau. Acima disso, ou quando há necessidade de prova mais complexa, a ação segue pela Justiça Comum.",
        ],
      },
      {
        heading: "Outras fraudes e cobranças",
        list: [
          "falsa central de atendimento e falso gerente;",
          "fraude e clonagem de cartões e compras não reconhecidas;",
          "empréstimos e consignados não contratados;",
          "cobrança e negativação indevidas;",
          "revisão de contratos e encargos bancários;",
          "superendividamento, com pedido de repactuação das dívidas (Lei n.º 14.181/2021).",
        ],
      },
    ],
    faq: [
      {
        q: "O banco é obrigado a devolver o dinheiro do golpe do PIX?",
        a: "Não automaticamente. O banco responde por fraudes ligadas às suas operações (Súmula 479 do STJ), mas os tribunais examinam o caso concreto: se as transações fugiam do perfil do cliente, se o banco falhou em seus mecanismos de segurança e como o golpe aconteceu.",
      },
      {
        q: "Qual o prazo para contestar o PIX no banco?",
        a: "O pedido pelo Mecanismo Especial de Devolução (MED) pode ser feito no aplicativo do banco em até 80 dias da transferência. O ideal é contestar no mesmo dia, enquanto ainda pode haver saldo na conta que recebeu o dinheiro.",
      },
      {
        q: "Fiz a transferência eu mesmo, enganado pelo golpista. Ainda posso ter direito?",
        a: "Depende. Se o banco deixou passar operações claramente fora do seu perfil ou falhou na segurança, há decisões que reconhecem a responsabilidade mesmo com a participação da vítima. Sem essas falhas, a tendência é afastar a responsabilidade do banco.",
      },
      {
        q: "Preciso fazer boletim de ocorrência?",
        a: "É recomendável. O boletim registra a data e a dinâmica do golpe, pode ser pedido pelo banco na contestação e serve de prova numa eventual ação.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Em regra, cinco anos, contados de quando a vítima soube do dano e de quem o causou (art. 27 do Código de Defesa do Consumidor). Mesmo assim, agir logo ajuda a preservar provas e a recuperar valores pelo MED.",
      },
      {
        q: "O escritório atende vítimas de outras cidades?",
        a: "Sim. O atendimento é on-line para clientes de fora de Londrina.",
      },
    ],
    postCategory: "Direito Bancário",
    reviewed: "2026-11-05",
  },
  {
    slug: "precatorios-e-rpv",
    seoTitle: "Venda de precatórios e RPVs: assessoria jurídica em Londrina/PR",
    description:
      "Vai vender ou comprar um precatório? Análise do crédito, propostas e deságio, contrato de cessão e comunicação ao tribunal. Advogados em Londrina/PR.",
    h1: "Precatórios e RPVs",
    intro: [
      "O escritório presta assessoria jurídica na cessão de precatórios e RPVs: para o credor que pensa em vender o crédito e quer entender o que está assinando, e para quem compra e precisa verificar se o crédito existe, está livre e pode ser transferido.",
    ],
    sections: [
      {
        heading: "O que são precatório e RPV",
        paragraphs: [
          "Quando o poder público (União, estado, município, autarquia) perde uma ação e precisa pagar, o pagamento é feito por requisição. Valores menores viram RPV, a requisição de pequeno valor, paga em prazo curto. Na esfera federal, o limite é de 60 salários mínimos e o prazo, de 60 dias após a requisição. Estados e municípios fixam os próprios limites.",
          "Acima desse limite, o crédito vira precatório e entra numa fila de pagamento, que depende do orçamento e da situação financeira de cada ente devedor.",
        ],
      },
      {
        heading: "O que mudou com a Emenda Constitucional 136/2025",
        paragraphs: [
          "A EC 136, promulgada em setembro de 2025, mudou o regime de pagamento. Os créditos não tributários passaram a ser corrigidos pelo IPCA mais juros de 2% ao ano, no lugar da Selic. Para estados e municípios com pagamentos em atraso, deixou de existir uma data final para quitar o estoque, e o pagamento anual passou a ter limites permanentes ligados à receita de cada ente.",
          "Na prática, em entes mais endividados os prazos ficaram mais longos e menos previsíveis. É por isso que mais credores têm considerado vender o crédito, e também por isso a análise antes da venda ficou mais importante.",
        ],
      },
      {
        heading: "Antes de vender: o que analisamos",
        list: [
          "a natureza do crédito (alimentar ou comum) e se há direito a preferência por idade, doença grave ou deficiência;",
          "o ente devedor, sua situação de pagamento e a posição do crédito na fila;",
          "o valor atualizado e os descontos que incidirão, como imposto de renda, contribuição previdenciária e honorários;",
          "as propostas recebidas, comparadas lado a lado, com o deságio explicado em reais e em prazo;",
          "o contrato ou a escritura de cessão;",
          "a comunicação da cessão ao tribunal e ao ente devedor.",
        ],
        after: [
          "A Constituição permite ceder o precatório sem concordância do devedor, mas a cessão só produz efeitos depois de comunicada ao tribunal de origem e ao ente devedor (art. 100, §§ 13 e 14). As preferências do credor original não passam para quem compra.",
        ],
      },
      {
        heading: "Para quem compra",
        paragraphs: [
          "A due diligence verifica a titularidade, a existência de penhoras, cessões anteriores ou habilitações de terceiros, os honorários destacados, a situação do processo de origem e, quando o credor é falecido, a regularidade da sucessão.",
        ],
      },
      {
        heading: "Precatório de pessoa falecida",
        paragraphs: [
          "Quando o titular morre antes de receber, os herdeiros precisam se habilitar no processo. Conforme o caso, isso passa por inventário, judicial ou em cartório, ou por pedido de alvará. A venda do crédito pelos herdeiros também é possível, desde que a sucessão esteja regularizada.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso vender meu precatório antes de receber?",
        a: "Sim. A Constituição permite ceder o precatório a terceiros sem concordância do devedor (art. 100, § 13). A cessão só produz efeitos depois de comunicada ao tribunal de origem e ao ente devedor (art. 100, § 14).",
      },
      {
        q: "Se eu vender, o comprador fica com a minha preferência por idade ou doença?",
        a: "Não. As preferências por idade, doença grave ou deficiência e a natureza de RPV não passam ao cessionário.",
      },
      {
        q: "O que é deságio?",
        a: "É o desconto que o comprador aplica sobre o valor atualizado do crédito, em troca do pagamento imediato. Ele varia conforme o ente devedor, a posição na fila e o prazo esperado de pagamento, e por isso vale comparar propostas.",
      },
      {
        q: "Precatório do INSS pode ser vendido?",
        a: "Créditos de natureza previdenciária têm restrições próprias à cessão, e o tema está em discussão nos tribunais superiores. Cada caso precisa ser analisado antes de qualquer negociação.",
      },
      {
        q: "Quanto tempo demora para receber um precatório?",
        a: "Depende do ente devedor. Na União, o pagamento costuma seguir o orçamento do ano seguinte à inscrição. Em estados e municípios com atraso, os prazos variam muito e, depois da EC 136/2025, ficaram menos previsíveis.",
      },
    ],
    reviewed: "2026-11-05",
  },
  {
    slug: "servidor-publico",
    seoTitle: "Advogado de servidor público em Londrina: RPPS e ParanaPrevidência",
    description:
      "Aposentadoria no RPPS e na ParanaPrevidência, abono de permanência, pensão, isenção de IR e de contribuição por doença grave e direitos funcionais. Londrina/PR.",
    h1: "Servidor público",
    intro: [
      "O escritório atua em direitos previdenciários e funcionais de servidores estaduais e municipais, ativos e aposentados, e de seus pensionistas, no requerimento administrativo e na Justiça.",
    ],
    sections: [
      {
        heading: "Aposentadoria e planejamento no regime próprio",
        paragraphs: [
          "As regras de aposentadoria do servidor dependem da data de ingresso no serviço público, do ente a que ele está vinculado e das reformas da previdência: a federal (EC 103/2019), a do Paraná, que vale para os servidores estaduais vinculados à ParanaPrevidência, e as reformas de cada município.",
          "O planejamento compara as regras de transição aplicáveis, confere o tempo de contribuição e verifica se é possível averbar tempo trabalhado no INSS ou em outro regime, por meio da certidão de tempo de contribuição.",
        ],
      },
      {
        heading: "Abono de permanência",
        paragraphs: [
          "O servidor que já cumpriu os requisitos para se aposentar voluntariamente e decide continuar trabalhando pode receber o abono de permanência, em valor equivalente à sua contribuição previdenciária. Quando o abono não é pago desde a data em que os requisitos foram cumpridos, é possível pedir os valores atrasados.",
        ],
      },
      {
        heading: "Pensão por morte",
        paragraphs: [
          "A pensão no regime próprio segue regras de cálculo, cotas e dependentes que mudaram com as reformas. O pedido exige documentação específica e, em caso de indeferimento ou cálculo incorreto, cabe revisão administrativa ou judicial.",
        ],
      },
      {
        heading: "Isenção de imposto de renda e de contribuição por doença grave",
        paragraphs: [
          "Aposentados e pensionistas com as doenças graves listadas na Lei n.º 7.713/1988 (art. 6º, XIV) têm direito à isenção do imposto de renda sobre os proventos. Pela Súmula 598 do STJ, a doença pode ser comprovada por outros meios além do laudo oficial. Também é possível pedir a restituição do imposto descontado indevidamente, observado o prazo de cinco anos.",
          "A isenção da contribuição previdenciária é diferente e mudou com as reformas. No Paraná, o direito depende, entre outros pontos, das datas da aposentadoria e do diagnóstico em relação à reforma estadual de 2019, e há decisões divergentes no Tribunal de Justiça. Por isso, a análise é feita caso a caso.",
        ],
      },
      {
        heading: "Direitos funcionais",
        list: [
          "gratificações, adicionais e progressões;",
          "remoção e lotação;",
          "licenças e afastamentos;",
          "defesa em processo administrativo disciplinar.",
        ],
      },
    ],
    faq: [
      {
        q: "Sou servidor aposentado com doença grave. Tenho direito à isenção do imposto de renda?",
        a: "Se a doença estiver na lista da Lei n.º 7.713/1988, sim, sobre os proventos de aposentadoria ou pensão. A doença pode ser comprovada por laudos médicos, não só pelo laudo oficial (Súmula 598 do STJ).",
      },
      {
        q: "E a isenção da contribuição previdenciária?",
        a: "Depende do regime e das datas. No Paraná, a reforma estadual de 2019 mudou a regra, e o direito costuma depender de quando ocorreram a aposentadoria e o diagnóstico. É preciso analisar a documentação.",
      },
      {
        q: "O tempo trabalhado com carteira assinada conta para a aposentadoria no regime próprio?",
        a: "Sim. Esse tempo pode ser averbado no regime próprio com a certidão de tempo de contribuição emitida pelo INSS.",
      },
      {
        q: "O que é abono de permanência?",
        a: "É o valor pago ao servidor que já cumpriu os requisitos para se aposentar e continua trabalhando, equivalente à sua contribuição previdenciária.",
      },
      {
        q: "O escritório atende servidores de outras cidades?",
        a: "Sim, de forma on-line, inclusive servidores estaduais lotados fora de Londrina.",
      },
    ],
    reviewed: "2026-11-05",
  },
];

export const areaPageBySlug = (slug: string) => areaPages.find((p) => p.slug === slug);
