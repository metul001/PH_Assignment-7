import Hero from "@/components/Hero";
import PriceTicker from "@/components/PriceTicker";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { getProducts } from "@/lib/data";

export default async function HomePage() {
  const products = await getProducts();
  const risers = [...products].filter((p) => p.change > 0).sort((a, b) => b.change - a.change).slice(0, 6);
  const fallers = [...products].filter((p) => p.change < 0).sort((a, b) => a.change - b.change).slice(0, 6);

  return (
    <main>
      <PriceTicker products={products} />
      <Hero />

      <section className="container-main py-14">
        <SectionHeading title="Prices Up Today ▲" subtitle="Products with the highest positive price changes today." />
        <ProductGrid products={risers} />
      </section>

      <section className="bg-red-50/40 py-14">
        <div className="container-main">
          <SectionHeading title="Prices Down Today ▼" subtitle="Products with the biggest price drops today." />
          <ProductGrid products={fallers} />
        </div>
      </section>

      <section id="all-products" className="container-main scroll-mt-28 py-14">
        <SectionHeading title="All Products" subtitle="Browse current prices for common food and household essentials." />
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
