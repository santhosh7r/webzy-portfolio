import { caseStudies } from "@/app/lib/case-studies";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Webzy",
  description: "Case studies and selected projects.",
};

export default function CaseStudyIndex() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 px-6 sm:px-12 md:px-20 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-10 md:mb-22 tracking-tight">
          Case
          <br /> <span className="text-[#0199ff] font-bold">Studies</span>
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-15 md:mb-22">
          We transform brands and businesses with carefully crafted digital
          experiences. Here are some of the projects we're proud to have been a
          part of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              isStaggered={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
