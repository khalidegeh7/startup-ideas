"use client";

import type { Category, Difficulty } from "@/data/ideas";
import { categoryOptions, difficultyOptions } from "@/data/ideas";

type FilterBarProps = {
  category: Category | "All";
  difficulty: Difficulty | "All";
  onCategoryChange: (value: Category | "All") => void;
  onDifficultyChange: (value: Difficulty | "All") => void;
};

export function FilterBar({
  category,
  difficulty,
  onCategoryChange,
  onDifficultyChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-14 z-10 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_94%,white)] backdrop-blur-md dark:bg-[color-mix(in_oklab,var(--background)_92%,black)] sm:top-[3.75rem]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Refine the catalog
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Same filters apply across the grid—mix category and difficulty freely.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="filter-category"
              className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]"
            >
              Category
            </label>
            <select
              id="filter-category"
              value={category}
              onChange={(e) =>
                onCategoryChange(e.target.value as Category | "All")
              }
              className="h-10 min-w-[11rem] cursor-pointer rounded-md border border-[var(--border)] bg-white px-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-stone-400 focus:ring-2 focus:ring-stone-900/10 dark:bg-stone-950 dark:focus:ring-stone-100/15"
            >
              <option value="All">All categories</option>
              {categoryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="filter-difficulty"
              className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]"
            >
              Difficulty
            </label>
            <select
              id="filter-difficulty"
              value={difficulty}
              onChange={(e) =>
                onDifficultyChange(e.target.value as Difficulty | "All")
              }
              className="h-10 min-w-[11rem] cursor-pointer rounded-md border border-[var(--border)] bg-white px-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-stone-400 focus:ring-2 focus:ring-stone-900/10 dark:bg-stone-950 dark:focus:ring-stone-100/15"
            >
              <option value="All">All levels</option>
              {difficultyOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
