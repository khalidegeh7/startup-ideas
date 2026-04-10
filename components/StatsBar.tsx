type Stat = { label: string; value: string | number };

const defaultStats: Stat[] = [
  { label: "ideas indexed", value: 128 },
  { label: "categories", value: 12 },
  { label: "trending", value: 9 },
];

export function StatsBar({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <div className="border-b border-[var(--border)] bg-white dark:bg-stone-950">
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-4 text-sm text-[var(--muted)] sm:px-6 lg:px-8">
        {stats.map((s, i) => (
          <span key={s.label} className="inline-flex items-baseline gap-1.5">
            {i > 0 && (
              <span className="select-none text-stone-300 dark:text-stone-600" aria-hidden>
                ·
              </span>
            )}
            <span className="font-semibold tabular-nums text-[var(--foreground)]">
              {s.value}
            </span>
            <span>{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
