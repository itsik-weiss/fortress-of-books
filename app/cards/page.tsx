import Link from "next/link";
import { CardExplorer, parseCardQuery } from "@/components/card-explorer";
import { buttonVariants } from "@/components/ui/button";
import { cards } from "@/lib/cards";
import { cn } from "@/lib/utils";

export default async function CardsPage({
  searchParams,
}: {
  searchParams: Promise<{ i?: string; side?: string }>;
}) {
  const query = parseCardQuery(await searchParams);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-teal-800">כל הכרטיסיות</p>
          <h1 className="mt-1 font-heading text-3xl font-bold">
            חפיסת חקירה דיגיטלית
          </h1>
          <p className="mt-2 max-w-2xl text-stone-600">
            הציגו תשובה אחרי שהקבוצה ניסחה מסקנה. הרמז עוזר בלי לחשוף את החוק.
          </p>
        </div>
        <Link
          href="/stations"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          לפי תחנות
        </Link>
      </div>
      <CardExplorer
        cards={cards}
        index={query.index}
        showAnswer={query.showAnswer}
        basePath="/cards"
      />
    </div>
  );
}
