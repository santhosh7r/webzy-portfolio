
"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/aura.png",
    "/helios.png",
    "/webzy2.png",
    "/OffWhite.png",
    "/aura.png",
    "/helios.png",
    "/webzy2.png",
    "/OffWhite.png",
    "/eco.png",
    "/webzy.png",
    "/Seelak.png",
    "/Macbook.png",
    "/eco.png",
    "/webzy.png",
    "/Seelak.png",
    "/webzy.png",
    "/Seelak.png",
    "/Macbook.png",
    "/eco.png",
    "/webzy.png",
    "/Seelak.png",
    "/OffWhite.png",
    "/Seelak.png",
    "/eco.png",
    "/webzy.png",
    "/Seelak.png",
    "/aura.png",
    "/OffWhite.png",
    "/webzy.png",
    "/Seelak.png",
    "/helios.png",
    "/OffWhite.png",
    "/webzy.png",
    "/Seelak.png",
    "/aura.png",
    "/helios.png",
    "/webzy.png",
    "/Seelak.png",
    "/helios.png",
    "/eco.png",
    "/webzy.png",
    "/Seelak.png",
    "/aura.png",
    "/Seelak.png",
    "/webzy.png",
    "/Seelak.png",
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
        <div className="rounded-xl overflow-hidden">
            <ThreeDMarquee images={images} className="rounded-xl bg-black" />
        </div>
    </div>
  );
}
