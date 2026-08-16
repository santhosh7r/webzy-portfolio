/**
 * Webzy products.
 *
 * This file is deliberately empty. Webzy has no publicly released product yet,
 * and nothing on this site claims otherwise. The types and stages below are the
 * real structure the products index renders — add an entry here the day a
 * product exists, and the page fills in without a redesign.
 */

export type Stage = "building" | "in-development" | "released" | "archived";

export const STAGES: { id: Stage; label: string; note: string }[] = [
  {
    id: "building",
    label: "Building",
    note: "Early construction. The shape is still being decided.",
  },
  {
    id: "in-development",
    label: "In development",
    note: "The shape is settled. The work is making it real.",
  },
  {
    id: "released",
    label: "Released",
    note: "Available and maintained.",
  },
  {
    id: "archived",
    label: "Archived",
    note: "No longer developed. Kept on the record.",
  },
];

export interface Product {
  slug: string;
  name: string;
  /** One line, plainly stated. What it is. */
  summary: string;
  category: string;
  stage: Stage;
  technology: string[];
  link?: string;
  year?: number;
}

export const products: Product[] = [];

export const productsByStage = (stage: Stage) =>
  products.filter((p) => p.stage === stage);
