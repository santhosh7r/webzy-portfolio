import { PageHeader } from "@/components/layout/page-header";
import { Action } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Rule, Section, SectionHead } from "@/components/primitives/section";
import { Plot } from "@/components/visual/field";
import { domains } from "@/lib/technology";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The domains Webzy works in: software, artificial intelligence, engineering and emerging technology.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology — Webzy",
    description:
      "The domains Webzy works in: software, artificial intelligence, engineering and emerging technology.",
    url: "/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        index="T"
        label="Technology"
        title={"What we\nwork on."}
        lede="Four domains. They are areas of focus rather than services — nothing here is packaged, priced or sold. The boundaries between them are where most of the interesting work happens."
        meta={[
          { k: "Domains", v: String(domains.length) },
          { k: "Model", v: "One team, several fronts" },
          { k: "Output", v: "Systems, products, research" },
        ]}
      />

      {/* --- The index, before the detail. Orientation first. --- */}
      <Section tone="raised" size="sm">
        <div className="shell-wide">
          <ol className="grid gap-px bg-line sm:grid-cols-2 md:grid-cols-4">
            {domains.map((d) => (
              <li key={d.id} className="bg-s1 py-6 md:px-5 md:py-7">
                <a href={`#${d.id}`} className="group block">
                  <p className="t-mono tabular text-accent">{d.index}</p>
                  <p className="mt-4 text-[1.05rem] font-medium tracking-[-0.026em] text-ink transition-colors duration-300 group-hover:text-accent">
                    {d.name}
                  </p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* --- The domains in full. --- */}
      {domains.map((d, i) => (
        <Section
          key={d.id}
          id={d.id}
          tone={i % 2 === 0 ? "void" : "raised"}
          size="md"
          className="scroll-mt-16"
        >
          <div className="shell-wide">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-7">
                <Reveal>
                  <p className="flex items-center gap-3 t-mono text-ink-3">
                    <span className="tabular text-accent">{d.index}</span>
                    <span aria-hidden className="h-px w-6 bg-line-2" />
                    <span>Domain</span>
                  </p>
                  <h2 className="t-section mt-7">{d.name}</h2>
                  <p className="t-lede mt-8 max-w-xl pretty">{d.summary}</p>
                  <p className="t-body mt-7 max-w-xl pretty">{d.body}</p>
                </Reveal>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <Reveal delay={0.12}>
                  <div className="relative h-24 overflow-hidden rounded-[6px] border border-line bg-s3">
                    <div className="absolute inset-0 grid-mesh opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center p-5">
                      <Plot seedIndex={i} className="max-h-full" />
                    </div>
                  </div>

                  <p className="t-mono mt-8 text-ink-4">Work inside it</p>
                  <ul className="mt-5 border-t border-line">
                    {d.threads.map((t) => (
                      <li
                        key={t}
                        className="border-b border-line py-3 text-[0.9rem] tracking-[-0.014em] text-ink-2"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="void" size="md">
        <div className="shell-wide">
          <SectionHead
            label="Next"
            title="What the domains produce."
            lede="Technology Webzy is building, and the questions still open behind it."
          />
          <Rule className="mt-14" />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Action href="/products" arrow>
                Products
              </Action>
              <Action href="/research" variant="outline">
                Research
              </Action>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
