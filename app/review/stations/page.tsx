import { ReviewNav } from "@/components/review-nav";
import { StationPreview } from "@/components/station-preview";
import { reviewCardsForStation, reviewStations } from "@/lib/review-cards";

export default function ReviewStationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <ReviewNav current="/review/stations" />
      <p className="text-sm font-semibold text-orange-800">
        מסלול חזרה · עבודה בקבוצות
      </p>
      <h1 className="mt-1 font-heading text-3xl font-bold">חמש תחנות בפארק</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        כל תחנה מיועדת ל־5 תלמידים. עבדו על הכרטיסיות, רשמו תובנה בדרכון, קבלו
        חותמת מפקד — ועברו עם הפעמון.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviewStations.map((station) => (
          <StationPreview
            key={station.id}
            href={`/review/stations/${station.id}`}
            shortName={station.shortName}
            description={station.description}
            color={station.color}
            badge={station.badge}
            soft={station.soft}
            cardCount={reviewCardsForStation(station.id).length}
            groupLabel="5 תלמידים"
          />
        ))}
      </div>
    </div>
  );
}
