import { PricingPlan, Testimonial, FaqItem, RecipePreview, StatCounter } from '../types';

export const HERO_COPY = {
  eyebrow: "MÉTODO PRÁTICO PARA ESQUENTA, ENCONTRO E ROLÊ",
  headline: "Ela Não Precisa Saber Quanto Você Gastou.",
  subheadline: "Aprenda a preparar copões de gin que parecem muito mais sofisticados usando gin de supermercado, ingredientes simples e um método de 3 passos pra mandar bem quando receber alguém ou colar no esquenta.",
  mainCtaText: "QUERO APRENDER O EFEITO BARTENDER",
  secondaryCtaText: "Ver Exemplos de Copões",
  guarantees: [
    "Copão de 500–700ml",
    "Gin de supermercado",
    "Preparo em até 2 minutos"
  ]
};

export const STATS: StatCounter[] = [
  {
    id: '1',
    number: "R$ 6 a 9",
    label: "Custo Médio por Copão",
    description: "Prepare drinks de alta presença gastando centavos.",
    iconName: "DollarSign"
  },
  {
    id: '2',
    number: "R$ 35 a 50",
    label: "Preço Médio no Bar",
    description: "A economia que você faz em um único fim de semana.",
    iconName: "BarChart3"
  }
];

export const PAIN_AVATAR = {
  title: "Você chamou alguém pra casa, quer fazer algo diferente, mas não quer torrar R$200 numa noite.",
  subtitle: "Chega de improvisar e entregar algo sem graça. O amadorismo estraga o clima na hora.",
  points: [
    {
      title: "Medo de errar na hora de servir",
      desc: "Insegurança na frente da pessoa sem saber a ordem certa dos ingredientes."
    },
    {
      title: "Bebida aguada ou forte demais",
      desc: "Errar a mão na proporção e entregar algo que ninguém consegue beber."
    },
    {
      title: "Achar que precisa comprar bebida cara",
      desc: "Achar que precisa de garrafas de R$250 para impressionar alguém."
    },
    {
      title: "Copão sem presença",
      desc: "Servir algo com cara de improviso que não valoriza a noite."
    }
  ]
};

export const BEFORE_AFTER = {
  title: "A Diferença Entre Parecer Perdido e Parecer Desenrolado",
  subtitle: "Mude a percepção de quem está com você:",
  before: {
    badge: "SEM MÉTODO",
    points: [
      "Improvisa na hora",
      "Erra a proporção",
      "Gasta mais no mercado",
      "Entrega um copão sem graça"
    ]
  },
  after: {
    badge: "COM EFEITO BARTENDER",
    points: [
      "Sabe o que comprar",
      "Sabe qual combinação usar",
      "Prepara rápido",
      "Entrega um copão visualmente muito melhor"
    ]
  }
};

export const WHAT_YOU_GET = [
  {
    icon: "BookOpen",
    title: "15+ RECEITAS PRÁTICAS DE COPÃO",
    description: "Combinações fáceis usando gin de mercado e ingredientes acessíveis.",
    tag: "Direto ao Ponto"
  },
  {
    icon: "Layers",
    title: "TABELA DE COMBINAÇÕES RÁPIDAS",
    description: "Saiba o que comprar e quais ingredientes combinam.",
    tag: "Guia Visual"
  },
  {
    icon: "Sparkles",
    title: "ROTEIRO DE PREPARO",
    description: "Aprenda a montar rapidamente sem ficar perdido na cozinha.",
    tag: "Efeito Social"
  },
  {
    icon: "ShoppingCart",
    title: "GUIA DO BAR EM CASA ECONÔMICO",
    description: "Escolha ingredientes acessíveis e monte drinks melhores sem garrafas caras.",
    tag: "Economia Real"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: "PLANO ESSENCIAL",
    tagline: "Ideal para quem quer aprender o básico rápido e parar de servir drink aguado.",
    price: "14,90",
    originalPrice: "49,90",
    isPopular: false,
    checkoutUrl: "https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p",
    buttonText: "Quero o Essencial",
    features: [
      "5 Receitas Práticas de Copão de Gin",
      "Tabela de Combinações Rápidas de Supermercado",
      "Guia de Preparo Sem Erro (Timing do Gelo e Ordem)",
      "Leitura Otimizada para Celular",
      "Acesso Imediato no E-mail",
      "Garantia Incondicional de 7 Dias"
    ]
  },
  {
    id: 'complete',
    name: "PLANO COMPLETO",
    tagline: "O arsenal completo para dominar o esquenta, o rolê e criar o clima certo em casa.",
    price: "27,90",
    originalPrice: "97,00",
    isPopular: true,
    badgeText: "MAIS ESCOLHIDO",
    checkoutUrl: "https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE",
    buttonText: "QUERO APRENDER O EFEITO BARTENDER",
    features: [
      "15+ Receitas para o Rolê, Esquenta e Encontros",
      "Guia de Copões e Combinações de Supermercado",
      "Como Preparar Rápido Sem Errar na Frente de Alguém",
      "Como Gastar Menos Usando Ingredientes Comuns de R$ 5",
      "Roteiro de Preparo para Quando Alguém Chegar",
      "Playlist de Ambientação para o Esquenta",
      "Acesso Imediato + Atualizações Gratuitas",
      "Garantia Incondicional de 7 Dias"
    ]
  }
];

export const REAL_REVIEWS = [
  "https://i.imgur.com/oOdqb7V.png",
  "https://i.imgur.com/jmKLGnc.png",
  "https://i.imgur.com/d1NXTPL.png",
  "https://i.imgur.com/DX59pb7.png",
  "https://i.imgur.com/x9mWbQb.png"
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Preciso comprar gin caro?",
    answer: "Não. O método foi feito para funcionar com marcas comuns de supermercado (R$35 a R$55)."
  },
  {
    id: 'faq-2',
    question: "Funciona com gin barato?",
    answer: "Totalmente. Ensinamos a equilibrar o sabor para que qualquer gin nacional fique suave e saboroso."
  },
  {
    id: 'faq-3',
    question: "Preciso de utensílios especiais?",
    answer: "Não. Você consegue fazer tudo com o que já tem na cozinha. Sem frescura."
  },
  {
    id: 'faq-4',
    question: "Consigo fazer no copão de plástico?",
    answer: "Sim! Essa é a estética principal do método para esquenta e rolê."
  },
  {
    id: 'faq-5',
    question: "Quanto gasto para preparar?",
    answer: "Em média entre R$6 e R$9 por copão de 500ml."
  },
  {
    id: 'faq-6',
    question: "Serve para encontro?",
    answer: "Com certeza. Mostrar que você é desenrolado e atento aos detalhes quebra o gelo na hora."
  },
  {
    id: 'faq-7',
    question: "Serve para esquenta e churrasco?",
    answer: "Perfeito. Você serve a galera rápido e gasta muito menos que comprando combos prontos."
  },
  {
    id: 'faq-8',
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato no seu e-mail após a confirmação do pagamento."
  },
  {
    id: 'faq-9',
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para testar. Se decidir que não é para você, devolvemos 100% do valor."
  }
];


