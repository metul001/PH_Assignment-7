import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f0fdf4_0%,#fffdf5_100%)] py-14 sm:py-20">
      <div className="container-main grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">Daily market price tracker</p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Check essential product prices before you go to the market.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Bazar Dor helps you quickly see today&apos;s prices, price changes and market-based information for common household products in Bangladesh.
          </p>
          <Link href="#all-products" className="mt-7 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">
            View All Products
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="rounded-[2rem] bg-white p-8 card-shadow sm:p-12">
            <Image src="/bazar-hero.png" alt="Basket of market products" width={310} height={310} priority className="h-auto w-60 sm:w-72" />
          </div>
        </div>
      </div>
    </section>
  );
}
