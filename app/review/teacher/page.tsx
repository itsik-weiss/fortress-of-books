import Link from "next/link";
import { ReviewNav } from "@/components/review-nav";
import { buttonVariants } from "@/components/ui/button";
import { reviewStations } from "@/lib/review-cards";
import { cn } from "@/lib/utils";

const rotation = [
  ["הקזינו", "הבלשים", "החנות", "המסלול", "הממציאים"],
  ["הבלשים", "החנות", "המסלול", "הממציאים", "הקזינו"],
  ["החנות", "המסלול", "הממציאים", "הקזינו", "הבלשים"],
  ["המסלול", "הממציאים", "הקזינו", "הבלשים", "החנות"],
  ["הממציאים", "הקזינו", "הבלשים", "החנות", "המסלול"],
];

export default function ReviewTeacherPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <ReviewNav current="/review/teacher" />
      <p className="text-sm font-semibold text-orange-800">למורה · מסלול חזרה</p>
      <h1 className="mt-1 font-heading text-3xl font-bold">
        מערך שיעור תחנות חווייתי · מבנה עשרוני
      </h1>
      <p className="mt-3 leading-8 text-stone-700">
        שיעור יישום ושינון לכיתות ג׳–ד׳, כ־45–50 דקות. הכיתה הופכת לפארק אתגרים
        מתמטי: 5 תחנות, 5 תלמידים בכל תחנה, 7 דקות עבודה ו־1–2 דקות מעבר עם
        פעמון. כל תלמיד אוסף חותמות בדרכון האישי.
      </p>

      <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מטרות</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>ליישם ערך מקום במספר בן 4 ספרות: אלפים, מאות, עשרות, אחדות.</li>
          <li>לבנות את המספר הגדול ביותר מתוך ספרות שמתגלות אחת־אחת.</li>
          <li>לייצג מחיר בשטרות בדרך מינימלית ובדרך גמישה חלופית.</li>
          <li>להסביר הזזה פי 10 ופי 100 כקפיצה בין בתים, לא כ״הוספת אפס סתם״.</li>
          <li>לנסח חידת ערך־מקום לקבוצה אחרת — שינון דרך יצירה.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מה מכינים</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          {reviewStations.map((station) => (
            <li key={station.id}>
              <span className="font-medium">{station.shortName}:</span>{" "}
              {station.materials.join(", ")}
            </li>
          ))}
          <li>דרכון תחנות לכל תלמיד, פעמון או טיימר, חותמת או חתימת מפקד בכל תחנה.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מהלך השיעור</h2>
        <ol className="mt-3 space-y-4">
          {[
            {
              t: "5 דקות · פתיחת הפארק",
              d: "מחלקים דרכונים. מסבירים: זאת לא חקירה חדשה — זה אתגר על מה שכבר למדנו. בכל תחנה עובדים 7 דקות, כותבים תובנה בדרכון, מקבלים חותמת, ועוברים עם הפעמון.",
            },
            {
              t: "7 דקות × 5 סבבים · התחנות",
              d: "כל קבוצה מתחילה בתחנה אחרת. אחרי 7 דקות — פעמון, 1–2 דקות מעבר, והקבוצה הבאה קוראת במהירות מה שהשאירו הממציאים או את דף המעקב בקזינו.",
            },
            {
              t: "5–8 דקות · מליאה",
              d: "שואלים: איפה שמתם ספרה קטנה בקזינו? מה קרה ל־435 כשהגדלנו פי 10? איך שילמתם 3,240 בשתי דרכים? קבוצה אחת מקריאה חידה שהמציאה.",
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
        <h2 className="font-heading text-xl font-bold">סיבוב מלא — כל הקבוצות בכל התחנות</h2>
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
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-sm text-stone-600">
          אם השיעור קצר יותר, עשו 3 סבבים בלבד והשלימו את שתי התחנות בשיעור הבא.
        </p>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">טיפים להנחיה</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>בקזינו: אחרי שכתבו ספרה — אסור למחוק. זה כל האתגר.</li>
          <li>במסלול: התלמידים הם הספרות. בלי תנועה על הרצפה קשה להרגיש את הקפיצה.</li>
          <li>בחנות: דרשו שתי דרכי תשלום לאותו מחיר, לא רק את המינימום.</li>
          <li>אם קבוצה נתקעת, פתחו רק את הרמז. התשובה שמורה למורה או לבדיקה בסוף.</li>
          <li>הממציאים חייבים מספר סודי אחד ויחיד שמתאים לשלושת הרמזים.</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/review/stations" className={cn(buttonVariants({ size: "lg" }))}>
          לפתיחת התחנות
        </Link>
        <Link
          href="/review/print"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          להורדת PDF
        </Link>
        <Link
          href="/summary/teacher"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
        >
          למערך הסיכום
        </Link>
      </div>
    </div>
  );
}
