/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useMemo } from "react";
import LogoLoop from "./LogoLoop";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { logoHeight, gap } = useMemo(() => {
    if (windowWidth < 480) {
      return { logoHeight: 35, gap: 24 };
    } else if (windowWidth < 768) {
      return { logoHeight: 48, gap: 36 };
    } else {
      return { logoHeight: 65, gap: 65 };
    }
  }, [windowWidth]);

  const techLogos = technologies.map((tech) => ({
    src: tech.icon,
    alt: tech.name,
    title: tech.name,
    href: tech.href,
  }));

  return (
    <div className="w-full relative overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={logoHeight}
        gap={gap}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#050816"
        ariaLabel="Technology stack"
      />
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
