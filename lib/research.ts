/**
 * Research at Webzy.
 *
 * `entries` is empty on purpose. Webzy has not published research, and the site
 * does not pretend otherwise. The areas below are real lines of enquiry; the
 * index renders published work the moment there is any to render.
 */

export interface Area {
  id: string;
  index: string;
  name: string;
  question: string;
  body: string;
}

export const areas: Area[] = [
  {
    id: "intelligence",
    index: "R01",
    name: "Artificial Intelligence",
    question: "What makes an intelligent system trustworthy enough to depend on?",
    body: "Capability is no longer the hard part. Reliability, evaluation and legibility are. We are interested in systems whose behaviour can be characterised rather than hoped for.",
  },
  {
    id: "computing",
    index: "R02",
    name: "Computing",
    question: "Where does the current shape of computing stop serving the problem?",
    body: "Abstractions carry assumptions. We look at where the standard stack imposes cost — in latency, in energy, in complexity — and what a different arrangement would buy.",
  },
  {
    id: "hci",
    index: "R03",
    name: "Human–Computer Interaction",
    question: "What is the right interface to a system that thinks?",
    body: "The window, the pointer and the prompt were each designed for a different machine. We study what replaces them when the machine can act on its own.",
  },
  {
    id: "automation",
    index: "R04",
    name: "Automation",
    question: "Which work should be automated, and which should only be assisted?",
    body: "Automation changes responsibility, not just effort. We study where a system should decide, where it should recommend, and where it should stay out of the way.",
  },
  {
    id: "systems",
    index: "R05",
    name: "Systems",
    question: "How do systems stay understandable as they grow?",
    body: "Complexity accumulates faster than capability. We are interested in structures that keep a system legible to the people responsible for it at ten times its current size.",
  },
  {
    id: "emerging",
    index: "R06",
    name: "Emerging Technology",
    question: "What is worth working on before it is obvious?",
    body: "Fields with no settled answers are the ones where small teams still matter. We keep a few open deliberately.",
  },
];

export type EntryKind = "Note" | "Experiment" | "Prototype" | "Paper" | "Log";

export interface Entry {
  slug: string;
  title: string;
  kind: EntryKind;
  area: string;
  date: string;
  summary: string;
  link?: string;
}

export const entries: Entry[] = [];

/** What gets published here when there is something to publish. */
export const outputs = [
  {
    kind: "Research notes",
    body: "Short written positions on a problem we are actively thinking about.",
  },
  {
    kind: "Experiments",
    body: "A question, a method, a measurement, and what it did or did not show.",
  },
  {
    kind: "Prototypes",
    body: "Working artefacts built to test whether an idea survives being made real.",
  },
  {
    kind: "Engineering logs",
    body: "The record of a system being built, including what was wrong on the way.",
  },
];
