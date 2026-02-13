import { caseStudies, getCaseStudy } from "@/app/lib/case-studies";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import Footer from "@/components/sections/footer";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  return {
    title: "Webzy Study", // Static title as requested
    description: study.description,
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  // Find next project for the navigation link
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-24">
      {/* 1. Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <Link
          href="/case-study"
          className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900 group-hover:border-neutral-700 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </span>
          Back to Works
        </Link>
      </div>

      {/* 2. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-12">
          {study.title}
        </h1>

        {/* Metadata Grid - Premium Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-white/10 py-8">
            <div>
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Client</h3>
                <p className="text-lg md:text-xl font-medium text-white">{study.metadata.client}</p>
            </div>
            <div>
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Year</h3>
                <p className="text-lg md:text-xl font-medium text-white">{study.year}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Services</h3>
                <p className="text-lg md:text-xl font-medium text-white">{study.metadata.services}</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center md:justify-end">
                 {study.metadata.visitLink && (
                  <a
                    href={study.metadata.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-lg font-medium text-white hover:text-[#0199ff] border-b border-white hover:border-[#0199ff] transition-colors pb-1"
                  >
                    Visit Live Site
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                 )}
            </div>
        </div>
      </div>

      {/* 3. Overview Content */}
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
           {/* Sticky Title / Label */}
           <div className="md:col-span-4">
              <h2 className="text-sm font-semibold text-[#0199ff] uppercase tracking-widest sticky top-32">
                The Challenge
              </h2>
           </div>
           
           {/* Main Text Content */}
           <div className="md:col-span-8">
             <div className="space-y-10 text-xl md:text-3xl text-neutral-200 font-light leading-relaxed">
               {study.overview.map((p, i) => (
                  <p key={i}>{p}</p>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* 4. Full Page Visuals */}
      <div className="py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-[#0e0e0e]">
                 {/* Browser Header Control Mockup */}
                 <div className="h-12 bg-black flex items-center px-4 gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                 </div>
                 <Image
                    src={study.fullPageScreenshot}
                    alt={`${study.title} full page design`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    quality={100}
                  />
            </div>
          </div>
      </div>

      {/* 5. Next Project Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
          <p className="text-neutral-500 text-sm uppercase tracking-wider mb-8">Next Case Study</p>
          <Link href={`/case-study/${nextStudy.slug}`} className="group block relative overflow-visible">
             <h2 className="text-6xl md:text-9xl font-bold text-white group-hover:text-transparent group-hover:text-stroke-white transition-all duration-500 leading-none">
                {nextStudy.title}
             </h2>
             <div className="mt-8 flex items-center gap-4 text-[#0199ff] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-xl font-medium">View Project</span>
                <span className="text-2xl">→</span>
             </div>
             
             {/* Hover Preview Image Logic could go here if needed, but keeping text-focused for elegance */}
          </Link>
      </div>
    </main>
  );
}
