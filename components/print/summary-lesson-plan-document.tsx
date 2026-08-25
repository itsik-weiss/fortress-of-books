import { PdfCover } from "@/components/print/pdf-cover";
import { summaryStations } from "@/lib/summary-cards";

const rotation = [
  ["ספר החוקים", "מפת הבתים", "הגשר", "המומחים", "קיר הכיתה"],
  ["מפת הבתים", "הגשר", "המומחים", "קיר הכיתה", "ספר החוקים"],
];

export function SummaryLessonPlanDocument() {
  return (
    <div className="pdf-doc mx-auto max-w-[210mm] bg-white text-stone-900">
      <PdfCover
        variant="summary"
        emoji="🧱"
        kicker="למורה · סיכום דרך עבודה"
        title="מערך שיעור · קיר הסיכום"
        subtitle="שיעור סיכום לכיתות ג׳–ד׳, כ־45–50 דקות. 5 קבוצות של 4 תלמידים מייצרות את הסיכום בעצמן ותולות אותו על הקיר."
      />

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">מטרות</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>לנסח את ששת חוקי החיבור והכפל במילים של התלמידים.</li>
          <li>להסביר ספרה מול ערך, אפס שומר־מקום, והזזה פי 10.</li>
          <li>לחבר בין הנושאים: למה מספיק להביט באחדות.</li>
          <li>להפריך סיכום שגוי ולפרסם תוצר על קיר הכיתה.</li>
        </ul>
      </section>

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
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

      <section className="print-card mb-5 break-inside-avoid rounded-3xl border border-stone-200 p-6">
        <h2 className="font-heading text-xl font-bold">מהלך השיעור</h2>
        <ol className="mt-3 space-y-4">
          {[
            {
              t: "5 דקות · חוזה הסיכום",
              d: "היום לא לומדים חוק חדש. המורה לא תכתוב את הסיכום. כל קבוצה אחראית לחלק מהקיר.",
            },
            {
              t: "12–15 דקות · סבב 1 · ייצור",
              d: "קודם תוצר על הדף, ורק אז רמז או תשובה לדוגמה.",
            },
            {
              t: "12–15 דקות · סבב 2 · השלמה וביקורת",
              d: "מעבר לתחנה, תיקון טעות אחת, תוספת דוגמה, תחילת תלייה.",
            },
            {
              t: "10 דקות · גלריה ומליאה",
              d: "הליכה סביב הקיר. כל קבוצה משמיעה משפט אחד. המורה רק מצביעה על גשר חסר.",
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
        <h2 className="font-heading text-xl font-bold">שני סבבים</h2>
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
          <li>אל תתקנו ניסוח שגוי מיד. בקשו דוגמה שמפריכה אותו.</li>
          <li>אם חסר הגשר, הקיר מספר שני סיפורים נפרדים.</li>
          <li>פתקי היציאה עם בלבול אמיתי הם תכנון השיעור הבא.</li>
          <li>התשובות בכרטיסיות הן דוגמה לניסוח, לא נוסח חובה.</li>
        </ul>
      </section>
    </div>
  );
}
