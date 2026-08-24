import Link from "next/link";
import { notFound } from "next/navigation";
import { CardExplorer, parseCardQuery } from "@/components/card-explorer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  cardsForStation,
  stations,
  type StationId,
} from "@/lib/cards";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return stations.map((station) => ({ id: station.id }));
}

export default async function StationPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ i?: string; side?: string }>;
}) {
  const { id } = await params;
  const query = parseCardQuery(await searchParams);
  const station = stations.find((item) => item.id === id);
  if (!station) notFound();

  const pack = cardsForStation(station.id as StationId);

  return (
    <div className={cn("min-h-full bg-gradient-to-b", station.soft)}>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link
          href="/stations"
          className="text-sm font-medium text-stone-600 hover:text-stone-900"
        >
          ← כל התחנות
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge className={cn("rounded-full border-0 text-white", station.color)}>
            {station.shortName}
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            5 כרטיסיות · 4 תלמידים
          </Badge>
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold">{station.name}</h1>
        <p className="mt-2 max-w-2xl text-stone-700">{station.description}</p>
        <p className="mt-1 max-w-2xl font-medium text-stone-800">
          מטרה: {station.goal}
        </p>
        <p className="mt-2 text-sm text-stone-600">
          ציוד: {station.materials.join(" · ")}
        </p>
        <div className="mt-8">
          <CardExplorer
            cards={pack}
            index={query.index}
            showAnswer={query.showAnswer}
            basePath={`/stations/${station.id}`}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/print"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            להדפסת כרטיסיות התחנה
          </Link>
        </div>
      </div>
    </div>
  );
}
