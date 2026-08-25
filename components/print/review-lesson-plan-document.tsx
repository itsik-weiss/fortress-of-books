import { PdfCover } from "@/components/print/pdf-cover";
import { reviewStations } from "@/lib/review-cards";

const rotation = [
  ["הקזינו", "הבלשים", "החנות", "המסלול", "הממציאים"],
  ["הבלשים", "החנות", "המסלול", "הממציאים", "הקזינו"],
  ["החנות", "המסלול", "הממציאים", "הקזינו", "הבלשים"],
  ["המסלול", "הממציאים", "הקזינו", "הבלשים", "החנות"],
  ["הממציאים", "הקזינו", "הבלשים", "החנות", "המסלול"],
];

export function ReviewLessonPlanDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        variant="review"
        emoji="🎢"
        kicker="למורה · פארק האתגרים"
        title="מערך שיעור תחנות חווייתי · מבנה עשרוני"
        subtitle="שיעור יישום ושינון לכיתות ג׳–ד׳, כ־45–50 דקות. 5 תחנות, 5 תלמידים בתחנה, 7 דקות לסבב ודרכון חותמות."
      />

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">מטרות</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>ליישם ערך מקום במספר בן 4 ספרות: אלפים, מאות, עשרות, אחדות.</li>
          <li>לבנות את המספר הגדול ביותר מתוך ספרות שמתגלות אחת־אחת.</li>
          <li>לייצג מחיר בשטרות בדרך מינימלית ובדרך גמישה חלופית.</li>
          <li>להסביר הזזה פי 10 ופי 100 כקפיצה בין בתים.</li>
          <li>לנסח חידת ערך־מקום לקבוצה אחרת.</li>
        </ul>
      </section>

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">מה מכינים</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          {reviewStations.map((station) => (
            <li key={station.id}>
              <span className="font-medium">{station.shortName}:</span>{" "}
              {station.materials.join(", ")}
            </li>
          ))}
          <li>דרכון תחנות לכל תלמיד, פעמון או טיימר, חותמת או חתימת מפקד.</li>
        </ul>
      </section>

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">מהלך השיעור</h2>
        <ol className="mt-3 space-y-4">
          {[
            {
              t: "5 דקות · פתיחת הפארק",
              d: "מחלקים דרכונים. מסבירים: זאת לא חקירה חדשה — זה אתגר על מה שכבר למדנו. בכל תחנה 7 דקות, תובנה בדרכון, חותמת, ומעבר עם הפעמון.",
            },
            {
              t: "7 דקות × 5 סבבים · התחנות",
              d: "כל קבוצה מתחילה בתחנה אחרת. אחרי 7 דקות — פעמון, 1–2 דקות מעבר.",
            },
            {
              t: "5–8 דקות · מליאה",
              d: "איפה שמתם ספרה קטנה? מה קרה ל־435 כשהגדלנו פי 10? איך שילמתם 3,240 בשתי דרכים? קבוצה אחת מקריאה חידה שהמציאה.",
            },
          ].map((item) => (
            <li key={item.t} className="rounded-2xl bg-stone-50 p-4">
              <p className="font-heading font-bold">{item.t}</p>
              <p className="mt-1 leading-7 text-stone-700">{item.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">סיבוב מלא</h2>
        <table className="mt-4 w-full text-right text-sm">
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
      </section>

      <section className="print-card break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">טיפים להנחיה</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>בקזינו: אחרי שכתבו ספרה — אסור למחוק.</li>
          <li>במסלול: התלמידים הם הספרות. בלי תנועה על הרצפה קשה להרגיש את הקפיצה.</li>
          <li>בחנות: דרשו שתי דרכי תשלום לאותו מחיר.</li>
          <li>אם קבוצה נתקעת, פתחו רק את הרמז.</li>
          <li>הממציאים חייבים מספר סודי אחד ויחיד שמתאים לשלושת הרמזים.</li>
        </ul>
      </section>
    </div>
  );
}
