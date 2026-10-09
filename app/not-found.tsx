import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-main flex min-h-[65vh] items-center justify-center py-16 text-center">
      <div>
        <p className="text-7xl">404</p>
        <h1 className="mt-3 text-3xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-gray-500">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex rounded-xl bg-green-700 px-5 py-3 font-bold text-white">Back to Home</Link>
      </div>
    </main>
  );
}
