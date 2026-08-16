"use client";

import { Mark } from "@/components/layout/wordmark";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { legalNav, primaryNav, site } from "@/lib/site";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* ============================================================
   NAVIGATION
   A thin instrument bar. Transparent over the hero, glass once
   the page moves under it. It never announces itself.
   ============================================================ */

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled && !open
            ? "border-b border-line bg-void/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent",
        )}
      >
        <nav className="shell-wide flex h-14 items-center justify-between md:h-[60px]">
          <Link
            href="/"
            aria-label="Webzy — home"
            className="relative z-[60] text-ink transition-opacity duration-300 hover:opacity-65"
          >
            <Mark priority />
          </Link>

          {/* Centre — the map of the company. */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
            {primaryNav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-[0.8125rem] tracking-[-0.008em] transition-colors duration-300",
                      active ? "text-ink" : "text-ink-2 hover:text-ink",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className="rounded-[7px] bg-ink px-4 py-1.5 text-[0.8125rem] font-medium tracking-[-0.008em] text-void transition-colors duration-300 hover:bg-white"
            >
              Contact
            </Link>
          </div>

          {/* Trigger. Two rules that become a cross. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] -mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="relative block h-[9px] w-[19px]">
              <motion.span
                animate={{ y: open ? 4 : 0, rotate: open ? 45 : 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute left-0 top-0 block h-px w-[19px] bg-ink"
              />
              <motion.span
                animate={{ y: open ? -4 : 0, rotate: open ? -45 : 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute bottom-0 left-0 block h-px w-[19px] bg-ink"
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen menu. Composed for the phone, not scaled down from desktop. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: EASE } }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-void lg:hidden"
          >
            <div
              aria-hidden
              className="glow-edge pointer-events-none absolute inset-x-0 top-0 h-[45vh]"
            />

            <div className="shell-wide relative flex h-[100dvh] flex-col justify-between overflow-y-auto pb-10 pt-24">
              <ul>
                {primaryNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.06 + i * 0.055 }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className="text-[1.75rem] font-medium tracking-[-0.035em]">
                        {item.label}
                      </span>
                      <span className="t-mono tabular text-ink-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
                className="mt-14 space-y-8"
              >
                <Link
                  href="/contact"
                  className="flex h-12 w-full items-center justify-center rounded-[7px] bg-ink text-[0.95rem] font-medium text-void"
                >
                  Contact
                </Link>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {legalNav.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="t-mono text-ink-3 transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="block t-mono lowercase tracking-[0.04em] text-ink-2 transition-colors hover:text-ink"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="block t-mono tracking-[0.04em] text-ink-2 transition-colors hover:text-ink"
                  >
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
