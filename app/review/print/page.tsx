import Link from "next/link";
import { PdfDownloads } from "@/components/pdf-downloads";
import { PrintButton } from "@/components/print-button";
import { ReviewLessonPlanDocument } from "@/components/print/review-lesson-plan-document";
import { ReviewRecordSheetsDocument } from "@/components/print/review-record-sheets-document";
import { ReviewStudentCardsDocument } from "@/components/print/review-student-cards-document";
import { ReviewTeacherKeyDocument } from "@/components/print/review-teacher-key-document";
import { ReviewNav } from "@/components/review-nav";
import { buttonVariants } from "@/components/ui/button";
import { reviewPdfFiles } from "@/lib/pdfs";
import { cn } from "@/lib/utils";

const packs = [
  { id: "students", label: "כרטיסיות לתלמידים" },
  { id: "teacher", label: "מפתח למורה" },
  { id: "sheet", label: "דרכון ודפי תחנה" },
  { id: "lesson", label: "מערך שיעור" },
] as const;

export default async function ReviewPrintPage({
  searchParams,
}: {
  searchParams: Promise<{ pack?: string }>;
}) {
  const { pack: rawPack } = await searchParams;
  const pack = packs.find((item) => item.id === rawPack)?.id ?? "students";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="no-print mb-8">
        <ReviewNav current="/review/print" />
        <p className="text-sm font-semibold text-orange-800">מסלול חזרה</p>
        <h1 className="mt-1 font-heading text-3xl font-bold">הורדה והדפסה</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          הורידו את ארבעת קבצי פארק האתגרים, או הציגו על המסך והדפיסו מכאן.
          למסלול החקירה עברו ל
          <Link href="/print" className="font-medium text-teal-800 underline">
            הדפסת החקירה
          </Link>
          {" · "}
          לסיכום עברו ל
          <Link href="/summary/print" className="font-medium text-teal-800 underline">
            הדפסת קיר הסיכום
          </Link>
          .
        </p>
        <PdfDownloads files={reviewPdfFiles} className="mt-6" />
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
            href={`/review/print?pack=${item.id}`}
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

      {pack === "students" ? <ReviewStudentCardsDocument /> : null}
      {pack === "teacher" ? <ReviewTeacherKeyDocument /> : null}
      {pack === "sheet" ? <ReviewRecordSheetsDocument /> : null}
      {pack === "lesson" ? <ReviewLessonPlanDocument /> : null}
    </div>
  );
}
