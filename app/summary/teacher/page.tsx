import Link from "next/link";
import { SummaryNav } from "@/components/summary-nav";
import { buttonVariants } from "@/components/ui/button";
import { summaryStations } from "@/lib/summary-cards";
import { cn } from "@/lib/utils";

const rotation = [
  ["ספר החוקים", "מפת הבתים", "הגשר", "המומחים", "קיר הכיתה"],
  ["מפת הבתים", "הגשר", "המומחים", "קיר הכיתה", "ספר החוקים"],
];

export default function SummaryTeacherPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <SummaryNav current="/summary/teacher" />
      <p className="text-sm font-semibold text-indigo-800">למורה · מסלול סיכום</p>
      <h1 className="mt-1 font-heading text-3xl font-bold">
        מערך שיעור · סיכום דרך עבודה
      </h1>
      <p className="mt-3 leading-8 text-stone-700">
        שיעור סיכום לכיתות ג׳–ד׳, כ־45–50 דקות. אין הרצאה על הלוח: 5 קבוצות של 4
        תלמידים מייצרות את קיר הסיכום של היחידה — ערך מקום, חוקי זוגי ואי־זוגי,
        והגשר ביניהם.
      </p>

      <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מטרות</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>לנסח את ששת חוקי החיבור והכפל במילים של התלמידים.</li>
          <li>להסביר ספרה מול ערך, אפס שומר־מקום, והזזה פי 10.</li>
          <li>
            לחבר בין הנושאים: למה מספיק להביט באחדות — כי שאר הבתים כפולות של
            10.
          </li>
          <li>להפריך סיכום שגוי בדוגמה, ולפרסם תוצר ציבורי על קיר הכיתה.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מה מכינים</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          {summaryStations.map((station) => (
            <li key={station.id}>
              <span className="font-medium">{station.shortName}:</span>{" "}
              {station.materials.join(", ")}
            </li>
          ))}
          <li>בריסטול לקיר, פתקיות יציאה, מקום תלייה בגובה התלמידים.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מהלך השיעור</h2>
        <ol className="mt-3 space-y-4">
          {[
            {
              t: "5 דקות · חוזה הסיכום",
              d: "אומרים בכנות: היום לא לומדים חוק חדש. המורה לא תכתוב את הסיכום. כל קבוצה אחראית לחלק מהקיר. מי שמנסח — זוכר.",
            },
            {
              t: "12–15 דקות · סבב 1 · ייצור",
              d: "כל קבוצה בתחנה. חוק ברזל: קודם כותבים תוצר על הדף, ורק אז פותחים רמז או תשובה לדוגמה. בתחנת הגשר אל תוותרו על המשפט שמקשר בין הנושאים.",
            },
            {
              t: "12–15 דקות · סבב 2 · השלמה וביקורת",
              d: "מעבר לתחנה הבאה. הקבוצה קוראת את התוצר שהושאר, מתקנת טעות אחת, ומוסיפה דוגמה. בקיר הכיתה מתחילים לתלות.",
            },
            {
              t: "10 דקות · גלריה ומליאה",
              d: "הליכה סביב הקיר. כל קבוצה משמיעה משפט אחד מנאום 30 השניות. המורה לא משכתבת — רק מצביעה על גשר חסר או חוק שגוי, והכיתה מתקנת.",
            },
          ].map((item) => (
            <li key={item.t} className="rounded-2xl bg-stone-50 p-4">
              <p className="font-heading font-bold">{item.t}</p>
              <p className="mt-1 leading-7 text-stone-700">{item.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6 overflow-x-auto rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">שני סבבים</h2>
        <table className="mt-4 w-full min-w-[640px] text-right text-sm">
          <thead>
            <tr className="border-b text-stone-500">
              <th className="py-2">סבב</th>
              <th>קבוצה 1</th>
              <th>קבוצה 2</th>
              <th>קבוצה 3</th>
              <th>קבוצה 4</th>
              <th>קבוצה 5</th>
            </tr>
          </thead>
          <tbody>
            {rotation.map((row, index) => (
              <tr key={index} className="border-b last:border-0">
                <td className="py-3 font-bold">סבב {index + 1}</td>
                {row.map((cell) => (
                  <td key={`${index}-${cell}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-sm text-stone-600">
          בשיעור כפול הוסיפו סבב שלישי כדי שכל קבוצה תפגוש גם את הגשר וגם את קיר
          הכיתה.
        </p>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">טיפים להנחיה</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>אל תתקנו ניסוח שגוי מיד. בקשו דוגמה שמפריכה אותו.</li>
          <li>אם חסר הגשר, הקיר מספר שני סיפורים נפרדים. זה הרגע להתעקש.</li>
          <li>פתקי היציאה עם בלבול אמיתי הם תכנון השיעור הבא — אל תזרקו אותם.</li>
          <li>התשובות בכרטיסיות הן דוגמה לניסוח, לא נוסח חובה להעתיק.</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/summary/stations" className={cn(buttonVariants({ size: "lg" }))}>
          לפתיחת התחנות
        </Link>
        <Link
          href="/summary/print"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          להורדת PDF
        </Link>
        <Link
          href="/review/teacher"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
        >
          למערך החזרה
        </Link>
      </div>
    </div>
  );
}
