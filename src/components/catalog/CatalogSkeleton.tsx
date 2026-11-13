export function CatalogSkeleton() {
  return (
    <section className="py-16 sm:py-24" aria-hidden="true">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="h-3 w-32 animate-pulse rounded bg-slate-200" />
            <div className="h-9 w-72 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="h-12 w-full max-w-md animate-pulse rounded bg-slate-200" />
        </div>

        <div className="mb-8 flex gap-2 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-32 shrink-0 animate-pulse rounded-xl bg-slate-200"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
