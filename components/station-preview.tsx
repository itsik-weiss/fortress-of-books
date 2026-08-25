import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function StationPreview({
  href,
  shortName,
  description,
  color,
  badge,
  soft,
  cardCount,
  groupLabel = "4 תלמידים",
}: {
  href: string;
  shortName: string;
  description: string;
  color: string;
  badge: string;
  soft: string;
  cardCount: number;
  groupLabel?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-[28px] border border-stone-200 bg-gradient-to-br p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
        soft,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm",
            color,
          )}
        >
          {cardCount}
        </span>
        <Badge className={cn("rounded-full border-0", badge)}>{groupLabel}</Badge>
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold text-stone-900">
        {shortName}
      </h3>
      <p className="mt-2 text-sm leading-6 text-stone-700">{description}</p>
      <p className="mt-4 text-sm font-medium text-teal-800 group-hover:underline">
        כניסה לתחנה ←
      </p>
    </Link>
  );
}
