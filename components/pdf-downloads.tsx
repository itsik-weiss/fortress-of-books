import { FileDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { type PdfFile } from "@/lib/pdfs";
import { cn } from "@/lib/utils";

export function PdfDownloads({
  files,
  className,
}: {
  files: readonly PdfFile[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {files.map((file) => (
        <a
          key={file.slug}
          href={file.href}
          download={file.downloadName}
          className="flex items-start gap-3 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className={cn(buttonVariants({ size: "icon" }), "mt-0.5 shrink-0")}>
            <FileDown />
          </span>
          <span>
            <span className="block font-heading text-base font-bold text-stone-900">
              {file.title}
            </span>
            <span className="mt-1 block text-sm leading-6 text-stone-600">
              {file.description}
            </span>
            <span className="mt-2 inline-block text-sm font-medium text-teal-800">
              הורדת PDF
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
