import { Legal } from "@/components/layout/legal";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Webzy Inc. handles information collected through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Legal title="Privacy" updated="August 2026">
      <p>
        This policy explains what information {site.legalName} collects through
        this website, why, and what happens to it. It covers this site only — not
        any system we build and operate, which is governed by the agreement made
        for that work.
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>Information you send us.</strong> If you email us or book a call,
        we receive whatever you choose to include: your name, email address, and
        anything you tell us about your business. We keep it so we can reply and
        continue the conversation.
      </p>
      <p>
        <strong>Analytics.</strong> This site uses Google Analytics to understand
        how pages are used — which pages are visited, roughly where visitors come
        from, and which devices they use. This is collected through cookies set by
        Google and is handled under Google&apos;s own privacy terms.
      </p>
      <p>
        <strong>The contact form.</strong> The form on the contact page does not
        send anything to a server of ours. It composes a message and hands it to
        your own mail client, so what you write reaches us as ordinary email from
        your address and nothing is stored on this site.
      </p>

      <h2>What we don&apos;t do</h2>
      <p>
        We do not sell personal information, and we do not use it for advertising
        or profiling. We do not send marketing email to people who have not asked
        to hear from us.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Correspondence is kept for as long as it is useful to the working
        relationship, or until you ask us to delete it. Analytics data is retained
        according to Google Analytics&apos; standard retention settings.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us what we hold about you, ask for it to be corrected, or ask
        for it to be deleted, by writing to{" "}
        <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
          {site.email}
        </a>
        . You can block analytics cookies through your browser settings or a
        browser extension at any time.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the updated version will be posted on this page
        with a new date.
      </p>
    </Legal>
  );
}
