/* eslint-disable react-refresh/only-export-components */
import LogoLoop from "./LogoLoop";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
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
        logoHeight={65}
        gap={65}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#050816"
        ariaLabel="Technology stack"
      />
    </div>
  );
};

export default SectionWrapper(Tech, "");
