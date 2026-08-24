import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="text-5xl">🏰</p>
      <h1 className="mt-4 font-heading text-3xl font-bold">הדף לא נמצא</h1>
      <p className="mt-3 text-stone-600">
        ייתכן שהתחנה הוסרה או שהקישור שגוי. אפשר לחזור לכרטיסיות או לבחור תחנה
        אחרת.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className={cn(buttonVariants())}>
          לדף הבית
        </Link>
        <Link href="/stations" className={cn(buttonVariants({ variant: "outline" }))}>
          לתחנות
        </Link>
      </div>
    </div>
  );
}
