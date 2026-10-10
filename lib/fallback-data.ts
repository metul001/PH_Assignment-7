import { Category, Product } from "@/types";

export const fallbackCategories: Category[] = [
  { slug: "chal", name: "Rice", icon: "🍚" },
  { slug: "dal", name: "Lentils", icon: "🫘" },
  { slug: "tel", name: "Oil", icon: "🛢️" },
  { slug: "sobji", name: "Vegetables", icon: "🥬" },
  { slug: "mach", name: "Fish", icon: "🐟" },
  { slug: "mangsho", name: "Meat", icon: "🍗" },
  { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  { slug: "mosla", name: "Spices", icon: "🌶️" },
];

const markets = (base: number) => [
  { market: "Kawran Bazar, Dhaka", price: base - 3 },
  { market: "Green Market, Mirpur", price: base + 2 },
  { market: "Chowrasta Bazar, Sylhet", price: base },
  { market: "Sadar Bazar, Rajshahi", price: base + 4 },
];

export const fallbackProducts: Product[] = [
  { id: "1", slug: "miniket-chal", name: "Miniket Rice", category: "chal", categoryName: "Rice", unit: "per kg", price: 99, change: -2.9, emoji: "🍚", description: "Fine rice commonly used for everyday meals.", minPrice: 95, maxPrice: 106, averagePrice: 99, markets: markets(99) },
  { id: "2", slug: "nazir-chal", name: "Najirshail Rice", category: "chal", categoryName: "Rice", unit: "per kg", price: 74, change: 0.0, emoji: "🍚", description: "Aromatic premium rice available in major city markets.", minPrice: 70, maxPrice: 80, averagePrice: 74, markets: markets(74) },
  { id: "3", slug: "batam-size-chal", name: "Coarse Rice (Batam)", category: "chal", categoryName: "Rice", unit: "per kg", price: 66, change: 3.1, emoji: "🍚", description: "Affordable rice used by many households across Bangladesh.", minPrice: 62, maxPrice: 72, averagePrice: 66, markets: markets(66) },
  { id: "4", slug: "mosur-dal", name: "Masoor Lentil", category: "dal", categoryName: "Lentils", unit: "per kg", price: 142, change: 2.9, emoji: "🫘", description: "Popular red lentil used in regular Bangladeshi cooking.", minPrice: 135, maxPrice: 152, averagePrice: 142, markets: markets(142) },
  { id: "5", slug: "mug-dal", name: "Moong Lentil", category: "dal", categoryName: "Lentils", unit: "per kg", price: 135, change: 0.0, emoji: "🫘", description: "Nutritious lentil often used for dal and khichuri.", minPrice: 130, maxPrice: 145, averagePrice: 135, markets: markets(135) },
  { id: "6", slug: "sorishar-tel", name: "Mustard Oil", category: "tel", categoryName: "Oil", unit: "per litre", price: 192, change: 2.1, emoji: "🫙", description: "Traditional mustard oil used for cooking and seasoning.", minPrice: 185, maxPrice: 205, averagePrice: 192, markets: markets(192) },
  { id: "7", slug: "pam-tel", name: "Palm Oil", category: "tel", categoryName: "Oil", unit: "per kg", price: 168, change: -2.3, emoji: "🛢️", description: "Refined palm oil tracked across local markets.", minPrice: 162, maxPrice: 175, averagePrice: 168, markets: markets(168) },
  { id: "8", slug: "alu", name: "Potato", category: "sobji", categoryName: "Vegetables", unit: "per kg", price: 30, change: -6.2, emoji: "🥔", description: "Daily retail potato price collected from common markets.", minPrice: 28, maxPrice: 35, averagePrice: 30, markets: markets(30) },
  { id: "9", slug: "peyaj", name: "Onion", category: "sobji", categoryName: "Vegetables", unit: "per kg", price: 54, change: 12.5, emoji: "🧅", description: "Local onion price that can change quickly with market supply.", minPrice: 50, maxPrice: 62, averagePrice: 54, markets: markets(54) },
  { id: "10", slug: "kaccha-moric", name: "Green Chili", category: "sobji", categoryName: "Vegetables", unit: "per kg", price: 92, change: -12.4, emoji: "🌶️", description: "Fresh green chili retail price from several Dhaka markets.", minPrice: 85, maxPrice: 105, averagePrice: 92, markets: markets(92) },
  { id: "11", slug: "ilish-mach", name: "Hilsa Fish (Ilish)", category: "mach", categoryName: "Fish", unit: "per kg", price: 1850, change: 3.4, emoji: "🐠", description: "Hilsa market price varies by size, source and availability.", minPrice: 1750, maxPrice: 1980, averagePrice: 1850, markets: markets(1850) },
  { id: "12", slug: "rui-mach", name: "Rui Fish", category: "mach", categoryName: "Fish", unit: "per kg", price: 46, change: 4.5, emoji: "🐟", description: "Common freshwater fish sold throughout city markets.", minPrice: 42, maxPrice: 52, averagePrice: 46, markets: markets(46) },
  { id: "13", slug: "murgi-r-mangsho", name: "Broiler Chicken", category: "mangsho", categoryName: "Meat", unit: "per kg", price: 225, change: -1.3, emoji: "🍗", description: "Broiler chicken retail price for regular household shopping.", minPrice: 215, maxPrice: 238, averagePrice: 225, markets: markets(225) },
  { id: "14", slug: "goru-r-mangsho", name: "Beef", category: "mangsho", categoryName: "Meat", unit: "per kg", price: 790, change: -1.2, emoji: "🥩", description: "Average retail beef price across selected local markets.", minPrice: 770, maxPrice: 820, averagePrice: 790, markets: markets(790) },
  { id: "15", slug: "dim", name: "Farm Eggs", category: "dim-dui", categoryName: "Eggs & Dairy", unit: "per dozen", price: 158, change: 3.9, emoji: "🥚", description: "Farm egg retail price shown by the dozen.", minPrice: 152, maxPrice: 165, averagePrice: 158, markets: markets(158) },
  { id: "16", slug: "ada", name: "Ginger", category: "mosla", categoryName: "Spices", unit: "per kg", price: 85, change: 9.0, emoji: "🫚", description: "Fresh ginger price from major retail markets.", minPrice: 80, maxPrice: 95, averagePrice: 85, markets: markets(85) },
  { id: "17", slug: "roshun", name: "Garlic", category: "mosla", categoryName: "Spices", unit: "per kg", price: 125, change: -7.4, emoji: "🧄", description: "Local and imported garlic prices may vary by market.", minPrice: 118, maxPrice: 135, averagePrice: 125, markets: markets(125) },
];
