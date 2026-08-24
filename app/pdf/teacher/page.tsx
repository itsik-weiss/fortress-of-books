import { TeacherKeyDocument } from "@/components/print/teacher-key-document";

export default function PdfTeacherPage() {
  return (
    <div className="bg-white p-6 print:p-0">
      <TeacherKeyDocument />
    </div>
  );
}
