
export interface MealItem {
  id: number;
  name: string;
  calories: number;
  description: string;
  image: string;
  tags: string[];
  price: number;
  isBestSeller?: boolean;
}

export interface CartItem extends MealItem {
  quantity: number;
}

export interface PlanItem {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface MessAnalysisResult {
  healthiestOption: string;
  avoid: string;
  portionGuide: string;
  healthScoreColor: 'Green' | 'Yellow' | 'Red';
  swaps: string[];
  reasoning: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}
