import Link from "next/link";
import {
  asFlipCards,
  CardExplorer,
  parseCardQuery,
} from "@/components/card-explorer";
import { SummaryNav } from "@/components/summary-nav";
import { buttonVariants } from "@/components/ui/button";
import {
  summaryCards,
  summaryLevelLabels,
  summaryStations,
} from "@/lib/summary-cards";
import { cn } from "@/lib/utils";

export default async function SummaryCardsPage({
  searchParams,
}: {
  searchParams: Promise<{ i?: string; side?: string }>;
}) {
  const query = parseCardQuery(await searchParams);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <SummaryNav current="/summary/cards" />
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-indigo-800">
            מסלול סיכום · כל הכרטיסיות
          </p>
          <h1 className="mt-1 font-heading text-3xl font-bold">
            חפיסת סיכום דרך עבודה
          </h1>
          <p className="mt-2 max-w-2xl text-stone-600">
            הציגו תשובה לדוגמה אחרי שהקבוצה כתבה תוצר. הרמז עוזר לנסח, לא מעתיק.
          </p>
        </div>
        <Link
          href="/summary/stations"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          לפי תחנות
        </Link>
      </div>
      <CardExplorer
        cards={asFlipCards(summaryCards, summaryStations, summaryLevelLabels)}
        index={query.index}
        showAnswer={query.showAnswer}
        basePath="/summary/cards"
      />
    </div>
  );
}
