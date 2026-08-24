import { PrintButton } from "@/components/print-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  cards,
  cardsForStation,
  getStation,
  levelLabels,
  stations,
} from "@/lib/cards";
import { splitLines } from "@/lib/format";
import { cn } from "@/lib/utils";

export default function PrintPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="no-print mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-teal-800">מוכן לגזירה</p>
          <h1 className="mt-1 font-heading text-3xl font-bold">הדפסת כרטיסיות</h1>
          <p className="mt-2 max-w-2xl text-stone-600">
            כרטיסיות התלמידים בלי תשובות, מפתח למורה, ודף תיעוד לכל קבוצה.
            בחרו לשונית ולחצו הדפסה.
          </p>
        </div>
        <PrintButton />
      </div>

      <Tabs defaultValue="students">
        <TabsList className="no-print mb-6">
          <TabsTrigger value="students">כרטיסיות לתלמידים</TabsTrigger>
          <TabsTrigger value="teacher">מפתח למורה</TabsTrigger>
          <TabsTrigger value="sheet">דף תיעוד</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <div className="print-grid grid gap-4 sm:grid-cols-2">
            {cards.map((card) => {
              const station = getStation(card.station);
              return (
                <article
                  key={card.id}
                  className="print-card break-inside-avoid rounded-3xl border-2 border-stone-300 bg-white p-5"
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
                  <h2 className="mt-1 font-heading text-lg font-bold">
                    {card.title}
                  </h2>
                  <div className="mt-3 space-y-1 text-[15px] leading-7">
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
        </TabsContent>

        <TabsContent value="teacher">
          <div className="space-y-3">
            {cards.map((card) => {
              const station = getStation(card.station);
              return (
                <article
                  key={card.id}
                  className="print-card break-inside-avoid rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={cn("rounded-full border-0", station.badge)}>
                      {card.id}. {station.shortName}
                    </Badge>
                    <span className="font-heading font-bold">{card.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-stone-600">
                    {splitLines(card.prompt).join(" ")}
                  </p>
                  <div className="mt-2 rounded-xl bg-teal-50 p-3 text-sm leading-7 text-teal-950">
                    {splitLines(card.answer).map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="sheet">
          <div className="grid gap-6">
            {stations.map((station) => {
              const pack = cardsForStation(station.id);
              return (
                <section
                  key={station.id}
                  className="print-card break-inside-avoid rounded-3xl border-2 border-stone-300 bg-white p-6"
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
                        <p className="mt-2 text-xs text-stone-500">
                          המסקנה שלנו:
                        </p>
                        <div className="mt-1 h-12 rounded-xl border border-dashed border-stone-300 bg-white" />
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
