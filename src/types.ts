export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  isPopular?: boolean;
  badgeText?: string;
  features: string[];
  checkoutUrl: string;
  buttonText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  avatar: string;
  rating: number;
  comment: string;
  highlight: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RecipePreview {
  id: string;
  title: string;
  tag: string;
  flavorProfile: 'Tropical' | 'Refrescante' | 'Intenso' | 'Herbal';
  prepTime: string;
  difficulty: string;
  description: string;
  glassType: string;
  keyIngredients: string[];
  bartenderTip: string;
}

export interface StatCounter {
  id: string;
  number: string;
  label: string;
  description: string;
  iconName: string;
}
