import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import { DirectionProvider } from "@/components/ui/direction";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-sans",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "מבצר המספרים · כרטיסיות חקירה",
  description:
    "25 כרטיסיות עבודה קבוצתיות לכיתות ג׳–ד׳ על ערך הספרה וחוקיות זוגי ואי-זוגי בחיבור ובכפל.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <DirectionProvider direction="rtl">
          <div className="flex min-h-full flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </DirectionProvider>
      </body>
    </html>
  );
}
