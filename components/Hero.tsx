"use client";

type HeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onGenerateClick: () => void;
};

export function Hero({
  searchQuery,
  onSearchChange,
  onGenerateClick,
}: HeroProps) {
  return (
    <section
      id="overview"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[color-mix(in_oklab,white_35%,var(--background))] dark:bg-[color-mix(in_oklab,black_25%,var(--background))]"
    >
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <p className="text-sm font-medium text-[var(--muted)]">
          Startup Ideas — curated marketplace
        </p>
        <h1 className="font-serif mt-4 max-w-4xl text-pretty text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
          The same investor-style read for every idea—not a one-off doc or a chat
          that changes shape each time.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Search the catalog and you get one rhythm: headline pitch, category,
          difficulty, and what to sanity-check next—so you can decide what is worth
          a weekend prototype. Built for founders and builders who want a
          repeatable first pass; your market research and legal checks stay with
          you.
        </p>

        <div className="mt-10 max-w-2xl">
          <label
            htmlFor="hero-search"
            className="text-sm font-semibold text-[var(--foreground)]"
          >
            Search the idea catalog
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="relative min-w-0 flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                <SearchIcon className="h-5 w-5" />
              </span>
              <input
                id="hero-search"
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="e.g. AI, billing, marketplace…"
                className="h-12 w-full rounded-md border border-[var(--border)] bg-white pl-10 pr-3 text-sm text-[var(--foreground)] shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-900/10 dark:bg-stone-950 dark:focus:ring-stone-100/15"
              />
            </div>
            <button
              type="button"
              onClick={onGenerateClick}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-stone-900 px-6 text-sm font-semibold text-white shadow-sm transition-[transform,background-color] hover:bg-stone-800 active:scale-[0.99] dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
            >
              Generate idea
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Filters below apply together with search—matches title, description,
            and category.
          </p>
        </div>
      </div>
    </section>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
