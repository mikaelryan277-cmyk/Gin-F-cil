import { PricingPlan, Testimonial, FaqItem, RecipePreview, StatCounter } from '../types';

export const HERO_COPY = {
  eyebrow: "MÉTODO EFEITO BARTENDER",
  headline: "Faça Copões de Gin Bonitos em Casa Gastando Pouco",
  subheadline: "Aprenda a preparar 15+ receitas de copão usando gin de supermercado, ingredientes fáceis e um passo a passo simples pra mandar bem no encontro ou no rolê.",
  mainCtaText: "QUERO APRENDER A FAZER OS COPÕES",
  secondaryCtaText: "Ver O Que Vou Aprender",
  priceHighlight: "A partir de R$ 14,90",
  guarantees: [
    "Receitas Prontas",
    "Ingredientes Baratos",
    "Preparo em 2 Minutos"
  ]
};

export const WHAT_WILL_LEARN = [
  {
    title: "1. O que comprar",
    desc: "Aprenda quais combinações de gin, frutas, tônicas e outros ingredientes funcionam sem precisar gastar muito."
  },
  {
    title: "2. Como montar",
    desc: "Aprenda a ordem dos ingredientes, proporção e uso correto do gelo para evitar drinks aguados ou fortes demais."
  },
  {
    title: "3. Como finalizar",
    desc: "Aprenda a deixar o copão bonito usando cores, frutas, canudo e uma apresentação simples de impacto."
  },
  {
    title: "4. Receitas prontas",
    desc: "Tenha receitas passo a passo para simplesmente escolher, comprar os ingredientes e preparar no ato."
  }
];

export const STATS: StatCounter[] = [
  {
    id: '1',
    number: "R$ 6 a 9",
    label: "Custo por Copão",
    description: "Prepare drinks de alta presença gastando centavos.",
    iconName: "DollarSign"
  },
  {
    id: '2',
    number: "R$ 35 a 50",
    label: "Preço no Bar",
    description: "A economia que você faz em um único fim de semana.",
    iconName: "BarChart3"
  }
];

export const PAIN_AVATAR = {
  title: "A realidade do seu fim de semana",
  subtitle: "Chega de improvisar e entregar algo sem graça. O amadorismo estraga o clima na hora.",
  points: [
    {
      title: "Não sabe o que comprar",
      desc: "Fica perdido no corredor do mercado sem saber qual gin ou tônica levar."
    },
    {
      title: "Bebida aguada ou forte",
      desc: "Erra a proporção e entrega algo que ninguém consegue beber direito."
    },
    {
      title: "Acha que precisa gastar muito",
      desc: "Acredita que só drinks de R$ 50 no bar são bons e bonitos."
    },
    {
      title: "Copão sem graça",
      desc: "Serve algo com cara de improviso que não valoriza a sua noite."
    }
  ]
};

export const BEFORE_AFTER = {
  title: "A Diferença Entre Parecer Perdido e Parecer Desenrolado",
  subtitle: "Mude a percepção de quem está com você:",
  before: {
    badge: "ANTES (SEM MÉTODO)",
    points: [
      "Não sabe o que comprar",
      "Improvisa a receita",
      "Erra a proporção",
      "Gasta mais dinheiro à toa",
      "Serve um copão sem graça"
    ]
  },
  after: {
    badge: "DEPOIS (EFEITO BARTENDER)",
    points: [
      "Sabe exatamente o que comprar",
      "Segue uma receita pronta",
      "Monta em cerca de 2 minutos",
      "Gasta pouco por drink",
      "Entrega um copão bonito e equilibrado"
    ]
  }
};

export const WHAT_YOU_GET = [
  {
    icon: "BookOpen",
    title: "15+ RECEITAS DE COPÃO",
    description: "Combinações prontas para você simplesmente copiar e fazer.",
    tag: "Direto ao Ponto"
  },
  {
    icon: "Layers",
    title: "LISTA DE INGREDIENTES",
    description: "Saiba exatamente o que comprar no supermercado comum.",
    tag: "Economia"
  },
  {
    icon: "Sparkles",
    title: "GUIA DE MONTAGEM",
    description: "Aprenda a deixar o copão visualmente impecável.",
    tag: "Apresentação"
  },
  {
    icon: "ShoppingCart",
    title: "BAR EM CASA ECONÔMICO",
    description: "Como ter drinks de alto nível gastando pouco.",
    tag: "Racional"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: "PLANO ESSENCIAL",
    tagline: "Acesso básico para quem quer parar de errar o drink.",
    price: "14,90",
    originalPrice: "49,90",
    isPopular: false,
    checkoutUrl: "https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p",
    buttonText: "QUERO O ESSENCIAL",
    features: [
      "5 Receitas Práticas de Copão",
      "Tabela de Combinações de Mercado",
      "Guia de Preparo e Proporção",
      "Acesso Imediato no Celular",
      "Garantia de 7 Dias"
    ]
  },
  {
    id: 'complete',
    name: "PLANO COMPLETO",
    tagline: "O arsenal completo para dominar o rolê e criar o clima certo.",
    price: "27,90",
    originalPrice: "97,00",
    isPopular: true,
    badgeText: "MAIS ESCOLHIDO",
    checkoutUrl: "https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE",
    buttonText: "QUERO O PLANO COMPLETO",
    features: [
      "15+ Receitas Passo a Passo",
      "Guia Completo de Combinações",
      "Segredos da Montagem Visual",
      "Lista de Compras Econômica",
      "Roteiro de Preparo Rápido",
      "Playlist de Ambientação",
      "Acesso Vitalício + Atualizações",
      "Garantia de 7 Dias"
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
    answer: "Não. O método foi feito para marcas comuns de supermercado (R$35 a R$55)."
  },
  {
    id: 'faq-3',
    question: "Preciso de utensílios especiais?",
    answer: "Não. Você faz tudo com o que já tem na cozinha. Sem frescura."
  },
  {
    id: 'faq-4',
    question: "Consigo fazer no copão de plástico?",
    answer: "Sim! Essa é a estética principal do método para esquenta e rolê."
  },
  {
    id: 'faq-5',
    question: "Quanto gasto para preparar?",
    answer: "Cerca de R$6 a R$9 por copão de 500ml."
  },
  {
    id: 'faq-9',
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para testar. Se não gostar, devolvemos 100% do valor."
  }
];


