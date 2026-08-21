import { PricingPlan, FaqItem } from '../types';

export const HERO_COPY = {
  eyebrow: "MÉTODO EFEITO BARTENDER",
  headline: "Faça Copões de Gin Bonitos Gastando Pouco",
  subheadline: "Aprenda receitas práticas usando gin de supermercado, ingredientes fáceis e um passo a passo simples.",
  emotionalTag: "Ela não precisa saber quanto você gastou.",
  mainCtaText: "QUERO APRENDER A FAZER OS COPÕES",
  priceHighlight: "A PARTIR DE R$ 14,90",
  priceDetail: "Pagamento único • Acesso imediato • 7 dias de garantia",
  highlights: [
    { icon: "Martini", text: "Receitas prontas" },
    { icon: "DollarSign", text: "Ingredientes baratos" },
    { icon: "Zap", text: "Preparo rápido" }
  ]
};

export const TARGET_AUDIENCE_PROBLEMS = [
  "Não sabe o que comprar para montar um copão.",
  "Sempre erra a quantidade dos ingredientes.",
  "Faz drink aguado ou forte demais.",
  "Acha que precisa comprar gin caro.",
  "Quer fazer algo bonito no encontro ou esquenta.",
  "Não quer estudar coquetelaria profissional."
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "1",
    label: "ESCOLHEU",
    title: "1. Escolheu",
    description: "Escolha uma das receitas."
  },
  {
    step: "2",
    label: "MONTOU",
    title: "2. Montou",
    description: "Siga a ordem e a proporção dos ingredientes."
  },
  {
    step: "3",
    label: "SERVIU",
    title: "3. Serviu",
    description: "Finalize o copão e pronto."
  }
];

export const WHAT_YOU_RECEIVE = [
  {
    icon: "GlassWater",
    title: "RECEITAS PRONTAS",
    description: "Receitas passo a passo para copiar e fazer."
  },
  {
    icon: "ShoppingCart",
    title: "LISTA DE INGREDIENTES",
    description: "Saiba exatamente o que comprar no supermercado."
  },
  {
    icon: "Ice",
    title: "GUIA DE GELO E PROPORÇÃO",
    description: "Evite copão aguado ou forte demais."
  },
  {
    icon: "Sparkles",
    title: "GUIA DE MONTAGEM",
    description: "Aprenda a deixar o copão bonito e bem apresentado."
  },
  {
    icon: "Smartphone",
    title: "ACESSO NO CELULAR",
    description: "Abra o material imediatamente após a compra."
  }
];

export const REAL_REVIEWS = [
  "https://i.imgur.com/oOdqb7V.png",
  "https://i.imgur.com/jmKLGnc.png",
  "https://i.imgur.com/d1NXTPL.png",
  "https://i.imgur.com/DX59pb7.png",
  "https://i.imgur.com/x9mWbQb.png"
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: "PLANO ESSENCIAL",
    tagline: "Pagamento único.",
    price: "14,90",
    originalPrice: "49,90",
    isPopular: false,
    checkoutUrl: "https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p",
    buttonText: "QUERO O ESSENCIAL",
    features: [
      "5 receitas práticas",
      "Tabela de combinações",
      "Guia de preparo",
      "Acesso no celular",
      "Garantia de 7 dias"
    ]
  },
  {
    id: 'complete',
    name: "PLANO COMPLETO",
    tagline: "Pagamento único.",
    price: "27,90",
    originalPrice: "97,00",
    isPopular: true,
    badgeText: "MAIS ESCOLHIDO",
    checkoutUrl: "https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE",
    buttonText: "QUERO O PLANO COMPLETO",
    features: [
      "15+ receitas",
      "Guia completo de combinações",
      "Lista de compras",
      "Guia de montagem",
      "Roteiro de preparo",
      "Playlist",
      "Atualizações",
      "Garantia de 7 dias"
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Preciso comprar gin caro?",
    answer: "Não. O método foi feito usando marcas comuns e acessíveis de supermercado."
  },
  {
    id: 'faq-2',
    question: "Preciso de utensílios de bartender?",
    answer: "Não. Você prepara tudo usando o que já tem na cozinha, sem precisar de dosador ou coqueteleira profissional."
  },
  {
    id: 'faq-3',
    question: "Consigo fazer no copão de plástico?",
    answer: "Sim! O método foi pensado exatamente para copões de 500ml a 700ml para esquenta, rolê ou encontro."
  },
  {
    id: 'faq-4',
    question: "Preciso entender de coquetelaria?",
    answer: "Zero. As receitas são passo a passo prontas para você apenas copiar as quantidades e servir."
  },
  {
    id: 'faq-5',
    question: "Como recebo o material?",
    answer: "O acesso é 100% digital e imediato. Logo após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail e WhatsApp para abrir no celular."
  },
  {
    id: 'faq-6',
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para testar. Se achar que não valeu a pena, basta solicitar o reembolso dentro do prazo e devolvemos 100% do seu investimento."
  }
];



