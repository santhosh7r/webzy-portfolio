import { Eyebrow } from "@/components/primitives/section";
import { RevealLines, Reveal } from "@/components/primitives/reveal";
import { Field } from "@/components/visual/field";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/* ============================================================
   PAGE HEADER
   The same opening move on every inner page: coordinate, title,
   position. The field sits behind it and never above it.
   ============================================================ */

export function PageHeader({
  index,
  label,
  title,
  lede,
  children,
  meta,
  className,
}: {
  index?: string;
  label: string;
  /** Newlines become masked reveal lines. */
  title: string;
  lede?: string;
  children?: ReactNode;
  /** Right-hand specification block. Key/value, monospace. */
  meta?: { k: string; v: string }[];
  className?: string;
}) {
  const lines = title.split("\n");

  return (
    <header
      className={cn(
        "relative isolate grain overflow-hidden bg-void pb-20 pt-36 md:pb-28 md:pt-52",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] opacity-70"
      >
        <Field />
      </div>
      <div
        aria-hidden
        className="glow-edge pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
      />

      <div className="shell-wide relative">
        <Reveal>
          <Eyebrow index={index}>{label}</Eyebrow>
        </Reveal>

        <h1 className="t-display mt-8 max-w-4xl">
          <RevealLines lines={lines} delay={0.06} />
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          {lede && (
            <Reveal delay={0.24} className="md:col-span-6">
              <p className="t-lede max-w-xl pretty">{lede}</p>
              {children && <div className="mt-10">{children}</div>}
            </Reveal>
          )}

          {meta && (
            <Reveal delay={0.32} className="md:col-span-5 md:col-start-8">
              <dl className="border-t border-line">
                {meta.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                  >
                    <dt className="t-mono text-ink-4">{m.k}</dt>
                    <dd className="text-[0.9rem] tracking-[-0.014em] text-ink-2">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>

        {!lede && children && (
          <Reveal delay={0.24} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </header>
  );
}
