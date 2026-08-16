import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/* ============================================================
   SECTION
   Every section is a horizon: a hairline, a label, a statement,
   then the substance. The rhythm is the same everywhere so the
   compositions inside it are free to differ.
   ============================================================ */

type Tone = "void" | "raised" | "panel";

export function Section({
  id,
  children,
  className,
  tone = "void",
  size = "lg",
  edge = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  /** Hairline along the top edge. Off for sections that open with their own. */
  edge?: boolean;
}) {
  const pad = {
    sm: "py-20 md:py-24",
    md: "py-24 md:py-32",
    lg: "py-28 md:py-40",
    xl: "py-32 md:py-52",
  }[size];

  const tones: Record<Tone, string> = {
    void: "bg-void",
    raised: "bg-s1",
    panel: "bg-s2",
  };

  return (
    <section
      id={id}
      className={cn("relative isolate", tones[tone], pad, className)}
    >
      {edge && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line"
        />
      )}
      {children}
    </section>
  );
}

/* ------------------------------------------------------------
   EYEBROW
   A section's coordinate: an index, a rule, a name. Small, exact.
   ------------------------------------------------------------ */

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("flex items-center gap-3 t-mono text-ink-3", className)}>
      {index && (
        <>
          <span className="tabular text-accent">{index}</span>
          <span aria-hidden className="h-px w-6 bg-line-2" />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

/* ------------------------------------------------------------
   SECTION HEAD
   Statement left, context right. Two columns, one baseline.
   ------------------------------------------------------------ */

export function SectionHead({
  index,
  label,
  title,
  lede,
  className,
  children,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  lede?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-12 md:gap-10", className)}>
      <div className="md:col-span-7">
        <Eyebrow index={index}>{label}</Eyebrow>
        <h2 className="t-section mt-7 max-w-2xl balance">{title}</h2>
      </div>
      {(lede || children) && (
        <div className="md:col-span-5 md:pt-[3.25rem]">
          {lede && <p className="t-body max-w-md pretty">{lede}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

/** A full-bleed hairline. The site's punctuation mark. */
export function Rule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px w-full bg-line", className)} />;
}
