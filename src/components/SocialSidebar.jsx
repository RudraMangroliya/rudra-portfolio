import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/RudraMangroliya",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    color: "hover:text-white hover:bg-white/10",
    glowColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "hover:border-white/40",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rudra-mangroliya-55015b287",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10",
    glowColor: "rgba(0, 119, 181, 0.3)",
    borderColor: "hover:border-[#0077b5]/40",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919999999999", // Placeholder, easily editable by user
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.513 5.28 3.513 8.487-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.473 1.452 5.397 1.453 5.485.002 9.947-4.461 9.95-9.95.002-2.66-1.033-5.161-2.907-7.037C17.218 1.744 14.71 .706 12.01 .706c-5.49 0-9.953 4.463-9.956 9.952-.001 1.989.52 3.93 1.511 5.64l-1.007 3.676 3.77-.988zM17.47 15.397c-.3-.149-1.777-.878-2.046-.977-.27-.097-.467-.149-.662.15-.195.297-.759.958-.93 1.15-.173.197-.347.218-.647.07-2.977-1.49-4.1-2.56-4.9-3.937-.21-.36-.02-.556.13-.706.135-.13.3-.347.45-.52.15-.174.2-.297.3-.497.098-.198.05-.371-.025-.52-.075-.149-.662-1.597-.907-2.185-.238-.574-.48-.495-.662-.5-.175-.008-.377-.01-.58-.01-.203 0-.532.077-.81.38-.28.303-1.066 1.042-1.066 2.54 0 1.498 1.09 2.946 1.24 3.146.15.198 2.145 3.276 5.197 4.593.725.313 1.29.5 1.73.64.73.23 1.39.198 1.91.12.58-.087 1.777-.726 2.026-1.393.25-.667.25-1.237.176-1.355-.07-.117-.27-.197-.57-.347z"/>
      </svg>
    ),
    color: "hover:text-[#25d366] hover:bg-[#25d366]/10",
    glowColor: "rgba(37, 211, 102, 0.3)",
    borderColor: "hover:border-[#25d366]/40",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rudra_mangroliya/", // Placeholder, easily editable by user
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    color: "hover:text-[#e1306c] hover:bg-[#e1306c]/10",
    glowColor: "rgba(225, 48, 108, 0.3)",
    borderColor: "hover:border-[#e1306c]/40",
  },
  {
    name: "Email",
    url: "mailto:rudramangroliya777@gmail.com",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 3.937v-8.193l4.623 4.256zm1.458 1.343l3.919 3.606 3.919-3.606 6.308 5.328h-20.454l6.308-5.328zm6.296-1.343l4.623-4.256v8.193l-4.623-3.937zm-6.527-1.467l-5.85-5.462h20.1l-5.85 5.462-4.2 3.862-4.2-3.862z"/>
      </svg>
    ),
    color: "hover:text-[#ea4335] hover:bg-[#ea4335]/10",
    glowColor: "rgba(234, 67, 53, 0.3)",
    borderColor: "hover:border-[#ea4335]/40",
  },
];

const SocialSidebar = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-0 mt-8 pb-28 z-40 sm:fixed sm:bottom-0 sm:right-4 sm:md:right-6 sm:left-auto sm:translate-x-0 sm:top-auto sm:w-auto sm:m-0 sm:pb-0 sm:gap-4">
      {/* Social links glass container */}
      <div className="flex flex-row gap-3 bg-[#120F17]/70 backdrop-blur-md border border-neutral-800/80 rounded-2xl py-3 px-5 shadow-2xl sm:flex-col sm:gap-3 sm:py-4 sm:px-2.5">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group p-2.5 rounded-xl border border-transparent transition-all duration-300 text-neutral-400 bg-transparent flex items-center justify-center ${social.color} ${social.borderColor}`}
            whileHover={{
              scale: 1.12,
              boxShadow: `0 0 16px ${social.glowColor}`,
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.name}
          >
            {social.icon}

            {/* Premium slide-out Tooltip */}
            <span className="absolute bottom-14 left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:right-14 sm:translate-x-0 origin-bottom sm:origin-right scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-[#120F17]/95 border border-neutral-800 text-white text-[11px] font-medium tracking-wide rounded-lg px-2.5 py-1 whitespace-nowrap shadow-xl pointer-events-none">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Decorative vertical line extending to the bottom edge - visible only on desktop */}
      <div className="hidden sm:block w-[1.5px] h-24 bg-gradient-to-b from-neutral-800 to-transparent"></div>
    </div>
  );
};

export default SocialSidebar;
