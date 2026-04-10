export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white dark:bg-stone-950">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="font-serif text-base font-semibold text-[var(--foreground)]">
          Startup Ideas
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Startup Ideas is for a quick, comparable read from a catalog—before you
          commit time to a full build. Not financial, tax, or legal advice.
        </p>
        <p className="mt-6 text-xs text-[var(--muted)]">
          Demo build · Illustrative ideas only
        </p>
        <p className="mt-2 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Startup Ideas
        </p>
      </div>
    </footer>
  );
}
