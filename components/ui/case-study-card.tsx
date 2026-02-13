"use client";

import { caseStudies } from "@/app/lib/case-studies";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CaseStudy = (typeof caseStudies)[0];

export const CaseStudyCard = ({
  study,
  isStaggered,
}: {
  study: CaseStudy;
  isStaggered: boolean;
}) => {
  return (
    <Link
      href={`/case-study/${study.slug}`}
      className={`group flex flex-col gap-6 ${isStaggered ? "md:mt-24" : ""}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/5">
        <Image
          src={study.preview}
          alt={study.title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale-[50%]"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

        {/* Floating Tags (Bottom Left) */}
        <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {study.metadata.services.split(',').slice(0, 2).map((tag, i) => (
             <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full">
               {tag.trim()}
             </span>
          ))}
        </div>
      </div>

      {/* Content Below */}
      <div className="flex flex-col gap-3">
        {/* Title Row */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight group-hover:text-[#0199ff] transition-colors duration-300">
            {study.title}
          </h3>
          <div className="rounded-full border border-white/10 p-2 text-white transition-all duration-300 group-hover:bg-[#0199ff] group-hover:border-[#0199ff] group-hover:text-black group-hover:rotate-45">
             <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-neutral-400 font-light leading-relaxed line-clamp-2 pr-8">
            {study.description}
        </p>
        
        {/* Footer Meta */}
        <div className="mt-2 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
            <span>{study.metadata.client}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span>{study.year}</span>
        </div>
      </div>
    </Link>
  );
};
