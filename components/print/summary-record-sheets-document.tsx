import { PdfCover } from "@/components/print/pdf-cover";
import { summaryCardsForStation, summaryStations } from "@/lib/summary-cards";
import { cn } from "@/lib/utils";

export function SummaryRecordSheetsDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        variant="summary"
        emoji="🧱"
        kicker="עבודה בקבוצות · סיכום דרך עבודה"
        title="דפי תוצר וקיר הכיתה"
        subtitle="דף תוצר לכל תחנה, תבנית לשלושת חלקי הקיר, ופתק יציאה לכל תלמיד."
      />

      <section className="print-card mb-6 break-inside-avoid rounded-[28px] border-2 border-indigo-400 bg-indigo-50 p-6 print:break-after-page">
        <h2 className="font-heading text-2xl font-bold">תבנית קיר הכיתה</h2>
        <p className="mt-2 text-sm text-stone-600">
          חלקו בריסטול לשלושה חלקים. כל קבוצה ממלאת את חלקה בטוש עבה.
        </p>
        <div className="mt-5 grid gap-4">
          {[
            {
              title: "א · ספר החוקים",
              lines: "ששת החוקים · ציור גרביים · דוגמה אחת",
            },
            {
              title: "ב · מפת הבתים",
              lines: "ארבעה בתים · מספר לדוגמה · משפט על אפס",
            },
            {
              title: "ג · הגשר",
              lines: "משפט אחד שמקשר ערך מקום לזוגיות · דוגמה",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-indigo-200 bg-white p-4"
            >
              <p className="font-heading font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-stone-600">{item.lines}</p>
              <div className="mt-3 h-24 rounded-xl border border-dashed border-stone-300" />
            </article>
          ))}
        </div>
      </section>

      <section className="print-card mb-6 break-inside-avoid rounded-[28px] border-2 border-violet-300 bg-violet-50 p-6 print:break-after-page">
        <h2 className="font-heading text-2xl font-bold">פתק יציאה</h2>
        <p className="mt-2 text-sm">שם: ________  קבוצה: ________</p>
        <div className="mt-4 space-y-3">
          {[
            "דבר אחד שאני בטוח בו:",
            "דבר אחד שעדיין מבלבל אותי:",
            "דוגמה אחת שאני יכול ללמד חבר:",
          ].map((label) => (
            <label key={label} className="block text-sm font-medium">
              {label}
              <div className="mt-1 h-14 rounded-xl border border-violet-200 bg-white" />
            </label>
          ))}
        </div>
      </section>

      <div className="space-y-6">
        {summaryStations.map((station) => {
          const pack = summaryCardsForStation(station.id);
          return (
            <section
              key={station.id}
              className="print-card break-inside-avoid rounded-[28px] border-2 border-stone-300 bg-white p-6 print:break-after-page"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-heading text-2xl font-bold">
                  דף תוצר · {station.shortName}
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
                    <p className="mt-2 text-xs text-stone-500">התוצר שלנו:</p>
                    <div className="mt-1 h-16 rounded-xl border border-dashed border-stone-300 bg-white" />
                  </li>
                ))}
              </ol>
              <div className="mt-5">
                <p className="font-medium">משפט אחד שנשתף בגלריה:</p>
                <div className="mt-2 h-16 rounded-xl border border-stone-300" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
