import { Booking } from "@/components/contact/booking";
import { PageHeader } from "@/components/layout/page-header";
import { Action } from "@/components/primitives/action";
import { Reveal } from "@/components/primitives/reveal";
import { Section, SectionHead } from "@/components/primitives/section";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Webzy about building technology. Book a call directly, or write to us.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Webzy",
    description:
      "Talk to Webzy about building technology. Book a call directly, or write to us.",
    url: "/contact",
  },
};

/** What a first call actually covers. Sets expectations instead of a form. */
const COVERS = [
  {
    n: "01",
    title: "The problem, not the brief",
    body: "What is actually going wrong, where it shows up, and what it costs. A specification can wait until we understand that.",
  },
  {
    n: "02",
    title: "Whether it should be built at all",
    body: "Sometimes the answer is a smaller change, or an existing tool. If that is the case we will say so on the call.",
  },
  {
    n: "03",
    title: "What it would take",
    body: "Shape, sequence and the parts that are genuinely uncertain — stated plainly rather than padded into a proposal.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="X"
        label="Contact"
        title={"Talk to Webzy."}
        lede="If you are building something and want it engineered properly, book a call. Fifteen minutes is usually enough to tell whether there is a system worth building and whether we are the right people to build it."
        meta={[
          { k: "Call length", v: "15 minutes" },
          { k: "Scheduling", v: "Cal.com" },
          { k: "Who answers", v: "A person, not a form" },
        ]}
      >
        <Action href={site.bookingUrl} external arrow>
          Book a call
        </Action>
      </PageHeader>

      {/* ---------- The calendar. ---------- */}
      <Section tone="raised" size="md">
        <div className="shell-wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-3">
              <div className="md:sticky md:top-28">
                <p className="t-mono text-ink-4">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 block text-[clamp(1.1rem,1.7vw,1.35rem)] font-medium leading-tight tracking-[-0.032em] text-ink transition-colors duration-300 hover:text-accent"
                >
                  {site.email}
                </a>

                <div className="mt-10 border-t border-line pt-8">
                  <p className="t-mono text-ink-4">Response</p>
                  <p className="t-small mt-4 max-w-xs pretty">
                    Expect a direct answer rather than a proposal deck. If we are
                    not the right people for the problem, we will say so.
                  </p>
                </div>

                <div className="mt-10 border-t border-line pt-8">
                  <p className="t-mono text-ink-4">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="mt-5 block text-[clamp(1.1rem,1.7vw,1.35rem)] font-medium leading-tight tracking-[-0.032em] tabular text-ink transition-colors duration-300 hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-9">
              <Reveal y={24}>
                <div className="panel overflow-hidden">
                  <div className="flex items-center justify-between gap-6 border-b border-line bg-s3 px-6 py-3.5">
                    <p className="t-mono text-ink-2">Book a call</p>
                    <p className="t-mono text-ink-4">15 min · video</p>
                  </div>
                  <Booking />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- What the call covers. ---------- */}
      <Section tone="void" size="md">
        <div className="shell-wide">
          <SectionHead
            index="01"
            label="The call"
            title="What fifteen minutes is for."
            lede="No deck, no discovery questionnaire. Come with the problem and we will come with questions."
          />

          <div className="mt-16 border-t border-line md:mt-24">
            {COVERS.map((c, i) => (
              <Reveal
                key={c.n}
                delay={i * 0.06}
                className="border-b border-line py-9 md:py-12"
              >
                <div className="grid gap-5 md:grid-cols-12 md:gap-14">
                  <span className="t-mono tabular text-accent md:col-span-2">
                    {c.n}
                  </span>
                  <h2 className="t-title md:col-span-4 balance">{c.title}</h2>
                  <p className="t-body md:col-span-6 pretty">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-wrap gap-3">
              <Action href={site.bookingUrl} external arrow>
                Book a call
              </Action>
              <Action href={`mailto:${site.email}`} external variant="outline">
                {site.email}
              </Action>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
