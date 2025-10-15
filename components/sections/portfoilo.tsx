"use client";

import React from "react";
import HoverExpand from "../ui/port-elem";
import Image from "next/image";

const images = [
  "/aura.png",
  "/eco.png",
  "/webzy.png",
  // "/temp2.png",
  // "/temp4.png",
];

const links = [
  "https://auradigitalservices.in/",
  "https://www.ecoplastinteriors.com/",
  "https://www.webzystudios.com/",
];

export function DeskPort() {
  return (
    <section
      id="works"
      className="min-h-screen w-full mt-[3%] md:mt-30 px-4 text-white -translate-y-40 "
    >
      <div className="text-center mb-12 mt-[-20px] md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold">Our Recent works</h1>
        <p className="text-base md:text-lg mt-4 text-[#4a8bef] max-w-2xl mx-auto font-myfont">
          Take a look at some of our recent projects showcasing creativity and
          quality.
        </p>
      </div>
      <div className="mt-[-70px] md:mt-8">
        <HoverExpand
          images={images}
          links={links}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          maxThumbnails={40}
        />
      </div>
    </section>
  );
}
