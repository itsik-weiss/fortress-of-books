"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Castle } from "lucide-react";

const links = [
  { href: "/cards", label: "כרטיסיות" },
  { href: "/stations", label: "תחנות" },
  { href: "/teacher", label: "מערך שיעור" },
  { href: "/print", label: "הדפסה" },
];

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname.startsWith("/pdf")) return null;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-stone-200/80 bg-[color-mix(in_oklch,var(--background),white_40%)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-teal-900">
          <span className="flex size-9 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
            <Castle className="size-5" />
          </span>
          <span className="hidden sm:inline">מבצר המספרים</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-stone-700 transition-colors hover:bg-teal-50 hover:text-teal-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
