import { ReviewRecordSheetsDocument } from "@/components/print/review-record-sheets-document";

export default function PdfReviewSheetsPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <ReviewRecordSheetsDocument />
    </div>
  );
}
