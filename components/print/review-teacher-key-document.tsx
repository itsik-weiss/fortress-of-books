import { PdfCover } from "@/components/print/pdf-cover";
import { splitLines } from "@/lib/format";
import {
  getReviewStation,
  reviewCards,
  reviewLevelLabels,
} from "@/lib/review-cards";
import { cn } from "@/lib/utils";

export function ReviewTeacherKeyDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        variant="review"
        emoji="🔑"
        kicker="למורה בלבד · פארק האתגרים"
        title="מפתח תשובות · חזרה ושינון"
        subtitle="כל 25 המשימות החווייתיות עם השאלה, הרמז והתשובה. השתמשו בבדיקה אחרי שהקבוצה ניסתה בעצמה."
      />
      <div className="space-y-4">
        {reviewCards.map((card) => {
          const station = getReviewStation(card.station);
          return (
            <article
              key={card.id}
              className="print-card break-inside-avoid rounded-2xl border border-stone-300 bg-white p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-bold text-white",
                    station.color,
                  )}
                >
                  {card.id}. {station.shortName}
                </span>
                <span className="text-xs text-stone-500">
                  {reviewLevelLabels[card.level]}
                </span>
                <span className="font-heading font-bold">
                  {card.emoji} {card.title}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                {splitLines(card.prompt).join(" ")}
              </p>
              <p className="mt-2 text-sm text-amber-900">
                <span className="font-bold">רמז: </span>
                {card.hint}
              </p>
              <div className="mt-2 rounded-xl bg-orange-50 p-3 text-sm leading-7 text-orange-950">
                {splitLines(card.answer).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
