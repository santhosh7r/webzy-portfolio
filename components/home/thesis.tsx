import { Reveal, RevealLines } from "@/components/primitives/reveal";
import { Eyebrow, Section } from "@/components/primitives/section";

/* ============================================================
   THESIS
   The company's position, stated once at full size. No columns,
   no cards — the sentence is the composition. Emphasis is carried
   by tone: the argument is bright, the connective tissue recedes.
   ============================================================ */

const POSITIONS = [
  {
    k: "Method",
    v: "Understand the problem before designing the answer. The rest follows from that decision.",
  },
  {
    k: "Scope",
    v: "Software, intelligent systems, engineering and emerging technology — one company, several fronts.",
  },
  {
    k: "Standard",
    v: "Technology that works under real conditions, not technology that demonstrates well.",
  },
];

export function Thesis() {
  return (
    <Section tone="void" size="xl">
      <div className="shell-wide">
        <Reveal>
          <Eyebrow index="01">Position</Eyebrow>
        </Reveal>

        <p className="t-display mt-10 max-w-5xl text-ink-4 md:mt-14">
          <RevealLines
            lines={[
              <>
                Most technology stops at the edge of{" "}
                <span className="text-ink">what is already known.</span>
              </>,
              <>
                The work worth doing starts just past it — where the{" "}
                <span className="text-ink">method has to be built</span>
              </>,
              <>
                <span className="text-ink">alongside the thing itself.</span>
              </>,
            ]}
          />
        </p>

        <Reveal delay={0.15}>
          <p className="t-lede mt-12 max-w-xl pretty md:mt-16">
            Webzy is built to work there. We take problems that do not yet have a
            settled answer and carry them all the way to something real —
            designed, engineered, measured and shipped.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px border-t border-line md:mt-28 md:grid-cols-3">
          {POSITIONS.map((p, i) => (
            <Reveal
              key={p.k}
              delay={i * 0.08}
              className="border-b border-line py-8 md:border-b-0 md:border-r md:pr-10 md:last:border-r-0 md:[&:not(:first-child)]:pl-10"
            >
              <p className="t-mono text-ink-4">{p.k}</p>
              <p className="t-small mt-4 max-w-xs pretty">{p.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
