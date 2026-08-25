import Link from "next/link";
import { BookOpen, Printer, Sparkles, Users } from "lucide-react";
import { PdfDownloads } from "@/components/pdf-downloads";
import { buttonVariants } from "@/components/ui/button";
import { StationPreview } from "@/components/station-preview";
import { cards, cardsForStation, stations } from "@/lib/cards";
import { inquiryPdfFiles, reviewPdfFiles } from "@/lib/pdfs";
import { reviewCards, reviewCardsForStation, reviewStations } from "@/lib/review-cards";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -start-24 top-0 size-72 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -end-16 top-24 size-72 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-teal-800">
            כיתות ג׳–ד׳ · שני מסלולי עבודה בקבוצות
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-stone-900 sm:text-5xl">
            מבצר המספרים
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            ערכה אחת, שני סוגי שיעורים: חקירה שמקדמת רמות חשיבה, ופארק אתגרים
            לשימור ידע, חזרה ושינון במשימות חווייתיות.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[32px] border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-teal-800">מסלול 1 · רמות חשיבה</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-stone-900">
              חקירה והסקת מסקנות
            </h2>
            <p className="mt-3 leading-7 text-stone-700">
              5 קבוצות של 4 תלמידים מגלות בעצמן את חוקיות הזוגי והאי־זוגי ואת
              ערך הספרה לפי מקומה. לא חושפים את החוק — מסיקים אותו.
            </p>
            <p className="mt-2 text-sm text-stone-600">
              {cards.length} כרטיסיות · שלוש רמות: זיהוי, חקירה, הסקת מסקנות
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/stations" className={cn(buttonVariants())}>
                <Users data-icon="inline-start" />
                תחנות החקירה
              </Link>
              <Link href="/cards" className={cn(buttonVariants({ variant: "outline" }))}>
                <BookOpen data-icon="inline-start" />
                כרטיסיות
              </Link>
            </div>
          </article>

          <article className="rounded-[32px] border border-orange-200 bg-gradient-to-br from-orange-50 to-violet-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-orange-800">מסלול 2 · שימור ידע</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-stone-900">
              חזרה, שינון ויישום
            </h2>
            <p className="mt-3 leading-7 text-stone-700">
              פארק אתגרים מתמטי: קזינו ספרות, זירת בלשים, חנות שטרות, מסלול
              קפיצות עשרוני וסדנת ממציאים. משימות חווייתיות ליישום החומר.
            </p>
            <p className="mt-2 text-sm text-stone-600">
              {reviewCards.length} כרטיסיות · 5 תלמידים בתחנה · 7 דקות לסבב
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href="/review" className={cn(buttonVariants())}>
                <Sparkles data-icon="inline-start" />
                פארק האתגרים
              </Link>
              <Link
                href="/review/cards"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <BookOpen data-icon="inline-start" />
                כרטיסיות חזרה
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold">תחנות החקירה</h2>
            <p className="mt-1 text-stone-600">
              כל קבוצה מקבלת צבע, חמש כרטיסיות ודף תיעוד. אחרי 12–15 דקות — מעבר.
            </p>
          </div>
          <Link href="/teacher" className={cn(buttonVariants({ variant: "ghost" }))}>
            למערך החקירה
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((station) => (
            <StationPreview
              key={station.id}
              href={`/stations/${station.id}`}
              shortName={station.shortName}
              description={station.description}
              color={station.color}
              badge={station.badge}
              soft={station.soft}
              cardCount={cardsForStation(station.id).length}
              groupLabel="4 תלמידים"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold">פארק האתגרים · חזרה</h2>
            <p className="mt-1 text-stone-600">
              חמש תחנות חווייתיות על מבנה עשרוני. כל קבוצה אוספת חותמת בדרכון.
            </p>
          </div>
          <Link
            href="/review/teacher"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            למערך החזרה
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewStations.map((station) => (
            <StationPreview
              key={station.id}
              href={`/review/stations/${station.id}`}
              shortName={station.shortName}
              description={station.description}
              color={station.color}
              badge={station.badge}
              soft={station.soft}
              cardCount={reviewCardsForStation(station.id).length}
              groupLabel="5 תלמידים"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="mb-5">
          <h2 className="font-heading text-2xl font-bold">PDF · מסלול החקירה</h2>
          <p className="mt-1 text-stone-600">כרטיסיות, מפתח, דפי תיעוד ומערך שיעור.</p>
        </div>
        <PdfDownloads files={inquiryPdfFiles} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold">PDF · מסלול החזרה</h2>
            <p className="mt-1 text-stone-600">
              כרטיסיות חווייתיות, מפתח, דרכון תחנות ומערך פארק האתגרים.
            </p>
          </div>
          <Link href="/print" className={cn(buttonVariants({ variant: "ghost" }))}>
            <Printer data-icon="inline-start" />
            כל ההדפסות
          </Link>
        </div>
        <PdfDownloads files={reviewPdfFiles} />
      </section>
    </div>
  );
}
