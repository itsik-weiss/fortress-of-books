import Link from "next/link";
import { BookOpen, Printer, Users } from "lucide-react";
import { PdfDownloads } from "@/components/pdf-downloads";
import { ReviewNav } from "@/components/review-nav";
import { StationPreview } from "@/components/station-preview";
import { buttonVariants } from "@/components/ui/button";
import { reviewPdfFiles } from "@/lib/pdfs";
import {
  reviewCards,
  reviewCardsForStation,
  reviewStations,
} from "@/lib/review-cards";
import { cn } from "@/lib/utils";

export default function ReviewHomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <ReviewNav current="/review" />
      <p className="text-sm font-semibold text-orange-800">
        מסלול חזרה · שימור ידע
      </p>
      <h1 className="mt-1 font-heading text-3xl font-bold sm:text-4xl">
        פארק האתגרים המתמטי
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-700">
        עבודה בקבוצות ליישום החומר: מבנה עשרוני, ערך המקום, שטרות, והזזה פי 10
        ופי 100. לא מגלים חוק חדש — מתרגלים, משננים ומאתגרים את מה שכבר נלמד.
      </p>
      <p className="mt-2 text-sm text-stone-600">
        5 תחנות · 5 תלמידים בתחנה · {reviewCards.length} כרטיסיות · 7 דקות לסבב
        + מעבר
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/review/stations" className={cn(buttonVariants({ size: "lg" }))}>
          <Users data-icon="inline-start" />
          פתיחת התחנות
        </Link>
        <Link
          href="/review/cards"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <BookOpen data-icon="inline-start" />
          כל הכרטיסיות
        </Link>
        <Link
          href="/review/print"
          className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
        >
          <Printer data-icon="inline-start" />
          הורדת PDF
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "משימות חווייתיות",
            text: "קזינו ספרות, זירת בלשים, חנות שטרות, מסלול על הרצפה וסדנת ממציאי חידות.",
          },
          {
            title: "שינון דרך עשייה",
            text: "כל תחנה דורשת החלטה, תנועה או יצירה — לא דף תרגילים שקט.",
          },
          {
            title: "דרכון חותמות",
            text: "כל תלמיד אוסף חותמת מפקד תחנה ורושם תובנה קצרה לפני המעבר.",
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

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">חמש התחנות</h2>
        <p className="mt-1 text-stone-600">
          הקבוצות מסתובבות במעגל. בכל תחנה חמש כרטיסיות: תרגול, אתגר ויצירה.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="mt-12 pb-8">
        <h2 className="font-heading text-2xl font-bold">קבצי PDF להדפסה</h2>
        <p className="mt-1 text-stone-600">
          כרטיסיות לתלמידים, מפתח למורה, דרכון ודפי תחנה, ומערך השיעור.
        </p>
        <PdfDownloads files={reviewPdfFiles} className="mt-5" />
      </section>
    </div>
  );
}
