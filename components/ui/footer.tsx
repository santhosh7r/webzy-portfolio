// "use client";
// import { motion } from "framer-motion";

// interface FooterProps {
//   brandName: string;
//   tagline: string;
//   navLinks: Array<{
//     href: string;
//     label: string;
//   }>;
//   socialLinks: Array<{
//     icon: React.ReactNode;
//     href: string;
//     label: string;
//   }>;
//   copyright: {
//     text: string;
//     license?: string;
//   };
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// export function Footer({
//   brandName,
//   tagline,
//   navLinks,
//   socialLinks,
//   copyright,
// }: FooterProps) {
//   return (
//     <footer className="border-t border-gray-800 pb-8 pt-16 lg:pt-24">
//       <motion.div
//         className="px-4 lg:px-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {/* Top Part: Menus */}
//         <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-12 md:gap-24 mb-24">
//           {/* Nav Links */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3">
//             <h3 className="font-bold text-xl mb-2">Menu</h3>
//             <ul className="flex flex-col items-center md:items-start list-none space-y-2 text-lg">
//               {navLinks.map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={link.href}
//                     className="text-muted-foreground hover:text-[#4A8BEF] transition-colors"
//                     target={link.href.startsWith("http") ? "_blank" : "_self"}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Social Icons */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3">
//             <h3 className="font-bold text-xl mb-2">Socials</h3>
//             <ul className="flex list-none space-x-4">
//               {socialLinks.map((link, i) => (
//                 <li key={i}>
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     aria-label={link.label}
//                     className="block p-2 rounded-full bg-black hover:bg-gray-900 transition-colors"
//                   >
//                     {link.icon}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         {/* Bottom Part: Branding */}
//         <div className="flex flex-col items-center text-center gap-y-4">
//           {/* Brand Name */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-bold font-geist-mono text-9xl md:text-[10rem] leading-none text-[#4A8BEF] lowercase"
//           >
//             {brandName}
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-muted-foreground max-w-md"
//           >
//             {tagline}
//           </motion.p>

//           {/* Copyright */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-4 text-sm leading-6 text-muted-foreground text-center"
//           >
//             <div>{copyright.text}</div>
//             {copyright.license && <div>{copyright.license}</div>}
//           </motion.div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }

// "use client";
// import { motion } from "framer-motion";

// interface FooterProps {
//   brandName: string;
//   tagline: string;
//   navLinks: Array<{
//     href: string;
//     label: string;
//   }>;
//   socialLinks: Array<{
//     icon: React.ReactNode;
//     href: string;
//     label: string;
//   }>;
//   copyright: {
//     text: string;
//     license?: string;
//   };
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// export function Footer({
//   brandName,
//   tagline,
//   navLinks,
//   socialLinks,
//   copyright,
// }: FooterProps) {
//   return (
//     <footer className="border-t border-neutral-800 bg-black text-white">
//       <motion.div
//         className="mx-auto max-w-7xl px-6 pt-16 pb-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between gap-16 mb-32">
//           {/* Left: Menu + Social */}
//           <div className="flex gap-20 text-sm text-neutral-400">
//             {/* Menu */}
//             <motion.div variants={itemVariants}>
//               <p className="mb-3 text-neutral-500">Menu</p>
//               <ul className="space-y-2">
//                 {navLinks.map((link, i) => (
//                   <li key={i}>
//                     <a
//                       href={link.href}
//                       target={link.href.startsWith("http") ? "_blank" : "_self"}
//                       className="hover:text-white transition"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Social */}
//             <motion.div variants={itemVariants}>
//               <p className="mb-3 text-neutral-500">Social</p>
//               <ul className="space-y-2">
//                 {socialLinks.map((link, i) => (
//                   <li key={i}>
//                     <a
//                       href={link.href}
//                       target="_blank"
//                       className="flex items-center gap-2 hover:text-white transition"
//                     >
//                       {link.icon}
//                       <span className="hidden sm:inline">{link.label}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           {/* Right: CTA */}
//           <motion.div
//             variants={itemVariants}
//             className="max-w-md text-left md:text-right"
//           >
//             <p className="text-2xl font-medium leading-snug">
//               Design and develop by santhosh!
//             </p>
//             {/* <a
//               href={navLinks[1]?.href}
//               className="mt-2 inline-block text-sm underline underline-offset-4 text-neutral-300 hover:text-white transition"
//             >
//               Book an Intro Call
//             </a> */}
//           </motion.div>
//         </div>

//         {/* Brand */}
//         <motion.div variants={itemVariants} className="mb-20 text-center">
//           <h1 className="text-[20vw] leading-none font-bold tracking-tight lowercase">
//             {brandName}
//           </h1>
//         </motion.div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row justify-between text-xs text-neutral-500 gap-4">
//           <p>
//             {copyright.text}
//             {copyright.license && ` — ${copyright.license}`}
//           </p>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }

// "use client";
// import { motion } from "framer-motion";

// interface FooterProps {
//   brandName: string;
//   navLinks: Array<{
//     href: string;
//     label: string;
//   }>;
//   socialLinks: Array<{
//     icon: React.ReactNode;
//     href: string;
//     label: string;
//   }>;
//   copyright: {
//     text: string;
//     license?: string;
//   };
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// export function Footer({
//   brandName,
//   navLinks,
//   socialLinks,
//   copyright,
// }: FooterProps) {
//   return (
//     <footer className="bg-black text-white">
//       {/* TOP BORDER */}
//       <div className="mx-auto max-w-7xl px-4">
//         <div className=" border-neutral-800" />
//       </div>

//       <motion.div
//         className="mx-auto max-w-7xl pt-24 pb-15 "
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         {/* Top Section */}
//         <div className="px-8 md:px-16">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-12">
//             {/* Left */}
//             <motion.div variants={itemVariants} className="max-w-sm">
//               <a href="/" className="mb-8 inline-block">
//                 <h2 className="text-6xl text-[#0199ff] font-bold lowercase ">
//                   {brandName}
//                 </h2>
//               </a>

//               <p className="font-bold text-md text-neutral-400">
//                 A creative agency thoughtfully built by{" "}
//                 <a
//                   href="https://santhoshperumal.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-[#0199ff] hover:underline"
//                 >
//                   Santhosh
//                 </a>
//                 .
//               </p>
//             </motion.div>

//             {/* Right */}
//             <motion.div variants={itemVariants} className="flex gap-16 text-sm">
//               <div>
//                 <p className="mb-4 font-semibold text-neutral-300 ">Menu</p>
//                 <ul className="space-y-3 text-neutral-400">
//                   {navLinks.map((link, i) => (
//                     <li key={i}>
//                       <a
//                         href={link.href}
//                         target={
//                           link.href.startsWith("http") ? "_blank" : "_self"
//                         }
//                         className="text-white hover:text-[#0199ff] font-bold transition underline"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <p className="mb-4 font-semibold text-neutral-300">Socials</p>
//                 <ul className="space-y-3 text-neutral-400">
//                   {socialLinks.map((link, i) => (
//                     <li key={i}>
//                       <a
//                         href={link.href}
//                         target="_blank"
//                         className="text-white font-bold   transition underline hover:text-[#0199ff] "
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* BOTTOM BORDER — SAME WIDTH AS TOP */}
//         <div className="mx-auto max-w-7xl px-8">
//           <hr className="my-8 border-neutral-800" />
//         </div>

//         {/* Bottom Bar */}
//         <div className="px-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white gap-4">
//             <p>
//               {copyright.text}
//               {copyright.license && ` — ${copyright.license}`}
//             </p>
//             <a href="#" className="hover:text-white transition">
//               ↑ Back to Top
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }

"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface FooterProps {
  brandName: string;
  navLinks: Array<{ href: string; label: string }>;
  socialLinks: Array<{ icon: React.ReactNode; href: string; label: string }>;
  copyright: { text: string; license?: string };
}

export function Footer({
  brandName,
  navLinks,
  socialLinks,
  copyright,
}: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden pt-24 md:pt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* TOP SECTION: Call to Action + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 md:mb-32">
          
          {/* LEFT: CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                Ready to scale your <br />
                <span className="text-neutral-500">digital presence?</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                 {/* Main CTA */}
                 <a 
                   href="https://cal.com/santhosh-perumal" 
                   target="_blank"
                   className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-transform hover:scale-105 "
                 >
                   Book a call
                   <div className="bg-black text-white rounded-full p-1 relative overflow-hidden group-hover:rotate-45 transition-transform duration-300">
                     <ArrowUpRight size={16} />
                   </div>
                 </a>
                 <a 
                   href="mailto:hello@webzystudio.com"
                   className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/80"
                 >
                   contact@webzystudio.com
                 </a>
              </div>
            </div>
            
            {/* Mobile Footer Links stacked */}
            {/* <div className="flex flex-col gap-2 mt-12 lg:hidden">
                 <p className="text-neutral-500 text-sm">Chennai, India</p>
                 <p className="text-neutral-500 text-sm">Remote Worldwide</p>
            </div> */}
          </div>

          {/* RIGHT: Navigation Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            
            {/* Column 1: Explore */}
            <div>
               <h4 className="text-neutral-500 text-sm font-medium mb-6 uppercase tracking-wider">Explore</h4>
               <ul className="space-y-4">
                 {navLinks.filter(l => !l.href.includes("cal.com")).map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-lg hover:underline text-white/80 hover:text-[#0199ff] transition-colors">{link.label}</a>
                    </li>
                 ))}
               </ul>
            </div>

            {/* Column 2: Socials */}
            <div>
               <h4 className="text-neutral-500 text-sm font-medium mb-6 uppercase tracking-wider">Socials</h4>
               <ul className="space-y-4">
                 {socialLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} target="_blank" className="text-lg text-white/80 hover:text-[#0199ff] transition-colors flex items-center gap-2 group hover:underline">
                        {link.label}
                        <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0199ff]" size={14} />
                      </a>
                    </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Brand */}
        <div className="pt-8 pb-12 flex flex-col md:flex-row items-center justify-center relative border-t border-white/5 mt-16 md:mt-0 md:border-none">
           
           {/* Mobile: Back to Top (Left) */}
           <div className="w-full flex md:hidden justify-start mb-6">
              <button 
                onClick={scrollToTop}
                className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-wider flex items-center gap-2"
              >
                ↑ Back to top
              </button>
           </div>

           {/* Desktop: Centered Copyright */}
           <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-neutral-500 text-sm items-center text-center">
             <p className="opacity-60 font-bold">{copyright.text}</p>
             <p className="opacity-20 font-bold ">/</p>
             <p className="opacity-60 font-bold ">
                Built and led by <a href="https://santhoshperumal.com" target="_blank" className="text-white hover:underline decoration-white/30 underline-offset-4 transition-all">Santhosh</a>
             </p>
           </div>
        </div>
        
        {/* MASSIVE BRAND WATERMARK */}
        <div className="hidden md:block w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
           <h1 className="text-[18vw] font-bold leading-[0.75] text-center tracking-tighter text-white translate-y-[10%]">
             WEBZY STUDIO
           </h1>
        </div>

      </div>
    </footer>
  );
}
