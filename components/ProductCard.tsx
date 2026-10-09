import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const isUp = product.change > 0;
  const isDown = product.change < 0;

  return (
    <Link href={`/product/${product.slug || product.id}`} className="group rounded-2xl border border-gray-100 bg-white p-5 card-shadow transition hover:-translate-y-1 hover:border-green-200">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-5xl transition group-hover:scale-105">
        {product.emoji}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-green-700">{product.categoryName}</p>
      <h3 className="mt-1 text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{product.unit}</p>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500">Today&apos;s price</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xl font-extrabold text-gray-900">৳{formatPrice(product.price)}</p>
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${isUp ? "bg-green-100 text-green-700" : isDown ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"}`}>
            {isUp ? "▲" : isDown ? "▼" : "—"} {Math.abs(product.change).toFixed(1)}%
          </span>
        </div>
      </div>
    </Link>
  );
}
