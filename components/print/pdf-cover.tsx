import { cn } from "@/lib/utils";

export function PdfCover({
  kicker,
  title,
  subtitle,
  emoji = "🏰",
  variant = "inquiry",
}: {
  kicker: string;
  title: string;
  subtitle: string;
  emoji?: string;
  variant?: "inquiry" | "review";
}) {
  return (
    <section
      className={cn(
        "pdf-cover mb-8 flex min-h-[240px] flex-col justify-between rounded-[32px] border-2 p-8 text-white print:mb-0 print:min-h-[260mm] print:break-after-page",
        variant === "review"
          ? "border-orange-900 bg-gradient-to-br from-orange-600 to-violet-800"
          : "border-teal-800 bg-gradient-to-br from-teal-700 to-emerald-800",
      )}
    >
      <p
        className={cn(
          "text-sm font-semibold tracking-wide",
          variant === "review" ? "text-orange-100" : "text-teal-100",
        )}
      >
        {kicker}
      </p>
      <div>
        <p className="text-5xl">{emoji}</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight">
          {title}
        </h1>
        <p
          className={cn(
            "mt-4 max-w-xl text-lg leading-8",
            variant === "review" ? "text-orange-50" : "text-teal-50",
          )}
        >
          {subtitle}
        </p>
      </div>
      <p
        className={cn(
          "text-sm",
          variant === "review" ? "text-orange-100" : "text-teal-100",
        )}
      >
        מבצר המספרים · כיתות ג׳–ד׳
      </p>
    </section>
  );
}
