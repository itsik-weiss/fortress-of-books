import { PdfCover } from "@/components/print/pdf-cover";
import { reviewCardsForStation, reviewStations } from "@/lib/review-cards";
import { cn } from "@/lib/utils";

const passportStations = [
  {
    id: "casino",
    title: "תחנה 1: הקזינו",
    prompt: "המספר הגדול ביותר שהרכבתי: ________",
    emoji: "🎲",
  },
  {
    id: "detectives",
    title: "תחנה 2: הבלשים",
    prompt: "פיצחתי את תיק חקירה מספר: ________",
    emoji: "🔍",
  },
  {
    id: "shop",
    title: "תחנה 3: החנות",
    prompt: "ייצגתי מחיר בעזרת ____ שטרות.",
    emoji: "🛒",
  },
  {
    id: "track",
    title: "תחנה 4: המסלול",
    prompt: "כשמגדילים פי 10, קופצים _____ (שמאלה/ימינה).",
    emoji: "🏃",
  },
  {
    id: "inventors",
    title: "תחנה 5: הממציאים",
    prompt: "המספר הסודי שחיברנו: ________",
    emoji: "🎨",
  },
] as const;

export function ReviewRecordSheetsDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        variant="review"
        emoji="📘"
        kicker="עבודה בקבוצות · פארק האתגרים"
        title="דרכון ודפי תחנה"
        subtitle="דרכון אישי לכל תלמיד, דף תיעוד לכל תחנה, וכרטיס חידה לסדנת הממציאים."
      />

      <section className="print-card mb-6 break-inside-avoid rounded-[28px] border-2 border-sky-400 bg-sky-50 p-6 print:break-after-page">
        <h2 className="font-heading text-2xl font-bold">
          דרכון התחנות האישי של: ________
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          אספו חותמת או חתימת מפקד בכל תחנה, וכתבו תובנה קצרה.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {passportStations.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-sky-200 bg-white p-4"
            >
              <p className="font-heading font-bold">
                {item.emoji} {item.title}
              </p>
              <p className="mt-2 text-sm">{item.prompt}</p>
              <p className="mt-3 text-sm text-stone-500">תובנה קצרה:</p>
              <div className="mt-1 h-12 rounded-xl border border-dashed border-stone-300" />
              <p className="mt-3 text-sm">חתימת מפקד: ☐</p>
            </article>
          ))}
        </div>
      </section>

      <section className="print-card mb-6 break-inside-avoid rounded-[28px] border-2 border-dashed border-orange-400 bg-orange-50 p-6 print:break-after-page">
        <h2 className="font-heading text-2xl font-bold">כרטיס החידה של קבוצה: ________</h2>
        <p className="mt-2 text-sm text-stone-700">
          בחרו מספר סודי בן 4 ספרות וחברו 3 רמזים לקבוצה הבאה.
        </p>
        <div className="mt-4 space-y-3">
          {[
            "רמז 1 (על ספרת האלפים/מאות):",
            "רמז 2 (על קשר בין ספרות):",
            "רמז 3 (מה קורה כשמזיזים/משנים ספרה):",
          ].map((label) => (
            <label key={label} className="block text-sm font-medium">
              {label}
              <div className="mt-1 h-14 rounded-xl border border-orange-200 bg-white" />
            </label>
          ))}
          <label className="block text-sm font-medium">
            🔑 המספר הסודי (פתרון מוסתר למורה):
            <div className="mt-1 h-12 rounded-xl border border-orange-300 bg-white" />
          </label>
        </div>
      </section>

      <div className="space-y-6">
        {reviewStations.map((station) => {
          const pack = reviewCardsForStation(station.id);
          return (
            <section
              key={station.id}
              className="print-card break-inside-avoid rounded-[28px] border-2 border-stone-300 bg-white p-6 print:break-after-page"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-heading text-2xl font-bold">
                  דף תחנה · {station.shortName}
                </h2>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-sm font-bold text-white",
                    station.color,
                  )}
                >
                  5 תלמידים
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
                    <p className="mt-2 text-xs text-stone-500">התוצאה / התובנה שלנו:</p>
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
