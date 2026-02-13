"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md  transition-colors duration-300 ${
          isMenuOpen ? "border-transparent" : "border-white/1"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* DESKTOP LEFT — LOGO */}
          <div className="hidden md:flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Webzy Logo"
                className="cursor-pointer object-contain w-30 h-auto"
              />
            </Link>
          </div>

          {/* DESKTOP CENTER — NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-lg font-medium text-gray-300 hover:text-[#0199ff] transition-colors"
            >
              Our Plans
            </Link>
            <Link
              href="/case-study"
              className="text-lg font-medium text-gray-300 hover:text-[#0199ff] transition-colors"
            >
              Case-Studies
            </Link>
          </div>

          {/* DESKTOP RIGHT — CTA */}
          <div className="hidden md:flex">
            <Link
              href="https://cal.com/santhosh-perumal"
              className="group relative inline-flex items-center gap-2 px-6 py-2 bg-[#0199ff] text-black rounded-full font-medium text-md transition-transform hover:scale-105"
            >
              Book a Quick Call
              <div className="bg-black text-white rounded-full p-0.5 relative overflow-hidden group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>

          {/* MOBILE LEFT — LOGO */}
          {/* <div className="md:hidden flex items-center"> */}
          <div className="md:hidden flex items-center -ml-4">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Webzy Logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* MOBILE RIGHT — MENU BUTTON */}
          <div className="md:hidden ml-auto flex items-center relative z-[60]">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY — UNCHANGED */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 md:hidden flex flex-col items-center space-y-10 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Link
                href="/#services"
                onClick={toggleMenu}
                className="text-4xl sm:text-5xl font-bold text-gray-300 hover:text-[#0199ff] transition-colors"
              >
                Our Plans
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link
                href="/case-study"
                onClick={toggleMenu}
                className="text-4xl sm:text-5xl font-bold text-gray-300 hover:text-[#0199ff] transition-colors"
              >
                Case-Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link
                href="https://cal.com/santhosh-perumal"
                onClick={toggleMenu}
                className="text-4xl sm:text-5xl px-5 py-1 rounded-md bg-[#0199ff] text-black font-medium hover:bg-white transition-colors"
              >
                Book a Quick Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
