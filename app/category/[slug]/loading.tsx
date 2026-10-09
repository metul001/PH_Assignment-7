import SkeletonGrid from "@/components/SkeletonGrid";

export default function LoadingCategory() {
  return (
    <main className="container-main py-12">
      <div className="skeleton h-12 w-12 rounded-xl" />
      <div className="skeleton mt-4 h-8 w-44 rounded" />
      <div className="skeleton mt-3 h-4 w-72 max-w-full rounded" />
      <div className="mt-9"><SkeletonGrid /></div>
    </main>
  );
}
