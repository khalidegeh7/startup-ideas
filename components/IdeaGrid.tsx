"use client";

import type { Idea } from "@/data/ideas";
import { IdeaCard } from "./IdeaCard";

type IdeaGridProps = {
  ideas: Idea[];
  /** Shown when the grid is empty and filters may be blocking results */
  onClearFilters?: () => void;
  showClearWhenEmpty?: boolean;
};

export function IdeaGrid({
  ideas,
  onClearFilters,
  showClearWhenEmpty = false,
}: IdeaGridProps) {
  if (ideas.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[var(--border)] bg-white px-6 py-14 text-center dark:bg-stone-950">
        <p className="font-serif text-lg text-[var(--foreground)]">
          No ideas match your filters
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Try a wider search or reset category and difficulty.
        </p>
        {showClearWhenEmpty && onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-6 rounded-md bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
          >
            Clear search &amp; filters
          </button>
        )}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ideas.map((idea) => (
        <li key={idea.id}>
          <IdeaCard idea={idea} />
        </li>
      ))}
    </ul>
  );
}
