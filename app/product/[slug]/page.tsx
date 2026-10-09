import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { formatPrice, getProduct } from "@/lib/data";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/signin?reason=login&callbackURL=${encodeURIComponent(`/product/${slug}`)}`);
  }

  const product = await getProduct(slug);

  if (!product) {
    return (
      <main className="container-main flex min-h-[60vh] items-center justify-center text-center">
        <div>
          <p className="text-6xl">🔎</p>
          <h1 className="mt-4 text-3xl font-extrabold">Product not found</h1>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container-main py-12">
      <section className="rounded-3xl border border-green-100 bg-green-50/60 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-white text-7xl card-shadow">{product.emoji}</div>
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">{product.categoryName}</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-600">{product.unit}</span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{product.name}</h1>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 card-shadow">
          <p className="text-sm text-gray-500">Minimum Price</p>
          <p className="mt-2 text-2xl font-extrabold">৳{formatPrice(product.minPrice)}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 card-shadow">
          <p className="text-sm text-gray-500">Maximum Price</p>
          <p className="mt-2 text-2xl font-extrabold">৳{formatPrice(product.maxPrice)}</p>
        </div>
        <div className="rounded-2xl border border-green-200 bg-green-700 p-5 text-white card-shadow">
          <p className="text-sm text-green-100">Average Price</p>
          <p className="mt-2 text-2xl font-extrabold">৳{formatPrice(product.averagePrice)}</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-extrabold">Today&apos;s Price by Market</h2>
        <p className="mt-2 text-gray-500">Prices may be slightly different from one market to another.</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
          <div className="grid grid-cols-[1fr_auto] bg-green-950 px-5 py-3 text-sm font-bold text-white">
            <span>Market</span><span>Price</span>
          </div>
          {product.markets.map((item, index) => (
            <div key={`${item.market}-${index}`} className="grid grid-cols-[1fr_auto] items-center border-t border-gray-100 px-5 py-4 first:border-0">
              <span className="font-medium text-gray-700">{item.market}</span>
              <span className="font-extrabold text-green-800">৳{formatPrice(item.price)}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
