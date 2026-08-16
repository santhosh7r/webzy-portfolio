import { Action, TextLink } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section } from "@/components/primitives/section";
import { formatDate, posts } from "@/lib/journal";
import { site } from "@/lib/site";
import Link from "next/link";

/* ============================================================
   SIGNALS
   Two channels: what the company is publishing, and how to start
   something with it. Both read from real data and both say so
   when there is nothing to report.
   ============================================================ */

export function Signals() {
  const latest = posts.slice(0, 3);

  return (
    <Section tone="void" size="lg">
      <div className="shell-wide">
        <div className="grid gap-14 md:grid-cols-12 md:gap-0">
          {/* --- Journal --- */}
          <div className="md:col-span-6 md:pr-14">
            <Reveal>
              <Eyebrow index="07">Journal</Eyebrow>
              <h2 className="t-title mt-7 max-w-sm">
                Engineering notes, technical writing and company updates.
              </h2>
            </Reveal>

            {latest.length > 0 ? (
              <ul className="mt-10 border-t border-line">
                {latest.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={i * 0.06} className="border-b border-line">
                    <Link href={`/journal/${p.slug}`} className="group block py-5">
                      <div className="flex items-baseline justify-between gap-6">
                        <span className="t-mono text-ink-4">{p.kind}</span>
                        <span className="t-mono tabular text-ink-4">
                          {formatDate(p.date)}
                        </span>
                      </div>
                      <p className="mt-3 text-[1.05rem] font-medium leading-snug tracking-[-0.024em] text-ink transition-colors duration-300 group-hover:text-accent">
                        {p.title}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            ) : (
              <Reveal delay={0.08}>
                <p className="t-small mt-10 max-w-sm border-t border-line pt-8 pretty">
                  Nothing published yet. The journal opens when there is work
                  worth writing up — not before.
                </p>
              </Reveal>
            )}

            <Reveal delay={0.12}>
              <div className="mt-9">
                <TextLink href="/journal">Journal</TextLink>
              </div>
            </Reveal>
          </div>

          {/* --- Working together --- */}
          <div className="md:col-span-6 md:border-l md:border-line md:pl-14">
            <Reveal delay={0.06}>
              <Eyebrow index="08">Engagements</Eyebrow>
              <h2 className="t-title mt-7 max-w-sm">
                Build something with us.
              </h2>
              <p className="t-body mt-6 max-w-sm pretty">
                Webzy takes on a small number of engagements at a time —
                organisations building something that has to be engineered
                properly rather than assembled. The same standard applies to
                that work as to our own.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex items-baseline gap-4 border-t border-line pt-8">
                <span className="text-[2.75rem] font-medium leading-none tracking-[-0.045em] tabular text-ink">
                  15
                </span>
                <span className="t-mono text-ink-3">
                  minutes to find out
                </span>
              </div>
              <p className="t-small mt-6 max-w-sm pretty">
                One call is usually enough to tell whether there is a system
                worth building — and whether we are the right people to build it.
              </p>
              <div className="mt-9">
                <Action href="/contact" arrow>
                  Book a call
                </Action>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
