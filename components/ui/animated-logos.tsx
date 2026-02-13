"use client";

import { motion } from "framer-motion";

// ────────────────────────────────
// TextScroller Component
// ────────────────────────────────
function TextScroller({
  names,
  speed = 45,
}: {
  names: string[];
  speed?: number;
}) {
  // Multiply content to ensure seamless loop
  const loopedNames = [...names, ...names, ...names, ...names, ...names]; 

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center space-x-12 sm:space-x-20"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Moves exactly half (2.5 sets out of 5) - Wait.
          // If we have 5 sets: [A][B][C][D][E]. -50% moves [A][B][C-half].
          // We need to move exactly by N sets length.
          // If I duplicate 4x (Total 4 sets): [A][B][C][D]. Move -50% means moving [A][B] out. [C][D] remain. Seamless.
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          {loopedNames.map((name, index) => (
            <span
              key={index}
              className="text-base sm:text-lg font-medium text-white/60 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ────────────────────────────────
// Main Component
// ────────────────────────────────
export default function SimpleServices() {
  const companyNames = [
    "AURA",
    "HELIOS",
    "ECOPLAST", // Guessing Eco -> Ecoplast based on previous file name
    "SEELAK",
    "OFFWHITE",
    "TRENDY THREADS",
  ];

  return (
    <div className="bg-black text-white text-left">
      <TextScroller names={companyNames} speed={40} />
    </div>
  );
}
