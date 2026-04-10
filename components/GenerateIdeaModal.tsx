"use client";

import { useEffect, useRef, useState } from "react";
import type { Idea } from "@/data/ideas";

type GenerateIdeaModalProps = {
  onClose: () => void;
  pool: Idea[];
};

const LOADING_MS_MIN = 2000;
const LOADING_MS_MAX = 3000;

function randomFromPool(pool: Idea[], excludeId?: string): Idea {
  const candidates = excludeId
    ? pool.filter((i) => i.id !== excludeId)
    : [...pool];
  const list = candidates.length > 0 ? candidates : pool;
  return list[Math.floor(Math.random() * list.length)]!;
}

export function GenerateIdeaModal({ onClose, pool }: GenerateIdeaModalProps) {
  const [phase, setPhase] = useState<"loading" | "result">("loading");
  const [generated, setGenerated] = useState<Idea | null>(null);
  const spinTimerRef = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delay =
      LOADING_MS_MIN +
      Math.random() * (LOADING_MS_MAX - LOADING_MS_MIN);
    spinTimerRef.current = window.setTimeout(() => {
      setGenerated(randomFromPool(pool));
      setPhase("result");
      spinTimerRef.current = null;
    }, delay);
    return () => {
      if (spinTimerRef.current !== null) {
        window.clearTimeout(spinTimerRef.current);
        spinTimerRef.current = null;
      }
    };
  }, [pool]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  function generateAnother(previousId?: string) {
    if (spinTimerRef.current !== null) {
      window.clearTimeout(spinTimerRef.current);
    }
    setPhase("loading");
    setGenerated(null);
    const delay =
      LOADING_MS_MIN +
      Math.random() * (LOADING_MS_MAX - LOADING_MS_MIN);
    spinTimerRef.current = window.setTimeout(() => {
      setGenerated(randomFromPool(pool, previousId));
      setPhase("result");
      spinTimerRef.current = null;
    }, delay);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-stone-950/50 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="generate-modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-md rounded-lg border border-[var(--border)] bg-white p-6 shadow-xl outline-none ring-2 ring-transparent ring-offset-2 ring-offset-white focus-visible:ring-stone-400/80 dark:bg-stone-950 dark:ring-offset-stone-950"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="generate-modal-title"
            className="font-serif text-xl font-semibold text-[var(--foreground)]"
          >
            Generate idea
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[var(--muted)] transition-colors hover:bg-stone-100 hover:text-[var(--foreground)] dark:hover:bg-stone-900"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {phase === "loading" && (
          <div className="mt-8 flex flex-col items-center py-4">
            <Spinner />
            <p className="mt-4 text-center text-sm text-[var(--muted)]">
              Pulling one idea from the pile…
            </p>
          </div>
        )}

        {phase === "result" && generated && (
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
              Your idea
            </p>
            <h3 className="font-serif mt-2 text-xl font-semibold text-[var(--foreground)]">
              {generated.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {generated.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-[var(--border)] pt-4">
              <span className="rounded border border-[var(--border)] bg-stone-50 px-2 py-0.5 text-xs font-medium text-[var(--foreground)] dark:bg-stone-900">
                {generated.category}
              </span>
              <span className="rounded bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-950 dark:bg-amber-950/40 dark:text-amber-200">
                {generated.difficulty}
              </span>
            </div>
            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => generateAnother(generated.id)}
                className="flex-1 rounded-md border border-[var(--border)] bg-white py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-stone-50 dark:bg-stone-950 dark:hover:bg-stone-900"
              >
                Another idea
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-md bg-stone-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div
      className="h-11 w-11 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--foreground)]"
      role="status"
      aria-label="Loading"
    />
  );
}
