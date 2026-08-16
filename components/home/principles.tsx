import { TextLink } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section } from "@/components/primitives/section";
import { principles } from "@/lib/company";

/* ============================================================
   PRINCIPLES
   A held heading and a moving list. The heading stays fixed while
   the principles pass it — the one place on the page where the
   composition itself carries the idea of a standing position.
   ============================================================ */

export function Principles() {
  return (
    <Section tone="raised" size="lg">
      <div className="shell-wide">
        <div className="grid gap-14 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Reveal>
                <Eyebrow index="06">Principles</Eyebrow>
                <h2 className="t-section mt-7 max-w-xs balance">
                  How the work gets decided.
                </h2>
                <p className="t-body mt-7 max-w-xs pretty">
                  Seven positions. They settle most arguments before they start.
                </p>
                <div className="mt-9">
                  <TextLink href="/company">The company</TextLink>
                </div>
              </Reveal>
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
  );
}
