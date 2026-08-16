import { TextLink } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Section, SectionHead } from "@/components/primitives/section";
import { standard } from "@/lib/company";

/* ============================================================
   THE STANDARD
   A datasheet, not a list. This is the one section on the page
   with an enclosing frame — the conditions of the work read as a
   specification because that is what they are.

   Summary only: the requirement and the condition. The reasoning
   behind each one lives on the company page.
   ============================================================ */

export function Standard() {
  return (
    <Section tone="void" size="lg" id="standard">
      <div className="shell-wide">
        <SectionHead
          index="03"
          label="The standard"
          title="What a Webzy system has to do."
          lede="Five conditions, applied to everything we build. They are requirements rather than values — a build either meets them or it is not done."
        >
          <div className="mt-8">
            <TextLink href="/company">The reasoning</TextLink>
          </div>
        </SectionHead>

        <Reveal delay={0.1}>
          <div className="panel mt-16 overflow-hidden md:mt-24">
            {/* Column heads. The table announces itself before it starts. */}
            <div className="hidden border-b border-line bg-s3 px-7 py-3.5 md:grid md:grid-cols-12 md:gap-10">
              <p className="t-mono text-ink-4 md:col-span-4">Requirement</p>
              <p className="t-mono text-ink-4 md:col-span-8">Condition</p>
            </div>

            <dl>
              {standard.map((s, i) => (
                <div
                  key={s.id}
                  className="grid gap-2 border-b border-line px-7 py-6 last:border-b-0 md:grid-cols-12 md:items-baseline md:gap-10"
                >
                  <dt className="flex items-baseline gap-4 md:col-span-4">
                    <span className="t-mono tabular text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="t-mono text-ink-2">{s.key}</span>
                  </dt>
                  <dd className="text-[1.05rem] font-medium leading-snug tracking-[-0.024em] text-ink md:col-span-8 md:text-[1.2rem]">
                    {s.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
