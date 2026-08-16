"use client";

import { Action } from "@/components/primitives/action";
import { RevealLines } from "@/components/primitives/reveal";
import { Lattice } from "@/components/visual/lattice";
import { EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ============================================================
   HERO
   Two horizontal registers: the statement, and the ground it
   stands on.

   The statement runs the full measure — it is not a column beside
   a picture. The field is full-bleed underneath it, so the object
   reads as terrain the company is standing on rather than an
   illustration parked in the corner.
   ============================================================ */

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The ground moves slower than the page. Scroll-linked, not timed.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const groundY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const copyFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      /**
       * Fixed height, not min-height. The three registers are laid out inside
       * one viewport and the ground absorbs the slack — so the specification
       * rail is always the last thing above the fold, on any screen.
       */
      className="relative isolate grain flex h-[100svh] min-h-[680px] flex-col overflow-hidden bg-void"
    >
      {/* ---------- Register 1 — the statement ---------- */}
      <motion.div
        style={reduce ? undefined : { y: copyY, opacity: copyFade }}
        className="flex shrink-0 items-end pb-8 pt-28 md:pb-10 md:pt-32"
      >
        <div className="shell-wide w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="flex items-center justify-between gap-6"
          >
            <p className="flex items-center gap-3 t-mono text-ink-3">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
                {!reduce && (
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-accent"
                    animate={{ scale: [1, 3.2], opacity: [0.5, 0] }}
                    transition={{ duration: 2.6, ease: "easeOut", repeat: Infinity }}
                  />
                )}
              </span>
              Technology company
            </p>
            <p className="t-mono hidden shrink-0 text-ink-4 md:block">
              {site.legalName}
            </p>
          </motion.div>

          <h1 className="t-hero mt-8 md:mt-10">
            <RevealLines
              lines={["Building what technology", "makes possible."]}
              delay={0.1}
            />
          </h1>

          {/* The functional row. Rule first, so the statement has a floor. */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            className="mt-10 flex flex-col gap-8 border-t border-line pt-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-12"
          >
            <p className="t-body max-w-md pretty">{site.thesis}</p>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Action href="/technology" arrow>
                What we build
              </Action>
              <Action href="/company" variant="outline">
                The company
              </Action>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------- Register 2 — the ground ---------- */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: groundY }}
        /**
         * The ground takes whatever height is left below the statement and
         * runs to the bottom edge of the viewport — nothing is stacked after
         * it, so the terrain is the last thing on the screen.
         */
        className="relative min-h-[130px] w-full flex-1"
      >
        <div className="glow-accent absolute inset-x-[10%] inset-y-[-30%] blur-3xl" />
        <Lattice variant="band" className="relative h-full w-full" />
        {/* Dissolves upward into the statement. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-void to-transparent" />
      </motion.div>
    </section>
  );
}
