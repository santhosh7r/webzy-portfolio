// @/components/ui/case-study-details.tsx
import React from "react";
import type { CaseStudy } from "@/app/lib/case-studies";

interface CaseStudyDetailsProps {
  study: CaseStudy;
}

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({ study }) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        {study.title}
      </h1>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 mt-12 md:mt-16">
        {/* Left Column: Metadata */}
        <div className="space-y-6 text-base">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Client
            </h3>
            <p className="text-gray-200">{study.metadata.client}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Year
            </h3>
            <p className="text-gray-200">{study.year}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Services
            </h3>
            <p className="text-gray-200">{study.metadata.services}</p>
          </div>
          {study.metadata.visitLink && (
            <div className="pt-2">
              <a
                href={study.metadata.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
              >
                Visit Site
                <span className="transform transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Overview */}
        <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Overview
          </h2>
          {study.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
