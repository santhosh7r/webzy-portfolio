"use client";

import { motion } from "framer-motion";

export default function SimpleServices() {
  return (
    <div className="text-white py-8 text-center overflow-hidden font-myfont whitespace-nowrap">
      {/* <p className="text-sm mb-4">Trusted by 30+ businesses worldwide</p> */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-8 sm:text-xl text-lg  font-semibold "
          initial={{ x: "-10%" }}
          animate={{ x: "-55%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45,
          }}
        >
          <span>Website Development</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>Next.js</span>
          <span>Figma to Code</span>
          <span>Portfolio Websites</span>
          <span>Landing Pages</span>
          <span>UI/UX Design</span>
          <span>Responsive Design</span>
          <span>Performance Optimization</span>
          <span>Website Development</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>Next.js</span>
          <span>Figma to Code</span>
          <span>Portfolio Websites</span>
          <span>Landing Pages</span>
          <span>UI/UX Design</span>
          <span>Responsive Design</span>
          <span>Performance Optimization</span>
        </motion.div>
      </div>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// ────────────────────────────────
// LogoScroller Component
// ────────────────────────────────
// function LogoScroller({
//   logos,
//   speed = 45,
// }: {
//   logos: string[];
//   speed?: number;
// }) {
//   const loopedLogos = [...logos, ...logos]; // duplicate for infinite scroll

//   return (
//     <div className="w-full py-8 overflow-hidden bg-transparent">
//       <div className="relative flex overflow-hidden">
//         <motion.div
//           className="flex items-center space-x-10 sm:space-x-14 px-6"
//           initial={{ x: "-10%" }}
//           animate={{ x: "-55%" }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: speed,
//           }}
//         >
//           {loopedLogos.map((logo, index) => (
//             <div
//               key={index}
//               className="relative h-10 w-28 sm:h-12 sm:w-32 opacity-80 hover:opacity-100 transition-all"
//             >
//               <Image
//                 src={logo}
//                 alt={`Company logo ${index + 1}`}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// // ────────────────────────────────
// // Main Component
// // ────────────────────────────────
// export default function SimpleServices() {
//   const companyLogos = [
//     "/logo.png",
//     "/logos/meta.png",
//     "/logos/shopify.png",
//     "/logos/nextjs.png",
//  `   "/logos/aws.png",
//     "/logos/vercel.png",`
//   ];

//   return (
//     <div className="bg-black text-white text-center">
//       {/* <p className="text-sm mb-4">Trusted by 30+ businesses worldwide</p> */}
//       <LogoScroller logos={companyLogos} speed={40} />
//     </div>
//   );
// }
