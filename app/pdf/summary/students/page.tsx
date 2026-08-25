import { SummaryStudentCardsDocument } from "@/components/print/summary-student-cards-document";

export default function PdfSummaryStudentsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <SummaryStudentCardsDocument />
    </div>
  );
}
