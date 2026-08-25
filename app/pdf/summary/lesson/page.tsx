import { SummaryLessonPlanDocument } from "@/components/print/summary-lesson-plan-document";

export default function PdfSummaryLessonPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <SummaryLessonPlanDocument />
    </div>
  );
}
