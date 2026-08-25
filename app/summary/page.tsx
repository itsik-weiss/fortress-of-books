import Link from "next/link";
import { BookOpen, Printer, Users } from "lucide-react";
import { PdfDownloads } from "@/components/pdf-downloads";
import { StationPreview } from "@/components/station-preview";
import { SummaryNav } from "@/components/summary-nav";
import { buttonVariants } from "@/components/ui/button";
import { summaryPdfFiles } from "@/lib/pdfs";
import {
  summaryCards,
  summaryCardsForStation,
  summaryStations,
} from "@/lib/summary-cards";
import { cn } from "@/lib/utils";

export default function SummaryHomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <SummaryNav current="/summary" />
      <p className="text-sm font-semibold text-indigo-800">
        מסלול סיכום · דרך עבודה
      </p>
      <h1 className="mt-1 font-heading text-3xl font-bold sm:text-4xl">
        קיר הסיכום של הכיתה
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-700">
        היום המורה לא כותבת את הסיכום על הלוח. הקבוצות מנסחות חוקים, מוכיחות
        בדוגמה, מחברות בין ערך מקום לזוגיות — ותולות את התוצר על קיר הכיתה.
      </p>
      <p className="mt-2 text-sm text-stone-600">
        5 תחנות · 4 תלמידים · {summaryCards.length} כרטיסיות · ניסוח, הוכחה,
        פרסום
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/summary/stations" className={cn(buttonVariants({ size: "lg" }))}>
          <Users data-icon="inline-start" />
          פתיחת התחנות
        </Link>
        <Link
          href="/summary/cards"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <BookOpen data-icon="inline-start" />
          כל הכרטיסיות
        </Link>
        <Link
          href="/summary/print"
          className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
        >
          <Printer data-icon="inline-start" />
          הורדת PDF
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "לא משננים מהלוח",
            text: "סיכום נולד כשהקבוצה כותבת, מתקנת ומתלה. מי שמנסח חוק — באמת זוכר אותו.",
          },
          {
            title: "שלושה סוגי עבודה",
            text: "ניסוח במילים שלכם, הוכחה בדוגמה שמפריכה טעות, ופרסום לקיר ולמליאה.",
          },
          {
            title: "הגשר בין הנושאים",
            text: "ערך המקום מסביר למה מספיק להביט באחדות. זה לב יחידת הלימוד כולה.",
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
        <h2 className="font-heading text-2xl font-bold">חמש תחנות הסיכום</h2>
        <p className="mt-1 text-stone-600">
          כל תחנה מייצרת חלק מהקיר: חוקים, בתים, גשר, מומחים ופרסום.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryStations.map((station) => (
            <StationPreview
              key={station.id}
              href={`/summary/stations/${station.id}`}
              shortName={station.shortName}
              description={station.description}
              color={station.color}
              badge={station.badge}
              soft={station.soft}
              cardCount={summaryCardsForStation(station.id).length}
              groupLabel="4 תלמידים"
            />
          ))}
        </div>
      </section>

      <section className="mt-12 pb-8">
        <h2 className="font-heading text-2xl font-bold">קבצי PDF להדפסה</h2>
        <p className="mt-1 text-stone-600">
          כרטיסיות, מפתח למורה, דפי תוצר ומערך שיעור.
        </p>
        <PdfDownloads files={summaryPdfFiles} className="mt-5" />
      </section>
    </div>
  );
}
