import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/review", label: "פארק האתגרים" },
  { href: "/review/cards", label: "כרטיסיות" },
  { href: "/review/stations", label: "תחנות" },
  { href: "/review/teacher", label: "מערך שיעור" },
  { href: "/review/print", label: "הדפסה" },
];

export function ReviewNav({ current }: { current: string }) {
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
