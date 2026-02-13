import Hero from "@/components/sections/hero-section";
import Head from "next/head";

import TestimonialsSection from "@/components/sections/testimonials-section";
// import FounderSection from "@/components/sections/behind";
import Contact from "@/components/sections/contact-section";
import { Cta } from "@/components/sections/cta-section";
import { FaqComp } from "@/components/sections/faq-section";
import ManBehind from "@/components/sections/founder-section";
import { PricingBasic } from "@/components/sections/pricing-section";
import Services from "@/components/sections/services-section";
// export default function Home() {
//   return (
//     <>
//       {/* ✅ Google Site Verification */}
//       <Head>
//         <meta
//           name="google-site-verification"
//           content="TSyix6K7GzXw9h76jf6eKx0P5LbcFzM_il3_1Cdc_EM"
//         />
//       </Head>
//       {/* ✅ PAGE SECTIONS */}
//       <div className="bg-black">
//         <div className="flex flex-col">
//           <Hero />
//         </div>
//         <ThreeDMarqueeDemo />
//         {/* MAIN CONTAINER (Blocks 2 sides) */}
//         {/* <div className="max-w-6xl mx-auto px-4 md:px-8"> */}
//         {/* <div className="bg-black flex flex-col overflow-hidden">
//           <WhyWebzy /> */}

//         {/* <div id="services">
//             <PricingBasic />
//           </div> */}

//         {/* <div className="max-w-6xl mx-auto">//testimonials</div> */}

//         {/* <FaqComp /> */}
//         {/*
//         <div id="contact">
//           <Contact />
//         </div> */}

//         {/* {/* <Cta />
//         <Footercomp /> */}
//       </div>
//       {/* </div> */}
//     </>
//   );
// }

// import Head from "next/head";

// import Hero from "@/components/sections/hero";
// import { ThreeDMarqueeDemo } from "@/components/sections/demoport";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="TSyix6K7GzXw9h76jf6eKx0P5LbcFzM_il3_1Cdc_EM"
        />
        <title>The Webzy</title>
      </Head>

      {/* PAGE ROOT */}
      <main className="bg-black text-white overflow-x-hidden">
        {/* HERO SECTION */}
        <Hero />
        
        {/* SERVICES SECTION */}
        <Services />
        
        {/* FOUNDER SECTION */}
        <ManBehind />
        
        {/* PRICING PLANS */}
        <PricingBasic />
        
        <Cta />
        
        {/* TESTIMONIALS */}
        <TestimonialsSection />



        <Contact/>
                         <FaqComp />

      </main>
    </>
  );
}
