import { SummaryTeacherKeyDocument } from "@/components/print/summary-teacher-key-document";

export default function PdfSummaryTeacherPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <SummaryTeacherKeyDocument />
    </div>
  );
}
