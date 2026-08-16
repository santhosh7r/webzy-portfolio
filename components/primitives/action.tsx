"use client";

import { cn } from "@/lib/cn";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

/* ============================================================
   ACTIONS
   Two weights only: solid for the one thing that matters on a
   screen, outline for everything else. Radius is small — this is
   a technical interface, not a consumer app.
   ============================================================ */

type Variant = "solid" | "accent" | "outline" | "quiet";

const MotionLink = motion.create(Link);

const base =
  "group relative inline-flex h-11 items-center justify-center gap-2.5 rounded-[7px] px-6 text-[0.9rem] font-medium tracking-[-0.014em] transition-colors duration-300 select-none";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-void hover:bg-white",
  accent: "bg-accent text-white hover:bg-accent-2",
  outline:
    "border border-line-3 text-ink hover:border-white/35 hover:bg-white/[0.05]",
  quiet: "h-auto rounded-none px-0 text-ink hover:text-accent",
};

/**
 * Magnetic pull. Mouse only, small displacement, spring return —
 * felt on approach rather than watched.
 */
function useMagnet(strength = 0.22) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, sx, sy, onMove, onLeave };
}

export function Action({
  href,
  children,
  variant = "solid",
  className,
  arrow = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
}) {
  const { ref, sx, sy, onMove, onLeave } = useMagnet();

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && <Arrow />}
    </>
  );

  const props = {
    ref: ref as never,
    className: cn(base, variants[variant], className),
    style: { x: sx, y: sy },
    onPointerMove: onMove,
    onPointerLeave: onLeave,
  };

  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" {...props}>
        {inner}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} {...props}>
      {inner}
    </MotionLink>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn(
        "relative z-10 h-[13px] w-[13px] shrink-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px]",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path
        d="M2.5 8h11M9.2 3.8 13.5 8l-4.3 4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Text link. The rule under it draws in from the left on hover. */
export function TextLink({
  href,
  children,
  className,
  external = false,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  arrow?: boolean;
}) {
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-2 text-[0.9rem] font-medium tracking-[-0.014em] text-ink transition-colors duration-300 hover:text-accent",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />
      </span>
      {arrow && <Arrow />}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
