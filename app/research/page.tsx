import { PageHeader } from "@/components/layout/page-header";
import { Action } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section, SectionHead } from "@/components/primitives/section";
import { areas, entries, outputs } from "@/lib/research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and exploration at Webzy — the open questions behind the technology we build.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research — Webzy",
    description:
      "Research and exploration at Webzy — the open questions behind the technology we build.",
    url: "/research",
  },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        index="R"
        label="Research"
        title={"Research\nand exploration."}
        lede="Webzy investigates ideas that could become technology. Some of it becomes a product, some of it becomes a method, and some of it only rules something out — which is also a result."
        meta={[
          { k: "Areas", v: String(areas.length) },
          { k: "Published", v: String(entries.length) },
          { k: "Method", v: "Question, build, measure" },
        ]}
      />

      {/* --- Position. --- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-3">
              <Eyebrow index="01">Position</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="t-section max-w-3xl balance">
                Research here is not a department. It is the part of the work
                that happens before anyone knows what to build.
              </p>
              <p className="t-body mt-8 max-w-xl pretty">
                We treat a research question the way we treat an engineering
                problem: state it precisely, build the smallest thing that could
                answer it, and measure honestly — including when the answer is
                that the idea does not work. That last outcome is common and
                gets written down too.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Areas. --- */}
      <Section tone="void" size="md">
        <div className="shell-wide">
          <SectionHead
            index="02"
            label="Areas"
            title="Six lines of enquiry."
            lede="Each area is defined by a question rather than a technology. The question is what stays constant while the technology changes."
          />

          <ul className="mt-16 border-t border-line md:mt-24">
            {areas.map((a, i) => (
              <Reveal
                as="li"
                key={a.id}
                delay={i * 0.04}
                id={a.id}
                className="scroll-mt-20 border-b border-line py-9 md:py-10"
              >
                <div className="grid gap-5 md:grid-cols-12 md:gap-10">
                  <div className="flex items-baseline gap-5 md:col-span-3 md:block">
                    <span className="t-mono tabular text-accent">{a.index}</span>
                    <h2 className="t-title text-ink md:mt-4">{a.name}</h2>
                  </div>
                  <p className="text-[1.15rem] font-medium leading-snug tracking-[-0.028em] text-ink md:col-span-5 md:text-[1.35rem] pretty">
                    {a.question}
                  </p>
                  <p className="t-small md:col-span-4 pretty">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* --- Published work. --- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <SectionHead
            index="03"
            label="Published"
            title="What gets published here."
            lede="Four kinds of output. Each is written for someone who wants to check the reasoning, not be persuaded by it."
          />

          <div className="mt-14 grid gap-px border-y border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {outputs.map((o) => (
              <div key={o.kind} className="bg-s1 p-7 md:p-8">
                <p className="t-mono text-ink">{o.kind}</p>
                <p className="t-small mt-4 pretty">{o.body}</p>
              </div>
            ))}
          </div>

          {entries.length === 0 ? (
            <Reveal delay={0.1}>
              <div className="mt-16 grid gap-8 md:grid-cols-12">
                <p className="t-mono text-ink-4 md:col-span-3">Current state</p>
                <div className="md:col-span-8">
                  <p className="text-[1.3rem] font-medium leading-snug tracking-[-0.03em] text-ink md:text-[1.6rem]">
                    Nothing published yet.
                  </p>
                  <p className="t-body mt-5 max-w-lg pretty">
                    Webzy has not published research. We are not going to backfill
                    this page to look established. The index opens with the first
                    piece of work that survives its own review.
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <ul className="mt-16 border-t border-line">
              {entries.map((e) => (
                <li key={e.slug} className="border-b border-line py-6">
                  <div className="grid gap-3 md:grid-cols-12 md:items-baseline md:gap-8">
                    <span className="t-mono text-accent md:col-span-2">{e.kind}</span>
                    <h3 className="t-title md:col-span-6">{e.title}</h3>
                    <span className="t-mono text-ink-4 md:col-span-2">{e.area}</span>
                    <span className="t-mono tabular text-ink-4 md:col-span-2 md:text-right">
                      {e.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="void" size="md">
        <div className="shell-wide">
          <p className="t-section max-w-3xl balance">
            If you are working on one of these questions, we would rather talk
            than compete.
          </p>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Action href="/contact" arrow>
                Talk to Webzy
              </Action>
              <Action href="/technology" variant="outline">
                What we work on
              </Action>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
