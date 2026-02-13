
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
    "/helios.png",
    "/OffWhite.png",
    "/webzy.png",
    "/seelak.png",
    "/aura.png",
    "/helios.png",
    "/webzy.png",
    "/seelak.png",
    "/helios.png",
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
