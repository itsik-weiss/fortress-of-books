import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cardsForStation, type Station } from "@/lib/cards";
import { cn } from "@/lib/utils";

export function StationPreview({ station }: { station: Station }) {
  const pack = cardsForStation(station.id);

  return (
    <Link
      href={`/stations/${station.id}`}
      className={cn(
        "group flex flex-col rounded-[28px] border border-stone-200 bg-gradient-to-br p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
        station.soft,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm",
            station.color,
          )}
        >
          {pack.length}
        </span>
        <Badge className={cn("rounded-full border-0", station.badge)}>
          4 תלמידים
        </Badge>
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold text-stone-900">
        {station.shortName}
      </h3>
      <p className="mt-2 text-sm leading-6 text-stone-700">{station.description}</p>
      <p className="mt-4 text-sm font-medium text-teal-800 group-hover:underline">
        כניסה לתחנה ←
      </p>
    </Link>
  );
}
