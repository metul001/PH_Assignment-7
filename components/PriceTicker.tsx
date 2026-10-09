import { formatPrice } from "@/lib/data";
import { Product } from "@/types";

export default function PriceTicker({ products }: { products: Product[] }) {
  const items = products.slice(0, 10);
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-green-100 bg-green-900 py-2 text-white">
      <div className="ticker-track">
        {repeated.map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex shrink-0 items-center gap-2 border-r border-white/20 px-6 text-sm">
            <span>{product.emoji}</span>
            <span>{product.name}</span>
            <strong>৳{formatPrice(product.price)}/{product.unit.replace("per ", "")}</strong>
            <span className={product.change >= 0 ? "text-lime-300" : "text-red-300"}>
              {product.change > 0 ? "▲" : product.change < 0 ? "▼" : "—"} {Math.abs(product.change).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
