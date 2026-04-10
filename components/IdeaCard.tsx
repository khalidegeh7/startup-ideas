"use client";

import type { Idea } from "@/data/ideas";

type IdeaCardProps = {
  idea: Idea;
};

const difficultyStyles: Record<
  Idea["difficulty"],
  string
> = {
  Easy:
    "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
  Medium:
    "bg-amber-50 text-amber-950 dark:bg-amber-950/35 dark:text-amber-200",
  Hard: "bg-rose-50 text-rose-950 dark:bg-rose-950/35 dark:text-rose-200",
};

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md dark:bg-stone-950">
      {idea.trending && (
        <span className="mb-3 inline-flex w-fit rounded border border-orange-200 bg-orange-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-orange-900 dark:border-orange-900/50 dark:bg-orange-950/50 dark:text-orange-200">
          Trending
        </span>
      )}

      <h2 className="font-serif text-lg font-semibold leading-snug text-[var(--foreground)]">
        {idea.title}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
        {idea.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-dashed border-[var(--border)] pt-4">
        <span className="rounded border border-[var(--border)] bg-stone-50 px-2 py-0.5 text-xs font-medium text-[var(--foreground)] dark:bg-stone-900">
          {idea.category}
        </span>
        <span
          className={`rounded px-2 py-0.5 text-xs font-semibold ${difficultyStyles[idea.difficulty]}`}
        >
          {idea.difficulty}
        </span>
      </div>
    </article>
  );
}
