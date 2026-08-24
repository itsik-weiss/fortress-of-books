import Link from "next/link";
import { BookOpen, Printer, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { StationPreview } from "@/components/station-preview";
import { cards, stations } from "@/lib/cards";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -start-24 top-0 size-72 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -end-16 top-24 size-72 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-teal-800">
            כיתות ג׳–ד׳ · 5 קבוצות של 4 תלמידים · 25 כרטיסיות
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-stone-900 sm:text-5xl">
            כרטיסיות חקירה במבצר המספרים
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            ערכה צבעונית לעבודה בקבוצות: התלמידים מגלים בעצמם את חוקיות הזוגי
            והאי-זוגי בחיבור ובכפל, ומבינים את משמעות ערך הספרה לפי מקומה במספר.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stations" className={cn(buttonVariants({ size: "lg" }))}>
              <Users data-icon="inline-start" />
              פתיחת תחנות הקבוצות
            </Link>
            <Link
              href="/cards"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <BookOpen data-icon="inline-start" />
              כל הכרטיסיות
            </Link>
            <Link
              href="/print"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <Printer data-icon="inline-start" />
              הדפסה לכיתה
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "לא חושפים את החוק",
              text: "כל כרטיסיה פותחת במשימת בדיקה. התלמידים מסיקים מסקנה, ורק אז בודקים.",
            },
            {
              title: "שלוש רמות חשיבה",
              text: "זיהוי, חקירה בקבוצה, והסקת מסקנות על שרשראות בלי לחשב תוצאה ענקית.",
            },
            {
              title: `${cards.length} כרטיסיות מדורגות`,
              text: "חמש תחנות צבעוניות, חמש כרטיסיות בכל אחת, עם רמז מעורר חשיבה מאחור.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h2 className="font-heading text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-stone-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold">חמש תחנות סבב</h2>
            <p className="mt-1 text-stone-600">
              כל קבוצה מקבלת צבע, חמש כרטיסיות ודף תיעוד. אחרי 12–15 דקות — מעבר.
            </p>
          </div>
          <Link href="/teacher" className={cn(buttonVariants({ variant: "ghost" }))}>
            למערך השיעור המלא
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((station) => (
            <StationPreview key={station.id} station={station} />
          ))}
        </div>
      </section>
    </div>
  );
}
