import Head from "next/head";
import Hero from "@/components/sections/hero";

import NavBar from "@/components/ui/navbar-elem";
import TestimonialsSection from "@/components/sections/terstisec";
import Contact from "@/components/sections/contactus";
import { Cta } from "@/components/sections/Fcta";
import { PricingBasic } from "@/components/sections/services";
import { DeskPort } from "@/components/sections/portfoilo";
import { Footercomp } from "@/components/sections/footer";
import { FaqComp } from "@/components/sections/faq";
import { WhyWebzy } from "@/components/sections/whywebzy";
import { MobilePort } from "@/components/sections/mob-port";
import { CTADemo } from "@/components/sections/Call-to-action";

export default function Home() {
  return (
    <>
      {/* ✅ Google Site Verification */}
      <Head>
        <meta
          name="google-site-verification"
          content="TSyix6K7GzXw9h76jf6eKx0P5LbcFzM_il3_1Cdc_EM"
        />
      </Head>
      {/* ✅ PAGE SECTIONS */}
      <div className="bg-black">
        <div className="flex flex-col">
          <NavBar />
          <Hero />
        </div>

        {/* MAIN CONTAINER (Blocks 2 sides) */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-black flex flex-col overflow-hidden">
            <WhyWebzy />

            <div id="works">
              <div className="hidden md:block">
                <DeskPort />
              </div>
              <div className="block md:hidden">
                <MobilePort />
              </div>
            </div>

            <div id="services">
              <PricingBasic />
            </div>

            <div className="max-w-6xl mx-auto">
              <TestimonialsSection />
            </div>

            <FaqComp />

            <div id="contact">
              <Contact />
            </div>
            
            <Cta />
            <Footercomp />
          </div>
        </div>
      </div>
    </>
  );
}

