export default function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-2xl border border-gray-100 bg-white p-5">
          <div className="skeleton h-20 w-20 rounded-2xl" />
          <div className="skeleton mt-5 h-3 w-20 rounded" />
          <div className="skeleton mt-3 h-5 w-36 rounded" />
          <div className="skeleton mt-2 h-4 w-24 rounded" />
          <div className="skeleton mt-7 h-10 w-full rounded" />
        </div>
      ))}
    </div>
  );
}
