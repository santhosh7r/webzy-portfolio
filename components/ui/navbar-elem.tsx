"use client";
import Link from "next/link";

import React, { useEffect } from "react";
import Image from "next/image";
import { animate } from "framer-motion";

const NavBar = () => {
  useEffect(() => {
    animate([[".nav", { opacity: 1, y: 0 }]]);
  }, []);

  return (
    <>
      <div className="nav w-full z-40 fixed top-12 md:top-12 flex items-center justify-center opacity-0 -translate-y-5 transition-all duration-500">
        <div
          className="min-w-20 w-[80%] xl:w-[27%] md:h-[64px] h-[50%]
      noise-pattern bg-repeat border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-4 flex items-center
      justify-between rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-start w-1/4 pr-2 sm:pr-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                priority
                unoptimized
                className="cursor-pointer object-contain w-12 sm:w-16 h-auto"
              />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="w-3/4 flex justify-around items-center space-x-2 sm:space-x-6 text-sm sm:text-base font-semibold">
            <a
              href="#services"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Services
            </a>
            <a
              href="#works"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Works
            </a>
            <a
              href="#contact"
              className="text-gray-400 drop-shadow-md hover:text-[#4B8AEF] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// "use client";
// import Link from "next/link";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import { animate } from "framer-motion";

// const NavBar = () => {
//   useEffect(() => {
//     animate([[".nav", { opacity: 1, y: 0 }]]);
//   }, []);

//   return (
//     <>
//       <div className="nav w-full z-40 fixed top-12 md:top-12 flex items-center justify-center opacity-0 -translate-y-5 transition-all duration-500">
//         <div
//           className="min-w-20 w-[90%]  h-12 xl:w-[45%] xl:h-[42px]
//        bg-repeat border border-white/20 bg-black/10 backdrop-blur-2xl px-4 py-4 flex items-center
//       justify-between rounded-4xl shadow-lg"
//         >
//           <div className="flex items-center justify-start w-1/4 pr-2 sm:pr-4">
//             <Link href="/">
//               <Image
//                 src="/logo.png"
//                 alt="logo"
//                 width={30}
//                 height={30}
//                 priority
//                 unoptimized
//                 className="cursor-pointer object-contain w-10 sm:w-10 h-auto"
//               />
//             </Link>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="w-3/4 flex justify-around items-center space-x-2 sm:space-x-6 text-sm sm:text-base font-semibold">
//             <a
//               href="#services"
//               className="text-gray-400 drop-shadow-md hidden sm:block hover:text-[#0199FF] transition-all"
//             >
//               Our Services
//             </a>
//             <a
//               href="#works"
//               className="text-gray-400 drop-shadow-md hidden sm:block hover:text-[#0199FF] transition-all"
//             >
//               Works
//             </a>
//             <div className="bg-[#0199FF] ml-35  hover:bg-white w-28 sm:h-7 h-8 rounded-3xl flex justify-center items-center">
//               <a
//                 href="#contact"
//                 className="text-white drop-shadow-md hover:text-[#000000] transition-all"
//               >
//                 Book a call
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// "use client";

// import Image from "next/image";

// const NavBar = () => {
//   return (
//     <div className="nav w-full z-100 fixed top-[3%] md:top-[2%]  flex items-center justify-center">
//       <div
//         className="min-w-80 w-90 h-12 sm:h-13 sm:w-135 md:w-145 lg-w-155  xl:w-160 backdrop-blur-md px-4 py-3
//         flex md:gap-20 items-center justify-between bg-white/3
//         rounded-4xl border-[.5px] sm:border-[.5px] border-white/15
//         0"
//       >
//         <div className="flex items-center ">
//           <Image
//             src="/logo.png"
//             width={0}
//             height={0}
//             alt="logo"
//             className=" cursor-pointer object-contain w-10 sm:w-8 md:w-10 lg:w-10 xl:w-10 h-auto ml-2 sm:ml-0"
//             style={{ transformOrigin: "25% center" }}
//           />
//         </div>
//         <div className="2xl:w-38 md:w-38 ml-12 sm:w-38 lg:w-40 flex justify-center sm:justify-around md:text-sm font-bold">
//           <button className="cursor-pointer hidden sm:block text-[#0199ff]  hover:text-white">
//             Our Services
//           </button>
//           <div></div>
//           <button className="cursor-pointer sm:text-sm hidden sm:block  justify-center text-[#0199ff]  hover:text-white">
//             Works
//           </button>
//         </div>
//         <div className="bg-[#0199ff]  hover:bg-white sm:w-30 md:w-35 xl:w-30 lg:w-35 w-30 xl:h-8 md:h-8 h-7 rounded-3xl flex justify-center items-center">
//           <button className="cursor-pointer    text-black tracking-wide ">
//             Contact Us ↗
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
