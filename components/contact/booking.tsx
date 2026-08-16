"use client";

import { site } from "@/lib/site";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

/* ============================================================
   BOOKING
   The Cal.com scheduler, themed to the site rather than dropped
   in as a white rectangle on black. Cal renders in an iframe, so
   the only lever on its interior is the theme API — everything
   else is set through cssVarsPerTheme.
   ============================================================ */

export function Booking() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: site.calNamespace });
      if (cancelled) return;

      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0199ff" },
          dark: {
            "cal-brand": "#0199ff",
            "cal-bg": "#080808",
            "cal-bg-emphasis": "#101010",
            "cal-bg-muted": "#0b0b0b",
            "cal-border": "rgba(255,255,255,0.09)",
            "cal-border-emphasis": "rgba(255,255,255,0.22)",
            "cal-text": "#f5f5f5",
            "cal-text-emphasis": "#ffffff",
            "cal-text-subtle": "#a1a1a1",
            "cal-text-muted": "#6b6b6b",
          },
        },
      });

      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative min-h-[520px] w-full">
      {/* Held until Cal paints, so the panel never flashes empty. */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="t-mono text-ink-4">Loading calendar…</p>
        </div>
      )}

      <Cal
        namespace={site.calNamespace}
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
