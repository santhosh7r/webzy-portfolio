import { Action } from "@/components/primitives/action";
import { Reveal, RevealLines } from "@/components/primitives/reveal";
import { site } from "@/lib/site";

/* ============================================================
   CLOSING
   The last thing on the page is a position, not an offer. The
   action is underneath it and deliberately small.
   ============================================================ */

export function Closing() {
  return (
    <section className="relative isolate grain overflow-hidden border-t border-line bg-void py-32 md:py-48">
      <div
        aria-hidden
        className="glow-edge pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[80%] rotate-180 opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-cols-lines opacity-40 mask-b"
      />

      <div className="shell-wide relative">
        <h2 className="t-display max-w-4xl text-ink-4">
          <RevealLines
            lines={[
              <>
                <span className="text-ink">Technology is the product.</span>
              </>,
              <>Innovation is the culture.</>,
              <>Engineering is the method.</>,
            ]}
          />
        </h2>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <p className="t-body max-w-md pretty">
              If you are working on something that does not have an answer yet,
              we would like to hear about it.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Action href="/contact" arrow>
                Talk to Webzy
              </Action>
              <Action href={`mailto:${site.email}`} external variant="outline">
                {site.email}
              </Action>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
