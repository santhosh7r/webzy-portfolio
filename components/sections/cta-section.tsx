"use client";
import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/10 px-6 py-12 text-center md:px-16 md:py-16">
            
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8">
             Build What Moves the Needle
            </h2>
            
            <p className="text-neutral-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-light">
Growth doesn’t happen by chance, it’s engineered with the right strategy, design, and technology. Let’s create something that drives real impact and scales with your ambition.            </p>

            <div className="flex justify-center">
                 <a 
                   href="https://cal.com/santhosh-perumal" 
                   target="_blank"
                   className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0199ff] text-black rounded-full font-medium text-lg transition-transform hover:scale-105"
                 >
                   Book a call
                   <div className="bg-black text-white rounded-full p-1 relative overflow-hidden group-hover:rotate-45 transition-transform duration-300">
                     <ArrowUpRight size={16} />
                   </div>
                 </a>
            </div>

        </div>
      </div>
    </section>
  );
}
