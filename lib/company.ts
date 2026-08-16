/** The company's own positions. Written once, referenced everywhere. */

export const beliefs = [
  {
    index: "01",
    title: "Technology should expand what people can do",
    body: "Not replace the person, and not perform sophistication at them. The measure of a technology is the size of the gap between what someone could do before it and what they can do after.",
  },
  {
    index: "02",
    title: "The hard part is usually the problem, not the code",
    body: "Most failed systems were built correctly against a misunderstanding. We spend the expensive early time on understanding, because that is the decision everything downstream inherits.",
  },
  {
    index: "03",
    title: "Simple systems survive",
    body: "Every part of a system is a thing that can be wrong. We remove parts until what remains is the thing that actually does the work.",
  },
];

export const method = [
  {
    step: "01",
    name: "Understand",
    body: "Go to where the problem actually lives. Read the constraints off reality rather than off a brief.",
  },
  {
    step: "02",
    name: "Build",
    body: "Make the smallest real version. A working artefact answers questions a document cannot.",
  },
  {
    step: "03",
    name: "Test",
    body: "Put it in contact with the world and measure honestly, including the parts that fail.",
  },
  {
    step: "04",
    name: "Improve",
    body: "Keep what survived, cut what did not, and run it again. The loop is the method.",
  },
];

/**
 * The build standard. What every Webzy system is held to, stated as a
 * specification rather than as values. These are conditions of the work, not
 * claims about results — nothing here asserts an outcome we cannot show.
 */
export const standard = [
  {
    id: "legible",
    key: "Legibility",
    title: "It has to be understandable",
    body: "A system nobody can reason about is a liability, however well it performs. If the behaviour cannot be explained, it is not finished.",
  },
  {
    id: "measured",
    key: "Measurement",
    title: "It has to be instrumented",
    body: "Measurement goes in with the first build, not after something goes wrong. A system that cannot be observed cannot be improved.",
  },
  {
    id: "tested",
    key: "Conditions",
    title: "It has to survive contact",
    body: "Demo conditions prove nothing. The test is real load, real data and the edge cases that were inconvenient to think about.",
  },
  {
    id: "accountable",
    key: "Accountability",
    title: "It has to show its reasoning",
    body: "Especially where a model decides something. A person responsible for the outcome should be able to see why the system did what it did.",
  },
  {
    id: "maintained",
    key: "Maintenance",
    title: "It has to outlive the person who built it",
    body: "Code the next engineer can read, decisions written down rather than assumed, and no dependency on someone remembering.",
  },
];

export const principles = [
  {
    n: "01",
    text: "Think from first principles.",
    note: "Start from what is true, not from what is common.",
  },
  {
    n: "02",
    text: "Build before overexplaining.",
    note: "A prototype ends an argument a meeting cannot.",
  },
  {
    n: "03",
    text: "Prefer simple systems.",
    note: "Complexity is a cost paid every day afterwards.",
  },
  {
    n: "04",
    text: "Question assumptions.",
    note: "Including the ones that came from us.",
  },
  {
    n: "05",
    text: "Engineer with purpose.",
    note: "Every part of a system should be answering a question.",
  },
  {
    n: "06",
    text: "Stay curious.",
    note: "The interesting problems rarely arrive labelled.",
  },
  {
    n: "07",
    text: "Ship useful technology.",
    note: "Work that no one uses has not finished.",
  },
];
