import { PageHeader } from "@/components/layout/page-header";
import { Action } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section, SectionHead } from "@/components/primitives/section";
import { beliefs, method, principles, standard } from "@/lib/company";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Why Webzy exists, how the company works, and the principles the work is decided by.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Company — Webzy",
    description:
      "Why Webzy exists, how the company works, and the principles the work is decided by.",
    url: "/company",
  },
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        index="C"
        label="Company"
        title={"Why Webzy\nexists."}
        lede="Technology decides what people are able to do. Most of what is possible has not been built yet, and a great deal of what has been built does not work well enough to be trusted. Webzy exists to work on both."
        meta={[
          { k: "Founded as", v: site.legalName },
          { k: "Structure", v: "Small, engineering-led" },
          { k: "Horizon", v: "Long" },
        ]}
      />

      {/* --- Beliefs. --- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <SectionHead
            index="01"
            label="What we believe"
            title="Three positions the company is built on."
          />

          <div className="mt-16 border-t border-line md:mt-24">
            {beliefs.map((b, i) => (
              <Reveal key={b.index} delay={i * 0.06} className="border-b border-line py-10 md:py-14">
                <div className="grid gap-6 md:grid-cols-12 md:gap-14">
                  <span className="t-mono tabular text-accent md:col-span-2">
                    {b.index}
                  </span>
                  <h3 className="t-section md:col-span-6 balance">{b.title}</h3>
                  <p className="t-body md:col-span-4 pretty">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* --- Method. --- */}
      <Section tone="void" size="md">
        <div className="shell-wide">
          <SectionHead
            index="02"
            label="How we work"
            title="One loop, run until the technology is right."
            lede="It is not a process document. It is the shortest path we have found from not understanding something to having built it."
          />

          <ol className="mt-16 grid gap-px border-y border-line bg-line md:mt-24 md:grid-cols-4">
            {method.map((m, i) => (
              <Reveal
                as="li"
                key={m.step}
                delay={i * 0.06}
                className="relative bg-void p-7 md:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="t-mono tabular text-accent">{m.step}</span>
                  {i === method.length - 1 && (
                    <span aria-hidden className="t-mono text-ink-4">
                      ↻ 01
                    </span>
                  )}
                </div>
                <h3 className="t-title mt-8">{m.name}</h3>
                <p className="t-small mt-4 pretty">{m.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.12}>
            <p className="t-small mt-10 max-w-lg pretty">
              The loop closes. Step four returns to step one, and the version
              that survives the most trips around it is the one that ships.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* --- The standard. --- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <SectionHead
            index="03"
            label="The standard"
            title="What every build is held to."
            lede="Requirements rather than values. Each one exists because ignoring it has a predictable cost."
          />

          <div className="mt-16 border-t border-line md:mt-24">
            {standard.map((s, i) => (
              <Reveal
                key={s.id}
                delay={i * 0.05}
                className="border-b border-line py-9 md:py-11"
              >
                <div className="grid gap-5 md:grid-cols-12 md:gap-14">
                  <div className="flex items-baseline gap-4 md:col-span-3 md:block">
                    <span className="t-mono tabular text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="t-mono text-ink-2 md:mt-3 md:block">
                      {s.key}
                    </span>
                  </div>
                  <h3 className="t-title md:col-span-4 balance">{s.title}</h3>
                  <p className="t-body md:col-span-5 pretty">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* --- Principles. --- */}
      <Section tone="void" size="md">
        <div className="shell-wide">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <Eyebrow index="04">Principles</Eyebrow>
                <h2 className="t-section mt-7 max-w-xs balance">
                  Seven standing positions.
                </h2>
                <p className="t-body mt-7 max-w-xs pretty">
                  Written down so they can be argued with rather than assumed.
                </p>
              </div>
            </div>

            <ol className="border-t border-line md:col-span-7 md:col-start-6">
              {principles.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.n}
                  delay={i * 0.04}
                  className="group border-b border-line py-7 md:py-8"
                >
                  <div className="flex items-baseline gap-6 md:gap-8">
                    <span className="t-mono tabular shrink-0 text-ink-4 transition-colors duration-300 group-hover:text-accent">
                      {p.n}
                    </span>
                    <div>
                      <p className="text-[1.3rem] font-medium leading-tight tracking-[-0.032em] text-ink md:text-[1.6rem]">
                        {p.text}
                      </p>
                      <p className="t-small mt-3 max-w-sm pretty">{p.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* --- The company. --- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-3">
              <Eyebrow index="05">The company</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="t-section max-w-3xl balance">
                Webzy is early, small and building in public view.
              </p>
              <div className="mt-10 max-w-xl space-y-6">
                <p className="t-body pretty">
                  We are not going to describe ourselves as bigger than we are.
                  What exists today is a small engineering-led company: technology
                  of its own under construction, a standard it holds that work to,
                  and a set of questions it is working through.
                </p>
                <p className="t-body pretty">
                  The ambition is long. We are building the kind of company that
                  can keep working on hard technology for decades — which means
                  the decisions that matter now are about method, standards and
                  the people we work with, not about scale.
                </p>
                <p className="t-body pretty">
                  Everything on this site describes something real. When that
                  stops being enough to fill a page, we will build more, not
                  write more.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <Action href="/contact" arrow>
                  Talk to Webzy
                </Action>
                <Action href="/products" variant="outline">
                  What we are building
                </Action>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
