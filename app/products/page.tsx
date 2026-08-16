import { PageHeader } from "@/components/layout/page-header";
import { Action, Arrow } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section, SectionHead } from "@/components/primitives/section";
import { STAGES, products } from "@/lib/products";
import { standard } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Technology built by Webzy — where products come from, the stages they move through, and what every one of them has to meet.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Webzy",
    description:
      "Technology built by Webzy — where products come from, the stages they move through, and what every one of them has to meet.",
    url: "/products",
  },
};

/** Where a Webzy product starts. Describes method, claims no outcomes. */
const ORIGINS = [
  {
    n: "01",
    title: "A research question that turned out to be buildable",
    body: "Most of what we look into stays a question. Occasionally the answer is concrete enough to make, and the prototype that proved it becomes the first version.",
  },
  {
    n: "02",
    title: "An internal tool that outgrew its use",
    body: "We build things for ourselves. When one of them keeps solving a problem that is clearly not only ours, it stops being internal.",
  },
  {
    n: "03",
    title: "A problem we keep hitting",
    body: "The same obstacle appearing in unrelated work is a signal. If nothing good exists for it, that is a reason to build rather than to work around it again.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        index="P"
        label="Products"
        title={"Technology\nbuilt by Webzy."}
        lede="Webzy develops its own technology. This page shows where a product comes from, the stages it moves through, and the state of the portfolio as it actually is."
        meta={[
          { k: "Products", v: String(products.length) },
          { k: "Stages", v: String(STAGES.length) },
          { k: "Invented entries", v: "None" },
        ]}
      />

      {/* ---------- The track ---------- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <Reveal>
            <Eyebrow index="01">The track</Eyebrow>
            <h2 className="t-section mt-7 max-w-2xl balance">
              From first build to release.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-px">
              <span
                aria-hidden
                className="rule-fade absolute inset-x-0 top-[5px] hidden h-px lg:block"
              />
              {STAGES.map((s, i) => {
                const count = products.filter((p) => p.stage === s.id).length;
                return (
                  <li key={s.id} className="relative lg:pr-8">
                    <span
                      aria-hidden
                      className="relative z-10 block h-[11px] w-[11px] rounded-full border border-line-3 bg-s1"
                    >
                      {i === 0 && (
                        <span className="absolute inset-[3px] rounded-full bg-accent" />
                      )}
                    </span>
                    <div className="mt-6 flex items-baseline justify-between gap-4">
                      <p className="t-mono text-ink">{s.label}</p>
                      <p className="t-mono tabular text-ink-4">
                        {String(count).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="t-small mt-3 max-w-[26ch] pretty">{s.note}</p>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {products.length === 0 ? (
            <Reveal delay={0.16}>
              <div className="mt-16 grid gap-8 border-t border-line pt-12 md:mt-24 md:grid-cols-12">
                <p className="t-mono text-ink-4 md:col-span-3">Current state</p>
                <div className="md:col-span-8">
                  <p className="text-[1.3rem] font-medium leading-snug tracking-[-0.03em] text-ink md:text-[1.6rem]">
                    No Webzy product is public yet.
                  </p>
                  <p className="t-body mt-5 max-w-lg pretty">
                    We are not going to list one before it exists. When the first
                    product reaches a stage worth showing, it appears on this
                    track with its category, its technology, its current state
                    and a way to use it.
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <ul className="mt-16 border-t border-line md:mt-24">
              {products.map((p) => (
                <li key={p.slug} className="border-b border-line py-8">
                  <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-10">
                    <div className="md:col-span-4">
                      <h3 className="t-title text-ink">{p.name}</h3>
                      <p className="t-mono mt-3 text-ink-4">{p.category}</p>
                    </div>
                    <p className="t-small md:col-span-5 pretty">{p.summary}</p>
                    <div className="md:col-span-3 md:text-right">
                      <p className="t-mono text-accent">
                        {STAGES.find((s) => s.id === p.stage)?.label}
                      </p>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="group mt-3 inline-flex items-center gap-2 text-[0.9rem] tracking-[-0.014em] text-ink-2 transition-colors hover:text-ink"
                        >
                          Open
                          <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* ---------- Where products come from ---------- */}
      <Section tone="void" size="md">
        <div className="shell-wide">
          <SectionHead
            index="02"
            label="Origin"
            title="Three ways a product starts here."
            lede="None of them begin with a market gap on a slide. They begin with something that already works, or a question that would not go away."
          />

          <div className="mt-16 border-t border-line md:mt-24">
            {ORIGINS.map((o, i) => (
              <Reveal
                key={o.n}
                delay={i * 0.06}
                className="border-b border-line py-9 md:py-12"
              >
                <div className="grid gap-5 md:grid-cols-12 md:gap-14">
                  <span className="t-mono tabular text-accent md:col-span-2">
                    {o.n}
                  </span>
                  <h3 className="t-title md:col-span-5 balance">{o.title}</h3>
                  <p className="t-body md:col-span-5 pretty">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- What every product has to meet ---------- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <SectionHead
            index="03"
            label="Requirements"
            title="What ships and what does not."
            lede="The same conditions apply to a product as to anything else we build. A version that misses one of them is not released early — it is not released."
          />

          <Reveal delay={0.1}>
            <ul className="mt-14 grid gap-px border-y border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-3">
              {standard.map((s) => (
                <li key={s.id} className="bg-s1 p-7 md:p-8">
                  <p className="t-mono text-accent">{s.key}</p>
                  <p className="mt-5 text-[1.05rem] font-medium leading-snug tracking-[-0.024em] text-ink pretty">
                    {s.title}
                  </p>
                </li>
              ))}
              <li className="flex flex-col justify-between bg-s2 p-7 md:p-8">
                <p className="t-mono text-ink-4">Full standard</p>
                <p className="t-small mt-5 pretty">
                  Set out in detail on the company page, alongside the method it
                  comes from.
                </p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-wrap gap-3">
              <Action href="/technology" arrow>
                What we work on
              </Action>
              <Action href="/company" variant="outline">
                How we work
              </Action>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
