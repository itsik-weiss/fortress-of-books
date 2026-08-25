import Link from "next/link";
import { PdfDownloads } from "@/components/pdf-downloads";
import { PrintButton } from "@/components/print-button";
import { SummaryLessonPlanDocument } from "@/components/print/summary-lesson-plan-document";
import { SummaryRecordSheetsDocument } from "@/components/print/summary-record-sheets-document";
import { SummaryStudentCardsDocument } from "@/components/print/summary-student-cards-document";
import { SummaryTeacherKeyDocument } from "@/components/print/summary-teacher-key-document";
import { SummaryNav } from "@/components/summary-nav";
import { buttonVariants } from "@/components/ui/button";
import { summaryPdfFiles } from "@/lib/pdfs";
import { cn } from "@/lib/utils";

const packs = [
  { id: "students", label: "כרטיסיות לתלמידים" },
  { id: "teacher", label: "מפתח למורה" },
  { id: "sheet", label: "דפי תוצר וקיר" },
  { id: "lesson", label: "מערך שיעור" },
] as const;

export default async function SummaryPrintPage({
  searchParams,
}: {
  searchParams: Promise<{ pack?: string }>;
}) {
  const { pack: rawPack } = await searchParams;
  const pack = packs.find((item) => item.id === rawPack)?.id ?? "students";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="no-print mb-8">
        <SummaryNav current="/summary/print" />
        <p className="text-sm font-semibold text-indigo-800">מסלול סיכום</p>
        <h1 className="mt-1 font-heading text-3xl font-bold">הורדה והדפסה</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          הורידו את ארבעת קבצי הסיכום, או הציגו על המסך והדפיסו מכאן. לחקירה עברו
          ל
          <Link href="/print" className="font-medium text-teal-800 underline">
            הדפסת החקירה
          </Link>
          {" · "}
          לחזרה עברו ל
          <Link href="/review/print" className="font-medium text-teal-800 underline">
            הדפסת הפארק
          </Link>
          .
        </p>
        <PdfDownloads files={summaryPdfFiles} className="mt-6" />
      </div>

      <div className="no-print mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl font-bold">תצוגה להדפסה מהדפדפן</h2>
          <p className="mt-1 text-stone-600">
            בחרו ערכה ולחצו הדפסה אם אין לכם את קובץ ה-PDF בהישג יד.
          </p>
        </div>
        <PrintButton />
      </div>

      <nav className="no-print mb-6 flex flex-wrap gap-2">
        {packs.map((item) => (
          <Link
            key={item.id}
            href={`/summary/print?pack=${item.id}`}
            className={cn(
              buttonVariants({
                variant: pack === item.id ? "default" : "outline",
                size: "lg",
              }),
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {pack === "students" ? <SummaryStudentCardsDocument /> : null}
      {pack === "teacher" ? <SummaryTeacherKeyDocument /> : null}
      {pack === "sheet" ? <SummaryRecordSheetsDocument /> : null}
      {pack === "lesson" ? <SummaryLessonPlanDocument /> : null}
    </div>
  );
}
