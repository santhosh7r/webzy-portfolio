"use client";

import { Arrow, TextLink } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Section, SectionHead } from "@/components/primitives/section";
import { Plot } from "@/components/visual/field";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { domains } from "@/lib/technology";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* ============================================================
   DOMAINS
   An index, not a card grid. The list is the control surface;
   the panel on the right is the readout. Pointing at a row
   changes what the instrument displays.
   ============================================================ */

export function Domains() {
  const [active, setActive] = useState(0);
  const current = domains[active];

  return (
    <Section tone="raised" size="lg" id="technology">
      <div className="shell-wide">
        <SectionHead
          index="02"
          label="Technology"
          title="Four domains, worked on as one problem."
          lede="These are areas of focus rather than services. The boundaries between them are where most of the interesting work happens."
        >
          <div className="mt-8">
            <TextLink href="/technology">All technology</TextLink>
          </div>
        </SectionHead>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-14">
          {/* --- The index. */}
          <ul className="border-t border-line md:col-span-7">
            {domains.map((d, i) => {
              const on = i === active;
              return (
                <Reveal
                  as="li"
                  key={d.id}
                  delay={i * 0.05}
                  className="border-b border-line"
                >
                  <Link
                    href={`/technology#${d.id}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative block py-7 md:py-8"
                  >
                    {/* The active rule. Grows from the left edge. */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute bottom-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                        on ? "scale-x-100" : "scale-x-0",
                      )}
                    />

                    <div className="flex items-baseline gap-5 md:gap-8">
                      <span
                        className={cn(
                          "t-mono tabular shrink-0 transition-colors duration-300",
                          on ? "text-accent" : "text-ink-4",
                        )}
                      >
                        {d.index}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3
                          className={cn(
                            "text-[1.4rem] font-medium leading-tight tracking-[-0.032em] transition-colors duration-300 md:text-[1.75rem]",
                            on ? "text-ink" : "text-ink-2",
                          )}
                        >
                          {d.name}
                        </h3>
                        <p className="t-small mt-3 max-w-md pretty md:hidden">
                          {d.summary}
                        </p>
                      </div>

                      <Arrow
                        className={cn(
                          "shrink-0 transition-colors duration-300",
                          on ? "text-accent" : "text-ink-4",
                        )}
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          {/* --- The readout. Desktop only; on mobile the rows carry it. */}
          <Reveal delay={0.1} className="hidden md:col-span-5 md:block">
            <div className="panel sticky top-24 overflow-hidden">
              <div className="relative h-[132px] overflow-hidden border-b border-line bg-s3">
                <div className="absolute inset-0 grid-mesh opacity-60" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="absolute inset-0 flex items-center justify-center p-7"
                  >
                    <Plot seedIndex={active} className="max-h-full" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <p className="t-mono text-accent">{current.index}</p>
                    <p className="mt-4 text-[1.05rem] font-medium leading-snug tracking-[-0.024em] text-ink pretty">
                      {current.summary}
                    </p>
                    <p className="t-small mt-5 pretty">{current.body}</p>

                    <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-6">
                      {current.threads.map((t) => (
                        <li key={t} className="t-mono normal-case text-ink-3">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
