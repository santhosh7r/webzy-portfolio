import { Arrow } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Section, SectionHead } from "@/components/primitives/section";
import { areas } from "@/lib/research";
import Link from "next/link";

/* ============================================================
   RESEARCH
   A board of open questions. Cells separated by hairlines rather
   than boxed as cards — the grid itself is the container.
   ============================================================ */

export function Research() {
  return (
    <Section tone="void" size="lg">
      <div className="shell-wide">
        <SectionHead
          index="05"
          label="Research"
          title="The questions we are working on."
          lede="Research at Webzy is not a department. It is the part of the work that happens before anyone knows what to build."
        />

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-px border-y border-line bg-line md:mt-24 md:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <article key={a.id} className="group bg-void p-7 md:p-8">
                <p className="t-mono tabular text-accent">{a.index}</p>
                <h3 className="t-mono mt-5 text-ink-2">{a.name}</h3>
                <p className="mt-4 text-[1rem] font-medium leading-snug tracking-[-0.022em] text-ink pretty">
                  {a.question}
                </p>
              </article>
            ))}

            {/* Spans two columns so six areas plus this cell fill the grid
                exactly — no orphan gap at the end of the board. */}
            <Link
              href="/research"
              className="group flex flex-col justify-between bg-s2 p-7 transition-colors duration-300 hover:bg-s3 md:col-span-2 md:p-8"
            >
              <p className="t-mono text-ink-4">Index</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium tracking-[-0.02em] text-ink">
                Research
                <Arrow />
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="t-small mt-10 max-w-xl pretty">
            Webzy has not published research yet. When work reaches the point of
            being worth reading, it is published here as notes, experiments,
            prototypes and engineering logs.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
