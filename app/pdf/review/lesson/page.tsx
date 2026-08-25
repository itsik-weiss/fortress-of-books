import { ReviewLessonPlanDocument } from "@/components/print/review-lesson-plan-document";

export default function PdfReviewLessonPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <ReviewLessonPlanDocument />
    </div>
  );
}
