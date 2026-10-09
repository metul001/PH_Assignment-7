import Link from "next/link";
import CategoryProducts from "@/components/CategoryProducts";
import { getCategories, getProducts } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [products, categories] = await Promise.all([getProducts(slug), getCategories()]);
  const category = categories.find((item) => item.slug === slug);

  if (!category || products.length === 0) {
    return (
      <main className="container-main flex min-h-[60vh] items-center justify-center py-16 text-center">
        <div>
          <p className="text-6xl">🛒</p>
          <h1 className="mt-4 text-3xl font-extrabold">Category not found</h1>
          <p className="mt-3 text-gray-500">There are no products available for this category.</p>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container-main py-12">
      <div className="mb-8">
        <p className="text-5xl">{category.icon}</p>
        <h1 className="mt-3 text-3xl font-extrabold text-gray-900">{category.name}</h1>
        <p className="mt-2 text-gray-500">Compare today&apos;s prices in the {category.name.toLowerCase()} category.</p>
      </div>
      <CategoryProducts products={products} />
    </main>
  );
}
