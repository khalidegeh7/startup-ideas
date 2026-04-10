const columns = [
  {
    title: "A quick first pass",
    body: "Pull the headline pitch and category into one place—built for nights when you are skimming a long shortlist, not writing a deck for every tab.",
  },
  {
    title: "Same layout every time",
    body: "Every card follows one structure, so you can put two ideas side by side without rebuilding the same spreadsheet rows.",
  },
  {
    title: "Plain English",
    body: "Title, summary, tags, and difficulty—no jargon wall. That is the read.",
  },
];

export function ValueColumns() {
  return (
    <section
      id="how"
      className="scroll-mt-24 border-b border-[var(--border)] bg-white dark:bg-stone-950"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
                {col.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
