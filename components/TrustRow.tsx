const items = [
  {
    title: "Built with founders",
    body: "Cards are written for a quick skim—role and category only, so you judge the substance, not a logo wall.",
  },
  {
    title: "Same layout every time",
    body: "Every idea follows one structure, so you can compare two concepts side by side without rebuilding columns.",
  },
  {
    title: "Narrow on purpose",
    body: "A structured first read from a catalog—not fundraising advice, incorporation, or legal guidance.",
  },
];

export function TrustRow() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h2
          id="trust-heading"
          className="font-serif text-xl font-semibold text-[var(--foreground)]"
        >
          What you can verify here
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {items.map((item) => (
            <li key={item.title}>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
