import { StationPreview } from "@/components/station-preview";
import { stations } from "@/lib/cards";

export default function StationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-semibold text-teal-800">עבודה בקבוצות</p>
      <h1 className="mt-1 font-heading text-3xl font-bold">חמש תחנות צבעוניות</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        כל תחנה מיועדת לקבוצה של 4 תלמידים. בחרו תחנה, עבדו על חמש הכרטיסיות,
        ורשמו מסקנה אחת לשתף במליאה.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stations.map((station) => (
          <StationPreview key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
}
