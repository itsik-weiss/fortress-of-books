import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TeacherPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm font-semibold text-teal-800">למורה · מסלול חקירה</p>
      <h1 className="mt-1 font-heading text-3xl font-bold">
        מערך שיעור · חקירה ורמות חשיבה
      </h1>
      <p className="mt-3 leading-8 text-stone-700">
        שיעור חקר לכיתות ג׳–ד׳, כ-45–50 דקות. הכיתה מתחלקת ל-5 קבוצות של 4
        תלמידים. כל קבוצה עובדת בתחנה צבעונית, מגלה חוקיות, ורק בסוף בודקת מול
        המפתח.
      </p>

      <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מטרות</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>להבחין בין ערך הספרה לבין ערך המיקום שלה במספר.</li>
          <li>
            להסיק את חוקי החיבור: זוגי+זוגי=זוגי, אי-זוגי+אי-זוגי=זוגי,
            זוגי+אי-זוגי=אי-זוגי.
          </li>
          <li>
            להסיק את חוקי הכפל: זוגי אחד במכפלה מספיק לתוצאה זוגית; רק
            אי-זוגי×אי-זוגי נשאר אי-זוגי.
          </li>
          <li>
            להסביר מדוע ספרת האחדות קובעת אם מספר שלם הוא זוגי או אי-זוגי.
          </li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מה מכינים</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>5 ערכות כרטיסיות לפי צבע התחנה (או טאבלט/מחשב לכל קבוצה).</li>
          <li>5 דפי תיעוד קבוצתיים.</li>
          <li>לוחות מחיקים, אסימונים או זוגות גרביים לתחנת החיבור.</li>
          <li>שעון לסיבובים ומוזיקה קצרה למעבר בין תחנות.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">מהלך השיעור</h2>
        <ol className="mt-3 space-y-4">
          {[
            {
              t: "5 דקות · פתיחה",
              d: "שאלה לכיתה: במספר 5,555, האם כל ה-5 שווים? אל תתנו את התשובה. הציגו את מודל הגרביים: זוגי = כולם בזוגות, אי-זוגי = נשאר גרב בודד.",
            },
            {
              t: "12–15 דקות · סבב 1",
              d: "כל קבוצה בתחנה שלה. חוק ברזל: קודם דוגמאות ומסקנה בדף, ורק אז הופכים לתשובה או קוראים למורה.",
            },
            {
              t: "12–15 דקות · סבב 2",
              d: "מעבר לתחנה הבאה לפי הטבלה. הקבוצה קוראת במהירות את המסקנה שכתבה הקבוצה הקודמת, ומוסיפה דוגמה או תיקון.",
            },
            {
              t: "10 דקות · מליאה",
              d: "כל קבוצה משתפת משפט אחד. המורה מרכזת על הלוח את שתי טבלאות הקסם (חיבור וכפל) ואת כלל ספרת האחדות.",
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
        <h2 className="font-heading text-xl font-bold">סיבוב התחנות</h2>
        <table className="mt-4 w-full min-w-[520px] text-right text-sm">
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
            <tr className="border-b">
              <td className="py-3 font-bold">סבב 1</td>
              <td>מבצר הספרות</td>
              <td>זוגות הגרביים</td>
              <td>מגדל הכפל</td>
              <td>בלשי המספרים</td>
              <td>מעבדת המסקנות</td>
            </tr>
            <tr>
              <td className="py-3 font-bold">סבב 2</td>
              <td>זוגות הגרביים</td>
              <td>מגדל הכפל</td>
              <td>בלשי המספרים</td>
              <td>מעבדת המסקנות</td>
              <td>מבצר הספרות</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-sm text-stone-600">
          אם יש שיעור כפול, הוסיפו סבב שלישי כדי שכל קבוצה תפגוש גם חיבור וגם כפל.
        </p>
      </section>

      <section className="mt-6 rounded-3xl border border-stone-200 bg-white p-6">
        <h2 className="font-heading text-xl font-bold">טיפים להנחיה</h2>
        <ul className="mt-3 list-disc space-y-2 pe-5 leading-7 text-stone-700">
          <li>אל תתקנו מסקנה שגויה מיד. בקשו דוגמה רביעית.</li>
          <li>בתחנת הכפל אסרו לחשב שרשראות ארוכות — זה כל האתגר.</li>
          <li>אם קבוצה נתקעת, פתחו רק את הרמז, לא את התשובה.</li>
          <li>במליאה חזרו על מודל הגרביים: שני בודדים נפגשים והופכים לזוג.</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/stations" className={cn(buttonVariants({ size: "lg" }))}>
          לפתיחת התחנות
        </Link>
        <Link
          href="/print"
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
