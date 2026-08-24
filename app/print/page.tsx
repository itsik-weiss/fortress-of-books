import { PdfDownloads } from "@/components/pdf-downloads";
import { PrintButton } from "@/components/print-button";
import { LessonPlanDocument } from "@/components/print/lesson-plan-document";
import { RecordSheetsDocument } from "@/components/print/record-sheets-document";
import { StudentCardsDocument } from "@/components/print/student-cards-document";
import { TeacherKeyDocument } from "@/components/print/teacher-key-document";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PrintPage() {
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
            בחרו לשונית ולחצו הדפסה אם אין לכם את קובץ ה-PDF בהישג יד.
          </p>
        </div>
        <PrintButton />
      </div>

      <Tabs defaultValue="students">
        <TabsList className="no-print mb-6">
          <TabsTrigger value="students">כרטיסיות לתלמידים</TabsTrigger>
          <TabsTrigger value="teacher">מפתח למורה</TabsTrigger>
          <TabsTrigger value="sheet">דף תיעוד</TabsTrigger>
          <TabsTrigger value="lesson">מערך שיעור</TabsTrigger>
        </TabsList>
        <TabsContent value="students">
          <StudentCardsDocument />
        </TabsContent>
        <TabsContent value="teacher">
          <TeacherKeyDocument />
        </TabsContent>
        <TabsContent value="sheet">
          <RecordSheetsDocument />
        </TabsContent>
        <TabsContent value="lesson">
          <LessonPlanDocument />
        </TabsContent>
      </Tabs>
    </div>
  );
}
