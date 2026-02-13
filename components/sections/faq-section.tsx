import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/faq-accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const items = [
  {
    id: "1",
    title: "What pricing models do you offer?",
    content: "We work with three models: one-time fixed pricing for builds, subscription-based pricing for ongoing growth or SaaS evolution, and maintenance-only plans. Scope is always defined upfront.",
  },
  {
    id: "2",
    title: "How long does a typical project take?",
    content: "Timelines depend on scope: Landing pages: 3 days to 1 week. Websites: 2–3 weeks. Web apps & e-commerce: 3–4 weeks. Every project follows a structured process from discovery to launch.",
  },
  {
    id: "3",
    title: "What does your project process look like?",
    content: "We follow a clear, phased approach: Week 1: Discovery & wireframing. Week 2: Design & initial development. Week 3: Development & testing. Week 4: Final testing, launch & optimization.",
  },
  {
    id: "4",
    title: "Do you build SaaS products from MVP to scale?",
    content: "Yes. We help founders move from validated MVPs to scalable, production-ready SaaS platforms with clean architecture and long-term growth in mind.",
  },
  {
    id: "5",
    title: "What technologies do you use to build products?",
    content: "We select the stack based on the product’s needs. This includes Next.js for custom websites and web apps, Shopify for e-commerce, Framer for high-conversion sites, and custom backend development for complex systems.",
  },
  {
    id: "6",
    title: "Do you provide post-launch support and maintenance?",
    content: "Yes. We include one month of free post-launch support. After that, maintenance is available as a paid plan based on the project’s complexity and needs.",
  },
  {
    id: "7",
    title: "Do you offer refunds?",
    content: "No. Once a project begins, payments are non-refundable. This ensures full commitment and consistent execution quality.",
  },
  {
    id: "8",
    title: "Who do you typically work with?",
    content: "We work with startups, founders, and established brands that value clarity, quality, and long-term impact over quick or cheap solutions.",
  },
];

function FaqComp() {
  return (
    <section className="bg-black py-32" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simple Header */}
        <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
               FAQ
            </h2>
        </div>

        {/* List */}
        <div className="w-full">
             <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {items.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b border-white/10 py-2">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 text-left text-lg md:text-xl font-semibold text-white transition-opacity hover:opacity-70 [&[data-state=open]>svg]:rotate-45">
                      {item.title}
                      <Plus
                        size={28}
                        className="text-white/50 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pb-8 text-neutral-400 text-lg leading-relaxed max-w-4xl">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>

      </div>
    </section>
  );
}

export { FaqComp };

