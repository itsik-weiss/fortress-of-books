import { RecordSheetsDocument } from "@/components/print/record-sheets-document";

export default function PdfSheetsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <RecordSheetsDocument />
    </div>
  );
}
