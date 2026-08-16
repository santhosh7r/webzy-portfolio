import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Webzy — Building New Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The real mark, inlined. The card is generated at build time on Node, so the
 * file is read from disk rather than fetched — keep this route on the default
 * Node runtime or the read goes away.
 */
const mark = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "webzy-mark.png"),
).toString("base64")}`;

/**
 * The share card is the site in one frame: black ground, one statement,
 * one accent, and a specification strip along the bottom.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          backgroundImage:
            "radial-gradient(120% 70% at 78% 8%, rgba(1,153,255,0.20) 0%, rgba(0,0,0,0) 62%)",
          padding: "68px",
          fontFamily: "sans-serif",
        }}
      >
        {/* The mark stands alone here too — same lockup as the site. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={87} height={48} alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            lineHeight: 1.0,
            letterSpacing: "-0.045em",
            color: "#f5f5f5",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>Building what</div>
          <div style={{ display: "flex", gap: "0.26em" }}>
            <span>technology makes</span>
            <span style={{ color: "#0199ff" }}>possible.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 26,
            fontSize: 20,
            letterSpacing: "0.12em",
            color: "#6b6b6b",
          }}
        >
          <div>SOFTWARE · INTELLIGENCE · ENGINEERING · EMERGING TECHNOLOGY</div>
          <div>webzyinc.com</div>
        </div>
      </div>
    ),
    size,
  );
}
