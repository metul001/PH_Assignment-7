"use client";

import { useMemo, useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types";

export default function CategoryProducts({ products }: { products: Product[] }) {
  const [sort, setSort] = useState("default");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    if (sort === "low") return list.sort((a, b) => a.price - b.price);
    if (sort === "high") return list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, sort]);

  return (
    <>
      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-3 text-sm font-medium text-gray-600">
          Sort:
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:border-green-600">
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </label>
      </div>
      <ProductGrid products={sortedProducts} />
    </>
  );
}
