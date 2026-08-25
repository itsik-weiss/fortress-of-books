import { SummaryRecordSheetsDocument } from "@/components/print/summary-record-sheets-document";

export default function PdfSummarySheetsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <SummaryRecordSheetsDocument />
    </div>
  );
}
