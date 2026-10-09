import { Category, Product } from "@/types";

export const fallbackCategories: Category[] = [
  { slug: "chal", name: "Rice", icon: "🍚" },
  { slug: "dal", name: "Lentils", icon: "🫘" },
  { slug: "tel", name: "Oil", icon: "🫙" },
  { slug: "shobji", name: "Vegetables", icon: "🥔" },
  { slug: "mach", name: "Fish", icon: "🐟" },
  { slug: "mangsho", name: "Meat", icon: "🍗" },
  { slug: "dim", name: "Eggs", icon: "🥚" },
  { slug: "moshla", name: "Spices", icon: "🧄" },
];

const markets = (base: number) => [
  { market: "Karwan Bazar", price: base - 3 },
  { market: "Mohammadpur Krishi Market", price: base + 2 },
  { market: "Mirpur-1 Market", price: base },
  { market: "Shantinagar Market", price: base + 5 },
];

export const fallbackProducts: Product[] = [
  { id: "1", slug: "miniket-rice", name: "Miniket Rice", category: "chal", categoryName: "Rice", unit: "per kg", price: 78, change: 2.4, emoji: "🍚", description: "Fine rice commonly used for everyday meals.", minPrice: 74, maxPrice: 83, averagePrice: 78, markets: markets(78) },
  { id: "2", slug: "najirshail-rice", name: "Najirshail Rice", category: "chal", categoryName: "Rice", unit: "per kg", price: 92, change: 1.2, emoji: "🍚", description: "Aromatic premium rice available in major city markets.", minPrice: 88, maxPrice: 97, averagePrice: 92, markets: markets(92) },
  { id: "3", slug: "coarse-rice", name: "Coarse Rice", category: "chal", categoryName: "Rice", unit: "per kg", price: 58, change: -1.7, emoji: "🍚", description: "Affordable rice used by many households across Bangladesh.", minPrice: 55, maxPrice: 62, averagePrice: 58, markets: markets(58) },
  { id: "4", slug: "masoor-dal", name: "Masoor Lentil", category: "dal", categoryName: "Lentils", unit: "per kg", price: 148, change: 2.1, emoji: "🫘", description: "Popular red lentil used in regular Bangladeshi cooking.", minPrice: 142, maxPrice: 155, averagePrice: 148, markets: markets(148) },
  { id: "5", slug: "moong-dal", name: "Moong Lentil", category: "dal", categoryName: "Lentils", unit: "per kg", price: 175, change: -0.8, emoji: "🫘", description: "Nutritious lentil often used for dal and khichuri.", minPrice: 168, maxPrice: 182, averagePrice: 175, markets: markets(175) },
  { id: "6", slug: "soybean-oil", name: "Soybean Oil", category: "tel", categoryName: "Oil", unit: "per litre", price: 189, change: 3.2, emoji: "🫙", description: "Bottled soybean cooking oil price tracked across local markets.", minPrice: 184, maxPrice: 195, averagePrice: 189, markets: markets(189) },
  { id: "7", slug: "mustard-oil", name: "Mustard Oil", category: "tel", categoryName: "Oil", unit: "per litre", price: 235, change: -1.1, emoji: "🫙", description: "Traditional mustard oil used for cooking and seasoning.", minPrice: 228, maxPrice: 242, averagePrice: 235, markets: markets(235) },
  { id: "8", slug: "potato", name: "Potato", category: "shobji", categoryName: "Vegetables", unit: "per kg", price: 48, change: -3.6, emoji: "🥔", description: "Daily retail potato price collected from common markets.", minPrice: 44, maxPrice: 52, averagePrice: 48, markets: markets(48) },
  { id: "9", slug: "onion", name: "Onion", category: "shobji", categoryName: "Vegetables", unit: "per kg", price: 86, change: 4.5, emoji: "🧅", description: "Local onion price that can change quickly with market supply.", minPrice: 80, maxPrice: 92, averagePrice: 86, markets: markets(86) },
  { id: "10", slug: "green-chili", name: "Green Chili", category: "shobji", categoryName: "Vegetables", unit: "per kg", price: 160, change: 6.4, emoji: "🌶️", description: "Fresh green chili retail price from several Dhaka markets.", minPrice: 150, maxPrice: 172, averagePrice: 160, markets: markets(160) },
  { id: "11", slug: "hilsa-fish", name: "Hilsa Fish", category: "mach", categoryName: "Fish", unit: "per kg", price: 1850, change: 2.9, emoji: "🐟", description: "Hilsa market price varies by size, source and availability.", minPrice: 1750, maxPrice: 1950, averagePrice: 1850, markets: markets(1850) },
  { id: "12", slug: "rui-fish", name: "Rui Fish", category: "mach", categoryName: "Fish", unit: "per kg", price: 390, change: -2.2, emoji: "🐟", description: "Common freshwater fish sold throughout city markets.", minPrice: 370, maxPrice: 415, averagePrice: 390, markets: markets(390) },
  { id: "13", slug: "broiler-chicken", name: "Broiler Chicken", category: "mangsho", categoryName: "Meat", unit: "per kg", price: 198, change: -1.5, emoji: "🍗", description: "Broiler chicken retail price for regular household shopping.", minPrice: 192, maxPrice: 205, averagePrice: 198, markets: markets(198) },
  { id: "14", slug: "beef", name: "Beef", category: "mangsho", categoryName: "Meat", unit: "per kg", price: 780, change: 0.0, emoji: "🥩", description: "Average retail beef price across selected local markets.", minPrice: 760, maxPrice: 800, averagePrice: 780, markets: markets(780) },
  { id: "15", slug: "farm-eggs", name: "Farm Eggs", category: "dim", categoryName: "Eggs", unit: "per dozen", price: 150, change: 1.8, emoji: "🥚", description: "Farm egg retail price shown by the dozen.", minPrice: 144, maxPrice: 156, averagePrice: 150, markets: markets(150) },
  { id: "16", slug: "ginger", name: "Ginger", category: "moshla", categoryName: "Spices", unit: "per kg", price: 260, change: -4.0, emoji: "🫚", description: "Fresh ginger price from major retail markets.", minPrice: 245, maxPrice: 275, averagePrice: 260, markets: markets(260) },
  { id: "17", slug: "garlic", name: "Garlic", category: "moshla", categoryName: "Spices", unit: "per kg", price: 220, change: 3.1, emoji: "🧄", description: "Local and imported garlic prices may vary by market.", minPrice: 210, maxPrice: 232, averagePrice: 220, markets: markets(220) },
  { id: "18", slug: "tomato", name: "Tomato", category: "shobji", categoryName: "Vegetables", unit: "per kg", price: 95, change: -5.2, emoji: "🍅", description: "Seasonal tomato price based on daily market availability.", minPrice: 88, maxPrice: 105, averagePrice: 95, markets: markets(95) },
];
