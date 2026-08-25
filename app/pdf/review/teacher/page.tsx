import { ReviewTeacherKeyDocument } from "@/components/print/review-teacher-key-document";

export default function PdfReviewTeacherPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <ReviewTeacherKeyDocument />
    </div>
  );
}
