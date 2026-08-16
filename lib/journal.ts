/**
 * The journal.
 *
 * Company updates, engineering notes and technical writing. Empty until there
 * is something worth publishing — no backdated posts, no filler.
 */

export type PostKind = "Update" | "Engineering" | "Technology" | "Company";

export interface Post {
  slug: string;
  title: string;
  kind: PostKind;
  /** ISO date, e.g. "2026-08-16". */
  date: string;
  summary: string;
  link?: string;
}

export const posts: Post[] = [];

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
