import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
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
            className="flex items-center gap-3"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={me} alt="logo" className="w-12 h-12 rounded-full border-2 border-violet-500/70 shadow-lg object-cover" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex items-center">
              Rudra Mangroliya &nbsp;
              <span className="sm:block hidden text-violet-400 font-medium text-[16px] ml-1">| Software Engineer</span>
            </p>
          </Link>
        </div>
      </nav>

      {/* Floating Bottom macOS-style Dock Navigation */}
      <Dock />
    </>
  );
};

export default Navbar;
