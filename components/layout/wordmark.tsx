import { cn } from "@/lib/cn";
import Image from "next/image";

/* ============================================================
   IDENTITY
   The Webzy mark, used as supplied — never redrawn, recoloured or
   reproportioned. It stands alone: no wordtype beside it. The blue
   it already carries is the same signal colour the rest of the
   site is built around.

   Because the mark carries no text, every link that uses it needs
   its own accessible name.
   ============================================================ */

/** Intrinsic size of /webzy-mark.png. Kept here so the ratio is stated once. */
const MARK_W = 410;
const MARK_H = 226;

export function Mark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/webzy-mark.png"
      alt=""
      width={MARK_W}
      height={MARK_H}
      priority={priority}
      className={cn("h-[21px] w-auto select-none", className)}
    />
  );
}
