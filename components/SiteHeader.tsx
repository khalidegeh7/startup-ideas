"use client";

import { useEffect, useId, useState } from "react";

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#catalog", label: "Catalog" },
  { href: "#sample", label: "Sample" },
  { href: "#how", label: "How it works" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_92%,white)] backdrop-blur-md dark:bg-[color-mix(in_oklab,var(--background)_88%,black)]">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-[3.75rem] sm:px-6">
        <a
          href="#overview"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]"
          onClick={() => setOpen(false)}
        >
          Startup Ideas
        </a>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-white text-[var(--foreground)] shadow-sm transition-colors hover:bg-stone-50 dark:bg-stone-900 dark:hover:bg-stone-800 sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <nav
        id={menuId}
        aria-label="Primary mobile"
        aria-hidden={!open}
        className={`border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_96%,white)] dark:bg-[color-mix(in_oklab,var(--background)_94%,black)] sm:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto max-w-5xl space-y-1 px-4 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-stone-100 dark:hover:bg-stone-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function IconMenu() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
    </svg>
  );
}
