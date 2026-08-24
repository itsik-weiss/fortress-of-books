import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { splitLines } from "@/lib/format";
import { getStation, levelLabels, type WorkCard } from "@/lib/cards";
import { cn } from "@/lib/utils";

export function CardExplorer({
  cards,
  index,
  showAnswer,
  basePath,
}: {
  cards: WorkCard[];
  index: number;
  showAnswer: boolean;
  basePath: string;
}) {
  if (cards.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
        אין כרטיסיות בתחנה הזו.
      </div>
    );
  }

  const safeIndex = Math.min(Math.max(index, 0), cards.length - 1);
  const card = cards[safeIndex];
  const station = getStation(card.station);
  const query = (nextIndex: number, answer: boolean) =>
    `${basePath}?i=${nextIndex}${answer ? "&side=a" : ""}`;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-3 flex items-center justify-between gap-2 text-sm">
        <Badge className={cn("rounded-full border-0", station.badge)}>
          {station.shortName}
        </Badge>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full">
            {levelLabels[card.level]}
          </Badge>
          <span className="text-muted-foreground">
            {safeIndex + 1} מתוך {cards.length}
          </span>
        </div>
      </div>

      <article
        className={cn(
          "min-h-[340px] rounded-[28px] border p-6 shadow-[0_18px_50px_-24px_rgba(15,80,70,0.45)] sm:min-h-[380px] sm:p-8",
          showAnswer
            ? "border-teal-200 bg-white"
            : `border-stone-200 bg-gradient-to-br ${station.soft}`,
        )}
      >
        {showAnswer ? (
          <>
            <p className="text-sm font-semibold tracking-wide text-teal-800">
              תשובה למורה / לבדיקה
            </p>
            <p className="mt-3 font-heading text-xl font-bold sm:text-2xl">
              {card.emoji} {card.title}
            </p>
            <div className="mt-4 space-y-2 text-lg leading-8 text-stone-800">
              {splitLines(card.answer).map((line) => (
                <p key={line} className="font-medium">
                  {line}
                </p>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-4xl">{card.emoji}</p>
            <p className="mt-3 font-heading text-xl font-bold text-stone-900 sm:text-2xl">
              {card.title}
            </p>
            <div className="mt-4 space-y-2 text-lg leading-8 text-stone-800">
              {splitLines(card.prompt).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </>
        )}
      </article>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Link
          href={query(safeIndex, !showAnswer)}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          {showAnswer ? "חזרה לשאלה" : "הצג תשובה"}
        </Link>
        <details className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-stone-800 open:shadow-sm">
          <summary className="cursor-pointer font-medium text-amber-950">
            רמז לקבוצה
          </summary>
          <p className="mt-2 leading-7">{card.hint}</p>
        </details>
      </div>

      <div className="mt-6 flex items-center justify-between gap-2">
        {safeIndex === 0 ? (
          <span className={cn(buttonVariants({ variant: "outline", size: "lg" }), "pointer-events-none opacity-50")}>
            <ChevronRight data-icon="inline-start" />
            הקודם
          </span>
        ) : (
          <Link
            href={query(safeIndex - 1, false)}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            <ChevronRight data-icon="inline-start" />
            הקודם
          </Link>
        )}
        {safeIndex >= cards.length - 1 ? (
          <span className={cn(buttonVariants({ size: "lg" }), "pointer-events-none opacity-50")}>
            הבא
            <ChevronLeft data-icon="inline-end" />
          </span>
        ) : (
          <Link
            href={query(safeIndex + 1, false)}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            הבא
            <ChevronLeft data-icon="inline-end" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function parseCardQuery(searchParams: {
  i?: string | string[];
  side?: string | string[];
}) {
  const rawIndex = Array.isArray(searchParams.i) ? searchParams.i[0] : searchParams.i;
  const rawSide = Array.isArray(searchParams.side)
    ? searchParams.side[0]
    : searchParams.side;
  return {
    index: Math.max(0, Number.parseInt(rawIndex || "0", 10) || 0),
    showAnswer: rawSide === "a",
  };
}
