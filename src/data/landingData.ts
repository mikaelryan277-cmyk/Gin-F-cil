import { PricingPlan, Testimonial, FaqItem, RecipePreview, StatCounter } from '../types';

export const HERO_COPY = {
  eyebrow: "MÉTODO PRÁTICO PARA ESQUENTA, ENCONTRO E ROLÊ",
  headline: "Ela Não Precisa Saber Quanto Você Gastou.",
  subheadline: "Aprenda a preparar copões de gin que parecem muito mais sofisticados usando gin de supermercado, ingredientes simples e um método de 3 passos pra mandar bem quando receber alguém ou colar no esquenta.",
  mainCtaText: "QUERO APRENDER O EFEITO BARTENDER",
  secondaryCtaText: "Ver Exemplos de Copões",
  guarantees: [
    "Acesso imediato no seu celular",
    "Garantia Incondicional de 7 Dias",
    "Ingredientes baratos de supermercado"
  ]
};

export const STATS: StatCounter[] = [
  {
    id: '1',
    number: "R$ 6 a 9",
    label: "Custo Médio por Copão",
    description: "Enquanto no bar ou balada você paga R$ 35 a R$ 50 no mesmo drink",
    iconName: "DollarSign"
  },
  {
    id: '2',
    number: "3 Passos",
    label: "Preparo em 2 Minutos",
    description: "Sem enrolação, sem parecer perdido e sem fazer sujeira na cozinha",
    iconName: "Sparkles"
  },
  {
    id: '3',
    number: "4.9★",
    label: "Avaliação da Galera",
    description: "Mais de 2.400 caras que aprenderam a mandar bem no rolê em casa",
    iconName: "Star"
  },
  {
    id: '4',
    number: "100%",
    label: "Gin de Supermercado",
    description: "Zero necessidade de garrafas caras de R$ 300 ou xaropes importados",
    iconName: "GlassWater"
  }
];

export const PAIN_AVATAR = {
  title: "Você chamou alguém pra casa, quer fazer algo diferente, mas não quer torrar R$ 200 numa noite.",
  subtitle: "Chega o fim de semana, você combina aquele esquenta ou recebe alguém no apartamento. Na hora de servir, bate aquela insegurança: você tenta improvisar no olho, serve um copão sem graça, cheio de gelo derretido, ou forte demais que parece álcool puro. A sensação de amadorismo estraga o clima na hora.",
  points: [
    {
      title: "Medo de passar vergonha na hora de servir",
      desc: "Ficar inseguro na frente da pessoa, sem saber a ordem das coisas, tentando lembrar receita complexa de internet."
    },
    {
      title: "Bebida aguada ou pura gasolina",
      desc: "Errar a mão na proporção e entregar um drink enjoativo ou tão forte que ninguém consegue dar o segundo gole."
    },
    {
      title: "Achar que precisa gastar rios de dinheiro",
      desc: "Achar que pra impressionar precisa comprar gin importado de R$ 250 e xarope artesanal que vai estragar no armário."
    },
    {
      title: "Copão sem presença e sem clima",
      desc: "Servir algo com cara de improviso barato que não valoriza a noite e nem cria a impressão que você queria."
    }
  ]
};

export const THESIS_AND_METHOD = {
  thesisTitle: "Você não precisa ter dinheiro. Precisa saber o que fazer com o que tem.",
  thesisSubtitle: "A percepção de qualidade não vem do preço estampado no rótulo da garrafa. Ela vem de dominar pequenos detalhes visuais e práticos que qualquer um consegue aplicar em 2 minutos:",
  thesisPillars: [
    {
      title: "O Timing do Gelo e a Diluição",
      desc: "O segredo para manter o copão trincando de gelado do primeiro ao último gole sem virar água."
    },
    {
      title: "A Ordem Certa dos Ingredientes",
      desc: "Preserva a carbonatação da tônica ou citrus e distribui o sabor sem precisar mexer feito doido."
    },
    {
      title: "Combinações Baratas que Parecem Caras",
      desc: "Frutas e misturas simples de supermercado que criam cores vibrantes e aroma marcante."
    },
    {
      title: "Apresentação de Impacto",
      desc: "Copão transparente, bastante gelo, canudo e o toque do limão que faz parecer drink de lounge."
    }
  ]
};

export const BEFORE_AFTER = {
  title: "A Diferença Entre Parecer Perdido e Parecer Desenrolado",
  subtitle: "Veja como a percepção de quem está com você muda quando você domina o método:",
  before: {
    badge: "O Improviso Sem Graça",
    points: [
      "Fica inseguro tentando inventar proporção na hora",
      "Gasta R$ 150+ em bebidas aleatórias no mercado",
      "Serve um copão morno, com gelo que derrete em 5 minutos",
      "Bebida sem cor, sem presença e sem aroma",
      "Sensação de amadorismo que quebra o clima do rolê"
    ]
  },
  after: {
    badge: "O Cara Desenrolado (Efeito Bartender)",
    points: [
      "Sabe exatamente qual combinação montar em 2 minutos",
      "Usa gin comum de R$ 35 a R$ 50 com resultado impressionante",
      "Copão trincando de gelado, sabor equilibrado e visual vibrante",
      "Cores marcantes (vermelho, verde, tropical) com canudo e cítrico",
      "Transmite confiança imediata e cria um clima muito mais interessante"
    ]
  }
};

export const METHOD_STEPS = [
  {
    step: "PASSO 01",
    title: "A Escolha Certa",
    subtitle: "Sem enrolação na frente de ninguém",
    description: "Saiba exatamente qual combinação de gin, mistura e fruta do mercado usar para cada ocasião (esquenta com a galera, encontro em casa ou churrasco)."
  },
  {
    step: "PASSO 02",
    title: "O Preparo Sem Erro",
    subtitle: "Gelo, proporção e a sequência exata",
    description: "A dosagem certa e a ordem dos ingredientes que não deixa o drink nem fraco, nem aguado e nem com gosto de álcool puro."
  },
  {
    step: "PASSO 03",
    title: "O Efeito Final",
    subtitle: "O visual que chama atenção no copão",
    description: "Como montar o copão de 500-700ml com gelo até a boca, cores vibrantes, canudo e corte cítrico pra causar uma primeira impressão marcante."
  }
];

export const TARGET_AUDIENCE = {
  forWhom: [
    "O cara que quer impressionar alguém em casa sem precisar torrar uma fortuna.",
    "Quem vai receber alguém no apartamento e quer criar um clima mais interessante.",
    "Quem quer mandar bem no esquenta, no rolê ou no churrasco com a galera.",
    "Quem gosta da estética de copão com bastante gelo e quer fazer versões muito melhores.",
    "Quem quer parecer mais confiante e desenrolado sem precisar fazer curso chato.",
    "Quem quer transformar qualquer gin barato de mercado em uma bebida que chama atenção."
  ],
  notForWhom: [
    "Quem quer virar bartender profissional ou trabalhar em coquetelaria clássica.",
    "Quem faz questão de gastar rios de dinheiro com bebidas e xaropes importados.",
    "Quem prefere continuar servindo drink morno, aguado e sem graça.",
    "Não é para quem procura fórmula mágica para conquistar alguém. O método ensina a melhorar a bebida, a apresentação e a experiência — a impressão que isso causa depende de você."
  ]
};

export const WHAT_YOU_GET = [
  {
    icon: "BookOpen",
    title: "15+ Receitas Práticas de Copão",
    description: "Combinações fáceis de montar com gin de mercado, tônica, citrus e energéticos tropicais com cores vivas.",
    tag: "Direto ao Ponto"
  },
  {
    icon: "Layers",
    title: "Tabela de Combinações Rápidas",
    description: "O mapa mental para chegar no supermercado de bairro e saber em 2 minutos o que comprar sem gastar quase nada.",
    tag: "Guia Visual"
  },
  {
    icon: "Sparkles",
    title: "Roteiro de Preparo para Quando Alguém Chegar",
    description: "Como preparar o copão em menos de 2 minutos mantendo a conversa e sem parecer perdido na cozinha.",
    tag: "Efeito Social"
  },
  {
    icon: "ShoppingCart",
    title: "Guia do Bar em Casa Econômico",
    description: "As melhores marcas baratas de supermercado que entregam sabor de bebida importada quando bem preparadas.",
    tag: "Economia Real"
  }
];

export const RECIPE_PREVIEWS: RecipePreview[] = [
  {
    id: '1',
    title: "Copão Vermelho — Frutas Vermelhas & Citrus",
    tag: "Visual Vibrante",
    flavorProfile: 'Refrescante',
    prepTime: "2 minutos",
    difficulty: "Muito Fácil",
    description: "Um dos copões mais pedidos no esquenta. Cor vermelha intensa, aroma cítrico marcante e visual que chama atenção de longe.",
    glassType: "Copão de Plástico Transparente (500–700ml) com Canudo",
    keyIngredients: ["Gin comum do mercado", "Tônica de Frutas Vermelhas / Citrus", "Bastante Gelo Rígido", "Fatias de Limão"],
    bartenderTip: "Encha o copão de gelo até o topo antes de colocar o gin. O gelo compacto mantém a cor viva e não deixa derreter rápido!"
  },
  {
    id: '2',
    title: "Copão Tropical — Maracujá & Gin de Mercado",
    tag: "Clima Descontraído",
    flavorProfile: 'Tropical',
    prepTime: "2 minutos",
    difficulty: "Fácil",
    description: "Ideal para quando você recebe alguém em casa. A acidez do maracujá equilibra perfeitamente com a tônica sem ficar enjoativo.",
    glassType: "Copão Alto com bastante Gelo e Canudo",
    keyIngredients: ["Gin Nacional", "Polpa de Maracujá Fresco", "Água Tônica ou Citrus", "Gelo até a boca"],
    bartenderTip: "Coloque a polpa no fundo, adicione o gelo por cima e finalize com a tônica suavemente para criar o efeito degradê de cor."
  },
  {
    id: '3',
    title: "Copão Verde — Maçã Verde, Limão & Hortelã",
    tag: "Refrescância Pura",
    flavorProfile: 'Herbal',
    prepTime: "3 minutos",
    difficulty: "Fácil",
    description: "O drink que surpreende pela refrescância. Visual verde limpo, cheiro perfumado de hortelã fresca e pegada de bebida sofisticada.",
    glassType: "Copão 700ml com Canudo e Guarnição",
    keyIngredients: ["Gin de Supermercado", "Citrus / Maçã Verde", "Folhas de Hortelã", "Rodelas de Limão Tahiti"],
    bartenderTip: "Dê uma leve palmada no ramo de hortelã na palma da mão antes de colocar no copo para liberar o aroma imediatamente."
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Matheus Silva",
    age: 25,
    city: "São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Recebi uma garota no apê e montei o copão vermelho. Ela elogiou na hora.",
    comment: "Eu sempre ficava meio travado sem saber o que servir além de cerveja de lata. O método é direto ao ponto: fui no mercado, comprei as coisas por menos de R$ 40 e montei o copão com gelo e limão. Ficou bonito pra caramba e pareceu que eu manjava muito.",
    date: "Há 2 dias"
  },
  {
    id: '2',
    name: "Guilherme Santos",
    age: 28,
    city: "Rio de Janeiro, RJ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "No esquenta do último sábado os caras só queriam que eu fizesse os drinks.",
    comment: "Antes a gente gastava uma nota com combo caro em balada ou fazia um negócio aguado em casa. Agora compro gin normal de mercado e faço os copões com cor viva. R$ 27,90 mais bem investidos do ano.",
    date: "Há 4 dias"
  },
  {
    id: '3',
    name: "Felipe Nogueira",
    age: 24,
    city: "Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "O truque do gelo e da ordem dos ingredientes muda completamente a bebida.",
    comment: "Eu achava que drink bom era só com garrafa cara. O guia provou o contrário: o jeito de montar e a apresentação no copão fazem parecer bebida de R$ 40 do bar. Recomendo demais pra qualquer cara.",
    date: "Há 1 semana"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Preciso comprar gin caro ou importado?",
    answer: "Não! O método foi feito exatamente para funcionar com marcas comuns de supermercado (de R$ 35 a R$ 55). A percepção de sabor e qualidade vem da proporção, do timing do gelo e da combinação certa, não do preço da garrafa."
  },
  {
    id: 'faq-2',
    question: "Funciona mesmo com gin barato?",
    answer: "Totalmente. Mostramos exatamente como equilibrar a acidez e o aroma para que qualquer gin nacional fique saboroso, suave e sem aquele gosto forte de álcool puro que queima a garganta."
  },
  {
    id: 'faq-3',
    question: "Preciso comprar ingredientes difíceis ou xaropes caros?",
    answer: "Zero ingredientes difíceis. Tudo o que usamos é encontrado na feira ou no supermercado comum do seu bairro: frutas fáceis (limão, maracujá, laranja), tônica, citrus e especiarias básicas."
  },
  {
    id: 'faq-4',
    question: "Preciso ter utensílios de bartender ou coqueteleira?",
    answer: "Não precisa de nada profissional. O método é prático para fazer em copão grande, com colher comum de cozinha e potes caseiros se precisar misturar. Sem frescura e sem complicação."
  },
  {
    id: 'faq-5',
    question: "Consigo fazer no copão de plástico com canudo?",
    answer: "Sim! Essa é justamente uma das principais estéticas do método. Ensinamos como montar o copão de 500ml a 700ml com bastante gelo, canudo e guarnição para ficar visualmente incrível no esquenta ou no rolê."
  },
  {
    id: 'faq-6',
    question: "Serve para um encontro quando eu receber alguém em casa?",
    answer: "Com certeza. Ter algo diferente e visualmente bonito para oferecer logo nos primeiros minutos quebra o gelo, cria um clima descontraído e mostra que você é um cara desenrolado e atento aos detalhes."
  },
  {
    id: 'faq-7',
    question: "Serve para churrasco e esquenta com os amigos?",
    answer: "Perfeito para isso. Você vai conseguir servir várias pessoas rápido, gastando uma fração do que gastaria comprando caixas de cerveja ou combos prontos, e ainda vira a referência de drinks da turma."
  },
  {
    id: 'faq-8',
    question: "Quanto eu gasto em média por copão?",
    answer: "Com o método, cada copão de 500ml sai em média entre R$ 6 e R$ 9 de custo de ingrediente. No bar ou na balada, você pagaria entre R$ 30 e R$ 50 pelo mesmo tamanho."
  },
  {
    id: 'faq-9',
    question: "Preciso entender de coquetelaria ou saber cozinhar?",
    answer: "Não precisa entender nada. O guia é 100% visual e direto ao ponto, com quantidades simples e o passo a passo exato para você abrir no celular na cozinha e preparar em 2 minutos."
  },
  {
    id: 'faq-10',
    question: "Como recebo o acesso e como funciona a garantia?",
    answer: "O acesso é imediato no seu e-mail após a confirmação do pagamento. Você tem 7 dias de garantia incondicional para testar no seu próximo rolê. Se não gostar, basta pedir o reembolso e devolvemos 100% do valor."
  }
];


