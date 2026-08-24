import { PdfCover } from "@/components/print/pdf-cover";
import { cardsForStation, stations } from "@/lib/cards";
import { cn } from "@/lib/utils";

export function RecordSheetsDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        kicker="עבודה בקבוצות"
        title="דפי תיעוד לקבוצה"
        subtitle="דף אחד לכל תחנה. הקבוצה רושמת שמות, מסקנה לכל כרטיסיה, ומשפט אחד לשיתוף במליאה."
      />
      <div className="space-y-6">
        {stations.map((station) => {
          const pack = cardsForStation(station.id);
          return (
            <section
              key={station.id}
              className="print-card break-inside-avoid rounded-[28px] border-2 border-stone-300 bg-white p-6 print:break-after-page"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-heading text-2xl font-bold">
                  דף תיעוד · {station.shortName}
                </h2>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-sm font-bold text-white",
                    station.color,
                  )}
                >
                  4 תלמידים
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-sm">
                  שמות הקבוצה
                  <div className="mt-1 h-10 rounded-xl border border-stone-300" />
                </label>
                <label className="text-sm">
                  תאריך
                  <div className="mt-1 h-10 rounded-xl border border-stone-300" />
                </label>
              </div>
              <p className="mt-4 text-sm text-stone-600">{station.goal}</p>
              <ol className="mt-4 space-y-4">
                {pack.map((card, index) => (
                  <li key={card.id} className="rounded-2xl bg-stone-50 p-3">
                    <p className="font-medium">
                      {index + 1}. {card.emoji} {card.title}
                    </p>
                    <p className="mt-2 text-xs text-stone-500">המסקנה שלנו:</p>
                    <div className="mt-1 h-14 rounded-xl border border-dashed border-stone-300 bg-white" />
                  </li>
                ))}
              </ol>
              <div className="mt-5">
                <p className="font-medium">משפט אחד שנשתף במליאה:</p>
                <div className="mt-2 h-16 rounded-xl border border-stone-300" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
