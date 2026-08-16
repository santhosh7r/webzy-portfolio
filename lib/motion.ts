import type { Transition, Variants } from "framer-motion";

/** One easing curve across the whole site. Restraint is the brand. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: 0.72,
  ease: EASE,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.075): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

/** Deterministic pseudo-random — never Math.random() in render (hydration). */
export function seeded(i: number, salt = 1): number {
  const x = Math.sin((i + 1) * 12.9898 * salt) * 43758.5453;
  return x - Math.floor(x);
}
