import Link from "next/link";
import { PdfDownloads } from "@/components/pdf-downloads";
import { PrintButton } from "@/components/print-button";
import { LessonPlanDocument } from "@/components/print/lesson-plan-document";
import { RecordSheetsDocument } from "@/components/print/record-sheets-document";
import { StudentCardsDocument } from "@/components/print/student-cards-document";
import { TeacherKeyDocument } from "@/components/print/teacher-key-document";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const packs = [
  { id: "students", label: "כרטיסיות לתלמידים" },
  { id: "teacher", label: "מפתח למורה" },
  { id: "sheet", label: "דף תיעוד" },
  { id: "lesson", label: "מערך שיעור" },
] as const;

export default async function PrintPage({
  searchParams,
}: {
  searchParams: Promise<{ pack?: string }>;
}) {
  const { pack: rawPack } = await searchParams;
  const pack =
    packs.find((item) => item.id === rawPack)?.id ?? "students";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="no-print mb-8">
        <p className="text-sm font-semibold text-teal-800">קבצי PDF מוכנים</p>
        <h1 className="mt-1 font-heading text-3xl font-bold">הורדה והדפסה</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          הורידו את ארבעת הקבצים לכיתה, או הציגו על המסך והדפיסו מכאן.
        </p>
        <PdfDownloads className="mt-6" />
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
            href={`/print?pack=${item.id}`}
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

      {pack === "students" ? <StudentCardsDocument /> : null}
      {pack === "teacher" ? <TeacherKeyDocument /> : null}
      {pack === "sheet" ? <RecordSheetsDocument /> : null}
      {pack === "lesson" ? <LessonPlanDocument /> : null}
    </div>
  );
}
