import { TextLink } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow, Section } from "@/components/primitives/section";
import { STAGES, products } from "@/lib/products";

/* ============================================================
   PRODUCTS
   A track, not a grid. Four stages on one line, so the state of
   the portfolio is legible before anything is in it. Nothing here
   is invented — when a product exists it takes a position on the
   track and this section changes shape on its own.
   ============================================================ */

export function Products() {
  const count = products.length;

  return (
    <Section tone="panel" size="lg">
      <div className="shell-wide">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow index="04">Products</Eyebrow>
              <h2 className="t-section mt-7 max-w-md balance">
                Technology Webzy owns.
              </h2>
              <p className="t-body mt-7 max-w-sm pretty">
                Every product moves along the same track. Its position is stated
                rather than implied, from first build to release.
              </p>
              <div className="mt-9">
                <TextLink href="/products">The portfolio</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <ol className="relative grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
                {/* The line the stages sit on. */}
                <span
                  aria-hidden
                  className="rule-fade absolute inset-x-0 top-[5px] hidden h-px lg:block"
                />

                {STAGES.map((s, i) => (
                  <li key={s.id} className="relative pt-0 lg:pt-0">
                    <span
                      aria-hidden
                      className="relative z-10 block h-[11px] w-[11px] rounded-full border border-line-3 bg-s2"
                    >
                      {i === 0 && (
                        <span className="absolute inset-[3px] rounded-full bg-accent" />
                      )}
                    </span>
                    <p className="t-mono mt-6 text-ink">{s.label}</p>
                    <p className="t-small mt-3 max-w-[22ch] pr-6 pretty">{s.note}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="t-small mt-14 max-w-lg border-t border-line pt-8 pretty">
                {count === 0 ? (
                  <>
                    <span className="text-ink">
                      Nothing is public on this track yet.
                    </span>{" "}
                    Webzy has no released product, and this page will not claim
                    one before there is. The first entry appears here the day it
                    is real.
                  </>
                ) : (
                  <>
                    <span className="text-ink">
                      {count} {count === 1 ? "product" : "products"} on the track.
                    </span>{" "}
                    Each is listed with its stage, its technology and its current
                    state.
                  </>
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
