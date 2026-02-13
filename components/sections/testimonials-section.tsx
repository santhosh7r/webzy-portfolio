'use client';
import { Quote } from 'lucide-react';
import React from 'react';


interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Webzy built us a focused landing page that actually converts. We started getting better-quality leads within weeks, directly impacting our monthly revenue growth.",
    name: "Prabhu",
    role: "Founder",
    company: "Aura Digital Services",
  },
  {
    id: 2,
    text: "Our customer inquiries improved significantly immediately after launch. The site structure and flow were clearly built with conversions in mind.",
    name: "Nandhan",
    role: "Founder",
    company: "Ecoplast Interiors",
  },
  {
    id: 3,
    text: "The CRM Webzy composed reduced manual work drastically and made tracking leads much easier for our entire sales team to manage.",
    name: "Operations Lead",
    role: "Project",
    company: "Custom CRM Software",
  },
  {
    id: 4,
    text: "Clean design, fast loading, and incredibly easy for customers to place orders. It was exactly the digital transformation we needed.",
    name: "Hakeem",
    role: "Founder",
    company: "SEV Tiles",
  },
  {
    id: 5,
    text: "Member and attendance management is much smoother now. The system is simple, reliable, and works flawlessly for our daily gym operations.",
    name: "Vickey",
    role: "Founder",
    company: "Helios Gym",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black py-32 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Left Aligned */}
        <div className="mb-20 md:mb-24">
             <h2 className="text-5xl md:text-7xl font-bold text-white">
               Testimonial
             </h2>
        </div>

        {/* Animated Marquee */}
        <div className="relative -mx-6 md:-mx-0 group">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
                 <div 
                    className="flex gap-4 md:gap-8 animate-marquee pause-on-hover"
                    style={{ width: "fit-content" }}
                 >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div 
                         key={`${t.id}-${i}`}
                         className="flex-shrink-0 w-[85vw] md:w-[450px] group/card flex flex-col justify-between border-l border-white/10 pl-6 md:pl-8 hover:border-[#0199ff] transition-colors duration-500 py-2"
                        >
                            <Quote className="text-neutral-700 mb-4 md:mb-6 group-hover/card:text-[#0199ff] transition-colors" size={20} />
                            
                            <p className="text-lg md:text-xl font-light text-neutral-200 leading-relaxed mb-6 md:mb-10">
                            "{t.text}"
                            </p>

                            <div>
                            <h4 className="text-white font-medium text-base md:text-lg">{t.name}</h4>
                            <p className="text-xs md:text-sm text-neutral-500 mt-1 uppercase tracking-wide">
                                {t.role}, <span className="text-neutral-300">{t.company}</span>
                            </p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;