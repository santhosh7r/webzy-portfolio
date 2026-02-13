"use client";

import { cn } from "@/components/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PricingPlan {
  name: string;
  features: string[];
  shortFeatures: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Plans",
  description = "Transparent pricing for every stage of growth.",
}: PricingProps) {
  
  return (
    <section className="bg-black py-32" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Simplified */}
        <div className="mb-16 md:mb-24">
             <h2 className="text-5xl md:text-7xl font-bold text-white">
               {title}
             </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-col p-8 md:p-10 rounded-sm border transition-all duration-500 border-white/10 hover:border-white/30"
              )}
            >
              

              {/* Plan Header */}
              <div className="mb-10">
                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
                    {plan.name}
                </h3>
                 {/* Placeholder for Price if added later, keeping visual balance */}
                 <div className="h-2 w-12 bg-white/20 mb-6" />
                 
                 <p className="text-neutral-300 min-h-[48px] leading-relaxed">
                    {plan.description}
                 </p>
              </div>

              {/* Features aligned */}
              <div className="flex-grow mb-12">
                 <ul className="space-y-4">
                  {plan.shortFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#0199ff] transition-colors" />
                      <span className="text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors">
                          {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <Link
                href={plan.href}
                className={cn(
                  "w-full py-4 flex items-center justify-between border-t border-white/10 text-white transition-all duration-300 group-hover:border-white",
                )}
              >
                <span className="font-medium text-lg">{plan.buttonText}</span>
                <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0199ff]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
