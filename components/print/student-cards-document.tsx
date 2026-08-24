import { PdfCover } from "@/components/print/pdf-cover";
import { cards, getStation, levelLabels } from "@/lib/cards";
import { splitLines } from "@/lib/format";
import { cn } from "@/lib/utils";

export function StudentCardsDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        kicker="ערכת הדפסה · לגזירה בכיתה"
        title="כרטיסיות חקירה לתלמידים"
        subtitle="25 כרטיסיות בלי תשובות. בכל כרטיסיה יש משימה לקבוצה ורמז מעורר חשיבה. גזרו לפי המסגרת המקווקוות."
      />
      <div className="grid gap-4 print:gap-5 sm:grid-cols-1">
        {cards.map((card) => {
          const station = getStation(card.station);
          return (
            <article
              key={card.id}
              className="print-card break-inside-avoid rounded-[28px] border-2 border-dashed border-stone-400 bg-white p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-bold text-white",
                    station.color,
                  )}
                >
                  {station.shortName}
                </span>
                <span className="text-xs text-stone-500">
                  כרטיסיה {card.id} · {levelLabels[card.level]}
                </span>
              </div>
              <p className="mt-3 text-2xl">{card.emoji}</p>
              <h2 className="mt-1 font-heading text-xl font-bold">{card.title}</h2>
              <div className="mt-3 space-y-1 text-[16px] leading-7">
                {splitLines(card.prompt).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-3">
                <p className="text-xs font-bold text-amber-900">רמז לקבוצה</p>
                <p className="mt-1 text-sm leading-6">{card.hint}</p>
              </div>
              <p className="mt-3 text-xs text-stone-500">
                רשמו מסקנה בדף התיעוד לפני שתבדקו עם המורה.
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
