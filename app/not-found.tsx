import { Action } from "@/components/primitives/action";
import { primaryNav } from "@/lib/site";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate grain flex min-h-[85svh] items-center overflow-hidden bg-void pt-24">
      <div
        aria-hidden
        className="glow-edge pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-cols-lines opacity-40 mask-b"
      />

      <div className="shell-wide">
        <p className="t-mono tabular text-accent">404</p>
        <h1 className="t-display mt-8 max-w-3xl balance">
          There is nothing at this address.
        </h1>
        <p className="t-lede mt-8 max-w-md pretty">
          The link is either out of date or was never right. The rest of the
          site is below.
        </p>

        <div className="mt-11">
          <Action href="/" arrow>
            Back to Webzy
          </Action>
        </div>

        <ul className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
          {primaryNav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="t-mono text-ink-3 transition-colors hover:text-ink"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
