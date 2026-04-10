"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/FilterBar";
import { GenerateIdeaModal } from "@/components/GenerateIdeaModal";
import { Hero } from "@/components/Hero";
import { IdeaGrid } from "@/components/IdeaGrid";
import { SampleSummary } from "@/components/SampleSummary";
import { ScopeCallout } from "@/components/ScopeCallout";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import { StatsBar } from "@/components/StatsBar";
import { TrustRow } from "@/components/TrustRow";
import { ValueColumns } from "@/components/ValueColumns";
import type { Category, Difficulty } from "@/data/ideas";
import { ideas as allIdeas } from "@/data/ideas";

function matchesSearch(
  query: string,
  title: string,
  description: string,
  category: string,
) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    title.toLowerCase().includes(q) ||
    description.toLowerCase().includes(q) ||
    category.toLowerCase().includes(q)
  );
}

const sampleIdea = allIdeas.find((i) => i.id === "1") ?? allIdeas[0]!;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [generateOpen, setGenerateOpen] = useState(false);
  const [generateModalKey, setGenerateModalKey] = useState(0);

  const filtered = useMemo(() => {
    return allIdeas.filter((idea) => {
      if (category !== "All" && idea.category !== category) return false;
      if (difficulty !== "All" && idea.difficulty !== difficulty)
        return false;
      return matchesSearch(
        searchQuery,
        idea.title,
        idea.description,
        idea.category,
      );
    });
  }, [searchQuery, category, difficulty]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    category !== "All" ||
    difficulty !== "All";

  function clearFilters() {
    setSearchQuery("");
    setCategory("All");
    setDifficulty("All");
  }

  return (
    <div className="flex min-h-full flex-col bg-[var(--background)]">
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onGenerateClick={() => {
            setGenerateModalKey((k) => k + 1);
            setGenerateOpen(true);
          }}
        />
        <TrustRow />
        <ValueColumns />
        <StatsBar />
        <ScopeCallout />
        <SampleSummary idea={sampleIdea} />

        <section
          id="catalog"
          aria-labelledby="catalog-heading"
          className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--background)]"
        >
          <FilterBar
            category={category}
            difficulty={difficulty}
            onCategoryChange={setCategory}
            onDifficultyChange={setDifficulty}
          />

          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="catalog-heading"
                  className="font-serif text-2xl font-semibold text-[var(--foreground)]"
                >
                  Catalog
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Showing {filtered.length} of {allIdeas.length} ideas with your
                  filters. The grid below updates live as you search and refine.
                </p>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="shrink-0 self-start rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-stone-50 dark:bg-stone-950 dark:hover:bg-stone-900 sm:self-auto"
                >
                  Clear search &amp; filters
                </button>
              )}
            </div>
            <IdeaGrid
              ideas={filtered}
              onClearFilters={clearFilters}
              showClearWhenEmpty={hasActiveFilters}
            />
          </div>
        </section>
      </main>

      <SiteFooter />

      {generateOpen && (
        <GenerateIdeaModal
          key={generateModalKey}
          onClose={() => setGenerateOpen(false)}
          pool={allIdeas}
        />
      )}
    </div>
  );
}
