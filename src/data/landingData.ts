import { PricingPlan, Testimonial, FaqItem, RecipePreview, StatCounter } from '../types';

export const HERO_COPY = {
  headline: "Não é o Gin Caro que Faz o Drink. É o Jeito de Preparar.",
  subheadline: "O método prático de 3 passos, com o Método Cubano, pra você mandar bem quando a galera cola na sua casa no fim de semana — sem gastar uma fortuna no mercado.",
  mainCtaText: "Quero Mandar Bem no Fim de Semana",
  secondaryCtaText: "Ver Receitas de Exemplo",
  guarantees: [
    "Acesso imediato no seu e-mail",
    "Garantia Incondicional de 7 Dias",
    "Funciona em qualquer celular ou computador"
  ]
};

export const STATS: StatCounter[] = [
  {
    id: '1',
    number: "2.480+",
    label: "Anfitriões Transformados",
    description: "Pessoas comuns fazendo coquetéis de alto nível em casa",
    iconName: "Users"
  },
  {
    id: '2',
    number: "15+",
    label: "Receitas Práticas",
    description: "Com ingredientes fáceis de achar em qualquer supermercado",
    iconName: "GlassWater"
  },
  {
    id: '3',
    number: "4.9★",
    label: "Avaliação Média",
    description: "Baseado em mais de 650 avaliações de alunos",
    iconName: "Star"
  },
  {
    id: '4',
    number: "100%",
    label: "Praticidade",
    description: "Método focado em quem quer servir rápido e sem sujeira",
    iconName: "Sparkles"
  }
];

export const PAIN_AVATAR = {
  title: "Fazer de qualquer jeito na frente da galera dá aquela sensação de amadorismo.",
  subtitle: "Depois de dar o sangue a semana toda no trampo, chega o sábado, você reúne o pessoal em casa e serve aquele drink morno, cheio de gelo derretido e sem graça. O problema não é o gin que você comprou — é que ninguém te ensinou o jeito certo de servir sem passar vergonha.",
  points: [
    {
      title: "Sempre a mesma cerveja morna ou combo sem graça",
      desc: "Você quer oferecer algo refinado, mas acaba caindo na cerveja no balde com gelo derretido."
    },
    {
      title: "Medo de errar a mão na dosagem",
      desc: "Fazer um drink doce demais que ninguém consegue beber, ou tão forte que parece álcool puro."
    },
    {
      title: "Gastou fortuna com bebida e não rendeu nada",
      desc: "Comprou garrafas caros que estão acumulando poeira no armário da cozinha."
    },
    {
      title: "Dificuldade em causar aquele impacto visual",
      desc: "Seus drinks servidos em copo comum, sem decoração e sem aquela presença de bar."
    }
  ]
};

export const BEFORE_AFTER = {
  title: "Você não precisa gastar metade do salário em gin importado.",
  subtitle: "Qualquer gin do supermercado fica foda se você souber o timing do gelo, a ordem certa dos ingredientes e como montar o copo rápido sem parecer perdido. É isso que muda o nível do churrasco ou do pré-balada.",
  before: {
    badge: "O Amador Perdido",
    points: [
      "Tenta seguir receita complexa do YouTube na hora",
      "Gasta R$ 200 em um gin que fica com gosto de tônica pura",
      "Deixa o drink aguado porque demora pra servir",
      "Não sabe o que combina com o quê no mercado",
      "Fica refém de servir sempre a mesma coisa sem graça"
    ]
  },
  after: {
    badge: "Os 3 Passos do Método",
    points: [
      "A Escolha Rápida: Saiba exatamente qual drink mandar na hora, sem enrolação.",
      "O Preparo Sem Erro: A sequência certa de gelo, gin e tônica que não deixa o drink fraco.",
      "O Toque Final: O detalhe simples no copo que faz a galera olhar e mandar: 'tu manja mesmo'.",
      "Domínio do Custo-Benefício: Faz drinks premium com gin de supermercado.",
      "Rapidez e Estilo: Serve a galera em segundos sem parecer perdido na cozinha."
    ]
  }
};

export const WHAT_YOU_GET = [
  {
    icon: "BookOpen",
    title: "Receitas Práticas de Casa",
    description: "Receitas práticas pra fazer com o gin que você já tem em casa, sem precisar de ingredientes exóticos.",
    tag: "Direto ao Ponto"
  },
  {
    icon: "Layers",
    title: "Tabela de Combinações Rápida",
    description: "Tabela rápida de combinações (gin + tônica + frutas do mercado) para nunca mais errar o sabor.",
    tag: "Guia Visual"
  },
  {
    icon: "Sparkles",
    title: "Drinks para Cada Ocasião",
    description: "Saiba exatamente qual drink servir no churrasco, no esquenta ou num encontro especial.",
    tag: "Efeito Social"
  },
  {
    icon: "ShoppingCart",
    title: "Bar em Casa Econômico",
    description: "Como montar seu cantinho de drinks gastando quase nada e servindo rápido e sem sujeira.",
    tag: "Economia Real"
  }
];

export const RECIPE_PREVIEWS: RecipePreview[] = [
  {
    id: '1',
    title: "Gin Tônica de Pimenta Rosa e Alecrim",
    tag: "Escolha Rápida",
    flavorProfile: 'Refrescante',
    prepTime: "2 minutos",
    difficulty: "Fácil",
    description: "O drink perfeito para começar o churrasco. Refrescante, aromático e extremamente simples de montar.",
    glassType: "Taça Bojosa (Copa)",
    keyIngredients: ["Gin do Supermercado", "Água Tônica", "Alecrim fresco", "Pimenta rosa"],
    bartenderTip: "Toste levemente a ponta do alecrim para soltar o aroma e impressionar logo de cara."
  },
  {
    id: '2',
    title: "Mojito Prático do Esquenta",
    tag: "Preparo Sem Erro",
    flavorProfile: 'Tropical',
    prepTime: "3 minutos",
    difficulty: "Fácil",
    description: "O segredo para não amargar: o tapa na hortelã. Um clássico que todo mundo ama quando bem feito.",
    glassType: "Copo Alto (Highball)",
    keyIngredients: ["Rum ou Gin", "Suco de Limão", "Açúcar ou Xarope", "Hortelã", "Água com Gás"],
    bartenderTip: "Dê um tapa nas folhas de hortelã na palma da mão para liberar o aroma sem soltar o amargor."
  },
  {
    id: '3',
    title: "Tropical Spritz Econômico",
    tag: "O Toque Final",
    flavorProfile: 'Intenso',
    prepTime: "4 minutos",
    difficulty: "Médio",
    description: "Visual de drink de R$ 50 feito com ingredientes que você compra por centavos no mercado.",
    glassType: "Taça de Vinho",
    keyIngredients: ["Gin", "Frutas Tropicais", "Espumante ou Tônica", "Gelo Rígido"],
    bartenderTip: "A ordem dos ingredientes é o que mantém o gás e o sabor vibrante até o último gole."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: "ESSENCIAL",
    tagline: "Ideal para quem quer começar a mandar bem com o básico bem feito.",
    price: "14,90",
    originalPrice: "49,90",
    isPopular: false,
    checkoutUrl: "https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p",
    buttonText: "Quero o Essencial",
    features: [
      "5 Receitas Práticas",
      "Tabela de Combinações Rápida",
      "Guia de Preparo Sem Erro",
      "Leitura Otimizada para Celular",
      "Garantia Incondicional de 7 Dias"
    ]
  },
  {
    id: 'complete',
    name: "COMPLETO",
    tagline: "O pacote mestre para dominar o rolê e ser a referência da turma.",
    price: "27,90",
    originalPrice: "97,00",
    isPopular: true,
    badgeText: "MAIS ESCOLHIDO",
    checkoutUrl: "https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE",
    buttonText: "Quero Mandar Bem no Sábado",
    features: [
      "15+ Receitas pro Rolê",
      "Playlist de Ambientação pro Esquenta",
      "Guia de Bar em Casa Gastando Pouco",
      "Bônus: Roteiro de Preparo Rápido",
      "Acesso Imediato + Atualizações",
      "Garantia Incondicional de 7 Dias"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Lucas Mendes",
    age: 27,
    city: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Sábado passado fiz o Gin com Alecrim Tostado. Meus amigos piraram!",
    comment: "Eu sempre achava que drink bom exigia curso caro. O método ensina a usar o que tem no mercado e mandar bem. R$ 27,90 mais bem pagos do ano.",
    date: "Há 3 dias"
  },
  {
    id: '2',
    name: "Rodrigo Vasconcelos",
    age: 31,
    city: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "A tabela de combinações me salvou no churrasco.",
    comment: "A dica das combinações rápidas vale ouro. Fiz sucesso absoluto no fim de semana sem parecer perdido na cozinha. Recomendo demais.",
    date: "Há 5 dias"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Preciso comprar gin caro?",
    answer: "Não! O método funciona com o gin que você já compra no supermercado. É o preparo, o timing do gelo e a ordem dos ingredientes que fazem o drink ficar bom."
  },
  {
    id: 'faq-2',
    question: "Preciso de utensílios caros?",
    answer: "Zero. Você usa o que já tem na cozinha (colheres normais, potes com tampa) e consegue um resultado foda no copo sem gastar com kit de bartender."
  },
  {
    id: 'faq-3',
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se você acessar o material e achar que não valeu a pena, devolvemos 100% do seu dinheiro sem frescura."
  }
];

