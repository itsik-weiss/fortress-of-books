"use client";

import { useState } from "react";
import { Lightbulb, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { splitLines } from "@/lib/format";
import {
  getStation,
  levelLabels,
  type WorkCard,
} from "@/lib/cards";
import { cn } from "@/lib/utils";

export function FlipCard({
  card,
  index,
  total,
}: {
  card: WorkCard;
  index: number;
  total: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const station = getStation(card.station);

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
            {index + 1} מתוך {total}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        className="group block w-full text-start"
        aria-label={flipped ? "הצג שאלה" : "הצג תשובה"}
      >
        <div className="[perspective:1400px]">
          <div
            className={cn(
              "relative min-h-[340px] w-full rounded-[28px] transition-transform duration-500 [transform-style:preserve-3d] sm:min-h-[380px]",
              flipped && "[transform:rotateY(180deg)]",
            )}
          >
            <article
              className={cn(
                "absolute inset-0 overflow-hidden rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,80,70,0.45)] [backface-visibility:hidden] sm:p-8",
                `bg-gradient-to-br ${station.soft}`,
              )}
            >
              <p className="text-4xl">{card.emoji}</p>
              <p className="mt-3 font-heading text-xl font-bold text-stone-900 sm:text-2xl">
                {card.title}
              </p>
              <div className="mt-4 space-y-2 text-lg leading-8 text-stone-800">
                {splitLines(card.prompt).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-8 text-sm text-stone-500">לחצו כדי להפוך לתשובה</p>
            </article>

            <article className="absolute inset-0 overflow-auto rounded-[28px] border border-teal-200 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(15,80,70,0.45)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-teal-800">
                תשובה למורה / לבדיקה
              </p>
              <div className="mt-4 space-y-2 text-lg leading-8 text-stone-800">
                {splitLines(card.answer).map((line) => (
                  <p key={line} className="font-medium">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-sm text-stone-500">לחצו כדי לחזור לשאלה</p>
            </article>
          </div>
        </div>
      </button>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowHint((value) => !value)}
        >
          <Lightbulb data-icon="inline-start" />
          {showHint ? "הסתר רמז" : "רמז לקבוצה"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setFlipped(false);
            setShowHint(false);
          }}
        >
          <RotateCcw data-icon="inline-start" />
          איפוס כרטיסיה
        </Button>
      </div>

      {showHint ? (
        <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-stone-800">
          <p className="text-sm font-semibold text-amber-900">רמז מעורר חשיבה</p>
          <p className="mt-1 leading-7">{card.hint}</p>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">
          קודם נסו בקבוצה. הרמז והתשובה מחכים מאחורי הכרטיסיה.
        </p>
      )}
    </div>
  );
}
