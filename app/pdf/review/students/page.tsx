import { ReviewStudentCardsDocument } from "@/components/print/review-student-cards-document";

export default function PdfReviewStudentsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <ReviewStudentCardsDocument />
    </div>
  );
}
