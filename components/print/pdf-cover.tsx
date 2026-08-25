import { cn } from "@/lib/utils";

const variants = {
  inquiry: {
    frame: "border-teal-800 bg-gradient-to-br from-teal-700 to-emerald-800",
    kicker: "text-teal-100",
    subtitle: "text-teal-50",
    foot: "text-teal-100",
  },
  review: {
    frame: "border-orange-900 bg-gradient-to-br from-orange-600 to-violet-800",
    kicker: "text-orange-100",
    subtitle: "text-orange-50",
    foot: "text-orange-100",
  },
  summary: {
    frame: "border-indigo-900 bg-gradient-to-br from-indigo-700 to-slate-800",
    kicker: "text-indigo-100",
    subtitle: "text-indigo-50",
    foot: "text-indigo-100",
  },
} as const;

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
  variant?: keyof typeof variants;
}) {
  const theme = variants[variant];
  return (
    <section
      className={cn(
        "pdf-cover mb-8 flex min-h-[240px] flex-col justify-between rounded-[32px] border-2 p-8 text-white print:mb-0 print:min-h-[260mm] print:break-after-page",
        theme.frame,
      )}
    >
      <p className={cn("text-sm font-semibold tracking-wide", theme.kicker)}>
        {kicker}
      </p>
      <div>
        <p className="text-5xl">{emoji}</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className={cn("mt-4 max-w-xl text-lg leading-8", theme.subtitle)}>
          {subtitle}
        </p>
      </div>
      <p className={cn("text-sm", theme.foot)}>מבצר המספרים · כיתות ג׳–ד׳</p>
    </section>
  );
}
