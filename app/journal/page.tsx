import { PageHeader } from "@/components/layout/page-header";
import { Action } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Section } from "@/components/primitives/section";
import { formatDate, posts } from "@/lib/journal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Engineering notes, technical writing, product announcements and company updates from Webzy.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal — Webzy",
    description:
      "Engineering notes, technical writing, product announcements and company updates from Webzy.",
    url: "/journal",
  },
};

const KINDS = [
  { k: "Engineering", v: "How something was built, including the parts that were wrong first." },
  { k: "Technology", v: "Writing about the technology itself rather than about the company." },
  { k: "Update", v: "What changed — products, research, people." },
  { k: "Company", v: "Decisions about how Webzy operates and why." },
];

export default function JournalPage() {
  return (
    <>
      <PageHeader
        index="J"
        label="Journal"
        title={"Notes from\nthe work."}
        lede="A technology journal rather than a blog. Written for people who want the reasoning, published only when there is something worth reading."
        meta={[
          { k: "Entries", v: String(posts.length) },
          { k: "Cadence", v: "When there is something" },
        ]}
      />

      <Section tone="raised" size="md">
        <div className="shell-wide">
          {posts.length === 0 ? (
            <>
              <Reveal>
                <div className="border-b border-line pb-14">
                  <p className="text-[1.5rem] font-medium leading-snug tracking-[-0.035em] text-ink md:text-[2rem]">
                    The journal has not opened yet.
                  </p>
                  <p className="t-body mt-6 max-w-lg pretty">
                    There are no entries, and we are not going to publish filler
                    to make the page look active. The first entry goes up when
                    there is a piece of work worth explaining.
                  </p>
                </div>
              </Reveal>

              <div className="mt-14 grid gap-px border-y border-line bg-line md:grid-cols-2 lg:grid-cols-4">
                {KINDS.map((k) => (
                  <div key={k.k} className="bg-s1 p-7 md:p-8">
                    <p className="t-mono text-ink">{k.k}</p>
                    <p className="t-small mt-4 pretty">{k.v}</p>
                  </div>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-14 flex flex-wrap gap-3">
                  <Action href="/research" arrow>
                    Research
                  </Action>
                  <Action href="/products" variant="outline">
                    What we have built
                  </Action>
                </div>
              </Reveal>
            </>
          ) : (
            <ul className="border-t border-line">
              {posts.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.05} className="border-b border-line">
                  <article className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-10">
                    <p className="t-mono text-accent md:col-span-2">{p.kind}</p>
                    <div className="md:col-span-7">
                      <h2 className="t-title text-ink">{p.title}</h2>
                      <p className="t-small mt-3 max-w-lg pretty">{p.summary}</p>
                    </div>
                    <p className="t-mono tabular text-ink-4 md:col-span-3 md:text-right">
                      {formatDate(p.date)}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}
