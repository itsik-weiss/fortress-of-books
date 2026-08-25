import Link from "next/link";
import {
  asFlipCards,
  CardExplorer,
  parseCardQuery,
} from "@/components/card-explorer";
import { ReviewNav } from "@/components/review-nav";
import { buttonVariants } from "@/components/ui/button";
import {
  reviewCards,
  reviewLevelLabels,
  reviewStations,
} from "@/lib/review-cards";
import { cn } from "@/lib/utils";

export default async function ReviewCardsPage({
  searchParams,
}: {
  searchParams: Promise<{ i?: string; side?: string }>;
}) {
  const query = parseCardQuery(await searchParams);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <ReviewNav current="/review/cards" />
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-orange-800">
            מסלול חזרה · כל הכרטיסיות
          </p>
          <h1 className="mt-1 font-heading text-3xl font-bold">
            חפיסת משימות חווייתיות
          </h1>
          <p className="mt-2 max-w-2xl text-stone-600">
            הציגו תשובה אחרי שהקבוצה ניסתה. הרמז דוחף לפעולה, בלי לקלקל את האתגר.
          </p>
        </div>
        <Link
          href="/review/stations"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          לפי תחנות
        </Link>
      </div>
      <CardExplorer
        cards={asFlipCards(reviewCards, reviewStations, reviewLevelLabels)}
        index={query.index}
        showAnswer={query.showAnswer}
        basePath="/review/cards"
      />
    </div>
  );
}
