export default function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-gray-500">{subtitle}</p>
    </div>
  );
}
