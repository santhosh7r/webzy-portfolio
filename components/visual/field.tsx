import { cn } from "@/lib/cn";

/* ============================================================
   FIELD
   The quiet companion to the Lattice. Pure SVG, no JavaScript,
   no animation frame — used behind page headers where the page
   itself is the subject and the visual must stay underneath it.

   The geometry is a measurement field: an axis, a set of arcs at
   derived radii, and one marked interval.
   ============================================================ */

export function Field({ className }: { className?: string }) {
  // Radii on a constant ratio. Reads as instrumentation, not decoration.
  const radii = [96, 152, 224, 316, 428, 560];

  return (
    <svg
      aria-hidden
      viewBox="0 0 800 420"
      preserveAspectRatio="xMidYMax slice"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="field-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
        </linearGradient>
        <mask id="field-mask">
          <rect width="800" height="420" fill="url(#field-fade)" />
        </mask>
      </defs>

      <g mask="url(#field-mask)">
        {/* Arcs, struck from a centre below the fold. */}
        {radii.map((r, i) => (
          <circle
            key={r}
            cx="400"
            cy="452"
            r={r}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.1 - i * 0.011}
            strokeWidth="1"
          />
        ))}

        {/* Radials at fixed intervals. */}
        {[-64, -40, -20, 0, 20, 40, 64].map((deg) => {
          const rad = ((deg - 90) * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1="400"
              y1="452"
              x2={400 + Math.cos(rad) * 600}
              y2={452 + Math.sin(rad) * 600}
              stroke="#ffffff"
              strokeOpacity={deg === 0 ? 0.13 : 0.05}
              strokeWidth="1"
            />
          );
        })}

        {/* The one measured interval — the only accent in the drawing. */}
        <circle
          cx="400"
          cy="452"
          r="316"
          fill="none"
          stroke="#0199ff"
          strokeOpacity="0.42"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        <circle cx="400" cy="136" r="2.5" fill="#0199ff" fillOpacity="0.8" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------
   PLOT
   A small technical figure used inside content. Same language as
   the Field, sized for a column rather than a page.
   ------------------------------------------------------------ */

export function Plot({
  seedIndex = 0,
  className,
}: {
  seedIndex?: number;
  className?: string;
}) {
  // Deterministic per index — the five technology domains each get a distinct
  // figure, and the same domain always draws the same one.
  const rows = 5;
  const cols = 9;
  const cells: { x: number; y: number; on: boolean }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // A deterministic pattern function — no Math.random, no hydration drift.
      const v = Math.sin((c + 1) * 1.7 + (r + 1) * 2.3 + seedIndex * 4.1);
      cells.push({ x: c, y: r, on: v > 0.35 });
    }
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 180 100"
      className={cn("h-full w-full", className)}
    >
      {cells.map((cell, i) => (
        <rect
          key={i}
          x={cell.x * 20 + 4}
          y={cell.y * 20 + 4}
          width="12"
          height="12"
          rx="1.5"
          fill={cell.on ? "#0199ff" : "#ffffff"}
          fillOpacity={cell.on ? 0.5 : 0.06}
        />
      ))}
    </svg>
  );
}
