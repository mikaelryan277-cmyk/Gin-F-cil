import { PricingPlan, Testimonial, FaqItem, RecipePreview, StatCounter } from '../types';

export const HERO_COPY = {
  headline: "Com o Método Cubano, Aprenda a Fazer Drink de Bar em Casa Este Fim de Semana",
  subheadline: "Guia direto ao ponto com 30 receitas, dicas de apresentação e o que comprar, pronto para usar no próximo rolê com a galera.",
  mainCtaText: "Quero Virar o Bartender da Turma",
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
    number: "30",
    label: "Receitas Testadas",
    description: "Com ingredientes fáceis de achar em qualquer supermercado",
    iconName: "GlassWater"
  },
  {
    id: '3',
    number: "4.9★",
    label: "Avaliação Média",
    description: "Baseado em mais de 650 avaliações de leitores",
    iconName: "Star"
  },
  {
    id: '4',
    number: "100%",
    label: "Aprovação no Gelado",
    description: "Receitas ajustadas para o clima tropical brasileiro",
    iconName: "Flame"
  }
];

export const PAIN_AVATAR = {
  title: "A Relação Complicada do Anfitrião do Fim de Semana",
  subtitle: "Você chama os amigos para sua casa, anima o ambiente e na hora do drink o pesadelo começa:",
  points: [
    {
      title: "Sempre a mesma cerveja morna ou combo sem graça",
      desc: "Você quer oferecer algo refinado, mas acaba caindo na cerveja no balde com gelo derretido."
    },
    {
      title: "Medo de errar a mão na dosagem",
      desc: "Fazer um drink doce demais que ninguém consegue beber, ou tão forte que parece álcool puro queimando a garganta."
    },
    {
      title: "Gastou fortuna com bebida e não rendeu nada",
      desc: "Comprou xaropes caros ou garrafas importadas aleatórias que estão acumulando poeira no armário da cozinha."
    },
    {
      title: "Dificuldade em causar aquele impacto visual",
      desc: "Seus drinks servidos em copo comum, sem decoração, sem aroma e sem aquela espuma perfeita do bar."
    }
  ]
};

export const BEFORE_AFTER = {
  title: "O Efeito Bartender Na Prática",
  subtitle: "Veja como sua postura e seus eventos mudam drasticamente depois de aplicar o Método Cubano:",
  before: {
    badge: "O Anfitrião Comum",
    points: [
      "Pergunta se alguém trouxe cerveja ou gelo",
      "Serve drink em copo de plástico ou requeijão",
      "Receita no olho: ou fica puro álcool ou xarope enjoativo",
      "Passa a festa toda no balcão tentando acertar a mistura",
      "Amigos só bebem por falta de opção"
    ]
  },
  after: {
    badge: "O Anfitrião Efeito Bartender",
    points: [
      "Recebe a galera com um Welcome Drink autoral com aroma fresco de hortelã e flor de sal",
      "Usa copos adequados, gelo cristalino e guarnições tostadas sensacionais",
      "Proporções exatas de coquetelaria profissional sem complicação",
      "Prepara 4 drinks em 3 minutos usando técnicas práticas",
      "Torna-se a referência da turma e o destino oficial dos fins de semana"
    ]
  }
};

export const WHAT_YOU_GET = [
  {
    icon: "BookOpen",
    title: "30 Receitas Incríveis de Coquetelaria",
    description: "De clássicos eternos de Havana como o Mojito Real até variações autorais de Gin Tônica, Negroni de Mogno e Tropical Spritz.",
    tag: "Sensorial e Prático"
  },
  {
    icon: "Layers",
    title: "Guia Visual de Copos e Tipos de Gelo",
    description: "Aprenda qual copo valoriza cada destilado e como fazer gelo transparente que não dilui nem estraga seu drink.",
    tag: "Técnica Profissional"
  },
  {
    icon: "Sparkles",
    title: "Truques de Apresentação e Garnish",
    description: "Técnicas de aromatização com óleos essenciais da casca do limão, desidratação de frutas em minutos e bordas decoradas.",
    tag: "Efeito Visual"
  },
  {
    icon: "ShoppingCart",
    title: "Lista de Compras Inteligente e Econômica",
    description: "Descubra quais bebidas de supermercado custam R$30 a R$60 e performam como marcas de R$200. Economize centenas de reais.",
    tag: "Economia Real"
  }
];

export const RECIPE_PREVIEWS: RecipePreview[] = [
  {
    id: '1',
    title: "Gin Tônica Havaneira de Pimenta Rosa e Alecrim",
    tag: "Refrescante e Aromático",
    flavorProfile: 'Refrescante',
    prepTime: "2 minutos",
    difficulty: "Fácil",
    description: "Uma reinterpretação autoral do clássico Gin Tônica com notas de alecrim maçaricado, zeste de toranja fresca e pimenta rosa estalando no gelo.",
    glassType: "Taça Bojosa (Copa)",
    keyIngredients: ["50ml Gin Artesanal", "150ml Água Tônica Premium", "Alecrim fresco", "Pimenta rosa ligeiramente esmagada"],
    bartenderTip: "Toste levemente a ponta do ramo de alecrim com um isqueiro antes de finalizar para soltar os óleos essenciais na taça!"
  },
  {
    id: '2',
    title: "Mojito Cubano do Bodeguita Original",
    tag: "Clássico Inconfundível",
    flavorProfile: 'Tropical',
    prepTime: "3 minutos",
    difficulty: "Fácil",
    description: "O autêntico Mojito das noites quentes de Havana, balanceado com rum dourado e hortelã fresca sem macerar em excesso para não amargar.",
    glassType: "Copo Alto (Highball)",
    keyIngredients: ["60ml Rum Dourado/Claro", "30ml Suco de Limão Tahiti", "20ml Xarope Simples", "Folhas de Hortelã", "Splash de Água com Gás"],
    bartenderTip: "Dê um tapa suave nas folhas de hortelã na palma da mão em vez de esmagar no pilão para liberar o aroma perfumado sem o amargor do caule."
  },
  {
    id: '3',
    title: "Daiquiri de Mogno e Maracujá Tostado",
    tag: "Intenso e Aveludado",
    flavorProfile: 'Intenso',
    prepTime: "4 minutos",
    difficulty: "Médio",
    description: "Coquetel batido com equilíbrio ácido e doce milimétrico, trazendo polpa de maracujá tostada na chama e acentuação de rum envelhecido.",
    glassType: "Taça Coupée / Martini",
    keyIngredients: ["50ml Rum Âmbar", "25ml Maracujá", "20ml Limão", "15ml Xarope de Baunilha"],
    bartenderTip: "Bata na coqueteleira com bastante gelo rígido por 12 segundos para criar aquela micro espuma aveludada na superfície."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: "Guia Gin Fácil",
    tagline: "Ideal para quem quer começar com o pé direito e aprender as 30 melhores receitas.",
    price: "14,90",
    originalPrice: "49,90",
    isPopular: false,
    checkoutUrl: "https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p",
    buttonText: "Quero o Guia Básico",
    features: [
      "Método 'Gin Fácil: O Efeito Bartender' (30 Receitas)",
      "Guia do Iniciante de Gelos e Copos",
      "Acesso Imediato no E-mail (Acesso Vitalício)",
      "Leitura Otimizada para Celular e Tablet",
      "Garantia Incondicional de 7 Dias"
    ]
  },
  {
    id: 'complete',
    name: "Combo Mestre Bartender",
    tagline: "O pacote completo com todos os bônus estratégicos para dominar a coquetelaria em casa.",
    price: "27,90",
    originalPrice: "97,00",
    isPopular: true,
    badgeText: "MAIS ESCOLHIDO (ECONOMIA DE 70%)",
    checkoutUrl: "https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE",
    buttonText: "Quero o Pacote Completo + Bônus",
    features: [
      "TUDO do Guia Gin Fácil (30 Receitas Completas)",
      "BÔNUS 1: Pack de Xaropes e Infusões Artesanais (Feitos em casa)",
      "BÔNUS 2: Guia de Petiscos Harmonizados (Harmonização de Bar)",
      "BÔNUS 3: Lista Secreta de Marcas de Supermercado (Custo Benefício)",
      "BÔNUS 4: Tabela Calculadora Prática de Doses por Festa",
      "Acesso Imediato + Atualizações Gratuitas",
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
    highlight: "Sábado passado fiz o Gin com Alecrim Tostado. Minha namorada e os amigos piraram!",
    comment: "Eu sempre achava que drink bom exigia curso caro ou 20 garrafas estranhas. O método ensina a usar limão, gelo direito e gin comum. Fiz sucesso absoluto no churrasco do fim de semana. R$27,90 mais bem pagos do ano.",
    date: "Há 3 dias"
  },
  {
    id: '2',
    name: "Rodrigo 'Beto' Vasconcelos",
    age: 31,
    city: "Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "A lista de marcas de supermercado me fez economizar mais de R$120 no primeiro rolê.",
    comment: "A dica das garrafas de bom custo benefício valeu o guia 10 vezes. Comprei um gin de R$45 que bate qualquer um de R$180 com o preparo certo. As fotos do guia explicam certinho o passo a passo.",
    date: "Há 5 dias"
  },
  {
    id: '3',
    name: "Thiago Oliveira",
    age: 24,
    city: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "O truque da hortelã no Mojito mudou tudo. Nunca mais faço drink doce azedo.",
    comment: "Direto ao ponto, sem enrocação. Acessei no celular e já abri na cozinha na sexta à noite. Em 5 minutos fiz 3 copos perfeitos. Galera do apartamento não queria ir embora!",
    date: "Há 1 semana"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Como e quando vou receber o material?",
    answer: "O envio é imediato e 100% digital! Assim que seu pagamento for confirmado (no Pix o acesso cai em menos de 10 segundos), você receberá um e-mail com o link direto para acesso do Guia e de todos os bônus no seu celular, tablet ou computador."
  },
  {
    id: 'faq-2',
    question: "Preciso ter coqueteleira profissional ou colher bailarina caras?",
    answer: "Não! O guia foi feito justamente para quem quer praticidade em casa. Ensinamos a usar potes com tampa hermética ou garrafas como coqueteleira improvisada e colheres normais para misturar sem perder nada da qualidade do drink."
  },
  {
    id: 'faq-3',
    question: "As bebidas e ingredientes são fáceis de achar?",
    answer: "Totalmente. Todas as receitas usam ingredientes encontrados em supermercados comuns de bairro (limão, hortelã, especiarias normais, gelo e gins ou rums de excelente custo benefício de R$35 a R$60)."
  },
  {
    id: 'faq-4',
    question: "E se eu nunca tiver feito um drink na vida?",
    answer: "O guia foi desenvolvido com linguagem extremamente simples e visual. Todas as receitas possuem a medida exata (em ml e em partes simples), o tipo de copo recomendado e a dica de ouro do bartender."
  },
  {
    id: 'faq-5',
    question: "Como funciona a Garantia de 7 Dias?",
    answer: "É risco ZERO! Se você acessar o material, ler as receitas e por qualquer motivo achar que não valeu a pena, basta nos enviar um e-mail ou mensagem no suporte dentro do prazo de 7 dias e devolvemos 100% do seu dinheiro sem perguntas."
  }
];

