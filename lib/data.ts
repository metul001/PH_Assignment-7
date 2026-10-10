import { fallbackCategories, fallbackProducts } from "@/lib/fallback-data";
import { Category, MarketPrice, Product } from "@/types";

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";
const BACKUP_URL = "https://api.abcz.workers.dev/api/bazardor";

const categoryMap: Record<string, { slug: string; name: string; icon: string }> = {
  // Bengali names & variants
  "চাল": { slug: "chal", name: "Rice", icon: "🍚" },
  "ডাল": { slug: "dal", name: "Lentils", icon: "🫘" },
  "তেল": { slug: "tel", name: "Oil", icon: "🛢️" },
  "সবজি": { slug: "sobji", name: "Vegetables", icon: "🥬" },
  "মাছ": { slug: "mach", name: "Fish", icon: "🐟" },
  "মাংস": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "ডিম": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "ডিম-দুধ": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "ডিম ও দুধ": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "মসলা": { slug: "mosla", name: "Spices", icon: "🌶️" },
  "মশলা": { slug: "mosla", name: "Spices", icon: "🌶️" },

  // Slugs & English keys
  "chal": { slug: "chal", name: "Rice", icon: "🍚" },
  "rice": { slug: "chal", name: "Rice", icon: "🍚" },
  "dal": { slug: "dal", name: "Lentils", icon: "🫘" },
  "lentil": { slug: "dal", name: "Lentils", icon: "🫘" },
  "lentils": { slug: "dal", name: "Lentils", icon: "🫘" },
  "tel": { slug: "tel", name: "Oil", icon: "🛢️" },
  "oil": { slug: "tel", name: "Oil", icon: "🛢️" },
  "sobji": { slug: "sobji", name: "Vegetables", icon: "🥬" },
  "shobji": { slug: "sobji", name: "Vegetables", icon: "🥬" },
  "vegetable": { slug: "sobji", name: "Vegetables", icon: "🥬" },
  "vegetables": { slug: "sobji", name: "Vegetables", icon: "🥬" },
  "mach": { slug: "mach", name: "Fish", icon: "🐟" },
  "fish": { slug: "mach", name: "Fish", icon: "🐟" },
  "mangsho": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "meat": { slug: "mangsho", name: "Meat", icon: "🍗" },
  "dim-dui": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "dim": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "egg": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "eggs": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "dairy": { slug: "dim-dui", name: "Eggs & Dairy", icon: "🥛" },
  "mosla": { slug: "mosla", name: "Spices", icon: "🌶️" },
  "moshla": { slug: "mosla", name: "Spices", icon: "🌶️" },
  "spice": { slug: "mosla", name: "Spices", icon: "🌶️" },
  "spices": { slug: "mosla", name: "Spices", icon: "🌶️" },
};

const productMap: Record<string, { name: string; emoji?: string }> = {
  // Slugs
  "sorno-machi-chal": { name: "Swarna Rice", emoji: "🍚" },
  "miniket-chal": { name: "Miniket Rice", emoji: "🍚" },
  "miniket-rice": { name: "Miniket Rice", emoji: "🍚" },
  "nazir-chal": { name: "Najirshail Rice", emoji: "🍚" },
  "najirshail-rice": { name: "Najirshail Rice", emoji: "🍚" },
  "batam-size-chal": { name: "Coarse Rice (Batam)", emoji: "🍚" },
  "coarse-rice": { name: "Coarse Rice", emoji: "🍚" },
  "mosur-dal": { name: "Masoor Lentil", emoji: "🫘" },
  "masoor-dal": { name: "Masoor Lentil", emoji: "🫘" },
  "mug-dal": { name: "Moong Lentil", emoji: "🫘" },
  "moong-dal": { name: "Moong Lentil", emoji: "🫘" },
  "chola-dal": { name: "Chickpeas (Chola)", emoji: "🫘" },
  "aman-dal-khosasila": { name: "Aman Lentil (Peeled)", emoji: "🫘" },
  "sorishar-tel": { name: "Mustard Oil", emoji: "🫙" },
  "mustard-oil": { name: "Mustard Oil", emoji: "🫙" },
  "pam-tel": { name: "Palm Oil", emoji: "🛢️" },
  "soybean-oil": { name: "Soybean Oil", emoji: "🫙" },
  "ghani-banga-sorishar-tel": { name: "Cold-Pressed Mustard Oil", emoji: "🫙" },
  "alu": { name: "Potato", emoji: "🥔" },
  "potato": { name: "Potato", emoji: "🥔" },
  "peyaj": { name: "Onion", emoji: "🧅" },
  "onion": { name: "Onion", emoji: "🧅" },
  "kaccha-moric": { name: "Green Chili", emoji: "🌶️" },
  "green-chili": { name: "Green Chili", emoji: "🌶️" },
  "begun": { name: "Brinjal (Eggplant)", emoji: "🍆" },
  "dhenders": { name: "Lady's Finger (Okra)", emoji: "🟢" },
  "rui-mach": { name: "Rui Fish", emoji: "🐟" },
  "rui-fish": { name: "Rui Fish", emoji: "🐟" },
  "telapiya-mach": { name: "Tilapia Fish", emoji: "🐟" },
  "ilish-mach": { name: "Hilsa Fish (Ilish)", emoji: "🐠" },
  "hilsa-fish": { name: "Hilsa Fish", emoji: "🐠" },
  "katla-mach": { name: "Catla Fish", emoji: "🐠" },
  "chingri-mach": { name: "Prawn (Chingri)", emoji: "🦐" },
  "murgi-r-mangsho": { name: "Broiler Chicken", emoji: "🍗" },
  "broiler-chicken": { name: "Broiler Chicken", emoji: "🍗" },
  "goru-r-mangsho": { name: "Beef", emoji: "🥩" },
  "beef": { name: "Beef", emoji: "🥩" },
  "khasir-mangsho": { name: "Mutton (Goat Meat)", emoji: "🍖" },
  "hanser-mangsho": { name: "Duck Meat", emoji: "🦆" },
  "dim": { name: "Farm Eggs", emoji: "🥚" },
  "farm-eggs": { name: "Farm Eggs", emoji: "🥚" },
  "dui-dudh": { name: "Fresh Milk", emoji: "🥛" },
  "doi": { name: "Sweet Curd (Doi)", emoji: "🥣" },
  "mokhhan": { name: "Butter (100g)", emoji: "🧈" },
  "ada": { name: "Ginger", emoji: "🫚" },
  "ginger": { name: "Ginger", emoji: "🫚" },
  "roshun": { name: "Garlic", emoji: "🧄" },
  "garlic": { name: "Garlic", emoji: "🧄" },
  "morich-gunda": { name: "Chili Powder", emoji: "🌶️" },
  "dhanepata-gunda": { name: "Coriander Powder", emoji: "🍃" },
  "tomato": { name: "Tomato", emoji: "🍅" },

  // Bengali name strings
  "স্বর্ণমাছি চাল": { name: "Swarna Rice", emoji: "🍚" },
  "মিনিকেট চাল": { name: "Miniket Rice", emoji: "🍚" },
  "নাজির চাল": { name: "Najirshail Rice", emoji: "🍚" },
  "নাজিরশাইল চাল": { name: "Najirshail Rice", emoji: "🍚" },
  "নাজিরশাইল": { name: "Najirshail Rice", emoji: "🍚" },
  "বাটাম সাইজ চাল": { name: "Coarse Rice (Batam)", emoji: "🍚" },
  "মোটা চাল": { name: "Coarse Rice", emoji: "🍚" },
  "মসুর ডাল": { name: "Masoor Lentil", emoji: "🫘" },
  "মুগ ডাল": { name: "Moong Lentil", emoji: "🫘" },
  "ছোলা": { name: "Chickpeas (Chola)", emoji: "🫘" },
  "আমন ডাল (খোসাসিলা)": { name: "Aman Lentil (Peeled)", emoji: "🫘" },
  "সরিষার তেল": { name: "Mustard Oil", emoji: "🫙" },
  "পাম তেল": { name: "Palm Oil", emoji: "🛢️" },
  "সয়াবিন তেল": { name: "Soybean Oil", emoji: "🫙" },
  "সয়াবিন তেল": { name: "Soybean Oil", emoji: "🫙" },
  "ঘানি ভাঙা সরিষার তেল": { name: "Cold-Pressed Mustard Oil", emoji: "🫙" },
  "আলু": { name: "Potato", emoji: "🥔" },
  "পেঁয়াজ": { name: "Onion", emoji: "🧅" },
  "পেঁয়াজ": { name: "Onion", emoji: "🧅" },
  "কাঁচামরিচ": { name: "Green Chili", emoji: "🌶️" },
  "কাঁচা মরিচ": { name: "Green Chili", emoji: "🌶️" },
  "বেগুন": { name: "Brinjal (Eggplant)", emoji: "🍆" },
  "ঢেঁড়স": { name: "Lady's Finger (Okra)", emoji: "🟢" },
  "রুই মাছ": { name: "Rui Fish", emoji: "🐟" },
  "তেলাপিয়া": { name: "Tilapia Fish", emoji: "🐟" },
  "ইলিশ মাছ": { name: "Hilsa Fish (Ilish)", emoji: "🐠" },
  "ইলিশ": { name: "Hilsa Fish (Ilish)", emoji: "🐠" },
  "কাতলা মাছ": { name: "Catla Fish", emoji: "🐠" },
  "চিংড়ি মাছ (খোলা)": { name: "Prawn (Chingri)", emoji: "🦐" },
  "মুরগির মাংস": { name: "Broiler Chicken", emoji: "🍗" },
  "গরুর মাংস": { name: "Beef", emoji: "🥩" },
  "খাসির মাংস": { name: "Mutton (Goat Meat)", emoji: "🍖" },
  "হাঁসের মাংস": { name: "Duck Meat", emoji: "🦆" },
  "ফার্মের ডিম": { name: "Farm Eggs", emoji: "🥚" },
  "দুধ": { name: "Fresh Milk", emoji: "🥛" },
  "দই": { name: "Sweet Curd (Doi)", emoji: "🥣" },
  "মাখন (১০০ গ্রাম)": { name: "Butter (100g)", emoji: "🧈" },
  "আদা": { name: "Ginger", emoji: "🫚" },
  "রসুন": { name: "Garlic", emoji: "🧄" },
  "মরিচ গুঁড়া": { name: "Chili Powder", emoji: "🌶️" },
  "ধনেপাতা গুঁড়া": { name: "Coriander Powder", emoji: "🍃" },
  "টমেটো": { name: "Tomato", emoji: "🍅" },
};

const marketEnglishMap: Record<string, string> = {
  "কারওয়ান বাজার": "Kawran Bazar, Dhaka",
  "গ্রীন মার্কেট, মিরপুর": "Green Market, Mirpur",
  "চৌদগ্রাম বাজার": "Chauddagram Bazar, Chattogram",
  "আমতলী বাজার": "Amtoli Bazar, Chattogram",
  "সদর বাজার": "Sadar Bazar, Rajshahi",
  "বাসারহাট বাজার": "Basharhat Bazar, Rajshahi",
  "মাঠ বাজার": "Math Bazar, Mymensingh",
  "চৌর বাজার": "Chour Bazar, Mymensingh",
  "বাজারহাট": "Bazarhat, Khulna",
  "ডবলগেট বাজার": "Double Gate Bazar, Khulna",
  "আমবাজার": "Ambazar, Sylhet",
  "চৌরাস্তা বাজার": "Chowrasta Bazar, Sylhet",
};

const unitMap: Record<string, string> = {
  "kg": "per kg",
  "কেজি": "per kg",
  "প্রতি কেজি": "per kg",
  "litre": "per litre",
  "লিটার": "per litre",
  "প্রতি লিটার": "per litre",
  "dozen": "per dozen",
  "ডজন": "per dozen",
  "প্রতি ডজন": "per dozen",
  "piece": "per piece",
  "পিস": "per piece",
  "প্রতি পিস": "per piece",
  "100g": "per 100g",
  "১০০ গ্রাম": "per 100g",
};

function numberValue(value: unknown, fallback = 0): number {
  if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
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

function textValue(value: unknown, fallback = ""): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (typeof value === "number") return String(value);
  return fallback;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function resolveCategory(slugOrName: string, iconFallback = "🛒") {
  const clean = slugOrName.trim().toLowerCase();
  const direct = categoryMap[clean] || categoryMap[slugOrName.trim()];
  if (direct) return direct;

  const slug = slugify(slugOrName) || "others";
  return {
    slug,
    name: /[\u0980-\u09ff]/.test(slugOrName) ? "Essential Products" : slugOrName,
    icon: iconFallback,
  };
}

function resolveProduct(rawName: string, rawSlug: string, iconFallback = "🛒") {
  const match = productMap[rawSlug] || productMap[rawName] || productMap[rawName.toLowerCase()];
  if (match) return match;

  const fallbackName = /[\u0980-\u09ff]/.test(rawName)
    ? rawSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Market Product"
    : rawName || "Market Product";

  return {
    name: fallbackName,
    emoji: iconFallback,
  };
}

function normalizeMarkets(raw: Record<string, unknown>, fallbackPrice: number): MarketPrice[] {
  const source = raw.markets ?? raw.market_prices ?? raw.bazars ?? raw.bazarPrices;
  if (Array.isArray(source) && source.length > 0) {
    const list = source
      .map((item, index) => {
        if (!item || typeof item !== "object") return null;
        const row = item as Record<string, unknown>;
        const rawMarketName = textValue(row.market ?? row.bazar ?? row.name, "");
        const rawDivision = textValue(row.division, "");
        const marketName = marketEnglishMap[rawMarketName] || (rawMarketName ? `${rawMarketName}${rawDivision ? `, ${rawDivision}` : ""}` : `Market ${index + 1}`);

        const minP = numberValue(row.min ?? row.minimum_price, 0);
        const maxP = numberValue(row.max ?? row.maximum_price, 0);
        const rowPrice = numberValue(row.price ?? row.current_price ?? row.today, 0);

        const price = rowPrice || (minP && maxP ? Math.round((minP + maxP) / 2) : minP || maxP || fallbackPrice);
        return {
          market: marketName,
          price,
        };
      })
      .filter(Boolean) as MarketPrice[];

    if (list.length > 0) return list;
  }

  return [
    { market: "Kawran Bazar, Dhaka", price: fallbackPrice },
    { market: "Green Market, Mirpur", price: fallbackPrice + 2 },
    { market: "Chowrasta Bazar, Sylhet", price: Math.max(0, fallbackPrice - 2) },
  ];
}

function normalizeCategory(raw: Record<string, unknown>, index: number): Category {
  const rawSlug = textValue(raw.slug ?? raw.id ?? raw.category_slug, `category-${index + 1}`);
  const rawName = textValue(raw.nameBn ?? raw.name ?? raw.category_name ?? raw.title, rawSlug);
  const info = resolveCategory(rawSlug);
  const infoByName = resolveCategory(rawName);
  const finalInfo = info.slug !== "others" ? info : infoByName;
  const icon = textValue(raw.icon ?? raw.emoji ?? raw.image, finalInfo.icon);

  return {
    slug: finalInfo.slug,
    name: finalInfo.name,
    icon: icon.startsWith("http") || icon.length > 8 ? finalInfo.icon : icon,
  };
}

function normalizeProduct(raw: Record<string, unknown>, index: number): Product {
  const id = textValue(raw.id ?? raw.product_id ?? raw._id, String(index + 1));
  const rawSlug = textValue(raw.slug ?? raw.product_slug, `product-${index + 1}`);
  const rawName = textValue(raw.nameBn ?? raw.name ?? raw.product_name ?? raw.title, rawSlug);

  const rawCat = textValue(raw.category ?? raw.category_slug ?? raw.categoryId, "others");
  const catName = textValue(raw.categoryNameBn ?? raw.category_name, rawCat);
  const categoryInfo = resolveCategory(rawCat);
  const categoryInfoByName = resolveCategory(catName);
  const category = categoryInfo.slug !== "others" ? categoryInfo.slug : categoryInfoByName.slug;
  const categoryName = categoryInfo.name !== "Essential Products" ? categoryInfo.name : categoryInfoByName.name;

  const resolved = resolveProduct(rawName, rawSlug, categoryInfo.icon);
  const name = resolved.name;

  const rawPrice = raw.today ?? raw.price ?? raw.current_price ?? raw.today_price ?? raw.average_price ?? raw.avg_price;
  const price = numberValue(rawPrice, 0);

  // Parse change percentage
  let change = 0;
  if (typeof raw.change === "object" && raw.change !== null) {
    const ch = raw.change as Record<string, unknown>;
    const pct = numberValue(ch.pct ?? ch.percentage ?? ch.val, 0);
    const dir = textValue(ch.dir, "");
    change = dir === "down" ? -Math.abs(pct) : pct;
  } else {
    change = numberValue(raw.change ?? raw.change_percentage ?? raw.price_change, 0);
  }

  // Unit
  const rawUnit = textValue(raw.unit ?? raw.measurement ?? raw.price_unit, "kg");
  const unit = unitMap[rawUnit.toLowerCase()] || unitMap[rawUnit] || (rawUnit.startsWith("per ") ? rawUnit : `per ${rawUnit}`);

  // Emoji / Icon
  const rawIcon = textValue(raw.image ?? raw.icon ?? raw.categoryIcon ?? resolved.emoji, categoryInfo.icon);
  const emoji = rawIcon.startsWith("http") || rawIcon.length > 8 ? (resolved.emoji || categoryInfo.icon) : rawIcon;

  // Markets and min/max prices
  const markets = normalizeMarkets(raw, price || 100);
  let minPrice = numberValue(raw.min_price ?? raw.minimum_price ?? raw.minPrice, 0);
  let maxPrice = numberValue(raw.max_price ?? raw.maximum_price ?? raw.maxPrice, 0);

  if (Array.isArray(raw.markets) && raw.markets.length > 0) {
    const mins = (raw.markets as Record<string, unknown>[]).map((m) => numberValue(m.min, 0)).filter((n) => n > 0);
    const maxs = (raw.markets as Record<string, unknown>[]).map((m) => numberValue(m.max, 0)).filter((n) => n > 0);
    if (mins.length > 0 && !minPrice) minPrice = Math.min(...mins);
    if (maxs.length > 0 && !maxPrice) maxPrice = Math.max(...maxs);
  }

  if (!minPrice) minPrice = Math.round((price || 100) * 0.95);
  if (!maxPrice) maxPrice = Math.round((price || 100) * 1.08);
  const averagePrice = price || Math.round((minPrice + maxPrice) / 2);

  const description = `${name} retail market price tracked across major local markets in Bangladesh.`;

  return {
    id,
    slug: rawSlug || slugify(name) || id,
    name,
    category,
    categoryName,
    unit,
    price: price || averagePrice,
    change,
    emoji,
    description,
    minPrice,
    maxPrice,
    averagePrice,
    markets,
  };
}

function pickArray(payload: unknown): Record<string, unknown>[] {
  if (Array.isArray(payload)) return payload as Record<string, unknown>[];
  if (!payload || typeof payload !== "object") return [];

  const obj = payload as Record<string, unknown>;
  const possible = [obj.data, obj.products, obj.categories, obj.result, obj.results];
  const found = possible.find(Array.isArray);
  return (found as Record<string, unknown>[]) || [];
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
    if (!rows.length) {
      if (!category) return fallbackProducts;
      return fallbackProducts.filter(
        (item) => item.category === category || slugify(item.categoryName) === category
      );
    }

    const products = rows.map(normalizeProduct);
    if (!category) return products;

    const wanted = slugify(category);
    return products.filter((item) => {
      const catSlug = slugify(item.category);
      const catName = slugify(item.categoryName);
      return catSlug === wanted || catName === wanted || (wanted === "shobji" && catSlug === "sobji") || (wanted === "sobji" && catSlug === "shobji") || (wanted === "dim" && catSlug === "dim-dui");
    });
  } catch {
    if (!category) return fallbackProducts;
    const wanted = slugify(category);
    return fallbackProducts.filter((item) => slugify(item.category) === wanted || (wanted === "sobji" && item.category === "shobji"));
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
