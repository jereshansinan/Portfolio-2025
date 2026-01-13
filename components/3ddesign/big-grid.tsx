import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

// 1. Define Types
interface DataGridProps {
  src?: string;
  Title: string;
  heading: string;
  date: string;
  size: "small" | "big";
  href: string;
  color: "red" | "purple" | "blue" | "green" | "violet" | "yellow";
}

// 2. Configuration Maps
const gradients = {
  red: "hover:from-[#f2709c] hover:to-[#ff9472]",
  purple: "hover:from-[#4776E6] hover:to-[#8E54E9]",
  blue: "hover:from-[#4CB8C4] hover:to-[#3CD3AD]",
  green: "hover:from-[#11998e] hover:to-[#38ef7d]",
  violet: "hover:from-[#8E2DE2] hover:to-[#4A00E0]",
  yellow: "hover:from-[#F09819] hover:to-[#EDDE5D]",
};

// Base styles common to both sizes (Right border is constant)
const commonBorder = "border-r border-[#ff8559]";

const sizeClasses = {
  big: "h-[50vh] md:h-[80vh]",
  small: "h-[40vh] md:h-[60vh] border-b border-[#ff8559]", // Small also has bottom border
};

export const DataGrid = ({
  size,
  src,
  Title,
  heading,
  date,
  href,
  color,
}: DataGridProps) => {
  const hasTopBorder = Title !== "Geometry Nodes" && Title !== "Wierd Stuff";

  const tiltRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (!tiltNode) return;

    VanillaTilt.init(tiltNode, {
      max: size === "small" ? 4 : 3,
      speed: 100,
    });

    return () => {};
  }, [size]);

  return (
    <Link
      to={href}
      className="block group w-full outline-none focus-visible:ring-2 focus-visible:ring-[#ff8559]"
    >
      <article
        ref={tiltRef}
        data-interactive="true"
        className={clsx(
          // Layout & Transitions
          "relative flex flex-col justify-between overflow-hidden p-4 md:p-6 transition-all duration-300 ease-in-out",
          // Backgrounds
          "bg-[#f0f0f0] bg-fixed bg-clip-border bg-gradient-to-b from-white to-white",

          // Sizing & Borders
          commonBorder,
          sizeClasses[size],
          hasTopBorder && "border-t border-[#ff8559]", // Conditionally add top border

          // Color Gradients
          gradients[color]
        )}
      >
        {/* Main Content */}
        <div className="flex flex-col gap-4 relative z-20">
          {/* Hover Reveal Image - Fixed to Center of Viewport */}
          {src && (
            <div className="hidden md:group-hover:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] pointer-events-none animate-in fade-in zoom-in duration-200">
              <img
                src={src}
                alt={`${Title} preview`}
                className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-cover rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mix-blend-multiply">
            {Title}
          </h1>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto flex flex-col gap-1 relative z-10">
          <h2 className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider text-gray-800">
            {heading}
          </h2>
          <h3 className="text-xs sm:text-sm text-gray-500 font-mono">{date}</h3>
        </footer>
      </article>
    </Link>
  );
};
