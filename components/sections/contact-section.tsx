"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0199ff" }, 
          dark: { "cal-brand": "#0199ff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="bg-black py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Left Aligned */}
        <div className="mb-20 md:mb-24">
            <div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Let's Talk
                </h2>
            </div>
        </div>

        {/* Wider Cal Embed */}
        <div className="w-full">
          <Cal
            namespace="15min"
            calLink="santhosh-perumal/15min"
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
        
      </div>
    </section>
  );
}
