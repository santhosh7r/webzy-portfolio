"use client";

import { useEffect, useRef } from "react";

/* ============================================================
   FIELD SURFACE
   Webzy's object. A finite mesh under a propagating disturbance —
   the picture an engineer draws when they want to see how a system
   responds to a signal.

   No globe, no particles, no vanishing point. The projection is
   axonometric on purpose: parallel lines stay parallel, so the
   thing reads as a measured model rather than a scene. Everything
   visible is derived from one scalar field evaluated on a grid.

   Two variants:
   - "band"   full-bleed terrain. The ground the hero type stands on.
   - "object" a contained model, for panels and inline figures.
   ============================================================ */

type Variant = "band" | "object";

export function Lattice({
  className,
  variant = "band",
}: {
  className?: string;
  variant?: Variant;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 768px)").matches;

    const cols = variant === "band" ? (compact ? 34 : 62) : compact ? 26 : 38;
    const rows = variant === "band" ? (compact ? 20 : 26) : compact ? 20 : 28;

    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      // Capped at 2: past that the cost is real and the gain is not.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Projected buffers. Allocated once, rewritten every frame.
    const n = cols * rows;
    const sx = new Float32Array(n);
    const sy = new Float32Array(n);
    const amp = new Float32Array(n); // |field|, 0 → 1
    const fade = new Float32Array(n); // falloff to black, 0 → 1

    const idx = (c: number, r: number) => r * cols + c;

    const draw = (t: number) => {
      /**
       * The band spans wider than the viewport and dissolves at the top and
       * bottom, so it reads as terrain continuing past the frame. The object
       * is bounded on every side so it reads as a discrete model.
       */
      const band = variant === "band";
      const rx = band ? w * 0.58 : Math.min(w * 0.44, h * 0.9);
      const ry = band ? h * 0.34 : Math.min(w * 0.44, h * 0.9) * 0.46;
      const gain = band ? Math.min(h * 0.42, 240) : 82;

      const cx = w / 2;
      const cy = band ? h * 0.52 : h / 2;
      const time = t * 0.001;

      for (let r = 0; r < rows; r++) {
        const v = (r / (rows - 1)) * 2 - 1;
        for (let c = 0; c < cols; c++) {
          const u = (c / (cols - 1)) * 2 - 1;
          const i = idx(c, r);

          const rad = Math.sqrt(u * u + v * v);

          // A wavefront leaving the centre and decaying as it spreads.
          const ripple =
            Math.sin(rad * 6.2 - time * 1.5) * Math.exp(-rad * rad * 1.6);

          // A slower asymmetric term so the surface is never a perfect
          // radial pattern — the model should look sampled, not decorative.
          const drift =
            Math.sin(u * 2.1 + time * 0.42) *
            Math.cos(v * 1.7 - time * 0.31) *
            0.34 *
            Math.exp(-rad * rad * 0.9);

          const field = ripple + drift;

          sx[i] = cx + u * rx;
          sy[i] = cy + v * ry - field * gain;
          amp[i] = Math.min(Math.abs(field), 1);

          if (band) {
            // Anisotropic: holds almost to the left and right edges, gives
            // way vertically. That is what makes it a horizon, not a blob.
            const fu = Math.max(0, 1 - Math.pow(Math.abs(u) / 1.42, 5));
            const fv = Math.max(0, 1 - Math.pow(Math.abs(v) / 1.05, 2.2));
            fade[i] = fu * fv;
          } else {
            fade[i] = Math.max(0, 1 - Math.pow(rad / 1.12, 2.6));
          }
        }
      }

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.lineJoin = "round";

      /**
       * Segments are stroked individually because opacity is a property of
       * the field at that point, not of the line as a whole. Batched paths
       * would force one alpha across a whole row and flatten the readout.
       */
      const stroke = (i: number, j: number) => {
        const a = ((amp[i] + amp[j]) / 2) * ((fade[i] + fade[j]) / 2);
        const alpha = 0.035 + a * 0.74;
        if (alpha < 0.045) return;

        // Blue is reserved for where the field is actually doing something.
        const blue = Math.min(1, a * 1.7);
        ctx.strokeStyle =
          blue > 0.14
            ? `rgba(${Math.round(1 + 149 * (1 - blue))}, ${Math.round(
                153 + 17 * (1 - blue),
              )}, 255, ${alpha})`
            : `rgba(255, 255, 255, ${alpha * 0.5})`;

        ctx.beginPath();
        ctx.moveTo(sx[i], sy[i]);
        ctx.lineTo(sx[j], sy[j]);
        ctx.stroke();
      };

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) stroke(idx(c, r), idx(c + 1, r));
      }
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 1; r++) stroke(idx(c, r), idx(c, r + 1));
      }

      // Crests carry a node. Only the highest points, so they stay rare.
      for (let i = 0; i < n; i++) {
        const a = amp[i] * fade[i];
        if (a < 0.72) continue;
        ctx.fillStyle = `rgba(140, 205, 255, ${(a - 0.72) * 2.2})`;
        ctx.beginPath();
        ctx.arc(sx[i], sy[i], 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let running = true;
    const start = performance.now();

    const loop = (now: number) => {
      if (!running) return;
      draw(now - start);
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw(1800); // One composed frame. The structure still reads.
    } else {
      raf = requestAnimationFrame(loop);
    }

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };
    const go = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? go() : stop()),
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : go());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [variant]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
