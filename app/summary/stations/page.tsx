import { StationPreview } from "@/components/station-preview";
import { SummaryNav } from "@/components/summary-nav";
import { summaryCardsForStation, summaryStations } from "@/lib/summary-cards";

export default function SummaryStationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <SummaryNav current="/summary/stations" />
      <p className="text-sm font-semibold text-indigo-800">
        מסלול סיכום · עבודה בקבוצות
      </p>
      <h1 className="mt-1 font-heading text-3xl font-bold">חמש תחנות לקיר</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        כל תחנה מיועדת ל־4 תלמידים. כתבו תוצר, בדקו מול הרמז, והשאירו חלק מהקיר
        לקבוצה הבאה או למליאה.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {summaryStations.map((station) => (
          <StationPreview
            key={station.id}
            href={`/summary/stations/${station.id}`}
            shortName={station.shortName}
            description={station.description}
            color={station.color}
            badge={station.badge}
            soft={station.soft}
            cardCount={summaryCardsForStation(station.id).length}
            groupLabel="4 תלמידים"
          />
        ))}
      </div>
    </div>
  );
}
