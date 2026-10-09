import { fallbackCategories, fallbackProducts } from "@/lib/fallback-data";
import { Category, MarketPrice, Product } from "@/types";

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";
const BACKUP_URL = "https://api.abcz.workers.dev/api/bazardor";

const categoryEnglishMap: Record<string, { slug: string; name: string; icon: string }> = {
  "চাল": { slug: "chal", name: "Rice", icon: "🍚" },
  "rice": { slug: "chal", name: "Rice", icon: "🍚" },
  "chal": { slug: "chal", name: "Rice", icon: "🍚" },
  "ডাল": { slug: "dal", name: "Lentils", icon: "🫘" },
  "lentil": { slug: "dal", name: "Lentils", icon: "🫘" },
  "lentils": { slug: "dal", name: "Lentils", icon: "🫘" },
  "dal": { slug: "dal", name: "Lentils", icon: "🫘" },
  "তেল": { slug: "tel", name: "Oil", icon: "🫙" },
  "oil": { slug: "tel", name: "Oil", icon: "🫙" },
  "tel": { slug: "tel", name: "Oil", icon: "🫙" },
  "সবজি": { slug: "shobji", name: "Vegetables", icon: "🥔" },
  "vegetable": { slug: "shobji", name: "Vegetables", icon: "🥔" },
  "vegetables": { slug: "shobji", name: "Vegetables", icon: "🥔" },
  "shobji": { slug: "shobji", name: "Vegetables", icon: "🥔" },
  "মাছ": { slug: "mach", name: "Fish", icon: "🐟" },
  "fish": { slug: "mach", name: "Fish", icon: "🐟" },
  "mach": { slug: "mach", name: "Fish", icon: "🐟" },
  "মাংস": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "meat": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "mangsho": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "ডিম": { slug: "dim", name: "Eggs", icon: "🥚" },
  "egg": { slug: "dim", name: "Eggs", icon: "🥚" },
  "eggs": { slug: "dim", name: "Eggs", icon: "🥚" },
  "dim": { slug: "dim", name: "Eggs", icon: "🥚" },
  "মসলা": { slug: "moshla", name: "Spices", icon: "🧄" },
  "মশলা": { slug: "moshla", name: "Spices", icon: "🧄" },
  "spice": { slug: "moshla", name: "Spices", icon: "🧄" },
  "spices": { slug: "moshla", name: "Spices", icon: "🧄" },
  "moshla": { slug: "moshla", name: "Spices", icon: "🧄" },
};

const productEnglishMap: Record<string, string> = {
  "মিনিকেট চাল": "Miniket Rice",
  "নাজিরশাইল চাল": "Najirshail Rice",
  "নাজিরশাইল": "Najirshail Rice",
  "মোটা চাল": "Coarse Rice",
  "মসুর ডাল": "Masoor Lentil",
  "মুগ ডাল": "Moong Lentil",
  "সয়াবিন তেল": "Soybean Oil",
  "সয়াবিন তেল": "Soybean Oil",
  "সরিষার তেল": "Mustard Oil",
  "আলু": "Potato",
  "পেঁয়াজ": "Onion",
  "পেঁয়াজ": "Onion",
  "কাঁচা মরিচ": "Green Chili",
  "ইলিশ মাছ": "Hilsa Fish",
  "ইলিশ": "Hilsa Fish",
  "রুই মাছ": "Rui Fish",
  "রুই": "Rui Fish",
  "ব্রয়লার মুরগি": "Broiler Chicken",
  "ব্রয়লার মুরগি": "Broiler Chicken",
  "গরুর মাংস": "Beef",
  "ফার্মের ডিম": "Farm Eggs",
  "ডিম": "Farm Eggs",
  "আদা": "Ginger",
  "রসুন": "Garlic",
  "টমেটো": "Tomato",
};

const unitEnglishMap: Record<string, string> = {
  "প্রতি কেজি": "per kg",
  "কেজি": "per kg",
  "প্রতি লিটার": "per litre",
  "লিটার": "per litre",
  "প্রতি ডজন": "per dozen",
  "ডজন": "per dozen",
  "প্রতি পিস": "per piece",
  "পিস": "per piece",
};

function englishProductName(name: string) {
  return productEnglishMap[name.trim().toLowerCase()] || productEnglishMap[name.trim()] || name;
}

function englishUnit(unit: string) {
  return unitEnglishMap[unit.trim().toLowerCase()] || unitEnglishMap[unit.trim()] || unit;
}

function englishCategory(value: string) {
  const key = value.trim().toLowerCase();
  return categoryEnglishMap[key] || {
    slug: slugify(value) || "others",
    name: /[\u0980-\u09ff]/.test(value) ? "Other Products" : value,
    icon: "🛒",
  };
}

function numberValue(value: unknown, fallback = 0) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return fallback;

  const banglaDigits: Record<string, string> = {
    "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4",
    "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9",
  };

  const cleaned = value
    .replace(/[০-৯]/g, (digit) => banglaDigits[digit])
    .replace(/,/g, "")
    .replace(/[^0-9.-]/g, "");

  const result = Number(cleaned);
  return Number.isFinite(result) ? result : fallback;
}

function textValue(value: unknown, fallback = "") {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (typeof value === "number") return String(value);
  return fallback;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pickArray(payload: unknown): Record<string, unknown>[] {
  if (Array.isArray(payload)) return payload as Record<string, unknown>[];
  if (!payload || typeof payload !== "object") return [];

  const obj = payload as Record<string, unknown>;
  const possible = [obj.data, obj.products, obj.categories, obj.result, obj.results];
  const found = possible.find(Array.isArray);
  return (found as Record<string, unknown>[]) || [];
}

function normalizeMarkets(raw: Record<string, unknown>, price: number): MarketPrice[] {
  const source = raw.markets ?? raw.market_prices ?? raw.bazars ?? raw.bazarPrices;
  if (Array.isArray(source)) {
    const result = source
      .map((item, index) => {
        if (!item || typeof item !== "object") return null;
        const row = item as Record<string, unknown>;
        const marketName = textValue(row.market ?? row.bazar ?? row.name, `Market ${index + 1}`);
        return {
          market: /[\u0980-\u09ff]/.test(marketName) ? `Market ${index + 1}` : marketName,
          price: numberValue(row.price ?? row.current_price ?? row.average_price, price),
        };
      })
      .filter(Boolean) as MarketPrice[];

    if (result.length) return result;
  }

  return [
    { market: "Karwan Bazar", price },
    { market: "Mohammadpur Krishi Market", price: price + 2 },
    { market: "Mirpur-1 Market", price: Math.max(0, price - 2) },
  ];
}

function normalizeProduct(raw: Record<string, unknown>, index: number): Product {
  const id = textValue(raw.id ?? raw.product_id ?? raw._id, String(index + 1));
  const rawName = textValue(raw.name ?? raw.product_name ?? raw.title, `Product ${index + 1}`);
  const name = englishProductName(rawName);
  const rawCategory = raw.category;
  const categoryObj = rawCategory && typeof rawCategory === "object" ? rawCategory as Record<string, unknown> : null;
  const category = textValue(
    categoryObj?.slug ?? raw.category_slug ?? raw.categoryId ?? raw.category_id ?? rawCategory,
    "others"
  );
  const categoryInfo = englishCategory(textValue(categoryObj?.name ?? raw.category_name ?? category, category));
  const categoryFromSlug = englishCategory(category);
  const categoryName = categoryInfo.name === "Other Products" ? categoryFromSlug.name : categoryInfo.name;
  const categorySlug = categoryInfo.slug === "others" ? categoryFromSlug.slug : categoryInfo.slug;
  const price = numberValue(raw.price ?? raw.current_price ?? raw.today_price ?? raw.average_price ?? raw.avg_price, 0);
  const minPrice = numberValue(raw.min_price ?? raw.minimum_price ?? raw.minPrice, price);
  const maxPrice = numberValue(raw.max_price ?? raw.maximum_price ?? raw.maxPrice, price);
  const averagePrice = numberValue(raw.average_price ?? raw.avg_price ?? raw.averagePrice, price || (minPrice + maxPrice) / 2);
  const apiSlug = textValue(raw.slug ?? raw.product_slug);
  const descriptionText = textValue(raw.description ?? raw.summary, `${name} current market price information.`);
  const description = /[\u0980-\u09ff]/.test(descriptionText)
    ? `${name} current market price information from selected local markets.`
    : descriptionText;

  return {
    id,
    slug: apiSlug || slugify(name) || id,
    name,
    category: categorySlug,
    categoryName,
    unit: englishUnit(textValue(raw.unit ?? raw.measurement ?? raw.price_unit, "per kg")),
    price: price || averagePrice,
    change: numberValue(raw.change ?? raw.change_percentage ?? raw.price_change ?? raw.percentage_change, 0),
    emoji: (() => {
      const value = textValue(raw.emoji ?? raw.icon, categoryInfo.icon);
      return value.startsWith("http") || value.length > 8 ? categoryInfo.icon : value;
    })(),
    description,
    minPrice: minPrice || averagePrice,
    maxPrice: maxPrice || averagePrice,
    averagePrice: averagePrice || price,
    markets: normalizeMarkets(raw, averagePrice || price),
  };
}

function normalizeCategory(raw: Record<string, unknown>, index: number): Category {
  const rawName = textValue(raw.name ?? raw.category_name ?? raw.title, `Category ${index + 1}`);
  const givenSlug = textValue(raw.slug ?? raw.category_slug ?? raw.id);
  const infoByName = englishCategory(rawName);
  const infoBySlug = givenSlug ? englishCategory(givenSlug) : infoByName;
  const info = infoByName.slug !== "others" ? infoByName : infoBySlug;
  const iconValue = textValue(raw.icon ?? raw.emoji, info.icon);
  return {
    slug: info.slug,
    name: info.name,
    icon: iconValue.startsWith("http") || iconValue.length > 8 ? info.icon : iconValue,
  };
}

async function apiRequest(path: string): Promise<unknown> {
  const urls = [`${BASE_URL}${path}`, `${BACKUP_URL}${path}`];

  for (const url of urls) {
    try {
      const response = await fetch(url, { next: { revalidate: 300 } });
      if (response.ok) return await response.json();
    } catch {
      // Try the backup API next.
    }
  }

  throw new Error("API is not available right now");
}

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    const payload = await apiRequest(`/products${query}`);
    const rows = pickArray(payload);
    if (!rows.length) return category ? [] : fallbackProducts;

    const products = rows.map(normalizeProduct);
    if (!category) return products;

    const wanted = slugify(category);
    return products.filter((item) => item.category === wanted || slugify(item.categoryName) === wanted);
  } catch {
    if (!category) return fallbackProducts;
    return fallbackProducts.filter((item) => item.category === slugify(category));
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const payload = await apiRequest("/categories");
    const rows = pickArray(payload);
    if (!rows.length) return fallbackCategories;
    return rows.map(normalizeCategory);
  } catch {
    return fallbackCategories;
  }
}

export async function getProduct(slugOrId: string): Promise<Product | null> {
  const allProducts = await getProducts();
  const fromList = allProducts.find(
    (item) => item.slug === slugOrId || item.id === slugOrId
  );
  if (fromList) return fromList;

  // The provided API also supports /products/:id, so try it when the route contains an id.
  if (/^\d+$/.test(slugOrId)) {
    try {
      const payload = await apiRequest(`/products/${slugOrId}`);
      const object = payload && typeof payload === "object" ? payload as Record<string, unknown> : null;
      const data = object?.data && typeof object.data === "object" ? object.data as Record<string, unknown> : object;
      if (data) return normalizeProduct(data, 0);
    } catch {
      return null;
    }
  }

  return null;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-BD").format(Math.round(price));
}
