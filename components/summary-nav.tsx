import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/summary", label: "קיר הסיכום" },
  { href: "/summary/cards", label: "כרטיסיות" },
  { href: "/summary/stations", label: "תחנות" },
  { href: "/summary/teacher", label: "מערך שיעור" },
  { href: "/summary/print", label: "הדפסה" },
];

export function SummaryNav({ current }: { current: string }) {
  return (
    <nav className="mb-8 flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            buttonVariants({
              variant: current === link.href ? "default" : "outline",
              size: "sm",
            }),
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
