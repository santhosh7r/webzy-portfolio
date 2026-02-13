// // import Link from "next/link";
// // import SimpleServices from "@/components/ui/heroani-elem";
// // import Arrow from "@/components/svgs/arrow";

// // export default function Hero() {
// //   return (
// //     <section className="relative bg-[#0e0e0e] text-white min-h-screen overflow-hidden">
// //       {/* Grid Background */}
// //       <div
// //         className="absolute inset-0 z-0 pointer-events-none"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
// //           backgroundSize: "32px 32px",
// //         }}
// //       />

// //       {/* Gradient Beam */}
// //       <div className="absolute top-[-40%] left-[1%] md:left-[8%] w-[180px] md:w-[250px] h-[750px] md:h-[1100px] bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl rotate-[-35deg] md:rotate-[-45deg] z-0" />

// //       {/* Black Gradient Overlay */}
// //       <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/100" />

// //       {/* Main Content Container */}
// //       <div className="z-10 min-h-screen flex flex-col">
// //         {/* Combined Badge and Heading Section */}
// //         <div className="flex flex-col items-center pt-16 md:pt-20 px-6 md:px-12">
// //           {/* Badge/Label - Positioned closer to heading */}
// //           <div className="hidden sm:block">
// //             <div className="mb-4 md:mb-6   ">
// //               <div className="inline-flex  md:mt-13 items-center rounded-full bg-[#1a1a1a] px-2 py-0.3 text-xs sm:text-sm text-white border border-neutral-700">
// //                 <span className="inline-flex items-center justify-center rounded-full bg-[#131316] px-1.5 py-0.5 mr-2">
// //                   🔥
// //                 </span>
// //                 Webzy studios welcomes you
// //               </div>
// //             </div>
// //           </div>
// //           {/* Main Heading */}
// //           <div className="text-center">
// //             <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:mt-[-20] mt-15">
// //               We Don't Just Build Websites,
// //               <br className="hidden sm:block" />
// //               <span className="block text-blue-200 mt-2 md:mt-4">
// //                 We Build Your Digital Legacy
// //               </span>
// //             </h1>
// //           </div>
// //         </div>

// //         {/* Description with Arrow */}
// //         <div className="relative text-center my-8 md:my-12">
// //           <div className="max-w-4xl mx-auto px-6">
// //             <p className="text-gray-400 text-sm leading-relaxed sm:hidden font-myfont">
// //               We craft stunning websites that don't just look good they build
// //               trust, drive results, and turn visitors into loyal clients.
// //             </p>
// //             <p className="text-gray-400 text-sm sm:text-lg md:text-xl hidden font-myfont sm:block max-w-[50vw] mx-auto">
// //               We craft stunning websites that don't just look good — they build
// //               trust, drive results, and turn visitors into loyal clients.
// //               Whether you're a startup or a brand ready to scale, we've got your
// //               digital back.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="flex items-center justify-center gap-4 z-20 flex-wrap mb-8 md:mb-12">
// //           <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
// //             <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300">
// //               Schedule a call with santhosh
// //             </button>
// //           </Link>
// //         </div>

// //         {/* Trust Badge */}
// //         <div className="text-center mb-8 md:mb-16 z-20">
// //           <h3 className="text-sm sm:text-lg">
// //             webzy is Trusted by{" "}
// //             <span className="text-blue-300">10+ brands </span>worldwide
// //           </h3>
// //           <div className="flex justify-center pb-10 md:pb-16 mt-auto">
// //             <div className="w-full max-w-6xl px-6">
// //               <SimpleServices />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Services Section */}
// //       </div>
// //     </section>
// //   );
// // }

// import AnimatedTooltipPreview from "@/components/sections/democlient";
// import SimpleServices from "@/components/ui/heroani-elem";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative bg-black text-white min-h-screen overflow-hidden">
//       {/* Gradient Beam  */}
//       {/* <div
//         className="
//     absolute
//     top-[-25%]
//     left-1/2
//     -translate-x-1/2
//     w-[400px]
//     h-[450px]
//     sm:w-[700px]
//     sm:h-[500px]
//     md:w-[750px]
//     md:h-[600px]
//     lg:w-[900px]
//     lg:h-[600px]
//        2xl:w-[1000px]
//     2xl:h-[600px]
//     bg-gradient-to-br
//     from-[#0199ff]/20
//     to-transparent
//     blur-3xl
//     rounded-b-full
//     z-0
//   "
//       /> */}
//       {/* <div className="absolute inset-0 z-0"><DemoOne /></div> */}
//       {/* Main Content Container */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         <div className="mt-28 md:translate-y-6  ">
//           <AnimatedTooltipPreview />
//         </div>
//         <div className="flex justify-center px-4 transition-transform duration-300 -translate-y-6">
//           <div className="text-center text-2xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold leading-tight  2xl:max-w-4xl md:max-w-2xl lg:max-w-4xl xl:max-w-4xl sm:max-w-4xl mt-4 sm:mt-8 md:mt-12 2xl:mt-16">
//             <a>
//               Webzy Studios builds digital legacies for next-generation, helping
//               ambitious businesses grow world wide.
//             </a>
//           </div>
//         </div>

//         <div className="relative text-center my-8 md:my-12">
//           <div className="px-6">
//             <p className="text-gray-400 text-sm sm:text-lg md:text-xl  max-w-[60vw] 2xl:max-w-[50vw] mx-auto">
//               An agency of a forward-thinking creator designing impactful web
//               platforms and digital solutions that empower ambitious brands on
//               an international scale
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center justify-center gap-4 z-20 flex-wrap mb-8 md:mb-12">
//           <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
//             <button className="px-3 py-1 sm:px-3 sm:py-1 rounded-4xl bg-[#0199ff] shawdow-md text-black font-medium transition-colors duration-300">
//               Schedule a call with santhosh
//             </button>
//           </Link>
//         </div>

//         {/* Trust Badge */}
//         <div className="text-center mb-8 md:mb-16 z-20">
//           <h3 className="text-sm sm:text-md font-semibold">
//             Webzy Studios is trusted by brands, startups, agencies globally
//           </h3>
//           <div className="flex justify-center pb-10 md:pb-20 mt-auto">
//             <div className="w-full max-w-3xl px-6">
//               <SimpleServices />
//             </div>
//           </div>
//         </div>

//         {/* Services Section */}
//       </div>
//     </section>
//   );
// }

// // import SimpleServices from "@/components/ui/heroani-elem";
// // import Link from "next/link";

// // export default function Hero() {
// //   return (
// //     <section className="relative bg-black text-white min-h-screen overflow-hidden">
// //       {/* Background Gradient */}
// //       <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[400px] h-[450px] rounded-b-full bg-gradient-to-br from-[#0199ff]/20 to-transparent blur-3xl sm:w-[700px] sm:h-[500px] md:w-[750px] md:h-[600px] lg:w-[900px] 2xl:w-[1000px] z-0" />

// //       {/* Main Content Container */}
// //       <div className="relative z-10 flex min-h-screen flex-col">
// //         {/* Main Heading */}
// //         <div className="flex flex-grow flex-col items-center justify-center px-4 text-center">
// //           <h1 className="mt-40 max-w-4xl text-2xl font-bold leading-tight sm:mt-0 sm:text-4xl md:text-5xl lg:text-6xl">
// //             Webzy Studios builds digital legacies for next-generation, helping
// //             ambitious businesses grow world wide.
// //           </h1>

// //           {/* Description */}
// //           <div className="my-8 md:my-12">
// //             <p className="mx-auto max-w-4xl text-sm text-gray-400 sm:text-lg md:text-xl 2xl:max-w-3xl">
// //               An agency of a forward-thinking creator designing impactful web
// //               platforms and digital solutions that empower ambitious brands on
// //               an international scale
// //             </p>
// //           </div>

// //           {/* Call to Action Button */}
// //           <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12">
// //             <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
// //               <button className="rounded-full bg-[#0199ff] px-4 py-2 text-black shadow-md font-medium transition-colors duration-300 sm:px-6 sm:py-3">
// //                 Schedule a call with santhosh
// //               </button>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Client Logos Section */}
// //         <div className="w-full text-center">
// //           <h3 className="text-sm font-semibold sm:text-base">
// //             Webzy Studios is trusted by brands, startups, agencies globally
// //           </h3>
// //           <div className="mt-auto flex justify-center pb-10 md:pb-20">
// //             <div className="w-full max-w-3xl px-6 pt-4">
// //               <SimpleServices />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

import { ThreeDMarqueeDemo } from "@/components/sections/marquee-section";
import SimpleServices from "@/components/ui/animated-logos";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-start md:justify-start pt-32 md:pt-45 pb-12">
        <div className="w-full max-w-7xl mx-auto px-6"> 
          {/* Hero Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: Heading */}
            <div className="lg:col-span-12">
              <h1 className="text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
                Helping{" "} ambitious businesses scale globally with high-performance digital products.
                {/* <span className="font-pinyon-script whitespace-nowrap text-white">
                 {" "}
                </span>{" "} */}
                
              </h1>
            </div>
          </div>

          {/* Description and CTA */}
          <div className="mt-8">
            <p className="text-gray-400 text-md sm:text-lg md:text-xl mb-10 max-w-4xl">
From conversion-focused websites to scalable SaaS platforms, we build smart technology that drives real growth. Designed for performance, built to scale.
            </p>
            <div className="mt-8">
              <Link href="https://cal.com/santhosh-perumal">
                <button className="relative overflow-hidden rounded-full bg-[#0199ff] px-5 py-2 text-black font-medium shadow-md group">
                  <span className="relative z-10">Schedule a call with santhosh</span>
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[100%]" />
                </button>
              </Link>
            </div>
          </div>

          {/* Trust Section - Reduced Gap */}
          <div className="mt-6 mb-12">
            <h3 className="text-sm sm:text-lg font-semibold mb-6 text-neutral-400">
              Webzy Studios is trusted by brands globally
            </h3>

            <div className="w-full">
              <SimpleServices />
            </div>
          </div>
        </div>

        <div className="-mt-10 md:-mt-4 relative z-20">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}
