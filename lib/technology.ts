/**
 * The domains Webzy works in. These are areas of focus, not a service menu —
 * nothing here is priced, packaged or sold.
 */

export interface Domain {
  id: string;
  index: string;
  name: string;
  /** One line. What the domain is. */
  summary: string;
  /** Two or three sentences. Why Webzy works here and how. */
  body: string;
  /** Concrete surfaces of work inside the domain. */
  threads: string[];
}

export const domains: Domain[] = [
  {
    id: "software",
    index: "01",
    name: "Software",
    summary:
      "Systems, applications and platforms designed around real-world problems.",
    body: "Most software fails at the seams — where a model meets a workflow, where one system hands off to another. We design those seams first. The result is software that holds its shape as the problem it serves gets larger.",
    threads: [
      "Platform and systems architecture",
      "Operational and internal software",
      "Interfaces for complex state",
      "Data models and system design",
    ],
  },
  {
    id: "intelligence",
    index: "02",
    name: "Artificial Intelligence",
    summary:
      "Intelligent systems, machine learning, and new interfaces between people and machines.",
    body: "Intelligence is only useful when it is accountable. We build systems where a model's output enters a real workflow with structure around it — evaluation, constraints, and a person who can see why it decided what it decided.",
    threads: [
      "Applied machine learning",
      "Agentic and tool-using systems",
      "Evaluation and reliability",
      "Human–machine interfaces",
    ],
  },
  {
    id: "engineering",
    index: "03",
    name: "Engineering",
    summary:
      "Engineering-driven experimentation focused on making complex technology useful and scalable.",
    body: "Engineering is where an idea meets physics, budgets and time. We prototype early, measure honestly, and keep the version that survives contact with reality. Scale is treated as a design constraint from the first sketch, not a later problem.",
    threads: [
      "Prototyping and iteration",
      "Performance and scale",
      "Infrastructure and reliability",
      "Instrumentation and measurement",
    ],
  },
  {
    id: "emerging",
    index: "04",
    name: "Emerging Technology",
    summary:
      "Research and building in areas where the technology is still taking shape.",
    body: "Some fields have no settled answers yet. We work in a few of them deliberately — building small, learning fast, and staying honest about what is understood and what is still open.",
    threads: [
      "New computing surfaces",
      "Autonomy and control",
      "Hardware–software systems",
      "Open exploration",
    ],
  },
];

export const domainById = (id: string) => domains.find((d) => d.id === id);
