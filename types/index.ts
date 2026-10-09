export type MarketPrice = {
  market: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  unit: string;
  price: number;
  change: number;
  emoji: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  markets: MarketPrice[];
};

export type Category = {
  slug: string;
  name: string;
  icon: string;
};
