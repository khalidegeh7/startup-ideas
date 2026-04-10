import type { Idea } from "@/data/ideas";

type SampleSummaryProps = {
  idea: Idea;
};

function fitScore(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return 62 + (h % 28);
}

function verdictFor(idea: Idea): { label: string; why: string } {
  if (idea.difficulty === "Easy") {
    return {
      label: "Strong candidate",
      why: "Scope looks contained and the wedge is easy to explain—still verify distribution.",
    };
  }
  if (idea.difficulty === "Hard") {
    return {
      label: "High effort",
      why: "The idea can work, but execution surface area is large—budget time for ops and edge cases.",
    };
  }
  return {
    label: "Borderline opportunity",
    why: "The story works on paper, but differentiation and GTM still need a honest second look.",
  };
}

export function SampleSummary({ idea }: SampleSummaryProps) {
  const score = fitScore(idea.id);
  const verdict = verdictFor(idea);

  return (
    <section
      id="sample"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
          Sample summary
        </p>
        <h2 className="font-serif mt-2 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
          What one idea read looks like
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          The worked example below shows the real layout—verdict block, fit score,
          numbers strip, and risk flags—using illustrative figures only.
        </p>

        <div className="mt-10 rounded-lg border border-[var(--border)] bg-white shadow-sm dark:bg-stone-950">
          <div className="border-b border-[var(--border)] px-5 py-4 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Listing
            </p>
            <p className="mt-1 font-medium text-[var(--foreground)]">
              {idea.category} · {idea.title}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--muted)]">
              catalog.startupideas.app/…/{idea.id}
            </p>
          </div>

          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2">
            <div className="bg-white p-5 dark:bg-stone-950">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                Fit score
              </p>
              <p className="mt-2 font-serif text-3xl font-semibold tabular-nums text-[var(--foreground)]">
                {score}
                <span className="text-lg font-normal text-[var(--muted)]">
                  /100
                </span>
              </p>
            </div>
            <div className="bg-white p-5 dark:bg-stone-950">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                Idea verdict
              </p>
              <p className="mt-2 font-semibold text-[var(--foreground)]">
                {verdict.label}
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] px-5 py-5 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Why
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
              {verdict.why}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">
                Biggest risk ·{" "}
              </span>
              Competition and positioning are still unknown until you talk to ten
              users.
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--foreground)]">
                Next step ·{" "}
              </span>
              Run a one-week landing test and validate willingness to pay before you
              wire payments.
            </p>
          </div>

          <div className="border-t border-[var(--border)] px-5 py-5 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Numbers in one place
            </p>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="text-xs text-[var(--muted)]">Time to MVP (illustrative)</dt>
                <dd className="mt-1 font-semibold tabular-nums text-[var(--foreground)]">
                  4–8 weeks
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--muted)]">Primary wedge</dt>
                <dd className="mt-1 font-semibold text-[var(--foreground)]">
                  {idea.category}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--muted)]">Difficulty</dt>
                <dd className="mt-1 font-semibold text-[var(--foreground)]">
                  {idea.difficulty}
                </dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-[var(--border)] px-5 py-5 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              Risk flags
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-[var(--muted)]">
              <li>Distribution still unproven at small scale</li>
              <li>Margin assumptions are thin if acquisition costs rise</li>
              <li>Regulatory or data handling may apply—verify for your region</li>
              <li>Incumbent substitutes are “good enough” for many users</li>
            </ul>
          </div>

          <div className="border-t border-[var(--border)] bg-stone-50 px-5 py-4 sm:px-6 dark:bg-stone-900/50">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              In plain English: enough to decide your next hour—not enough to ship
              without your own checks and professional advice where you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
