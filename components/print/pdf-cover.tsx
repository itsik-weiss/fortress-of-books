import { cn } from "@/lib/utils";

export function PdfCover({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="pdf-cover mb-8 flex min-h-[240px] flex-col justify-between rounded-[32px] border-2 border-teal-800 bg-gradient-to-br from-teal-700 to-emerald-800 p-8 text-white print:mb-0 print:min-h-[260mm] print:break-after-page">
      <p className="text-sm font-semibold tracking-wide text-teal-100">{kicker}</p>
      <div>
        <p className="text-5xl">🏰</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-teal-50">{subtitle}</p>
      </div>
      <p className={cn("text-sm text-teal-100")}>מבצר המספרים · כיתות ג׳–ד׳</p>
    </section>
  );
}
