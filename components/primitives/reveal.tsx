"use client";

import { EASE, viewportOnce } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll reveal. Distance is small on purpose — motion should be felt, not watched. */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  id,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
  as?: "div" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Line-by-line headline reveal. Each line is masked and lifted into place.
 *
 * The observer sits on the wrapper, never on the masked lines themselves —
 * a line parked outside its own `overflow-hidden` box reads as "not visible"
 * to IntersectionObserver, so a per-line `whileInView` would never fire.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{
              hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "105%" },
              show: {
                opacity: 1,
                y: "0%",
                transition: {
                  duration: 0.9,
                  ease: EASE,
                  delay: delay + i * 0.085,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
