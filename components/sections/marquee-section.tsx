// // "use client";

// // import { useMemo } from "react";
// // import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// // const imagePool = [
// //   "/login1.png",
// //   "/webzy2.png",
// //   "/OffWhite.png",
// //   "/aura.png",
// //   "/eco.png",
// //   "/webzy.png",
// //   "/seelak.png",
// //   "/Macbook.png",
// // ];

// // export function ThreeDMarqueeDemo() {
// //   const images = useMemo(() => {
// //     return generateGridSafeImages(imagePool, 60, 6);
// //   }, []);

// //   return (
// //     <div className="mx-auto my-10 bg-gray-950/5 p-2 dark:bg-neutral-800">
// //       <ThreeDMarquee images={images} />
// //     </div>
// //   );
// // }

// // /**
// //  * Prevents:
// //  * - same image side-by-side
// //  * - same image vertically
// //  * - same image diagonally (left & right)
// //  * Works perfectly with Aceternity ThreeDMarquee
// //  */
// // function generateGridSafeImages(
// //   pool: string[],
// //   total: number,
// //   itemsPerRow: number,
// // ) {
// //   const result: string[] = [];

// //   for (let i = 0; i < total; i++) {
// //     let candidate = "";
// //     let attempts = 0;

// //     do {
// //       candidate = pool[Math.floor(Math.random() * pool.length)];
// //       attempts++;

// //       const left = i % itemsPerRow !== 0 ? result[i - 1] : null;

// //       const above = i - itemsPerRow >= 0 ? result[i - itemsPerRow] : null;

// //       const aboveLeft =
// //         i % itemsPerRow !== 0 && i - itemsPerRow - 1 >= 0
// //           ? result[i - itemsPerRow - 1]
// //           : null;

// //       const aboveRight =
// //         (i + 1) % itemsPerRow !== 0 && i - itemsPerRow + 1 >= 0
// //           ? result[i - itemsPerRow + 1]
// //           : null;

// //       if (
// //         candidate !== left &&
// //         candidate !== above &&
// //         candidate !== aboveLeft &&
// //         candidate !== aboveRight
// //       ) {
// //         break;
// //       }
// //     } while (attempts < 25);

// //     result.push(candidate);
// //   }

// //   return result;
// // }

// "use client";
// import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// export function ThreeDMarqueeDemo() {
//   const images = [
//     "/aura.png",
//     "/login1.png",
//     "/webzy2.png",
//     "/OffWhite.png",
//     "/aura.png",
//     "/login1.png",
//     "/webzy2.png",
//     "/OffWhite.png",
//     "/eco.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/Macbook.png",
//     "/eco.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/Macbook.png",
//     "/eco.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/OffWhite.png",
//     "/seelak.png",
//     "/eco.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/aura.png",
//     "/OffWhite.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/login1.png",
//     "/OffWhite.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/aura.png",
//     "/login1.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/login1.png",
//     "/eco.png",
//     "/webzy.png",
//     "/seelak.png",
//     "/aura.png",
//     "/seelak.png",
//     "/webzy.png",
//     "/seelak.png",
//   ];
//   return (
//     <div className="mx-auto my-10  bg-gray-950/5 p-2  dark:bg-neutral-800">
//       <ThreeDMarquee images={images} />
//     </div>
//   );
// }

"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/aura.png",
    "/login1.png",
    "/webzy2.png",
    "/OffWhite.png",
    "/aura.png",
    "/login1.png",
    "/webzy2.png",
    "/OffWhite.png",
    "/eco.png",
    "/webzy.png",
    "/seelak.png",
    "/Macbook.png",
    "/eco.png",
    "/webzy.png",
    "/seelak.png",
    "/webzy.png",
    "/seelak.png",
    "/Macbook.png",
    "/eco.png",
    "/webzy.png",
    "/seelak.png",
    "/OffWhite.png",
    "/seelak.png",
    "/eco.png",
    "/webzy.png",
    "/seelak.png",
    "/aura.png",
    "/OffWhite.png",
    "/webzy.png",
    "/seelak.png",
    "/login1.png",
    "/OffWhite.png",
    "/webzy.png",
    "/seelak.png",
    "/aura.png",
    "/login1.png",
    "/webzy.png",
    "/seelak.png",
    "/login1.png",
    "/eco.png",
    "/webzy.png",
    "/seelak.png",
    "/aura.png",
    "/seelak.png",
    "/webzy.png",
    "/seelak.png",
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
        <div className="rounded-xl overflow-hidden">
            <ThreeDMarquee images={images} className="rounded-xl bg-black" />
        </div>
    </div>
  );
}
