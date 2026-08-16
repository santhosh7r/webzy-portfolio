import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/primitives/section";
import type { ReactNode } from "react";

/**
 * Legal pages. Same shell as everywhere else, one narrow measure, and a prose
 * ramp that keeps long documents readable on black.
 */
export function Legal({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        label="Legal"
        title={title}
        meta={[{ k: "Last updated", v: updated }]}
      />

      <Section tone="raised" size="md">
        <div className="shell">
          <div
            className="max-w-2xl
              [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-accent
              [&_h2]:mt-14 [&_h2]:text-[1.35rem] [&_h2]:font-medium [&_h2]:tracking-[-0.03em] [&_h2]:text-ink
              [&_h2+p]:mt-5
              [&_li]:mt-3 [&_li]:text-[1.0313rem] [&_li]:leading-[1.62] [&_li]:tracking-[-0.012em] [&_li]:text-ink-2
              [&_p]:mt-5 [&_p]:text-[1.0313rem] [&_p]:leading-[1.62] [&_p]:tracking-[-0.012em] [&_p]:text-ink-2
              [&_strong]:font-medium [&_strong]:text-ink
              [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-5"
          >
            {children}
          </div>
        </div>
      </Section>
    </>
  );
}
