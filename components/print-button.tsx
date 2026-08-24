"use client";

import { Printer } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(buttonVariants({ size: "lg" }))}
    >
      <Printer data-icon="inline-start" />
      הדפסה
    </button>
  );
}
