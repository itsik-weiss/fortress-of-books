import { LessonPlanDocument } from "@/components/print/lesson-plan-document";

export default function PdfLessonPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <LessonPlanDocument />
    </div>
  );
}
