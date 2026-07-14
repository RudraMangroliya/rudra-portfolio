import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { me } from "../assets";
import Dock from "./Dock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Branding */}
      <nav
        className={`${styles.paddingX
          } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 xs:gap-3"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={me} alt="logo" className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border-2 border-violet-500/70 shadow-lg object-cover" />
            <p className="text-white text-xs xs:text-base sm:text-[20px] font-bold cursor-pointer flex items-center">
              Rudra<span className="hidden min-[340px]:inline">&nbsp;Mangroliya</span> &nbsp;
              <span className="sm:block hidden text-violet-400 font-medium text-[16px] ml-1">| Software Engineer</span>
            </p>
          </Link>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-4 sm:right-6 z-40 hidden min-[360px]:flex items-center justify-center w-10 h-10 rounded-xl bg-[#0e0c12]/90 border border-neutral-800 text-white shadow-lg cursor-pointer hover:border-violet-500 hover:text-violet-400 backdrop-blur-sm transition-all duration-200"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Bottom macOS-style Dock Navigation */}
      <Dock />
    </>
  );
};

export default Navbar;
