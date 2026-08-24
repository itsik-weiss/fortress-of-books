import { StudentCardsDocument } from "@/components/print/student-cards-document";

export default function PdfStudentsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <StudentCardsDocument />
    </div>
  );
}
