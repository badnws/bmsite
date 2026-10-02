export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "revisao-de-juros-em-contratos-bancarios",
    title: "Revisão de juros em contratos bancários: quando ela é possível",
    excerpt: "Taxas acima de 12% ao ano não são, por si sós, abusivas — mas, em certos casos, a revisão judicial é cabível. Entenda os critérios adotados pelos tribunais.",
    category: "Direito Bancário",
    date: "2026-09-15",
    readingTime: 6,
    author: "Anthony Mortari",
    content: [
      { type: "p", text: "Contratos de empréstimo, financiamento e cartão de crédito concentram boa parte das dúvidas de consumidores e empresas. A pergunta mais frequente é direta: os juros cobrados podem ser revistos?" },
      { type: "h2", text: "O que dizem os tribunais" },
      { type: "p", text: "O Superior Tribunal de Justiça consolidou que o Código de Defesa do Consumidor se aplica às instituições financeiras (Súmula 297). Ao mesmo tempo, firmou o entendimento de que a estipulação de juros remuneratórios superiores a 12% ao ano, por si só, não indica abusividade (Súmula 382)." },
      { type: "p", text: "Na prática, a abusividade é aferida caso a caso, normalmente pela comparação entre a taxa contratada e a taxa média de mercado divulgada pelo Banco Central para a mesma modalidade e período." },
      { type: "h2", text: "Pontos que merecem análise" },
      { type: "ul", items: ["Taxa efetiva contratada versus taxa média do Banco Central", "Capitalização de juros e sua previsão expressa no contrato", "Tarifas e seguros embutidos no valor financiado", "Encargos cobrados no período de inadimplência"] },
      { type: "quote", text: "A revisão não depende apenas do valor da taxa, mas da demonstração concreta de que ela destoa do mercado e onera excessivamente o contratante." },
      { type: "p", text: "Antes de qualquer medida judicial, recomenda-se reunir o contrato, os extratos e os comprovantes de pagamento para uma análise técnica, que indicará a viabilidade e os riscos da revisão." },
    ],
  },
  {
    slug: "cobranca-de-cotas-condominiais",
    title: "Inadimplência condominial: caminhos para uma cobrança eficiente",
    excerpt: "Desde o CPC de 2015, a cota condominial é título executivo extrajudicial. Veja como estruturar a cobrança com segurança e celeridade.",
    category: "Direito Condominial",
    date: "2026-08-28",
    readingTime: 5,
    author: "Matheus Barbosa",
    content: [
      { type: "p", text: "A inadimplência afeta diretamente o caixa do condomínio e, por consequência, todos os condôminos adimplentes. Uma política de cobrança clara é parte essencial de uma boa gestão." },
      { type: "h2", text: "A cota como título executivo" },
      { type: "p", text: "O Código de Processo Civil de 2015 reconheceu como título executivo extrajudicial o crédito referente às contribuições ordinárias ou extraordinárias de condomínio, desde que previstas na convenção ou aprovadas em assembleia (art. 784, X). Isso permite a execução direta, sem uma ação de conhecimento prévia." },
      { type: "h2", text: "Boas práticas" },
      { type: "ul", items: ["Prever na convenção os encargos de atraso — a multa é limitada a 2% (Código Civil, art. 1.336, § 1º)", "Manter atas e planilhas de rateio organizadas", "Realizar contato e notificação extrajudicial antes da via judicial", "Adotar critérios uniformes para propostas de acordo"] },
      { type: "p", text: "A escolha entre negociação e execução deve considerar o valor do débito, o histórico do condômino e o custo do processo. Uma assessoria contínua reduz o tempo de recuperação do crédito." },
    ],
  },
  {
    slug: "due-diligence-imobiliaria",
    title: "Due diligence imobiliária: o que verificar antes de comprar um imóvel",
    excerpt: "Matrícula, certidões e situação fiscal: a análise prévia é a forma mais eficaz de evitar litígios na compra de imóveis.",
    category: "Direito Imobiliário",
    date: "2026-08-05",
    readingTime: 7,
    author: "Matheus Barbosa",
    content: [
      { type: "p", text: "A compra de um imóvel costuma ser uma das decisões financeiras mais relevantes de uma família ou empresa. A due diligence — auditoria jurídica prévia — reduz riscos que, depois de lavrada a escritura, podem ser difíceis de reverter." },
      { type: "h2", text: "Documentos do imóvel" },
      { type: "ul", items: ["Certidão de matrícula atualizada, com ônus reais e ações reipersecutórias", "Situação de débitos de IPTU e taxas", "Regularidade da construção e averbações", "Declaração de quitação condominial, quando aplicável"] },
      { type: "h2", text: "Documentos dos vendedores" },
      { type: "p", text: "Certidões cíveis, fiscais e trabalhistas dos vendedores ajudam a identificar dívidas que possam comprometer o negócio, como em hipóteses de fraude contra credores ou fraude à execução." },
      { type: "quote", text: "A análise documental é sempre mais econômica do que um litígio sobre a titularidade do imóvel." },
      { type: "p", text: "O resultado da due diligence orienta a redação do contrato: cláusulas de garantia, condições de pagamento e responsabilidades de cada parte." },
    ],
  },
  {
    slug: "nova-lei-de-licitacoes-fornecedores",
    title: "Nova Lei de Licitações: pontos de atenção para fornecedores",
    excerpt: "Com a Lei n.º 14.133/2021 plenamente em vigor, empresas que contratam com o poder público precisam revisar procedimentos e documentos.",
    category: "Direito Público",
    date: "2026-07-18",
    readingTime: 6,
    author: "Matheus Barbosa",
    content: [
      { type: "p", text: "A Lei n.º 14.133/2021 substituiu o regime das Leis n.º 8.666/1993 e n.º 10.520/2002 e de parte da Lei n.º 12.462/2011, trazendo novas regras para todo o ciclo da contratação pública." },
      { type: "h2", text: "Mudanças relevantes" },
      { type: "ul", items: ["Criação do diálogo competitivo e extinção da tomada de preços e do convite", "Fase de habilitação, em regra, posterior ao julgamento das propostas", "Portal Nacional de Contratações Públicas (PNCP) como meio central de divulgação", "Matriz de riscos e exigência de programa de integridade em contratações de grande vulto"] },
      { type: "h2", text: "Recomendações" },
      { type: "p", text: "Fornecedores devem manter a documentação de habilitação atualizada, acompanhar os editais no PNCP e avaliar com atenção as cláusulas de reequilíbrio econômico-financeiro e de sanções." },
      { type: "p", text: "Diante de irregularidades no edital ou no julgamento, a impugnação e o recurso administrativo devem ser apresentados nos prazos legais, com fundamentação técnica." },
    ],
  },
];

export const categories = Array.from(new Set(posts.map((p) => p.category)));
