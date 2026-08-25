export type PdfFile = {
  slug: string;
  href: string;
  title: string;
  description: string;
  downloadName: string;
  route: string;
};

export const inquiryPdfFiles: PdfFile[] = [
  {
    slug: "kartisiyot-talmidim",
    href: "/pdfs/kartisiyot-talmidim.pdf",
    title: "חקירה · כרטיסיות לתלמידים",
    description: "25 כרטיסיות צבעוניות לגזירה, עם רמז ובלי תשובות.",
    downloadName: "חקירה-כרטיסיות-לתלמידים.pdf",
    route: "/pdf/students",
  },
  {
    slug: "maphteach-moreh",
    href: "/pdfs/maphteach-moreh.pdf",
    title: "חקירה · מפתח למורה",
    description: "כל השאלות, הרמזים והתשובות לפי סדר הכרטיסיות.",
    downloadName: "חקירה-מפתח-למורה.pdf",
    route: "/pdf/teacher",
  },
  {
    slug: "dapey-teud",
    href: "/pdfs/dapey-teud.pdf",
    title: "חקירה · דפי תיעוד לקבוצות",
    description: "דף אחד לכל תחנה: שמות, מסקנות ומשפט למליאה.",
    downloadName: "חקירה-דפי-תיעוד.pdf",
    route: "/pdf/sheets",
  },
  {
    slug: "maarach-shiur",
    href: "/pdfs/maarach-shiur.pdf",
    title: "חקירה · מערך השיעור",
    description: "מטרות, מהלך, טבלת סבבים וטיפים להנחיה.",
    downloadName: "חקירה-מערך-שיעור.pdf",
    route: "/pdf/lesson",
  },
];

export const reviewPdfFiles: PdfFile[] = [
  {
    slug: "kartisiyot-hazarah",
    href: "/pdfs/kartisiyot-hazarah.pdf",
    title: "חזרה · כרטיסיות לתלמידים",
    description: "25 משימות חווייתיות לגזירה, עם רמז ובלי תשובות.",
    downloadName: "חזרה-כרטיסיות-לתלמידים.pdf",
    route: "/pdf/review/students",
  },
  {
    slug: "maphteach-hazarah",
    href: "/pdfs/maphteach-hazarah.pdf",
    title: "חזרה · מפתח למורה",
    description: "כל המשימות, הרמזים והתשובות לפי תחנות הפארק.",
    downloadName: "חזרה-מפתח-למורה.pdf",
    route: "/pdf/review/teacher",
  },
  {
    slug: "darkon-hazarah",
    href: "/pdfs/darkon-hazarah.pdf",
    title: "חזרה · דרכון ודפי תחנה",
    description: "דרכון אישי, דפי תיעוד לתחנות וכרטיס חידה לממציאים.",
    downloadName: "חזרה-דרכון-ודפי-תחנה.pdf",
    route: "/pdf/review/sheets",
  },
  {
    slug: "maarach-hazarah",
    href: "/pdfs/maarach-hazarah.pdf",
    title: "חזרה · מערך שיעור תחנות",
    description: "פארק אתגרים: 5 תחנות, 7 דקות, דרכון וחותמת.",
    downloadName: "חזרה-מערך-שיעור.pdf",
    route: "/pdf/review/lesson",
  },
];

export const pdfFiles = inquiryPdfFiles;
