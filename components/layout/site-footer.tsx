import { Mark } from "@/components/layout/wordmark";
import { buildNav, companyNav, contactNav, legalNav, site } from "@/lib/site";
import Link from "next/link";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="t-mono text-ink-4">{title}</p>
      <ul className="mt-6 space-y-3.5">
        {links.map((l) => {
          // Anything that is not an in-app route — http, mailto, tel — is a
          // plain anchor. Only real routes get the client-side Link, and only
          // http links get a new tab: mailto/tel would leave a blank one open.
          const anchor = !l.href.startsWith("/");
          const newTab = l.href.startsWith("http");
          const cls =
            "text-[0.9rem] tracking-[-0.014em] text-ink-2 transition-colors duration-300 hover:text-ink";
          return (
            <li key={l.href}>
              {anchor ? (
                <a
                  href={l.href}
                  {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={cls}
                >
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className={cls}>
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-void">
      <div
        aria-hidden
        className="glow-edge pointer-events-none absolute inset-x-0 bottom-0 h-64 rotate-180"
      />

      <div className="shell-wide relative py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="Webzy — home"
              className="inline-flex text-ink transition-opacity duration-300 hover:opacity-65"
            >
              <Mark className="h-[24px]" />
            </Link>
            <p className="mt-7 max-w-xs text-[0.95rem] leading-relaxed tracking-[-0.016em] text-ink-2 pretty">
              {site.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            <Column title="Build" links={buildNav} />
            <Column title="Company" links={companyNav} />
            <Column title="Reach us" links={contactNav} />
            <Column title="Legal" links={legalNav} />
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-8 md:mt-28">
          <div className="flex flex-col gap-5 md:flex-row md:items-baseline md:justify-between">
            <p className="t-mono max-w-lg normal-case tracking-[0.02em] text-ink-3">
              Webzy — building new technology through innovation, engineering and
              scientific thinking.
            </p>
            <p className="t-mono tabular shrink-0 text-ink-4">
              © {year} {site.legalName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
