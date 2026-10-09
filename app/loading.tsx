import SkeletonGrid from "@/components/SkeletonGrid";

export default function Loading() {
  return (
    <main className="container-main py-14">
      <div className="skeleton mb-3 h-8 w-52 rounded" />
      <div className="skeleton mb-8 h-4 w-80 max-w-full rounded" />
      <SkeletonGrid />
    </main>
  );
}
