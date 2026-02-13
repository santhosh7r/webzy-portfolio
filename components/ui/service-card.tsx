"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ServiceRowProps {
  index: string;
  title: string;
  desc: string;
  tags: string[];
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  index,
  title,
  desc,
  tags,
}) => {
  return (
    <div className="group relative py-12 transition-all duration-500 border-b border-white/10 last:border-b-0">
      
      {/* Decorative Gradient Line (Hidden by default, shows on hover/active) */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-[#0199ff] via-[#0199ff]/50 to-transparent transition-all duration-700 ease-in-out" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4 md:gap-6">
        {/* Index - Smaller and subtler on mobile */}
        <div className="col-span-1 md:col-span-1 text-white/30 text-sm font-mono mb-2 md:mb-0">
          ({index})
        </div>

        {/* Title - Large and responsive */}
        <div className="col-span-1 md:col-span-11 lg:col-span-5 mb-4 md:mb-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white group-hover:text-[#0199ff] transition-colors duration-300">
            {title}
          </h3>
          
          {/* Mobile Arrow (Visible only on small screens next to title) */}
          <div className="md:hidden absolute top-12 right-0">
             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#0199ff] group-hover:bg-[#0199ff] group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </div>
          </div>
        </div>

        {/* Description & Tags - Visible on mobile, revealed hover on Desktop */}
        <div className="col-span-1 md:col-span-11 lg:col-span-5 opacity-100 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-75">
          <p className="text-white/60 mb-6 max-w-md text-sm sm:text-base leading-relaxed">{desc}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Arrow - Hidden on mobile */}
        <div className="hidden lg:flex col-span-1 justify-end">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:border-[#0199ff] group-hover:text-[#0199ff] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
      
       {/* Bottom active line accent for mobile clarity */}
       <div className="md:hidden h-px w-16 bg-gradient-to-r from-[#0199ff] to-transparent mt-8 opacity-50" />
    </div>
  );
};

export default ServiceRow;
