import { Legal } from "@/components/layout/legal";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Webzy Inc. website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Legal title="Terms" updated="August 2026">
      <p>
        These terms cover the use of this website. Work carried out by{" "}
        {site.legalName} with a partner is governed by the separate agreement
        signed for that work, which takes precedence over anything here.
      </p>

      <h2>Using this site</h2>
      <p>
        You are welcome to read, reference and share this site. You may not copy
        its content, code or design for use in a competing offering, or represent
        it as your own work.
      </p>

      <h2>Ownership</h2>
      <p>
        The Webzy name, the mark, and the content of this site belong to{" "}
        {site.legalName}.
      </p>

      <h2>What is shown here</h2>
      <p>
        Where a page on this site says something does not exist yet, that is
        accurate. Nothing here is a placeholder standing in for a product, a
        client, a research result or a metric we do not have. Descriptions of
        how we work state our method — they are not a guarantee of a particular
        outcome.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site links to external sites. We are not responsible for their
        content or their handling of your information.
      </p>

      <h2>Liability</h2>
      <p>
        This site is provided as-is. We take care to keep it accurate and
        available, but we do not accept liability for loss arising from its use or
        from any interruption to it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can go to{" "}
        <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
          {site.email}
        </a>
        .
      </p>
    </Legal>
  );
}
